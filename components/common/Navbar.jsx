import React from "react";
import Container from "@/components/common/Container";
import FullContainer from "@/components/common/FullContainer";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import Logo from "@/components/ui/Logo";
export default function Navbar({logo, imagePath}) {
  return (
    <FullContainer className=" w-full h-20 absolute top-0 left-0 z-10">
        <Container className="flex items-center py-10 justify-between text-white">
        {logo && (
            <Logo logo={logo} imagePath={imagePath} />
        )}
         <div className="flex flex-row items-center gap-5 ">
             <Link href="/">Location</Link>
             <Link href="/">About</Link>
             <Link href="/">Services</Link>
             <Link href="/">Contact</Link>
         </div>
         <div className="bg-[#F7B914] px-5 py-1 font-semibold">24/7 Hotline (888)-308-0125</div>
        </Container>
    </FullContainer>
  );
}
