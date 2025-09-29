import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhone, FaPhoneAlt, FaPhoneVolume, FaRegEnvelope } from 'react-icons/fa';
import contact from '../assets/images/contact.png';
import contact1 from '../assets/images/contact1.png';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    newsletter: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="bg-white py-8 sm:py-10 md:py-13">
      {/* Main Contact Section */}
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>

        <div className="flex flex-col lg:flex-row shadow-lg rounded-xl overflow-hidden">
          {/* Left Side - Contact Form */}
          <div className="lg:w-1/2 bg-[#0d3c00] p-6 sm:p-8 md:p-12 lg:p-16 flex items-center">
            <div className="w-full max-w-md mx-auto">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8">Get in Touch</h1>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 sm:py-3 bg-transparent border-2 border-white/30 rounded-lg sm:rounded-xl text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors text-sm sm:text-base"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 sm:py-3 bg-transparent border-2 border-white/30 rounded-lg sm:rounded-xl text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors text-sm sm:text-base"
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows="3"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 sm:py-3 bg-transparent border-2 border-white/30 rounded-lg sm:rounded-xl text-white placeholder-white/70 focus:outline-none focus:border-white resize-none transition-colors text-sm sm:text-base"
                  ></textarea>
                </div>
                
                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-orange-500 bg-transparent border-2 border-white/30 rounded focus:ring-orange-500 mt-1 flex-shrink-0"
                  />
                  <label htmlFor="newsletter" className="text-white/80 text-xs sm:text-sm leading-relaxed">
                    I would like to receive the newsletter
                  </label>
                </div>
                
                <button
                  onClick={handleSubmit}
                  className="bg-[#ff9100] text-sm sm:text-lg text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition-colors duration-200 cursor-pointer hover:bg-orange-600 w-full sm:w-auto"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Info and Map */}
          <div className="lg:w-1/2 bg-white p-6 sm:p-8 md:p-12 lg:p-16">
            <div className="max-w-md mx-auto lg:mx-0">
              <p className="text-[#000000] mb-6 sm:mb-8 text-base sm:text-lg font-sans leading-relaxed">
                Have questions? Want to work with us? Just want to say hello? We're ready to help!
              </p>
              
              {/* Map Placeholder */}
              <div className="w-full h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden mb-6 sm:mb-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d620.3480968209032!2d77.04306092305077!3d28.41265501958797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d229abb80e123%3A0xac9af8f5acc2e8a9!2sSpaze%20iTech%20Park!5e0!3m2!1sen!2sin!4v1758606706893!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
              
              {/* Contact Information */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3">
                  <FaLocationDot className="w-4 h-4 sm:w-5 sm:h-5 text-[#009444] mt-1 flex-shrink-0" />
                  <p className="text-[#000000] text-sm sm:text-md font-normal leading-relaxed">
                    Unit No. 455, 4th Floor, Square Tech Park, Tower B<br />
                    Gurgaon, Haryana, India, 122018
                  </p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <FaPhoneAlt className="w-4 h-4 sm:w-5 sm:h-5 text-[#009444] flex-shrink-0" />
                  <div>
                    <p className="text-[#000000] text-sm sm:text-md font-normal">+91-7291071278</p>
                    <p className="text-[#000000] text-sm sm:text-md font-normal ms-0 sm:ms-0 mt-1">+91-7669258327</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <FaRegEnvelope className="w-4 h-4 sm:w-5 sm:h-5 text-[#009444] flex-shrink-0" />
                  <p className="text-[#000000] text-sm sm:text-md font-normal">info@yourcompanyname.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-white py-8 sm:py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-around relative gap-8 lg:gap-4">
              
              {/* Left Image (Bottom aligned) */}
              <div className="flex items-end justify-center order-1 lg:order-1 w-full lg:w-auto">
                <div className="w-64 sm:w-80 md:w-92 h-40 sm:h-48 md:h-60 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={contact}
                    alt="Farming Drones"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Center Content */}
              <div className="mx-0 lg:mx-8 text-center flex flex-col items-center justify-center order-2 lg:order-2 w-full lg:w-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 text-center">
                  Get In Touch <br className="hidden sm:block" /> With Us
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base text-center max-w-md">
                  Let's embody your beautiful ideas together, simplify the way you visualize your next big things.
                </p>
                <button className="bg-green-800 hover:bg-green-900 text-white font-semibold py-2 sm:py-3 px-8 sm:px-12 rounded transition-colors duration-200 text-sm sm:text-base">
                  Try now
                </button>
              </div>

              {/* Right Image (Top aligned) */}
              <div className="flex items-start justify-center order-3 lg:order-3 w-full lg:w-auto">
                <div className="w-40 sm:w-48 md:w-52 h-40 sm:h-48 md:h-52 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={contact1}
                    alt="Planting"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ContactUs;