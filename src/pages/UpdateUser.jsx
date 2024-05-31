import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Input from '../components/Input'
import TextArea from '../components/TextArea'
import { PrimaryButton } from '../components/Button'
import { userSchema } from '../schema/userSchema'
import { updateUser } from '../reducers/userSlice'
import Alert from '../components/Alert'

const UpdateUser = () => {
    const {id} = useParams()
    const users = useSelector(state=>state.users)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const editUser = users.filter((user=>user.id == id))

    const {name,email,address} = editUser[0]

    const [editName, setEditName] = useState(name)
    const [editEmail, setEditEmail] = useState(email)
    const [editAddress, setEditAddress] = useState(address)

    const updateHandler = (e)=>{
        e.preventDefault()

        const data = {
            id: id,
            name: editName,
            email: editEmail,
            address: editAddress
        }

        userSchema.validate(data)
        .then((valid)=>{
            dispatch(updateUser(valid))
            navigate('/')
        })
        .catch((error)=>{
          Alert({text:error,title:'Error!',icon:'error'})
        })
    }

  return (
    <div className='shadow-md bg-gray max-w-[400px] flex items-center flex-col border border-primary rounded-md mx-auto mt-3 py-10 px-5'>
      <h1 className='mb-8 text-3xl'>Create User</h1>
      <form onSubmit={updateHandler}>
        <div className='mb-5 flex flex-col items-start'>
          <label htmlFor='name' className='mr-2'>Name<span className='text-red pl-1'>*</span></label>
          <Input type='text' name='name' value={editName} onChange={(e)=>setEditName(e.target.value)}/>
        </div>
        <div className='mb-5 flex flex-col items-start'>
          <label htmlFor='email' className='mr-2'>Email<span className='text-red pl-1'>*</span></label>
          <Input type='email' name='email' value={editEmail} onChange={(e)=>setEditEmail(e.target.value)}/>
        </div>
        <div className='mb-5 flex flex-col items-start'>
          <label htmlFor='address' className='mr-2'>Address<span className='text-red pl-1'>*</span></label>
          <TextArea name='address' value={editAddress} onChange={e=>setEditAddress(e.target.value)} />
        </div>
        <PrimaryButton type='submit' label='Update' style='mt-3'/>
      </form>
    </div>
  )
}

export default UpdateUser
