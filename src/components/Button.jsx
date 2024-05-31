import React from 'react'

export const PrimaryButton = ({type,label,style}) => {
  return (
    <button type={type} className={`border-none bg-primary text-white border-none py-2 px-3 text-sm font-bold ${style}`}>{label}</button>
  )
}
