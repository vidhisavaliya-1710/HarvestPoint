import React from 'react';
import { Calendar, MessageCircle } from 'lucide-react';
import blog from '../assets/images/blog.png';
import blog1 from '../assets/images/blog1.png';
import blog2 from '../assets/images/blog3.png';
import { FaRegCalendarCheck, FaRegComments } from 'react-icons/fa';

const Blog = () => {
  const articles = [
    {
      id: 1,
      image: blog,
      category: "Articles",
      title: "Connecting with farmers to improve Livelihoods",
      date: "23 Sep 2023",
      comments: "No Comments"
    },
    {
      id: 2,
      image: blog1,
      category: "Articles", 
      title: "The Changing Effects of the Environment on Agriculture",
      date: "23 Sep 2023",
      comments: "No Comments"
    },
    {
      id: 3,
      image: blog2,
      category: "Articles",
      title: "Agriculture, Trade & Regulatory Standards in Ghana",
      date: "23 Sep 2023", 
      comments: "No Comments"
    }
  ];

  return (
    <section className="bg-[#f4f5f0] py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <p className="text-[#009444] font-normal text-sm sm:text-md md:text-lg mb-3 sm:mb-4">
            Latest News & Blog
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#1E1E1E] leading-tight">
            Popular Articles And Tips
          </h2>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((article) => (
            <article 
              key={article.id}
              className="overflow-hidden  transition-all duration-300 ease-in-out"
            >
              
              {/* Article Image */}
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 sm:h-52 md:h-56 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Article Content */}
              <div className="p-4 sm:p-5 md:p-6">
                
                {/* Category */}
                <div className="mb-3 sm:mb-4">
                  <span className="inline-block px-2 sm:px-3 py-1 text-xs sm:text-sm font-normal text-[#009444] border-l-2 border-[#009444]">
                    {article.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl md:text-[21px] font-medium text-[#0D3C00] mb-3 sm:mb-4 leading-tight hover:text-green-600 transition-colors duration-300 cursor-pointer line-clamp-2">
                  {article.title}
                </h3>

                {/* Meta Information */}
                <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between text-xs sm:text-sm text-[#6D6D6D] gap-2 xs:gap-9">
  {/* Date */}
  <div className="flex items-center space-x-1 sm:space-x-2">
    <FaRegCalendarCheck size={14} className="text-[#009444] flex-shrink-0" />
    <span className="whitespace-nowrap">{article.date}</span>
  </div>

  {/* Comments */}
  <div className="flex items-center space-x-1 sm:space-x-2">
    <FaRegComments size={16} className="text-[#009444] flex-shrink-0" />
    <span className="whitespace-nowrap">{article.comments}</span>
  </div>
</div>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;