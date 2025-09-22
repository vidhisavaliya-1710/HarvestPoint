import React from 'react';
import banner from "../assets/images/banner.jpg";
import Services from './Services'
import Testimonial from './Testimonial'

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
      <div className="absolute inset-0 bg-black/20 z-0" />

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-[950px] text-white mb-6 leading-tight">
           From Our Farmers’ Hands to Your Table — Fresh, Honest, and Just Right
          </h1>

          {/* Subheading */}
          <p className="text-[16px] max-w-[950px] sm:text-lg md:text-xl lg:text-2xl text-white mb-8 sm:mb-12  mx-auto leading-relaxed font-light">
            At HarvestPoint AgroPie, we don't just bring you food — we bring the love and hard work of
            farmers right to your doorstep. We're here to support farmers, build trust, and deliver fresh,
            quality produce made with care.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
  {/* Button 1 */}
  <button className="group flex items-center justify-between gap-3 
  bg-[#009444] hover:bg-green-700 text-white font-semibold 
  py-5 px-8 transition-all duration-300 shadow-md hover:shadow-lg min-w-[220px] 
  rounded-tl-none rounded-tr-full rounded-bl-full rounded-br-full">
  
  <span className="tracking-wide uppercase">Explore Our Products</span>
  
  <svg
    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
  py-5 px-8 transition-all duration-300 shadow-md hover:shadow-lg min-w-[220px] 
  rounded-tl-none rounded-tr-full rounded-bl-full rounded-br-full">
  
  <span className="tracking-wide uppercase">Join as a Partner</span>
  
  <svg
    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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

      {/* Optional: Scroll indicator */}
      
    </div>

    <Services/>
    <Testimonial/>

    </>
  );
}

export default Home;
