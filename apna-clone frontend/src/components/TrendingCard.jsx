import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const TrendingCard = ({
  trendingNumber,
  title,
  imageUrl,
  bgColor = '#E84118',
  textColor = 'white',
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-xl shadow-md transition-all duration-300 cursor-pointer h-[260px] w-full bg-white border ${
        isHovered ? '' : 'border-gray-200'
      }`}
      style={{
        '--bg-color': bgColor,
        '--text-color': textColor,
        borderColor: isHovered ? bgColor : undefined
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Card Content */}
      <div className="relative p-6 z-20 h-full flex flex-col w-[60%] md:w-[70%] sm:w-[65%]">
        <div className="text-sm font-medium text-gray-600 tracking-wide mb-2">
          TRENDING AT #{trendingNumber}
        </div>

        <h2
          className={`text-2xl font-bold mb-1 transition-colors`}
          style={{ color: isHovered ? bgColor : '#111' }}
        >
          {title}
        </h2>

        {/* Middle Ghost Title */}
       {/* Middle Ghost Title */}
<div
  className="absolute left-6 text-[2.5rem] sm:text-[2rem] font-extrabold whitespace-nowrap transition-all duration-300 z-10"
  style={{
    top: '48%',
    color: '#6b7280', // Tailwind’s gray-500 equivalent
    opacity: 0.5,
    transform: `translateY(-50%) ${isHovered ? 'translateX(-12px)' : 'translateX(0)'}`,
  }}
>
  {title}
</div>

        {/* View All Button */}
        <button
          className={`flex items-center gap-1 font-semibold mt-auto rounded-md px-4 py-2 transition-all duration-300 ${
            isHovered ? 'bg-[var(--bg-color)] text-white' : 'text-black'
          }`}
        >
          View all
          <ChevronRight size={18} className={`transition-transform ${isHovered ? 'translate-x-1' : ''}`} />
        </button>
      </div>

      {/* Image Section */}
      <div className="absolute top-0 right-0 h-full w-[40%] md:w-[30%] sm:w-[35%] z-10 flex justify-end items-end">
        <img
          src={imageUrl}
          alt={title}
          className="max-h-[90%] max-w-full object-contain object-bottom"
        />
      </div>

      {/* Hover Gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 transition-all duration-300"
        style={{
          height: isHovered ? '50%' : '0',
          background: isHovered ? `linear-gradient(to top, ${bgColor} 0%, white 100%)` : 'transparent',
          opacity: isHovered ? 0.25 : 0,
        }}
      />
    </div>
  );
};

export default TrendingCard;
