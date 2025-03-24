import React from "react";
import Image from "next/image";
import banner from "../../../public/images/banner.jpg";
import Container from "@/components/common/Container";
import Link from "next/link";
import { Phone, Clock, MapPin } from "lucide-react";
import FullContainer from "@/components/common/FullContainer";
import CTA from "@/components/ui/CTA";
export default function Banner({ banner, image, phone }) {
  return (
    <FullContainer className="relative  w-full h-[90vh] min-h-[650px] max-h-[900px] md:max-h-[700px] overflow-hidden pt-16 ">
      {/* Background Image with overlay */}``
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          title="Professional towing services"
          alt="Professional towing services"
          width={1900}
          height={1080}
          priority
          className="w-full h-full object-cover object-center"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 "></div> */}
      </div>
      
      {/* Content Container */}
      <div className="absolute inset-0 z-0 flex items-center pt-16">
        <Container className="w-full ">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Column - Main Text */}
            <div className="text-left space-y-6 animate-fadeIn max-w-[500px]">
              <div className="inline-block bg-yellow-500/20 rounded-lg px-4 py-2 mb-2">
                <span className="text-yellow-300 font-semibold tracking-wider text-sm">Fast, Reliable, and Always Here to Help!</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Towing Services Throughout The United States
              </h1>
              
              <h2 className="text-xl sm:text-2xl text-yellow-300 font-semibold">
                24 HOUR EMERGENCY SERVICE & ROADSIDE ASSISTANCE
              </h2>
              
            </div>
            
            {/* Right Column - CTA Card */}
            <div className="flex justify-center md:justify-end">
              <CTA theme="light" phone={phone}/>
            </div>
          </div>
        </Container>
      </div>
      
      {/* Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-slideIn {
          animation: slideIn 0.8s ease-out forwards;
        }
      `}</style>
    </FullContainer>
  );
}
