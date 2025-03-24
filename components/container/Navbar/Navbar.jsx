import {React, useState, useRef, useEffect} from "react";
import Container from "@/components/common/Container";
import FullContainer from "@/components/common/FullContainer";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { Menu, X, Phone, Clock, ChevronRight, ChevronDown, MapPin, Cog } from "lucide-react";
import { useRouter } from "next/router";
import { sanitizeUrl } from "@/lib/myFun";

export default function Navbar({ logo, imagePath, phone, services }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const locationRef = useRef(null);
  const router = useRouter();
  const selectedservices = services?.list.slice(0, 5) || [];

  const handleNavigation = (id) => {
    const element = document.getElementById(id);

    if (element) {
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    } else {
      router.push("/");
      setTimeout(() => {
        const newElement = document.getElementById(id);
        if (newElement) {
          const offset = 80;
          const elementPosition =
            newElement.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: "smooth",
          });
        }
      }, 500);
    }
  };

  // Check for hash in URL on page load and scroll to element
  useEffect(() => {
    if (router.asPath.includes('#')) {
      const id = router.asPath.split('#')[1];
      setTimeout(() => {
        scrollToSection(id);
      }, 500);
    }
  }, [router.asPath]);
  
  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent body scrolling when menu is open
    document.body.style.overflow = !isOpen ? 'hidden' : '';
  };
  
  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (locationRef.current && !locationRef.current.contains(event.target)) {
        setIsLocationOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [locationRef]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className={`w-full h-20 fixed top-0 left-0 z-50 transition-all duration-300 ${
      scrollPosition > 100 ? 'bg-white shadow-lg text-gray-900' : 'bg-transparent text-white'
    }`}>
      <Container className="flex  items-center py-6 justify-between text-white">
        {logo && <Logo logo={logo} imagePath={imagePath} className="" />}
        
        {/* Desktop Navigation */}
        <div className={`hidden h-[50px] md:flex flex-row  items-center gap-5 ${
          scrollPosition > 100 ? 'text-gray-900' : 'text-white'
        }`}>
          {/* Location Dropdown */}
          <div className="relative" ref={locationRef}>
            <button 
              onMouseEnter={() => setIsLocationOpen(true)}
              onMouseLeave={() => setIsLocationOpen(false)}
              className="flex cursor-pointer h-[50px] items-center gap-1  hover:text-yellow-600 transition-colors"
            >
              <span className="">Services</span>
              <ChevronDown size={16} className={` transition-transform duration-200 ${isLocationOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Dropdown Menu */}
            <div 
              onMouseEnter={() => setIsLocationOpen(true)}
              onMouseLeave={() => setIsLocationOpen(false)}
              className={`absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl border border-gray-100 transition-all duration-200 ${
                isLocationOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'
              }`}
            >
              <div className="p-2">
                <div className="py-2 px-3 text-sm font-semibold text-gray-500 border-b border-gray-100">
                  Select a service
                </div>
                <div className="py-2">
                  {selectedservices.map((service, index) => (
                    <Link 
                      key={index}
                      title={`Service ${index}`}
                      href={`/${sanitizeUrl(service?.title)}`}
                      className="flex cursor-pointer items-center gap-2 py-2 px-3 rounded-md hover:bg-yellow-50 text-gray-700 hover:text-yellow-700 transition-colors"
                      onClick={() => setIsLocationOpen(false)}
                    >
                      <Cog size={14} className="text-yellow-500" />
                      <span>{service?.title}</span>
                    </Link>
                  ))}
                </div>
                <div className="pt-2 pb-1 border-t border-gray-100">
                  <div
                    className="flex items-center justify-between py-2 px-3 text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50 rounded-md text-sm font-medium transition-colors"
                    onClick={() => setIsLocationOpen(false)}
                  >
                    <button className="text-gray-800 cursor-pointer hover:text-yellow-600 transition-colors"
                    onClick={() => handleNavigation("services-section")}
                    >View all services</button>
                    <ChevronRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => handleNavigation("about-section")} 
            className=" hover:text-yellow-600 transition-colors cursor-pointer"
          >
            About
          </button>
          
          <button 
            onClick={() => handleNavigation("service-area")} 
            className=" hover:text-yellow-600 transition-colors cursor-pointer"
          >
            Locations
          </button>
          
          <button 
            onClick={() => handleNavigation("contact-us")} 
            className=" hover:text-yellow-600 transition-colors cursor-pointer"
          >
            Contact
          </button>
        </div>
        
        <div className="hidden md:block bg-[#F7B914] px-5 py-2 rounded-md font-semibold text-gray-900">
          24/7 Hotline {phone}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={handleToggleMenu} 
          className="md:hidden text-[#F7B914] p-2 hover:bg-yellow-50 rounded-md transition-colors"
          aria-label="Toggle menu"
        >
          <Menu size={28} />
        </button>
      </Container>
      
      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleToggleMenu}
      ></div>
      
      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-0 right-0 w-[300px] max-w-[80vw] h-full bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            {logo && <Logo logo={logo} imagePath={imagePath} className="w-32" />}
            <button 
              onClick={handleToggleMenu}
              className="p-2 text-gray-500 hover:text-yellow-600 hover:bg-yellow-50 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-5">
            <nav className="flex flex-col space-y-1">
              {/* Mobile Location Dropdown */}
              <div className="border-b border-gray-100 pb-2 mb-2">
                <button
                  onClick={() => setIsLocationOpen(!isLocationOpen)}
                  className="flex items-center justify-between w-full py-3 px-4 text-gray-800 hover:bg-yellow-50 hover:text-yellow-700 rounded-lg group transition-colors"
                >
                  <span className="font-medium">Services</span>
                  <ChevronDown 
                    size={18} 
                    className={`text-gray-400 group-hover:text-yellow-600 transition-all duration-200 ${
                      isLocationOpen ? 'rotate-180 text-yellow-600' : ''
                    }`} 
                  />
                </button>
                
                {/* Mobile Locations List */}
                <div className={`overflow-hidden transition-all duration-200 ${
                  isLocationOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pl-4 pr-2 py-2">
                    {selectedservices.map((item, index) => (
                      <Link 
                        title={`Service ${index}`}
                        key={index}
                        href={`/${sanitizeUrl(item?.title)}`}
                        className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-yellow-50 text-gray-700 hover:text-yellow-700 transition-colors"
                        onClick={handleToggleMenu}
                      >
                        <MapPin size={14} className="text-yellow-500" />
                        <span>{item?.title}</span>
                      </Link>
                    ))}
                    <div
                      className="flex items-center justify-between py-2 px-3 mt-1 text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50 rounded-md text-sm font-medium transition-colors border-t border-gray-100"
                      onClick={() => handleNavigation("services-section")}
                    >
                      <span className="text-start capitalize">View all services</span>
                      <ChevronRight size={14} />
                    </div>
                  </div>
                </div>
              </div>
              
              <button 
                className="flex items-center justify-between py-3 px-4 text-gray-800 hover:bg-yellow-50 hover:text-yellow-700 rounded-lg group transition-colors w-full text-left"
                onClick={() => handleNavigation("about-section")}
              >
                <span className="font-medium">About</span>
                <ChevronRight size={18} className="text-gray-400 group-hover:text-yellow-600 transition-colors" />
              </button>
              
              <button 
                className="flex items-center justify-between py-3 px-4 text-gray-800 hover:bg-yellow-50 hover:text-yellow-700 rounded-lg group transition-colors w-full text-left"
                onClick={() => handleNavigation("service-area")}
              >
                <span className="font-medium">Locations</span>
                <ChevronRight size={18} className="text-gray-400 group-hover:text-yellow-600 transition-colors" />
              </button>
              
              <button 
                className="flex items-center justify-between py-3 px-4 text-gray-800 hover:bg-yellow-50 hover:text-yellow-700 rounded-lg group transition-colors w-full text-left"
                onClick={() => handleNavigation("contact-us")}
              >
                <span className="font-medium">Contact</span>
                <ChevronRight size={18} className="text-gray-400 group-hover:text-yellow-600 transition-colors" />
              </button>
            </nav>
          </div>
          
          {/* Mobile Menu Footer */}
          <div className="p-5 border-t border-gray-100 bg-gray-50">
            <div className="bg-yellow-50 rounded-lg p-4">
              <div className="font-semibold text-gray-900 mb-1">24/7 Emergency Towing</div>
              <Link 
                title={`Call ${phone}`}
                href={`tel:${phone}`}
                className="flex items-center gap-2 font-bold text-yellow-600 text-lg mb-2"
                onClick={handleToggleMenu}
              >
                <Phone size={18} />
                <span>{phone}</span>
              </Link>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock size={14} />
                <span>Available 24/7 for emergency assistance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
