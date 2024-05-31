import React from 'react'

const Input = ({type,name,value,onChange,styles}) => {
  return (
    <input type={type} name={name} value={value} onChange={onChange}
    className={`border border-gray rounded-sm p-1 outline-none text-sm`}/>
  )
}

export default Input
