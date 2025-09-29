import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import footerlogo from '../assets/images/footerlogo.png'
import {  FaEnvelopeOpen, FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationArrow, FaTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0d3c00] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info Section */}
          <div className="lg:col-span-2">
            {/* Logo */}
            {/* <div className="bg-white rounded-lg p-4 inline-block mb-6">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-full p-2">
                  <div className="relative">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                      <div className="text-green-700 font-bold text-sm">🌾</div>
                    </div>
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-400 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-green-700">HarvestPoint</h3>
                  <p className="text-xs text-green-600">AgroPie</p>
                </div>
              </div>
            </div> */}

            <img src={footerlogo} alt="" className='mb-2' />

            {/* Description */}
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              From our farmers' hands to your table — fresh, honest, and just right. We're building a fairer, more sustainable food system for everyone.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
              >
                <FaFacebookF size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
              >
                <FaTwitter size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
              >
                <FaInstagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-orange-400 font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to='/' className="text-gray-300 hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to='' className="text-gray-300 hover:text-white transition-colors duration-300">
                  Products
                </Link>
              </li>
              <li>
                <Link to='/Farmers-Corner' className="text-gray-300 hover:text-white transition-colors duration-300">
                  Farmers' Corner
                </Link>
              </li>
              <li>
                <Link to='/whoweare' className="text-gray-300 hover:text-white transition-colors duration-300">
                  About Us
                </Link>
              </li>
             
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-orange-400 font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to='' className="text-gray-300 hover:text-white transition-colors duration-300">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors duration-300">
                  News & Articles
                </Link>
              </li>
              <li>
                <Link to="/contactUs" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-green-700 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Address */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <FaLocationArrow size={18} />
              </div>
              <div>
                <h5 className="font-semibold text-white mb-1">Address</h5>
                <p className="text-gray-300 text-sm">
                  Gurgaon, Haryana, India
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <FaPhoneAlt size={18} />
              </div>
              <div>
                <h5 className="font-semibold text-white mb-1">Phone</h5>
                <p className="text-gray-300 text-sm">
                  +91-7669258327
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3 ">
              <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <FaEnvelopeOpen size={18} />
              </div>
              <div>
                <h5 className="font-semibold text-white mb-1">Email</h5>
                <p className="text-gray-300 text-sm">
                  info@harvestpointagro.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-green-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 HarvestPoint AgroPie. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;