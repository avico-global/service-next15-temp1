import React from "react";
import Container from "../common/Container";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { useRouter } from "next/router";
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, Clock, ArrowRight, ChevronRight } from "lucide-react";

export default function Footer({logo, imagePath, phone}) {
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  // Footer navigation links with handleNavigation
  const footerLinks = [
    { title: "Home", href: "/" },
    { title: "Services", href: "services-section" },
    { title: "About Us", href: "about-section" },
    { title: "Contact", href: "contact-us" },
    { title: "Locations", href: "service-area" },
    {title:"FAQ's",href:"faqs"}
  ];

  // Company info items
  const companyInfo = [
    { icon: <Phone size={16} />, text: phone, href: `tel:${phone}` },
    { icon: <Mail size={16} />, text: "info@towing.com", href: "mailto:info@towing.com" },
    { icon: <MapPin size={16} />, text: "Nationwide Towing Services", href: "#service-area" },
    { icon: <Clock size={16} />, text: "Available 24/7, 365 days", href: "#" },
  ];

  // Social media icons
  const socialLinks = [
    { title: "Facebook", icon: <Facebook size={18} />, href: "https://facebook.com" },
    { title: "Twitter", icon: <Twitter size={18} />, href: "https://twitter.com" },
    { title: "Instagram", icon: <Instagram size={18} />, href: "https://instagram.com" },
    { title: "LinkedIn", icon: <Linkedin size={18} />, href: "https://linkedin.com" },
  ];

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

  return (
    <footer className="mt-auto relative">
      <div className="bg-gray-800 pt-4 pb-12 md:pt-8 md:pb-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-8">
            {/* Company & Social Column */}
            <div className="lg:col-span-4 flex flex-col space-y-6">
                <Logo logo={logo} imagePath={imagePath} className="max-w-[140px] mb-3" />
              
              <p className="text-gray-300 text-sm leading-relaxed">
                Professional towing services available 24/7. Fast response times and reliable service when you need it most.
              </p>
              
              {/* Social Media */}
              <div className="pt-1">
                <p className="text-sm font-semibold text-gray-200 mb-3">Follow Us</p>
                <div className="flex items-center space-x-3">
                  {socialLinks.map((link, index) => (
                    <div 
                      key={index}
                      onClick={() => handleNavigation(link.href)}
                      className="bg-gray-700 hover:bg-yellow-500 hover:shadow-lg hover:shadow-yellow-500/20 text-white p-2.5 rounded-full transition-all duration-300 transform hover:-translate-y-1"
                      aria-label={link.title}
                    >
                      {link.icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="lg:col-span-2 flex flex-col space-y-5">
              <h3 className="text-lg font-bold text-white relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-full before:w-1 before:bg-yellow-500 before:rounded-full">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <div 
                      className="text-gray-300 cursor-pointer hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                      onClick={() => handleNavigation(link.href)}
                    >
                      <span className="mr-2 text-yellow-500 transition-transform duration-300 group-hover:translate-x-1">
                        <ArrowRight size={14} />
                      </span>
                      <span>{link.title}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="lg:col-span-3 flex flex-col space-y-5">
              <h3 className="text-lg font-bold text-white relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-full before:w-1 before:bg-yellow-500 before:rounded-full">
                Contact Us
              </h3>
              <ul className="space-y-4">
                {companyInfo.map((item, index) => (
                  <li key={index}>
                    <Link 
                      title={`Contact ${item.text}`}
                      href={item.href}
                      className="text-gray-300  hover:text-yellow-400 transition-colors duration-300 flex items-start group"
                      onClick={item.href.startsWith('#') ? () => handleNavigation(item.href) : undefined}
                    >
                      <span className="mr-3 mt-1 text-yellow-500 transition-all duration-300 group-hover:scale-110">
                        {item.icon}
                      </span>
                      <span>{item.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Column */}
            <div className="lg:col-span-3 flex flex-col">
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl overflow-hidden shadow-lg shadow-yellow-600/10">
                <div className="px-6 py-5">
                  <h3 className="text-gray-900 font-bold text-lg mb-2">24/7 Emergency Towing</h3>
                  <p className="text-gray-800 text-sm mb-4">
                    Need a tow? We're always ready to help when you need us most.
                  </p>
                  
                  <div className="flex flex-col space-y-3 mb-5">
                    <div className="flex items-center text-gray-800">
                      <Clock size={14} className="mr-2" />
                      <span className="text-sm">Available 24/7</span>
                    </div>
                    <div className="flex items-center text-gray-800">
                      <MapPin size={14} className="mr-2" />
                      <span className="text-sm">Fast Response Time</span>
                    </div>
                  </div>
                  
                  <Link 
                    href={`tel:${phone}`}
                    className="inline-flex items-center justify-center w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-300 shadow-md hover:shadow-xl"
                  >
                    <Phone size={18} className="mr-2" />
                    <span> {phone}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Footer */}
          <div className="mt-14 pt-8 border-t border-gray-700/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} <span className="text-yellow-400">Towing Services</span>. All rights reserved.
            </p>
            <div className="flex space-x-6 text-gray-400 text-sm">
              <Link title="Terms of Service" href="/terms-and-conditions" className="hover:text-yellow-400 transition-colors">
                Terms of Service
              </Link>
              <Link title="Privacy Policy" href="/privacy-policy" className="hover:text-yellow-400 transition-colors">
                Privacy Policy
              </Link>
              
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
