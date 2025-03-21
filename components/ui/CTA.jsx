import React from 'react'
import Container from '@/components/common/Container'
import { Phone } from 'lucide-react'

export default function CTA({theme}) {
  return (
    <Container className="flex flex-col gap-5 justify-center items-center">
   
    <div className={`flex flex-row gap-8 items-center justify-center  px-10 md:px-16 py-3 text-white ${theme === "light" ? " bg-[#F7B914]" : "bg-[#181818] "}`}>
      <div className="h-16 w-16">
        <Phone className="w-16 h-16 " />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl md:text-4xl">CLICK TO CALL</h2>
        <h2 className="text-2xl md:text-4xl font-bold">(888)-308-0125</h2>
      </div>
    </div>
   
  </Container>
  )
}
