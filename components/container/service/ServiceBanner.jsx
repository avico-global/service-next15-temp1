import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Container from "@/components/common/Container";
import FullContainer from "@/components/common/FullContainer";
import { motion } from "framer-motion";

export default function ServiceBanner({ banner, image }) {
  const router = useRouter();
  const { service } = router.query;
  const data = banner?.value || [];

  return (
    <FullContainer className="relative w-full h-[90vh] min-h-[650px] max-h-[900px] md:max-h-[700px] overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          title="Service Banner"
          alt="Professional towing services"
          width={1900}
          height={1080}
          priority
          className="w-full h-full object-cover object-center brightness-[0.6]"
        />
      </div>

      {/* Content Container */}
      <Container className="relative z-10 text-center max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/10 backdrop-blur-md rounded-xl px-8 py-6 shadow-lg"
        >
          <span className="text-yellow-300 font-semibold text-lg uppercase tracking-wide">
            Fast, Reliable {service?.replace(/-/g, " ")}
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mt-3">
            {data?.heading?.replaceAll("##service##", service?.replace(/-/g, " "))}
          </h1>
          <p className="text-lg text-yellow-300 mt-4 max-w-2xl mx-auto">
            {data?.description}
          </p>
        </motion.div>
      </Container>
    </FullContainer>
  );
}