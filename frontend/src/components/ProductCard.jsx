import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  const categoryColors = {
    Women: 'bg-pink-50 text-pink-700',
    Men:   'bg-blue-50 text-blue-700',
    Kids:  'bg-green-50 text-green-700',
  };

  return (
    <div className="group relative bg-white border border-gray-100 rounded-xl overflow-hidden 
                    hover:-translate-y-1 transition-transform duration-200 cursor-pointer">
      
      {/* Image Area */}
      <div className="relative bg-gray-50 aspect-[3/3.6] flex items-center justify-center overflow-hidden">
        <img
          src={product.image[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {product.bestseller && (
          <span className="absolute top-2.5 left-2.5 bg-gray-900 text-amber-50 
                           text-[10px] font-medium tracking-widest uppercase px-2 py-1 rounded-sm">
            Bestseller
          </span>
        )}

        <span className={`absolute top-2.5 right-2.5 text-[10px] font-medium 
                          tracking-wide uppercase px-2 py-1 rounded-sm 
                          ${categoryColors[product.category]}`}>
          {product.category}
        </span>
      </div>

      {/* Card Body */}
      <div className="p-3.5">
        <p className="text-[10px] tracking-widest uppercase text-gray-400 mb-1">
          {product.subCategory}
        </p>

        <h3 className="font-serif text-sm text-gray-900 leading-snug mb-2.5 line-clamp-2">
          {product.name}
        </h3>

        {/* Sizes */}
        <div className="flex flex-wrap gap-1 mb-3">
          {product.sizes.map(size => (
            <span key={size}
              className="text-[10px] font-medium px-1.5 py-0.5 border border-gray-200 
                         rounded-sm text-gray-500 tracking-wide">
              {size}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <p className="text-base font-medium text-gray-900">
            <span className="text-xs text-gray-500 mr-0.5">₹</span>
            {product.price.toLocaleString('en-IN')}
          </p>

          <button
            onClick={handleAdd}
            className="bg-gray-900 text-amber-50 text-[10px] font-medium tracking-widest 
                       uppercase px-3 py-1.5 rounded-sm hover:bg-gray-700 transition-colors">
            {added ? 'Added ✓' : 'Add to bag'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;