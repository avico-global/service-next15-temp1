import React from 'react'
export default function FullContainer({ children, className, style }) {
  return (
    <div
      style={style}
      className={`w-full h-full ${className}`}
    >
      {children}
    </div>
  );
}