import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const slideRef = useRef(null);
  
  // Testimonial data matching the image
  const testimonials = [
    {
      id: 1,
      name: "Louis L.",
      content: "Thank you very much. I had a front tire come off, causing my truck to be crippled in the middle of an area I was unfamiliar with. I called your company. I have often experienced towing and have had negative experiences with such companies. But your driver impressed me with his skill, courtesy, and positive attitude. Your driver arrived quickly and quickly, efficiently and skillfully loaded my vehicle onto the platform without causing any further damage. I thank you for coming to my rescue. Keep up the excellent work!!!",
      rating: 5,
      // Add placeholder avatar images
    },
    {
      id: 2,
      name: "Gale S.",
      content: "My car died on Saturday evening. I got Roadsidetows to tow it on Sunday. Hoping to get it running again that day, I had him take it to the nearest auto center in the area. But a few hours later, after the mechanic guys told me they couldn't fix my car, I called Roadsidetows back and asked him to tow my car over to another mechanic. Within half an hour, he came back and towed my car over to my mechanic. I am very satisfied because the driver arrived very quickly, and Roadsidetows treated me like the most valuable customer. And it was much cheaper than I expected.",
      rating: 5
    },
    {
      id: 3,
      name: "Michael R.",
      content: "Excellent service from start to finish. The dispatcher was friendly and kept me updated on the driver's arrival time. The driver was professional and handled my luxury vehicle with care. The entire process was smooth and stress-free.",
      rating: 5
    },
    {
      id: 4,
      name: "Sarah T.",
      content: "I was stranded late at night in an unfamiliar area when my car broke down. I called several towing companies but this one responded fastest. The driver was courteous and made me feel safe. The price was reasonable and the service exceptional. Would definitely recommend!",
      rating: 5
    }
  ];

  // Number of visible testimonials (responsive)
  const visibleCount = isMobile ? 1 : 2;
  
  // Calculate total number of "pages"
  const totalPages = Math.ceil(testimonials.length / visibleCount);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Function to move to next testimonial page
  const nextTestimonial = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  // Function to move to previous testimonial page
  const prevTestimonial = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  // Handle direct navigation
  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    
    setIsTransitioning(true);
    setCurrentIndex(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextTestimonial();
      }
    }, 7000); // Change slide every 7 seconds
    
    return () => clearInterval(interval);
  }, [isTransitioning, totalPages]); // Add totalPages as dependency

  // Ensure currentIndex is valid when visibleCount changes
  useEffect(() => {
    if (currentIndex >= totalPages) {
      setCurrentIndex(0);
    }
  }, [visibleCount, totalPages, currentIndex]);

  // Render star rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <motion.span 
          key={i} 
          className="text-yellow-400 text-2xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          ★
        </motion.span>
      );
    }
    return stars;
  };

  // Calculate visible testimonials
  const visibleTestimonials = [];
  for (let i = 0; i < visibleCount; i++) {
    const index = (currentIndex * visibleCount + i) % testimonials.length;
    visibleTestimonials.push(testimonials[index]);
  }

  return (
    <div className="py-16 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-yellow-500">
            Client Experiences
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Read what our customers have to say about their experiences with our towing services.
          </p>
        </div>
        
        {/* Testimonial Slider */}
        <div className="relative">
          {/* Navigation Arrows */}
          <motion.button 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white focus:outline-none"
            onClick={prevTestimonial}
            whileHover={{ scale: 1.1 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          
          <motion.button 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white focus:outline-none"
            onClick={nextTestimonial}
            whileHover={{ scale: 1.1 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
          
          {/* Testimonials Container */}
          <div className="relative overflow-hidden mx-10 py-6">
            <motion.div 
              className="flex"
              animate={{ 
                x: `-${currentIndex * (100 / visibleCount)}%` 
              }}
              transition={{ 
                type: "spring", 
                stiffness: 80, 
                damping: 20
              }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="flex-shrink-0 px-4"
                  style={{ width: isMobile ? '100%' : `${100 / visibleCount}%` }}
                >
                  <div className="border-2 border-yellow-400 rounded-lg p-6 h-full bg-white shadow-md">
                    <div className="text-gray-700 mb-6 line-clamp-5 flex-grow">
                      "{testimonial.content}"
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200 flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0 bg-yellow-400 flex items-center justify-center text-white font-bold">
                        {testimonial.avatar ? (
                          <Image 
                            src={testimonial.avatar} 
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          testimonial.name.charAt(0)
                        )}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <div className="flex text-yellow-400 text-lg">
                          {Array(testimonial.rating).fill('★').join('')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-3 h-3 rounded-full ${
                i === currentIndex ? 'bg-yellow-500' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
