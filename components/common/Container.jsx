import React from 'react'

export default function Container({ children, className }) {
  return (
    <div className={`max-w-[1140px] w-full mx-auto px-4 ${className || ''}`}>
      {children}
    </div>
  )
}
