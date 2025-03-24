import React from "react";
import Container from "../common/Container";
import Image from "next/image";
import image1 from "../../public/images/contactus.jpeg";
import { ThumbsUp, CheckCircle, UserRound } from "lucide-react";
import { useRouter } from "next/router";
export default function Form({ phone }) {
  const router = useRouter();
  const { service } = router.query;
  return (
    <div id="contact-us" className=" py-10">
      <div className="flex flex-col gap-1 pb-10 items-center text-center">
        <h3 className="text-sm font-medium text-gray-600 tracking-wide uppercase">
          Contact Us
        </h3>
        <h2 className="text-4xl font-extrabold text-gray-900 leading-snug">
          Get in touch with us
          <div className="w-30 h-1 bg-gradient-to-r from-[#F7B914] to-[white] mx-auto mb-4 rounded-full"></div>
        </h2>

        <p className="max-w-2xl text-base text-gray-700 leading-relaxed">
          We are here to help you. Please fill out the form below to get in
          touch with us.
        </p>
      </div>
      <Container className="relative lg:pl-40 flex flex-row gap-4 text-white">
        <div className="grid  grid-cols-1 lg:grid-cols-3 h-[540px] rounded-lg w-full sm:min-w-[350px] overflow-hidden">
          <div className="border hidden lg:block border-amber-100 col-span-1">
            <Image title="Contact us image" src={image1} alt="image Contact us image.png" height={1000} width={1000} />
          </div>
          <div className="col-span-2 px-5 py-10 bg-[#1C2737]">
            <div className="pb-8 max-w-[400px] mx-auto">
              <h2 className="text-2xl font-bold w-full text-center text-[#EAB308]">
                10% Off Total Price for Online Booking
              </h2>
              <h3 className="text-xl font-thin w-full text-center text-white ">
                Request a Quote
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4 pb-4">
              <div className="group">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden h-full transition-all duration-300 border border-gray-700 group-hover:border-yellow-500/50 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] transform group-hover:-translate-y-1 will-change-transform ">
                  <div className="h-1  w-full bg-gradient-to-r from-yellow-400 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                  <div className="p-2 flex items-center">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="focus:outline-none bg-transparent text-white px-4 py-2 w-full "
                    />
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden h-full transition-all duration-300 border border-gray-700 group-hover:border-yellow-500/50 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] transform group-hover:-translate-y-1 will-change-transform ">
                  <div className="h-1  w-full bg-gradient-to-r from-yellow-400 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                  <div className="p-2 flex items-center">
                    <input
                      type="number"
                      placeholder="Phone Number"
                      className="focus:outline-none bg-transparent text-white px-4 py-2 w-full "
                    />
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden h-full transition-all duration-300 border border-gray-700 group-hover:border-yellow-500/50 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] transform group-hover:-translate-y-1 will-change-transform ">
                  <div className="h-1  w-full bg-gradient-to-r from-yellow-400 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                  <div className="p-2 flex items-center">
                    <input
                      type="number"
                      placeholder="Zip Code"
                      className="focus:outline-none bg-transparent text-white px-4 py-2 w-full "
                    />
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden h-full transition-all duration-300 border border-gray-700 group-hover:border-yellow-500/50 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] transform group-hover:-translate-y-1 will-change-transform ">
                  <div className="h-1  w-full bg-gradient-to-r from-yellow-400 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                  <div className="p-2 flex items-center">
                    <input
                      type="email"
                      placeholder="Email"
                      className="focus:outline-none bg-transparent text-white px-4 py-2 w-full "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden h-full transition-all duration-300 border border-gray-700 group-hover:border-yellow-500/50 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] transform group-hover:-translate-y-1 will-change-transform ">
                <div className="h-1  w-full bg-gradient-to-r from-yellow-400 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                <div className="p-2 flex items-center">
                  <textarea
                    type="text"
                    placeholder="Message"
                    className="focus:outline-none bg-transparent text-white px-4 py-2 w-full "
                  />
                </div>
              </div>
            </div>
            <div className="group mt-4">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden h-full transition-all duration-300 border border-gray-700 group-hover:border-yellow-500/50 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] transform group-hover:-translate-y-1 will-change-transform ">
                <div className="h-1  w-full bg-gradient-to-r from-yellow-400 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                <div className="p-2 flex items-center">
                  <button
                    type="submit"
                    className="focus:outline-none bg-transparent text-white px-4 py-2 w-full "
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute top-1/2 h-[540px] lg:h-[90%] lg:-translate-y-1/2 py-10 px-5 bg-[#EAB308]/90 flex-col justify-between gap-4 lg:w-80 left-4 hidden md:flex rounded-lg order-first sm:min-w-[250px] md:min-w-[300px] border-black">
          <div className="flex flex-col gap-4 ">
            <h2 className="text-2xl font-bold w-full text-center">
              Exclusive Online Offer
            </h2>
            <div className="text-xl animate-pulse bg-[#EAB308] font-thin w-full text-left border px-4 py-3 rounded-md text-white">
              <h3>10% Off Total Price</h3>
              <p className="text-sm">For all online bookings this month</p>
            </div>
            <div className="flex flex-row gap-2">
              <ThumbsUp className="w-10 h-10" />
              <div className="flex flex-col">
                <p className="text-md font-bold">Professional Service</p>
                <p className="text-sm">Expert team with years of experience</p>
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <CheckCircle className="w-10 h-10" />
              <div className="flex flex-col">
                <p className="text-md font-bold"> Reliable Solutions</p>
                <p className="text-sm">Quality results you can trust</p>
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <UserRound className="w-10 h-10" />
              <div className="flex flex-col">
                <p className="text-md font-bold">Customer Focused</p>
                <p className="text-sm">Your satisfaction is our priority</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white pt-2">
            <p className="text-md font-bold">Questions? Call us directly:</p>
            <p className="text-sm">{phone}</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
