import React from "react";
import FullContainer from "@/components/common/FullContainer";
import Container from "@/components/common/Container";
import Image from "next/image";
import CTA from "@/components/ui/CTA";
export default function CTABanner({phone}) {
  return (
    <FullContainer className="bg-[#F7B914] !h-[760px] md:!h-[700px] relative">
      <Image
        src="/images/ctabanner.jpg"
        title="CTA Banner"
        alt="CTA Banner"
        width={1900}
        height={1080}
        className="object-cover w-full h-full absolute top-0 left-0"
      />
      <div className=" z-10 absolute top-0 left-0 w-full h-full flex justify-center items-center ">
        <Container className="flex flex-col gap-5 h-full justify-center items-center ">
          <h2 className="text-4xl font-bold text-white text-center max-w-[500px]">
            WE ARE READY 24/7 HOURS TO HELP YOU.
          </h2>
          <p className="text-white text-xl md:text-3xl text-center max-w-[500px]">Call us now for towing service.</p>
          <CTA theme="light" phone={phone}/>
        </Container>
      </div>
    </FullContainer>
  );
}
