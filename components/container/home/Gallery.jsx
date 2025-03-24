"use client";
import React from "react";
import FullContainer from "../../common/FullContainer";
import Container from "../../common/Container";
import Image from "next/image";

export default function Gallery({ gallery = [], imagePath, gallery_heading }) {
  const data = gallery.slice(0, 6);
  const gallery_heading_data = gallery_heading?.value;

  return (
    <FullContainer className="">
      <Container className="py-16 lg:py-20">
        <div className="flex flex-col gap-1 pb-10 items-center text-center">
          <h3 className="text-sm font-medium text-gray-600 tracking-wide uppercase">
            {gallery_heading_data?.tagline}
          </h3>
          <h2 className="text-4xl font-extrabold text-gray-900 leading-snug">
            {gallery_heading_data?.heading}
            <div className="w-30 h-1 bg-gradient-to-r from-[#F7B914] to-[white] mx-auto mb-4 rounded-full"></div>
          </h2>

          <p className="max-w-2xl text-base text-gray-700 leading-relaxed">
            {gallery_heading_data?.description}
          </p>
        </div>

        {/* Mobile-first layout (1 column on xs) */}
        <div className=" grid grid-cols-2 gap-3 md:hidden ">
          {data.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg group h-[220px] transform transition duration-500 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-full">
                <Image
                  height={1320}
                  width={1320}
                  title={`Service image ${index}`}
                  src={`${imagePath}/${item.image}`}
                  alt={`Service image ${item.id}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute inset-x-0 bottom-0 p-5 translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-10 h-0.5 bg-white mb-2 rounded-full"></div>
                  <h3 className="text-white font-bold text-lg">
                    Service {item.id}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet layout */}
        <div className="hidden md:block lg:hidden ">
          <div className="grid grid-cols-2 gap-5 mb-5">
            <div className="overflow-hidden rounded-xl shadow-lg group h-[320px] transform transition duration-500 hover:-translate-y-1 hover:shadow-xl">
              <div className="h-full">
                <Image
                  src={`${imagePath}/${data[0].image}`}
                  title={`Service image 1`}
                  alt={`Service image 1`}
                  height={1320}
                  width={1320}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
            </div>

            <div className="flex flex-col gap-5 h-[320px]">
              <div className="overflow-hidden rounded-xl shadow-lg group h-1/2 transform transition duration-500 hover:-translate-y-1 hover:shadow-xl">
                <div className="h-full">
                  <Image
                    src={`${imagePath}/${data[1].image}`}
                    title={`Service image 2`}
                    alt={`Service image 2`}
                    height={1320}
                    width={1320}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="overflow-hidden rounded-xl shadow-lg group h-1/2 transform transition duration-500 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-full">
                  <Image
                    src={`${imagePath}/${data[2].image}`}
                    title={`Service image 3`}
                    alt={`Service image 3`}
                    height={1320}
                    width={1320}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-5">
            {data.slice(3).map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl shadow-lg group h-[200px] transform transition duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-full">
                  <Image
                    src={`${imagePath}/${item.image}`}
                    title={`Service image ${index}`}
                    alt={`Service image  ${index}`}
                    height={1320}
                    width={1320}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Large screen layout - with enhanced styling but same structure */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-6">
            {/* Feature image - larger */}
            <div className="col-span-2 overflow-hidden rounded-xl shadow-lg group h-[450px] transform transition duration-500 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-full">
                <Image
                  src={`${imagePath}/${data[0].image}`}
                  title={`Service image 1`}
                  alt={`Service image 1`}
                  height={1320}
                  width={1320}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Vertical stack of two images */}
            <div className="flex flex-col gap-6 h-[450px]">
              <div className="overflow-hidden rounded-xl shadow-lg group h-1/2 transform transition duration-500 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-full">
                  <Image
                    src={`${imagePath}/${data[1].image}`}
                    title={`Service image 2`}
                    alt={`Service image 2`}
                    height={1320}
                    width={1320}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="overflow-hidden rounded-xl shadow-lg group h-1/2 transform transition duration-500 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-full">
                  <Image
                    src={`${imagePath}/${data[2].image}`}
                    title={`Service image 3`}
                    alt={`Service image 3`}
                    height={1320}
                    width={1320}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>

            {/* Bottom row - three equal images */}
            {data.slice(3).map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl shadow-lg group h-[250px] transform transition duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-full">
                  <Image
                    src={`${imagePath}/${item.image}`}
                    title={`Service image ${index}`}
                    alt={`Service image ${index}`}
                    height={1320}
                    width={1320}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
