
import React from 'react';
import FullContainer from '../../common/FullContainer';
import Container from '../../common/Container';
import Link from 'next/link';

export default function ServiceCities({locations}) {

  return (  
    <div id="service-area" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-500 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {locations?.heading}
            </h2>
            <div className="flex items-center justify-center mb-4">
              <span className="h-0.5 w-16 bg-gray-600"></span>
              <span className="mx-4 text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </span>
              <span className="h-0.5 w-16 bg-gray-600"></span>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto px-4">
              {locations?.description}
            </p>
          </div>
          
          {/* Grid of county cards */}
          {
            locations?.list?.length > 0 ? (
              <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5  gap-3 md:gap-4">
            {locations?.list?.map((city, index) => (
              <div 
                key={index} 
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden h-full transition-all duration-300 border border-gray-700 group-hover:border-yellow-500/50 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] transform group-hover:-translate-y-1">
                  <div className="h-1 w-full bg-gradient-to-r from-yellow-400 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <div className="p-4 flex items-start">
                    <div className="mr-3 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-yellow-500 group-hover:bg-yellow-400 transition-all duration-300 group-hover:shadow-glow"></div>
                    </div>
                    <div>
                      <h3 className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm md:text-base font-medium">{city}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          ) : (
            <div className="text-center text-gray-400">
              No cities found
            </div>
          )}
          
          <div className="mt-10 text-center">
            <span className="inline-flex items-center text-yellow-300 text-sm bg-gray-800/60 backdrop-blur-sm px-6 py-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              Available 24/7 for emergency service across all counties
            </span>
          </div>
        </Container>
        
        <style jsx>{`
          .shadow-glow {
            box-shadow: 0 0 8px rgba(234, 179, 8, 0.6);
          }
        `}</style>
    </div>
  );
}
