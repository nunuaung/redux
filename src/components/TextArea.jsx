import React from 'react'

const TextArea = ({name,value,onChange}) => {
  return (
    <textarea name={name} rows={3} className='border border-gray rounded-sm p-1 outline-none text-sm' defaultValue={value} onChange={onChange}/>
  )
}

export default TextArea
