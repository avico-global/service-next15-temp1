import React from 'react'

export default function Container({ children, className }) {
  return (
    <div>
      <div className={`max-w-[1140px] mx-auto px-4 ${className}`}>
        {children}
      </div>
    </div>
  )
}
