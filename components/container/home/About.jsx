import React from 'react';
import Image from 'next/image'; 
import Container from '@/components/common/Container';
import FullContainer from '@/components/common/FullContainer';
import MarkdownIt from 'markdown-it';
import { useState, useEffect } from 'react';

export default function About({ about, imagePath }) {
    const data = about?.value||[];
    const [parsedDescription, setParsedDescription] = useState("");

    useEffect(() => {
      if (data?.description) {
        const md = new MarkdownIt();
        setParsedDescription(md.render(data.description));
      }
    }, [data?.description]);
    const image = `${imagePath}/${about?.file_name}`;
    console.log("image",image);
  return (
    <div id="about-section" className="py-16 md:py-24 bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <div className="flex flex-col space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm font-medium mb-2">
                Professional Towing Service
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                {data?.heading || "Your Reliable Partner On The Road"}
              </h2>
              
              <p className="text-lg text-gray-600 font-medium mt-2">
                {data?.tagline || "Available 24/7 for emergency roadside assistance and towing services."}
              </p>
              
              <div className="w-16 h-1 bg-yellow-500 rounded-full my-2"></div>
              
              <div className="text-gray-600 space-y-4 mt-2">
              <div
              className="text-gray-700 text-lg"
              dangerouslySetInnerHTML={{ __html: parsedDescription }}
            />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <div className="text-yellow-500 font-bold text-2xl md:text-3xl mb-1">24/7</div>
                  <div className="text-gray-600 text-sm">Emergency Service</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <div className="text-yellow-500 font-bold text-2xl md:text-3xl mb-1">15+</div>
                  <div className="text-gray-600 text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="order-1 md:order-2 relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-gray-200">
              <div className="aspect-w-4 aspect-h-3">
                <Image 
                  src={ image ? image : "/images/towing-service6.jpg"}
                  alt="About image.png"
                  title="About image.png"
                  width={600}
                  height={450}
                  className="object-cover"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-500 rounded-full opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-yellow-500 rounded-full opacity-20"></div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-8 -left-8 md:bottom-8 md:left-8 bg-yellow-500 text-white py-3 px-5 rounded-lg shadow-lg transform rotate-3 z-10">
              <div className="font-bold text-sm md:text-base">Trusted Service Provider</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
