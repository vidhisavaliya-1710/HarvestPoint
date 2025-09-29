import React from 'react';
import { Briefcase, Users, TrendingUp, Heart, Award, Target } from 'lucide-react';

function Career() {
  const positions = [
    {
      id: 1,
      title: "Quality & Production Managers",
      icon: Target,
      description: "Lead our quality assurance and production operations to ensure excellence in every harvest."
    },
    {
      id: 2,
      title: "Sales & Marketing Team",
      icon: TrendingUp,
      description: "Drive growth and connect farmers with markets through innovative marketing strategies."
    },
    {
      id: 3,
      title: "Logistics & Operations Staff",
      icon: Briefcase,
      description: "Manage supply chain operations and ensure seamless delivery from farm to customer."
    },
    {
      id: 4,
      title: "Interns (Farming & Business)",
      icon: Award,
      description: "Learn and grow with hands-on experience in agriculture technology and business operations."
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Friendly & Supportive Team",
      description: "Work with passionate coworkers who support your growth"
    },
    {
      icon: Heart,
      title: "Meaningful Impact",
      description: "Help farmers and families thrive with your contributions"
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Continuous learning and skill development programs"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
     <section className="bg-gradient-to-br from-green-50 to-white py-16 px-4">
  <div className="max-w-6xl mx-auto text-center">
    {/* Small title with left accent bar */}
    <div className="flex items-center justify-center mb-4">
      <div className="w-1 h-8 bg-green-500 mr-4"></div>
      <span className="text-green-600 font-medium text-lg">Join Our Team</span>
    </div>

    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
      Careers at HarvestPoint
    </h1>
    
    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
      Want to be part of a team that's changing the world, one harvest at a time? 
      Grow your career with us.
    </p>
  </div>
</section>


      {/* Open Positions Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <div className="w-1 h-8 bg-green-500 mr-4"></div>
              <span className="text-green-600 font-medium text-lg">Open Positions</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              We're Hiring
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {positions.map((position) => {
              const Icon = position.icon;
              return (
                <div
                  key={position.id}
                  className="group bg-white border-2 border-gray-200 p-8 rounded-tl-3xl rounded-br-3xl hover:border-green-500 hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start mb-4">
                    <div className="bg-green-100 p-3 rounded-lg group-hover:bg-green-600 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                    {position.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {position.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Work Here Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <div className="w-1 h-8 bg-green-500 mr-4"></div>
              <span className="text-green-600 font-medium text-lg">Benefits</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Why Work Here
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-tl-3xl rounded-br-3xl hover:bg-green-600 group transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer"
                >
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-white transition-colors duration-300">
                    <Icon className="w-8 h-8 text-green-600 group-hover:text-green-600 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-green-50 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}

    </div>
  );
}

export default Career;