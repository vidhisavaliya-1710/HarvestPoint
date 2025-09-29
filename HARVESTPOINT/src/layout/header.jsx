import React, { useState } from 'react';
import { MapPin, Mail, Phone, Facebook, Linkedin, Menu, X } from 'lucide-react';
import logo from '../assets/images/logo.png';
import { FaEnvelopeOpen, FaFacebookF, FaLinkedinIn, FaLocationArrow } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#009444] text-white py-2 sm:py-3 md:py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 md:space-x-6">
            <div className="flex items-center space-x-1">
              <FaLocationArrow size={12} className="sm:size-[14px]" />
              <span className="truncate">Gurgaon, Haryana, India</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaEnvelopeOpen size={12} className="sm:size-[14px]" />
              <span className="truncate">info@harvestpointagro.com</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaPhoneAlt size={12} className="sm:size-[14px]" />
              <span>+91-7669258327</span>
            </div>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-5 mt-1 sm:mt-0">
            <a href="#" className="hover:text-green-200 transition-colors">
              <FaFacebookF size={14} className="sm:size-[16px]" />
            </a>
            <a href="#" className="hover:text-green-200 transition-colors">
              <FaLinkedinIn size={14} className="sm:size-[16px]" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-2 md:py-3">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img 
                src={logo} 
                alt="Harvest Point Agro Solutions" 
                className="h-10 sm:h-12 md:h-14 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <Link to='/' className="text-[#0D3C00] hover:text-[#009444] font-medium transition-colors py-1 hover:border-b-2 border-[#009444]">
                Home
              </Link>
              <Link to='/whoweare' className="text-[#0D3C00] hover:text-[#009444] font-medium transition-colors py-1 hover:border-b-2 border-[#009444]">
                About Us
              </Link>
              <Link to='/products' className="text-[#0D3C00] hover:text-[#009444] font-medium transition-colors py-1 hover:border-b-2 border-[#009444]">
                Products
              </Link>
              <Link to='/Farmers-Corner' className="text-[#0D3C00] hover:text-[#009444] font-medium transition-colors py-1 hover:border-b-2 border-[#009444]">
                Farmers' Corner
              </Link>
              <Link to='/blog' className="text-[#0D3C00] hover:text-[#009444] font-medium transition-colors py-1 hover:border-b-2 border-[#009444]">
                News & Articles
              </Link>
              <Link to='/carrers' className="text-[#0D3C00] hover:text-[#009444] font-medium transition-colors py-1 hover:border-b-2 border-[#009444]">
                Carrers
              </Link>
              <Link to='/contactus'>
              
              <button className="bg-[#ff9100] text-white px-4 py-2 md:px-6 md:py-2 rounded-md font-medium hover:bg-[#e68300] transition-colors">
                Partner with Us
              </button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden text-gray-700 hover:text-green-700 p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-4">
                <a href="#" className="text-green-700 font-medium py-2 border-l-4 border-green-600 pl-4">
                  Home
                </a>
                <a href="#" className="text-gray-700 hover:text-green-700 font-medium py-2 pl-4 transition-colors">
                  About Us
                </a>
                <a href="#" className="text-gray-700 hover:text-green-700 font-medium py-2 pl-4 transition-colors">
                  Products
                </a>
                <a href="#" className="text-gray-700 hover:text-green-700 font-medium py-2 pl-4 transition-colors">
                  Farmers' Corner
                </a>
                <a href="#" className="text-gray-700 hover:text-green-700 font-medium py-2 pl-4 transition-colors">
                  News & Articles
                </a>
                <a href="#" className="text-gray-700 hover:text-green-700 font-medium py-2 pl-4 transition-colors">
                  Contact Us
                </a>
                <button className="bg-[#ff9100] text-white px-6 py-3 rounded-md font-medium mx-4 mt-4 hover:bg-[#e68300] transition-colors">
                  Partner with Us
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;