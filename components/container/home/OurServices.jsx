import React from "react";
import FullContainer from "@/components/common/FullContainer";
import Container from "@/components/common/Container";
import { CircleCheck } from "lucide-react";
import towing1 from "../../../public/images/service1.jpg";
import towing2 from "../../../public/images/service2.jpg";
import towing3 from "../../../public/images/service3.jpg";
import towing4 from "../../../public/images/service4.jpg";
import towing5 from "../../../public/images/service5.jpg";
import towing6 from "../../../public/images/service6.jpg";
import Image from "next/image";

export default function Services() {
  const services = [
    { id: 1, name: "Flatbed Towing" },
    { id: 2, name: "Long Distance Towing" },
    { id: 3, name: "Emergency Towing" },
    { id: 4, name: "Roadside Assistance" },
    { id: 5, name: "Low Clearance Towing" },
    { id: 6, name: "Exotic Car Towing" },
    { id: 7, name: "Lockout Services" },
    { id: 8, name: "Fuel Delivery" },
    { id: 9, name: "Fifth Wheel Hitch" },
    { id: 10, name: "Towing for Uber Cars" },
    { id: 11, name: "Luxury Car Towing" },
    { id: 12, name: "Flatbed Skates Towing" },
    { id: 13, name: "RV Towing" },
    { id: 14, name: "Wheel Lift Tow Truck" },
    { id: 15, name: "Motorhome Towing" },
  ];
  const images=[
    {id:1,image:towing1},
    {id:2,image:towing2},
    {id:3,image:towing3},
    {id:4,image:towing4},
    {id:5,image:towing5},
    {id:6,image:towing6},
  ]

  return (
    <FullContainer>
      <Container className="py-10">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-center">Services We Offer</h2>
          <div className="flex flex-wrap gap-2 justify-center text-lg text-gray-800">
            {services.map((service) => (
              <span key={service.id} className="px-3 py-1 flex flex-row gap-2 items-center border border-[#F7B914] rounded-md">
               <CircleCheck className="w-6 h-6 text-white bg-[#F7B914] rounded-full" /> {service.name}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
          {images.map((image) => (
            <div key={image.id} className="relative">
              <Image src={image.image} alt={image.name} className="w-full h-full object-cover aspect-square" />
            </div>
          ))}
        </div>
      </Container>
    </FullContainer>
  );
}
