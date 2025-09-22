import React from 'react';
import frame5 from '../assets/images/whatwedo.jpg'; // Update the path to your image location

export default function FarmersCorner() {
  return (
    <section className="bg-[#F4F5F0] w-full">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 h-[340px] lg:h-auto">
          <img
            src={frame5}
            alt="Farmers in field"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex items-center px-8 lg:px-16 py-12">
          <div>
            <div className="mb-4">
              <span className="text-green-700 font-semibold text-sm border-l-4 border-green-600 pl-3">What We Do</span>
            </div>
            <h2 className="text-gray-900 font-extrabold text-[2.5rem] leading-tight mb-6" style={{fontFamily: 'inherit'}}>
              Our farmers are the heart<br />of HarvestPoint.
            </h2>
            <p className="mt-2 mb-6 text-gray-700 text-sm">
              Our farmers are the heart of HarvestPoint. We support them so they can do their best and get what they deserve.
            </p>
            <div>
              <span className="font-bold text-gray-900 text-sm">How We Help Farmers</span>
              <ul className="mt-3 list-disc ml-6 text-gray-700 text-sm">
                <li>Pay them fairly and on time.</li>
                <li>Offer training on better farming and organic methods.</li>
                <li>Connect them straight to buyers — no middlemen taking a cut.</li>
                <li>Guide them on how to store and sell their crops best.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
