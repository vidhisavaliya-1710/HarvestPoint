import React from 'react';
import { FaRegCalendarCheck, FaRegComments, FaUser, FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import blog from '../assets/images/blog.png';
// Import your images - replace with actual imports
// import blogBanner from '../assets/images/blog-banner.jpg';
// import blogDetailImage from '../assets/images/blog-detail.jpg';
// import authorImage from '../assets/images/author.jpg';

const SingleBlog = () => {
  // Sample related articles data
  const relatedArticles = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400",
      category: "Articles",
      title: "Modern Farming Techniques for Better Yield",
      date: "20 Sep 2023",
      comments: "5 Comments"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400",
      category: "Articles",
      title: "Organic Farming: The Future of Agriculture",
      date: "18 Sep 2023",
      comments: "3 Comments"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=400",
      category: "Articles",
      title: "Sustainable Agriculture Practices",
      date: "15 Sep 2023",
      comments: "7 Comments"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-8  px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-[#009444] font-normal text-sm sm:text-md md:text-lg mb-3 sm:mb-4">
              Latest News & Blog
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#1E1E1E] leading-tight">
              Blog Details
            </h2>
          </div>

        

          {/* Meta Information & Title */}
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-sm font-normal text-[#009444] border-l-2 border-[#009444]">
                Articles
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#1E1E1E] mb-6 leading-tight">
              Connecting with Farmers to Improve Livelihoods
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[#6D6D6D] text-sm sm:text-base mb-8">
              <div className="flex items-center space-x-2">
                <FaUser size={16} className="text-[#009444]" />
                <span>By Admin</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaRegCalendarCheck size={16} className="text-[#009444]" />
                <span>23 Sep 2023</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaRegComments size={16} className="text-[#009444]" />
                <span>No Comments</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="">
          
          {/* Main Article Content */}
          <div className="lg:col-span-2">
            {/* Featured Image */}
            <div className="mb-8 rounded-lg overflow-hidden flex justify-center">
              <img
                src={blog}
                alt="Blog detail"
                className="w-[800px] h-[500px] object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose max-w-none">
              <p className="text-[#6D6D6D] text-base md:text-lg leading-relaxed mb-6">
                Agriculture is the backbone of many economies, providing livelihoods for millions of farmers worldwide. 
                However, farmers often face numerous challenges including limited market access, lack of resources, and 
                unpredictable weather patterns. Our mission is to bridge the gap between farmers and consumers while 
                empowering agricultural communities.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-[#0D3C00] mt-8 mb-4">
                Understanding Farmer Challenges
              </h2>

              <p className="text-[#6D6D6D] text-base md:text-lg leading-relaxed mb-6">
                Today's farmers navigate a complex landscape of challenges. From climate change impacts to market 
                volatility, the agricultural sector requires innovative solutions and strong support systems. By 
                connecting directly with farmers, we can better understand their needs and create sustainable solutions 
                that benefit both producers and consumers.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-[#0D3C00] mt-8 mb-4">
                Building Sustainable Partnerships
              </h2>

              <p className="text-[#6D6D6D] text-base md:text-lg leading-relaxed mb-6">
                Our approach focuses on creating long-term partnerships with farming communities. We provide fair 
                pricing, reliable market access, and technical support to help farmers improve their yields and income. 
                This collaborative model ensures that farmers receive the support they need while consumers get access 
                to fresh, quality produce.
              </p>

              {/* Quote Block */}
              <blockquote className="border-l-4 border-[#009444] pl-6 my-8 italic text-[#0D3C00] text-lg md:text-xl">
                "When we invest in farmers, we invest in the future of food security and sustainable agriculture 
                for generations to come."
              </blockquote>

              <h2 className="text-2xl md:text-3xl font-bold text-[#0D3C00] mt-8 mb-4">
                The Impact of Direct Connection
              </h2>

              <p className="text-[#6D6D6D] text-base md:text-lg leading-relaxed mb-6">
                By eliminating middlemen and creating direct connections, we ensure that farmers receive fair 
                compensation for their hard work. This not only improves their livelihoods but also strengthens 
                rural economies and promotes sustainable farming practices. The result is a win-win situation where 
                farmers thrive and consumers enjoy fresh, traceable produce.
              </p>

              <ul className="list-disc list-inside text-[#6D6D6D] text-base md:text-lg leading-relaxed mb-6 space-y-2">
                <li>Fair and transparent pricing for farmers</li>
                <li>Direct market access without intermediaries</li>
                <li>Technical training and support programs</li>
                <li>Quality assurance and certification assistance</li>
                <li>Community building and knowledge sharing</li>
              </ul>

              <p className="text-[#6D6D6D] text-base md:text-lg leading-relaxed mb-6">
                As we continue to grow, our commitment remains steadfast: to support farmers, promote sustainable 
                agriculture, and deliver the freshest produce to families across the region. Together, we're building 
                a more resilient and equitable food system.
              </p>
            </div>

            {/* Tags and Share */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[#0D3C00] font-semibold mr-2">Tags:</span>
                  <span className="px-3 py-1 bg-[#f4f5f0] text-[#009444] text-sm rounded-full hover:bg-[#009444] hover:text-white transition-colors cursor-pointer">
                    Agriculture
                  </span>
                  <span className="px-3 py-1 bg-[#f4f5f0] text-[#009444] text-sm rounded-full hover:bg-[#009444] hover:text-white transition-colors cursor-pointer">
                    Farmers
                  </span>
                  <span className="px-3 py-1 bg-[#f4f5f0] text-[#009444] text-sm rounded-full hover:bg-[#009444] hover:text-white transition-colors cursor-pointer">
                    Sustainability
                  </span>
                </div>

                {/* Share Buttons */}
                <div className="flex items-center gap-3">
                  <span className="text-[#0D3C00] font-semibold mr-2">Share:</span>
                  <button className="w-10 h-10 flex items-center justify-center bg-[#f4f5f0] text-[#009444] rounded-full hover:bg-[#009444] hover:text-white transition-colors">
                    <FaFacebookF size={16} />
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center bg-[#f4f5f0] text-[#009444] rounded-full hover:bg-[#009444] hover:text-white transition-colors">
                    <FaTwitter size={16} />
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center bg-[#f4f5f0] text-[#009444] rounded-full hover:bg-[#009444] hover:text-white transition-colors">
                    <FaLinkedinIn size={16} />
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center bg-[#f4f5f0] text-[#009444] rounded-full hover:bg-[#009444] hover:text-white transition-colors">
                    <FaWhatsapp size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Author Box */}
            <div className="mt-10 bg-[#f4f5f0] p-6 md:p-8 rounded-lg">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
                    alt="Author"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0D3C00] mb-2">About the Author</h3>
                  <p className="text-[#009444] font-medium mb-3">John Doe - Agricultural Specialist</p>
                  <p className="text-[#6D6D6D] leading-relaxed">
                    John has over 15 years of experience working with farming communities across the region. 
                    His passion for sustainable agriculture and farmer empowerment drives his work in connecting 
                    producers with markets and consumers.
                  </p>
                </div>
              </div>
            </div>
          </div>

         
        </div>
      </div>

    </div>
  );
};

export default SingleBlog;