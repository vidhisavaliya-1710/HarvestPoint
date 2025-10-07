import React from 'react';
import product1 from '../assets/images/product1.png'
import product2 from '../assets/images/product2.png'
import product3 from '../assets/images/produuct2.png'
import product4 from '../assets/images/product3.png'
import product5 from '../assets/images/product4.png'
import product6 from '../assets/images/product5.png'
import product7 from '../assets/images/product6.png'
import product8 from '../assets/images/product7.png'

function Product() {
  const products = [
    {
      id: 1,
      name: 'Granular Potash',
      price: 'GHS 45.55',
      image: product1,
      sale: true
    },
    {
      id: 2,
      name: 'Multiphos',
      price: 'GHS 45.55',
      oldPrice: 'GHS 60.65',
      image: product2,
      sale: true
    },
    {
      id: 3,
      name: 'Muriate of Potash',
      price: 'GHS 35.22',
      image: product3,
      sale: true
    },
    {
      id: 4,
      name: 'NPK 10:26:26',
      price: 'GHS 75.11',
      image: product4,
      sale: false
    },
    {
      id: 5,
      name: 'NPK 11:22:21',
      price: 'GHS 85.44',
      image: product5,
      sale: true
    },
    {
      id: 6,
      name: 'NPK 15:15:15',
      price: 'GHS 45.55',
      image: product6,
      sale: false
    },
    {
      id: 7,
      name: 'NPK 20:10:10',
      price: 'GHS 45.00',
      image: product7,
      sale: false
    },
    {
      id: 8,
      name: 'SOA',
      price: 'GHS 45.55',
      image:product8,
      sale: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-[#009444] text-base sm:text-lg font-medium mb-2">Popular Choices</p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0d3c00]">Popular Products</h1>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="transition-shadow duration-300 overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative h-40 sm:h-48 flex items-center justify-center p-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Product Info */}
              <div className="p-3 sm:p-4 text-center">
                <h3 className="text-gray-800 font-semibold mb-2 text-sm sm:text-base">{product.name}</h3>
                <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
                  <span className="text-[#009444] font-bold text-sm sm:text-base">{product.price}</span>
                  {product.oldPrice && (
                    <span className="text-gray-400 text-xs sm:text-sm line-through">{product.oldPrice}</span>
                  )}
                </div>
                {/* Star Rating */}
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      className="w-3 h-3 sm:w-4 sm:h-4 text-[#009444]" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.834c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;