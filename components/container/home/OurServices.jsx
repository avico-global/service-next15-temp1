import React from "react";
import FullContainer from "@/components/common/FullContainer";
import Container from "@/components/common/Container";
import { CircleCheck } from "lucide-react";
import Link from "next/link";
import { sanitizeUrl } from "@/lib/myFun";
export default function Services({ data }) {
  const services = data?.list || [];
  return (
    <FullContainer>
      <Container className="py-10">
        <div id="services-section" className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 pb-10 items-center text-center">
            <h3 className="text-sm font-medium text-gray-600 tracking-wide uppercase">
              {data?.tagline}
            </h3>
            <h2 className="text-4xl font-extrabold text-gray-900 leading-snug">
              {data?.heading}
          <div className="w-30 h-1 bg-gradient-to-r from-[#F7B914] to-[white] mx-auto mb-4 rounded-full"></div>
            </h2>

            <p className="max-w-2xl text-base text-gray-700 leading-relaxed">
              {data?.description}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:flex flex-wrap  gap-2 justify-center text-lg text-gray-800">
            {services.map((item) => (
              <Link
                key={item.id}
                title={`Service ${item.title}`}
                href={`/${sanitizeUrl(item?.title)}`}
                className="px-3 py-1 flex flex-row gap-2 items-center hover:bg-[#F7B914] hover:text-[white] hover:scale-105 transition-all duration-300 border border-[#F7B914] rounded-md"
              >
                <CircleCheck className="w-6 h-6 text-white hover:text-[#F7B914] hover:bg-[white] bg-[#F7B914] rounded-full" />{" "}
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
