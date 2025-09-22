import React from 'react';
import leaf from "../assets/images/leaf.png"
import decorative from "../assets/images/decorative.png"
import about from "../assets/images/about.png"

const WhoWeAre = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Images */}
          <div className="relative">
            {/* Main farm image */}
            <div className="relative">
              <img
                src={about}
                alt="Sustainable farming field with green crops in rows"
                className="w-full"
              />
              
              {/* Decorative dots pattern */}
             <div className="absolute  -bottom-0 -right-10 grid grid-cols-10 gap-1 opacity-30">
  {[...Array(50)].map((_, i) => (
    <div key={i} className="w-2 h-2 bg-green-400 rounded-full"></div>
  ))}
</div>

            </div>
            
            {/* Small overlapping image */}
            
            
            {/* Leaf decoration */}
                {/* <div className="absolute top-4 -left-0 text-green-600 ">
    <img src={leaf} alt="" className='-z-9' />
                </div> */}
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            {/* Section tag */}
            <div className="flex items-center space-x-2">
              <div className="w-0.5 h-4 bg-[#a6ce39]"></div>
              <span className="text-[#009444] font-medium text-sm sm:text-base  tracking-wide">
                Who We Are
              </span>
            </div>

            {/* Main heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-[460px]">
              Sustainable farming, fresh food.
            </h2>

            {/* Description */}
            <div className=" border-l-4 border-[#a6ce39] p-4 rounded-r-lg">
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                HarvestPoint AgroPie started in 2025 with a simple idea: bring farmers 
                and customers closer for a better food system we care about 
                fairness, honesty, and freshness. We want farmers to earn what they 
                deserve and you to enjoy the best food, fresh and full of life.
              </p>
            </div>

            {/* Learn More Button */}
            <div className="">
<button className="group flex items-center justify-between gap-3 
                bg-[#009444] hover:bg-green-700 text-white font-semibold 
                py-4 px-6 md:py-5 md:px-8 transition-all duration-300 shadow-md hover:shadow-lg 
                w-full sm:w-auto min-w-[200px] sm:min-w-[220px] 
                rounded-tl-none rounded-tr-full rounded-bl-full rounded-br-full">
                <span className="tracking-wide uppercase text-sm sm:text-base md:text-lg">
                 Learn More
                </span>
                
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;