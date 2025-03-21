import React from "react";
import Image from "next/image";
import banner from "../../../public/images/banner.jpg";
import Container from "@/components/common/Container";
import FullContainer from "@/components/common/FullContainer";
import Navbar from "@/components/common/Navbar";
import { Phone } from "lucide-react";
import CTA from "@/components/ui/CTA";
export default function Banner() {
  return (
    <FullContainer className="relative h-[500px] ">
      <Image
        src={banner}
        alt="banner"
        className="w-full h-[500px] object-cover object-top"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
      <div className="absolute z-10 flex-col gap-5 text-white top-0 left-0 w-full h-full flex items-center justify-center">
        <h2 className="text-md text-white">
          Towing Services Throughout The United States
        </h2>
        <CTA theme="light" />
      <h2 className="text-md  text-white">
        24 HOUR EMERGENCY SERVICE & ROADSIDE ASSISTANCE
      </h2>
      </div>
    </FullContainer>
  );
}
