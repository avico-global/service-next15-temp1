import React from "react";
import CTA from "../ui/CTA";
import Container from "../common/Container";
import Link from "next/link";
import Logo from "@/components/ui/Logo";

export default function Footer({logo, imagePath}) {
  const currentYear = new Date().getFullYear();
  
  // Footer navigation links
  const footerLinks = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "About Us", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "FAQ", href: "/faq" },
  ];

  // Social media icons
  const socialLinks = [
    { title: "Facebook", icon: "fab fa-facebook-f", href: "https://facebook.com" },
    { title: "Twitter", icon: "fab fa-twitter", href: "https://twitter.com" },
    { title: "Instagram", icon: "fab fa-instagram", href: "https://instagram.com" },
    { title: "LinkedIn", icon: "fab fa-linkedin-in", href: "https://linkedin.com" },
  ];

  return (
    <footer className="mt-auto">
      {/* CTA Section */}
      <div className="bg-[#F7B914] py-12 md:py-16">
        <Container className="flex flex-col md:flex-row justify-between items-center gap-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#181818] text-center md:text-left">
            For Quick Response Click to Call Now
          </h2>
          <CTA className="w-full md:w-auto" />
        </Container>
      </div>

      {/* Main Footer */}
      <div className="bg-gray-800 text-white py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Company Info */}
            <div className="flex flex-col items-center md:items-start">
                <Logo logo={logo} imagePath={imagePath} />
              <p className="text-gray-300 text-sm mt-4 text-center md:text-left">
                Professional towing services available 24/7. Fast response times and reliable service when you need it most.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-center md:text-left">Quick Links</h3>
              <ul className="space-y-2 text-center md:text-left">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-center md:text-left">Contact Us</h3>
              <div className="space-y-3 text-gray-300 text-center md:text-left">
                <p className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="font-semibold">Address:</span> 
                  <span>123 Towing Ave, City, State 12345</span>
                </p>
                <p className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="font-semibold">Phone:</span> 
                  <a href="tel:+1234567890" className="hover:text-white transition-colors">(123) 456-7890</a>
                </p>
                <p className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="font-semibold">Email:</span> 
                  <a href="mailto:info@example.com" className="hover:text-white transition-colors">info@example.com</a>
                </p>
                <p className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="font-semibold">Hours:</span> 
                  <span>24/7 Emergency Service</span>
                </p>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-center md:text-left">Stay Updated</h3>
              <p className="text-gray-300 mb-4 text-center md:text-left">Subscribe to our newsletter for tips and updates.</p>
              <div className="flex flex-col space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-[#F7B914]"
                />
                <button className="bg-[#F7B914] hover:bg-[#e6a913] text-[#181818] font-semibold py-2 px-4 rounded transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Footer - Copyright & Social */}
          <div className="mt-12 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Your Towing Company. All rights reserved.
            </p>
            
            {/* Social Media Icons - Assumes FontAwesome is included in your project */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-[#F7B914] transition-colors"
                  aria-label={social.title}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
