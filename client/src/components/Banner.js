import { useState } from 'react';
import React from 'react';
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    'https://amazonclone.reactbd.com/static/media/bannerImgOne.efb3d39101f7ef77d616.jpg',
    'https://amazonclone.reactbd.com/static/media/bannerImgTwo.bc1bdb910ead16c65197.jpg',
    'https://thomasandvine.com/cdn/shop/files/TV_LNCH_WatsonVentura_SiteAssets-homepage_desktop_a_26d9ef0c-0d6c-42fa-891c-f23f48068713_1920x.jpg?v=1704232960',
    'https://inego.in/cdn/shop/files/Instagram_post_-_1banner_4.png?v=1702011275&width=1800',
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className='w-full h-auto overflow-x-hidden'>
      <div className='relative w-full'>
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className='flex w-[400vw] h-full transition-transform duration-1000'
        >
          {data.map((img, index) => (
            <img
              key={index}
              className='w-screen h-full object-cover'
              src={img}
              alt={`slide ${index + 1}`}
              loading='priority'
            />
          ))}
        </div>
        <div className='absolute bottom-1/2 w-full flex justify-between px-4 md:px-20'>
          <button
            onClick={prevSlide}
            className='text-3xl md:text-5xl p-2 bg-white border border-gray-700 flex items-center justify-center cursor-pointer hover:bg-gray-900 hover:text-white transition duration-300'
          >
            <GoArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className='text-3xl md:text-5xl p-2 bg-white border border-gray-700 flex items-center justify-center cursor-pointer hover:bg-gray-900 hover:text-white transition duration-300'
          >
            <GoArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
