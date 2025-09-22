import React from 'react';

// Import your images
import howedolt1 from '../assets/images/howitwork (1).png';
import howedolt2 from '../assets/images/howitwork (2).png';
import howedolt3 from '../assets/images/howitwork (3).png';
import howedolt4 from '../assets/images/howitwork (4).png';

export default function HowWeDoIt() {
    return (
        <section className="py-20 bg-gray-50 font-sans">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 max-w-lg">
                        <h2 className="text-base font-semibold text-gray-700 uppercase tracking-wider mb-3">
                            How We Do It
                        </h2>
                        <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
                            Getting Food to<br />You Fast & Fresh
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            We make sure fresh produce moves quickly from farm to markets and homes.
                        </p>

                        <ul className="space-y-4 mb-10">
                            <li className="flex items-start">
                                <span className="text-green-500 text-xl mr-3 mt-0.5">•</span>
                                <span className="text-gray-700 text-base">Delivery available in all big cities across the country.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 text-xl mr-3 mt-0.5">•</span>
                                <span className="text-gray-700 text-base">Special cost averages that keep produce fresh.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 text-xl mr-3 mt-0.5">•</span>
                                <span className="text-gray-700 text-base">Perfect timing so your orders arrive just when needed.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 text-xl mr-3 mt-0.5">•</span>
                                <span className="text-gray-700 text-base">Trusted transport partners who handle your food carefully.</span>
                            </li>
                        </ul>

                        <div className="w-full h-px bg-gray-300 my-10"></div>

                        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-md transition duration-300 transform hover:-translate-y-1">
                            LEARN MORE
                        </button>
                    </div>

                    {/* Image Grid */}
                    <div className="w-full lg:w-1/2 max-w-lg">
                        <div className="grid grid-cols-2 gap-5">
                            {/* Top-left - round top-left and bottom-left */}
                            <div className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 rounded-tl-[40px]">
                                <img
                                    src={howedolt1}
                                    alt="Fresh produce sourcing"
                                    className="w-full h-48 sm:h-56 object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            {/* Top-right - round top-right only */}
                            <div className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 rounded-tr-[40px]">
                                <img
                                    src={howedolt2}
                                    alt="Quality checking process"
                                    className="w-full h-48 sm:h-56 object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            {/* Bottom-left - round bottom-left only */}
                            <div className="overflow-hidden  shadow-lg hover:shadow-xl transition-all duration-300 rounded-bl-[40px]">
                                <img
                                    src={howedolt3}
                                    alt="Fast delivery system"
                                    className="w-full h-48 sm:h-56 object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            {/* Bottom-right - round bottom-right only */}
                            <div className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 rounded-br-[40px]">
                                <img
                                    src={howedolt4}
                                    alt="Customer satisfaction"
                                    className="w-full h-48 sm:h-56 object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}