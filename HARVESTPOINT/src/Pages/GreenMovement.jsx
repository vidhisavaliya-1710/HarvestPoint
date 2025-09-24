import React from 'react';
import greenmovement1 from "../assets/images/greenmovement1.png"
import greenmovement2 from "../assets/images/greenmovement2.png"
import greenmovement3 from "../assets/images/greenmovement3.png"
import beHealthy from "../assets/images/behealthy.png"
import healthy1 from "../assets/images/healthy1.png"
import healthy2 from "../assets/images/healthy2.png"

function GreenMovement() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Left - Greenhouse Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
              <img
                src={greenmovement1}
                alt="Person working in greenhouse"
                className="w-full  h-48 sm:h-56 md:h-60 lg:h-80 object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src={greenmovement2}
                  alt="Aerial view of farmland"
                  className="w-full h-40 sm:h-48 md:h-50 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src={greenmovement3}
                  alt="Fresh vegetables and fruits"
                  className="w-full h-40 sm:h-48 md:h-50 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2 lg:ml-5">
            <div className="flex items-center space-x-2 mb-3 sm:mb-4">
              <div className="w-0.5 h-4 bg-[#a6ce39]"></div>
              <span className="text-[#009444] font-medium text-sm sm:text-base tracking-wide">
                Green Movement
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Caring for Our Planet
            </h1>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
              We believe farming should make the earth better, not harm it.
            </p>

            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Our Green Promise</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-700 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600 text-sm sm:text-base">Encourage organic and chemical-free farming.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-700 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600 text-sm sm:text-base">Use packaging that's kind to the environment.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-700 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600 text-sm sm:text-base">Cut down on food waste by working smart.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-700 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600 text-sm sm:text-base">Help rural communities with training and jobs.</span>
                </li>
              </ul>
            </div>

            {/* Feature Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto">
              {/* Organic making */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#009444] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10M7 4l-2 16h14L17 4M10 8v8m4-8v8" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6" />
                    <circle cx="9" cy="7" r="1" fill="currentColor" />
                    <circle cx="15" cy="7" r="1" fill="currentColor" />
                  </svg>
                </div>
                <span className="text-base sm:text-lg font-light text-gray-800">Organic making</span>
              </div>

              {/* Certified products */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#009444] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 11l3 3 8-8" />
                  </svg>
                </div>
                <span className="text-base sm:text-lg font-light text-gray-800">Certified products</span>
              </div>

              {/* Fast delivery */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#009444] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16,3 19,7 19,13 16,13" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 8h4M8 12h2" />
                  </svg>
                </div>
                <span className="text-base sm:text-lg font-light text-gray-800">Fast delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section with Background Image */}
      <div className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:h-100 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${beHealthy})`
      }}>
        {/* Overlay Cards */}
        <div className="absolute -top-3 sm:top-8 md:-top-5 lg:-top-40 left-4 right-4 sm:left-4 sm:right-14 flex flex-col sm:flex-row gap-4  z-10 justify-center">
          {/* Quality Organic Food Store Card */}
          <div className="relative overflow-hidden sm:w-1/2">
            <img
              src={healthy1}
              alt="Organic vegetables"
              className='h-38 sm:h-40 md:h-56 lg:h-70 w-full object-cover rounded-xl sm:rounded-2xl shadow-lg'
            />
          </div>

          {/* Healthy Products Everyday Card */}
          <div className="relative overflow-hidden sm:w-1/2">
            <img
              src={healthy2}
              alt="Fresh healthy products"
              className='h-38 sm:h-40 md:h-56 lg:h-70 w-full object-cover rounded-xl sm:rounded-2xl shadow-lg'
            />
          </div>
        </div>

        {/* Main Content */}
        <div className='pt-48 sm:pt-56 md:pt-64 lg:pt-80'>
          <div className="flex items-center justify-center px-4 sm:px-6 md:px-8">
            <div className="text-center text-white max-w-4xl mx-auto pb-8 sm:pb-12">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight">
                Be Healthy & Eat Only Fresh<br />
                Organic Vegetables
              </h1>

              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Join as a Partner
              </button>
            </div>
          </div>

          {/* Additional decorative elements */}
          <div className="absolute bottom-0 left-0 w-full h-20 sm:h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}

export default GreenMovement;