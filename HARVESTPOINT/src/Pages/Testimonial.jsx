import React from 'react'
import { Quote } from 'lucide-react';
import Testimonials from '../assets/images/Testimonials.png'
import Testimonials1 from '../assets/images/Testimonials1.png'
import Testimonials2 from '../assets/images/Testimonials2.png'

function Testimonial() {

    const testimonials = [
    {
      id: 1,
      name: "Rajesh",
      role: "Director",
      avatar: Testimonials,
      text: "HarvestPoint made selling my crops simple and gave me a fair price. I feel valued now!",
      isHighlighted: false
    },
    {
      id: 2,
      name: "Rajesh",
      role: "Analyst",
      avatar: Testimonials1,
      text: "HarvestPoint made selling my crops simple and gave me a fair price. I feel valued now!",
      isHighlighted: true
    },
    {
      id: 3,
      name: "Rajesh",
      role: "Attorney",
      avatar: Testimonials2,
      text: "HarvestPoint made selling my crops simple and gave me a fair price. I feel valued now!",
      isHighlighted: false
    }
  ];


  return (
    <>
         <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <div className="w-1 h-8 bg-green-500 mr-4"></div>
            <span className="text-[#009444] font-medium text-lg">Testimonials</span>
          </div>
          <h2 className="text-4xl lg:text-[44px] font-bold text-[#1E1E1E]">
            What Farmer's Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto">
      {testimonials.map((testimonial) => (
       <div
  key={testimonial.id}
  className={`flex-1 p-8 relative ${
    testimonial.isHighlighted 
      ? 'bg-green-600 text-white' 
      : 'bg-white text-gray-800 border-2 border-gray-200'
  } min-h-[280px] flex flex-col rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none`}
>

          
          {/* Profile Section */}
          <div className="flex items-center mb-6">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full object-cover mr-4  shadow-sm"
            />
            <div>
              <h4 className={`font-bold text-xl ${
                testimonial.isHighlighted ? 'text-white' : 'text-gray-900'
              }`}>
                {testimonial.name}
              </h4>
              <p className={`text-base ${
                testimonial.isHighlighted ? 'text-green-100' : 'text-gray-500'
              }`}>
                {testimonial.role}
              </p>
            </div>
          </div>

          {/* Testimonial Text */}
          <div className="flex-1 flex flex-col justify-between">
            <p className={`text-lg leading-relaxed ${
              testimonial.isHighlighted ? 'text-white' : 'text-gray-700'
            }`}>
              "{testimonial.text}"
            </p>

            {/* Quote Icon */}
            <div className="flex justify-end mt-6">
              <Quote 
                size={40} 
                className={`${
                  testimonial.isHighlighted 
                    ? 'text-green-300 opacity-70' 
                    : 'text-green-500 opacity-50'
                } transform rotate-180`}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
      </div>
    </section>
    </>
  )
}

export default Testimonial