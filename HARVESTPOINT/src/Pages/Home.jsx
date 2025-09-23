import React from 'react';
import banner from "../assets/images/banner.jpg";
import Services from './Services'
import Testimonial from './Testimonial'
import WhoWeAre from './WhoWeAre';
import GreenMovement from './GreenMovement';
import WhatWeDo from './WhatWeDo';


function Home() {
  return (
    <>
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      />

        {/* Overlay (dark gradient/shadow) */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        {/* Content Overlay */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-6xl mx-auto">
            {/* Main Heading */}
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 leading-snug sm:leading-tight max-w-[1000px] mx-auto">
              From Our Farmers’ Hands to Your Table — <br className="hidden md:block" />
              Fresh, Honest, and Just Right
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white mb-8 sm:mb-9 max-w-[950px] mx-auto leading-relaxed font-light">
              At HarvestPoint AgroPie, we don't just bring you food — we bring the love and hard work of
              farmers right to your doorstep. We're here to support farmers, build trust, and deliver fresh,
              quality produce made with care.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              {/* Button 1 */}
              <button className="group flex items-center justify-between gap-3 
                bg-[#009444] hover:bg-green-700 text-white font-semibold 
                py-4 px-6 md:py-5 md:px-8 transition-all duration-300 shadow-md hover:shadow-lg 
                w-full sm:w-auto min-w-[200px] sm:min-w-[220px] 
                rounded-tl-none rounded-tr-full rounded-bl-full rounded-br-full">
                <span className="tracking-wide uppercase text-sm sm:text-base md:text-lg">
                  Explore Our Products
                </span>
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Button 2 */}
              <button className="group flex items-center justify-between gap-3 
                bg-[#009444] hover:bg-green-700 text-white font-semibold 
                py-4 px-6 md:py-5 md:px-8 transition-all duration-300 shadow-md hover:shadow-lg 
                w-full sm:w-auto min-w-[200px] sm:min-w-[220px] 
                rounded-tl-none rounded-tr-full rounded-bl-full rounded-br-full">
                <span className="tracking-wide uppercase text-sm sm:text-base md:text-lg">
                  Join as a Partner
                </span>
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Scroll indicator */}
      
   

    <Services/>
    <WhoWeAre/>
    <WhatWeDo/>
    <Testimonial/>
    <GreenMovement/>
    

    </>
  );
}

export default Home;
