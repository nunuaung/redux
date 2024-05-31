import React, { useState } from 'react'
import Input from '../components/Input'
import { PrimaryButton } from '../components/Button'
import TextArea from '../components/TextArea'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'
import {addUser} from '../reducers/userSlice'
import { userSchema } from '../schema/userSchema'
import Alert from '../components/Alert'

const CreateUser = () => {
  const [name,setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createHandler = (e)=>{
    e.preventDefault();
    
    const data = {
      id:nanoid(), name,email,address
    };

    userSchema.validate(data)
    .then(valid=>{
      dispatch(addUser(valid))
      navigate('/')
    })
    .catch(error => {
      Alert({text:error,title:'Error!',icon:'error'})
    });

  }

  return (
    <div className='shadow-md bg-gray max-w-[400px] flex items-center flex-col border border-primary rounded-md mx-auto mt-3 py-10 px-5'>
      <h1 className='mb-8 text-3xl'>Create User</h1>
      <form onSubmit={createHandler}>
        <div className='mb-5 flex flex-col items-start'>
          <label htmlFor='name' className='mr-2'>Name<span className='text-red pl-1'>*</span></label>
          <Input type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className='mb-5 flex flex-col items-start'>
          <label htmlFor='email' className='mr-2'>Email<span className='text-red pl-1'>*</span></label>
          <Input type='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='mb-5 flex flex-col items-start'>
          <label htmlFor='address' className='mr-2'>Address<span className='text-red pl-1'>*</span></label>
          <TextArea name='address' value={address} onChange={e=>setAddress(e.target.value)} />
        </div>
        <PrimaryButton type='submit' label='Create' style='mt-3'/>
      </form>
    </div>
  )
}

export default CreateUser
