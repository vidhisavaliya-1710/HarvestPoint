import React from 'react'
import { Heart, Shield, Truck, Leaf } from 'lucide-react';
import { GiThreeLeaves } from "react-icons/gi";
import { IoShieldHalf } from "react-icons/io5";
import { FaLeaf, FaTruckFast } from 'react-icons/fa6';

function Services() {
  return (
    <>
         <section className="bg-[#f4f5f0] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-[54px] font-bold text-[#1E1E1E] mb-4">
            What Makes HarvestPoint Different?
          </h2>
          <p className="text-[#009444] text-lg lg:text-md max-w-3xl mx-auto">
            We're not just another food company. We're your bridge to authentic, farm-fresh quality.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Fresh from Farmers */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-[#ff9100] rounded-lg flex items-center justify-center mb-4">
              <GiThreeLeaves className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Fresh from Farmers
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We source directly from farmers we know and trust, so you get the freshest produce possible.
            </p>
          </div>

          {/* Clean & Careful Processing */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-[#ff9100] rounded-lg flex items-center justify-center mb-4">
              <IoShieldHalf className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Clean & Careful Processing
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our modern facilities handle your food gently, keeping it tasty and safe.
            </p>
          </div>

          {/* Fast, Reliable Delivery */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-[#ff9100] rounded-lg flex items-center justify-center mb-4">
              <FaTruckFast className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Fast, Reliable Delivery
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We get your order to you quickly and right on time.
            </p>
          </div>

          {/* Caring for the Planet */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-[#ff9100] rounded-lg flex items-center justify-center mb-4">
              <FaLeaf className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Caring for the Planet
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We follow eco-friendly steps because we believe farming should protect our earth.
            </p>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}

export default Services