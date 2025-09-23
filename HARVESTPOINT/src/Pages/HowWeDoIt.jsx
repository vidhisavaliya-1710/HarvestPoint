import React from 'react';

// Import your images
import howedolt1 from '../assets/images/howitwork (1).png';
import howedolt2 from '../assets/images/howitwork (2).png';
import howedolt3 from '../assets/images/howitwork (3).png';
import howedolt4 from '../assets/images/howitwork (4).png';
import circule from '../assets/images/circule.png';

export default function HowWeDoIt() {
    return (
        <section className="py-12 md:py-16 lg:py-20 bg-gray-50 font-sans">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 max-w-lg order-2 lg:order-1">
                        {/* Small Heading */}
                        <h2 className="text-green-600 font-semibold mb-3 flex items-center text-sm md:text-base">
                            <span className="w-1 h-4 md:h-6 mr-2 bg-[#A6CE39]"></span>
                            How We Do It
                        </h2>

                        {/* Main Heading */}
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4 md:mb-6">
                            Getting Food to <br className="hidden sm:block" /> You Fast & Fresh
                        </h3>

                        {/* Sub text */}
                        <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed mb-4 md:mb-6">
                            We make sure fresh produce moves quickly from farms to markets and homes.
                        </p>

                        {/* Bullet List */}
                        <ul className="border-l-4 border-[#A6CE39] pl-3 md:pl-5 space-y-2 md:space-y-4 mb-6 md:mb-10">
                            <li className="text-gray-700 text-sm md:text-base">
                                • Delivery available in all big cities across the country.
                            </li>
                            <li className="text-gray-700 text-sm md:text-base">
                                • Special cool storages that keep produce fresh.
                            </li>
                            <li className="text-gray-700 text-sm md:text-base">
                                • Perfect timing so your orders arrive just when needed.
                            </li>
                            <li className="text-gray-700 text-sm md:text-base">
                                • Trusted transport partners who handle your food carefully.
                            </li>
                        </ul>

                        {/* Button */}
                        <button className="bg-[#009444] hover:bg-green-700 text-white font-semibold py-3 px-6 md:py-4 md:px-7 lg:py-5 lg:px-8 rounded-tr-[20px] md:rounded-tr-[30px] lg:rounded-tr-[40px] rounded-br-[20px] md:rounded-br-[30px] lg:rounded-br-[40px] rounded-bl-[20px] md:rounded-bl-[30px] lg:rounded-bl-[40px] transition duration-300 text-sm md:text-base">
                            LEARN MORE
                        </button>
                    </div>

                    {/* Image Grid */}
                    <div className="w-full lg:w-1/2 max-w-lg order-1 lg:order-2 lg:me-20 relative">
                        <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-5">
                            {/* Top-left */}
                            <div className="w-full h-32 sm:h-40 md:h-48 lg:h-56 overflow-hidden transition-all duration-300 rounded-tl-[20px] md:rounded-tl-[30px] lg:rounded-tl-[40px]">
                                <img
                                    src={howedolt2}
                                    alt="Quality checking process"
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            
                            {/* Top-right */}
                            <div className="w-50 h-32 sm:h-40 md:h-44 lg:h-48 mt-3 md:mt-4 lg:mt-6 overflow-hidden transition-all duration-300 rounded-tr-[20px] md:rounded-tr-[30px] lg:rounded-tr-[40px]">
                                <img
                                    src={howedolt3}
                                    alt="Fast delivery system"
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            
                            {/* Bottom-left */}
                            <div className="w-53 ml-8 ms-[20px] h-32 sm:h-40 md:h-44 lg:h-48 -mt-2 md:-mt-3 lg:-mt-0 overflow-hidden transition-all duration-300 rounded-bl-[20px] md:rounded-bl-[30px] lg:rounded-bl-[40px]">
                                <img
                                    src={howedolt4}
                                    alt="Customer satisfaction"
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                                
                            {/* Bottom-right */}
                            <div className="w-full h-32 sm:h-40 md:h-48 lg:h-56 overflow-hidden transition-all duration-300 rounded-br-[20px] md:rounded-br-[30px] lg:rounded-br-[40px] z-10">
                                <img
                                    src={howedolt1}
                                    alt="Fresh produce sourcing"
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        </div>
                        
                        {/* Circle Element */}
                        <div className="absolute -bottom-8 -right-8 sm:-bottom-10 sm:-right-10 md:-bottom-12 md:-right-12 lg:-bottom-12 lg:-right-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 z-0">
                            <img src={circule} className='w-full h-full object-contain' alt="Decorative circle" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}