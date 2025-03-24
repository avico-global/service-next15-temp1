import React from "react";
import Container from "@/components/common/Container";
import { Phone, Clock, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTA({ theme, phone }) {
  return (
      <div className="">
        <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl shadow-2xl p-8 max-w-md w-full animate-slideIn">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            24/7 Emergency Towing
          </h3>
          <p className="text-gray-800 mb-6">
            We're always ready to help when you need us most. One call connects
            you to immediate assistance.
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center mr-3">
                <Clock className="w-4 h-4 text-yellow-800" />
              </div>
              <span className="text-gray-800">Available 24/7</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center mr-3">
                <MapPin className="w-4 h-4 text-yellow-800" />
              </div>
              <span className="text-gray-800">Fast Response Time</span>
            </div>
          </div>

          <div className="text-center">
            <div className="text-sm font-medium text-gray-800 uppercase tracking-wide mb-2">
              CALL NOW
            </div>

            <Link
              href={`tel:${phone}`}
              className="group flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 mb-2"
            >
              <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                <Phone className="w-5 h-5 text-yellow-600" />
              </div>
              <span className="text-xl font-bold text-gray-900">{phone}</span>
            </Link>

            <div className="text-sm text-gray-800">
              Fast, professional service guaranteed
            </div>
          </div>
        </div>
      </div>

  );
}
