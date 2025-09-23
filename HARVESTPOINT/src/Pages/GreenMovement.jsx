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
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left - Greenhouse Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={greenmovement1}
                alt="Person working in greenhouse"
                className="w-full h-50 md:h-60 lg:h-70 object-cover"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-7">
              <div className="rounded-lg overflow-hidden ">
                <img
                  src={greenmovement2}
                  alt="Aerial view of farmland"
                  className="w-full h-50 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden ">
                <img
                  src={greenmovement3}
                  alt="Fresh vegetables and fruits"
                  className=" w-full h-50 object-cover "
                />
              </div>


            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2 ml-5">
            <div className="flex items-center space-x-2">
              <div className="w-0.5 h-4 bg-[#a6ce39]"></div>
              <span className="text-[#009444] font-medium text-sm sm:text-base  tracking-wide">
                Green Movement
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 mt-5">
              Caring for Our Planet
            </h1>

            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
              We believe farming should make the earth better, not harm it.
            </p>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Green Promise</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-700 rounded-full mt-1 flex-shrink-0"></div>
                  <span className="text-gray-600 -mt-1">Encourage organic and chemical-free farming.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-700 rounded-full mt-1 flex-shrink-0"></div>
                  <span className="text-gray-600 -mt-1">Use packaging that's kind to the environment.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-700 rounded-full mt-1 flex-shrink-0"></div>
                  <span className="text-gray-600 -mt-1">Cut down on food waste by working smart.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-700 rounded-full mt-1 flex-shrink-0"></div>
                  <span className="text-gray-600 -mt-1">Help rural communities with training and jobs.</span>
                </li>
              </ul>
            </div>

            {/* Feature Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {/* Organic making */}
              <div className="flex items-center gap-3 ">
                <div className="w-12 h-12 bg-[#009444] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10M7 4l-2 16h14L17 4M10 8v8m4-8v8" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6" />
                    <circle cx="9" cy="7" r="1" fill="currentColor" />
                    <circle cx="15" cy="7" r="1" fill="currentColor" />
                  </svg>
                </div>
                <span className="text-lg font-light text-gray-800">Organic making</span>
              </div>

              {/* Certified products */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#009444] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 11l3 3 8-8" />
                  </svg>
                </div>
                <span className="text-lg font-light text-gray-800">Certified products</span>
              </div>

              {/* Fast delivery */}
              <div className="flex items-center gap-3 ">
                <div className="w-12 h-12 bg-[#009444] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16,3 19,7 19,13 16,13" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 8h4M8 12h2" />
                  </svg>
                </div>
                <span className="text-lg font-light text-gray-800">Fast delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Small Images Grid */}

      </div>

      {/* Cards Section */}
      {/* <div>
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className=" overflow-hidden">
              <img src={healthy1} alt="" />
              <div className="relative right-0 top-[] w-32 h-32 opacity-20">

              </div>
            </div>

            <div className=" overflow-hidden">
              <img src={healthy2} alt="" />
              <div className="absolute right-0 -top-[55px] w-32 h-32 opacity-20">

              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-gray-900 text-white py-16 md:py-24">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{
              backgroundImage: `url(${beHealthy})`
            }}
          ></div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Be Healthy & Eat Only Fresh<br />
              Organic Vegetables
            </h2>
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 mt-8">
              Join as a Partner
            </button>
          </div>
        </div>
      </div> */}


      <div className="relative h-100 bg-cover bg-center bg-no-repeat" style={{
    backgroundImage: `url(${beHealthy})`
}}>
    {/* Overlay Cards */}
    <div className="absolute top-0 left-4 right-10 md:-top-40 md:left-8 md:right-8 flex flex-col sm:flex-row gap-4 md:gap-6 z-10 justify-center">
        {/* Quality Organic Food Store Card */}
        <div className="relative overflow-hidden sm:w-1/2">
            <img
                src={healthy1}
                alt="Organic vegetables"
                className='h-60 lg:h-70 sm:h-40 md:h-50 w-full object-cover rounded-2xl'
            />
        </div>

        {/* Healthy Products Everyday Card */}
        <div className="relative overflow-hidden sm:w-1/2">
            <img
                src={healthy2}
                alt="Fresh healthy products"
                className='h-60 lg:h-70 sm:h-40 md:h-50 w-full object-cover rounded-2xl'
            />
        </div>
    </div>

    {/* Main Content */}
    <div className='mt-50'>
        <div className="flex items-center justify-center px-4 md:px-8">
            <div className="text-center text-white max-w-4xl mx-auto pt-32 sm:pt-40">
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 leading-tight">
                    Be Healthy & Eat Only Fresh<br />
                    Organic Vegetables
                </h1>

                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Join as a Partner
                </button>
            </div>
        </div>

        {/* Additional decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </div>
</div>

    </div>
  );
}

export default GreenMovement;