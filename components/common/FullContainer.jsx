import React from 'react'

export default function FullContainer({ children, className, style }) {
  return (
    <div
      style={style}
      className={`w-full min-h-[500px] flex flex-col items-center justify-center ${className || ''}`}
    >
      {children}
    </div>
  );
}