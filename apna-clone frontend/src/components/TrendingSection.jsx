import React from 'react';
import TrendingCard from './TrendingCard';

const trendingData = [
  {
    id: 1,
    trendingNumber: 1,
    title: 'Jobs for Freshers',
    imageUrl: 'src/assets/logos/freshers.png',
    bgColor: '#E84118',
    textColor: 'white'
  },
  {
    id: 2,
    trendingNumber: 2,
    title: 'Work from home Jobs',
    imageUrl: 'src/assets/logos/wfh.png',
    bgColor: '#3498DB',
    textColor: 'white'
  },
  {
    id: 3,
    trendingNumber: 3,
    title: 'Part time Jobs',
    imageUrl: 'src/assets/logos/part-time-jobs.png',
    bgColor: '#9B59B6',
    textColor: 'white'
  },
  {
    id: 4,
    trendingNumber: 4,
    title: 'Jobs for Women',
    imageUrl: 'src/assets/logos/women-jobs.png',
    bgColor: '#27AE60',
    textColor: 'white'
  },
  {
    id: 5,
    trendingNumber: 5,
    title: 'Full time Jobs',
    imageUrl: 'src/assets/logos/Full-time.png',
    bgColor: '#F39C12',
    textColor: 'white'
  }
];

const TrendingSection = () => {
  const headerCards = trendingData.slice(0, 2);
  const remainingCards = trendingData.slice(2);

  return (
    <div className="py-10 px-5 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <h1 className="text-4xl font-extrabold text-[#1A1A2E] self-center lg:col-span-1">
          Popular Searches on Apna
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:col-span-2">
          {headerCards.map(card => (
            <TrendingCard
              key={card.id}
              trendingNumber={card.trendingNumber}
              title={card.title}
              imageUrl={card.imageUrl}
              bgColor={card.bgColor}
              textColor={card.textColor}
              onClick={() => console.log(`Clicked on ${card.title}`)}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {remainingCards.map(card => (
          <TrendingCard
            key={card.id}
            trendingNumber={card.trendingNumber}
            title={card.title}
            imageUrl={card.imageUrl}
            bgColor={card.bgColor}
            textColor={card.textColor}
            onClick={() => console.log(`Clicked on ${card.title}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default TrendingSection;
