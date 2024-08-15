import React from 'react';
import ProductsCard from './ProductsCard';

const Products = ({ products }) => {
  return(
    <div className='py-10 px-4 md:px-8 lg:px-16'>
      <div className='flex flex-col items-center gap-4 mb-10'>
        <h1 className='text-xl bg-black text-white py-2 w-80 text-center'>
          Take a Look
        </h1>
        <span className='w-20 h-[3px] bg-black'></span>
        <p>Just a Project 
          Do not try to buy anything if you do 
        I'll not pay You back  
        </p>
      </div>
      <div className='max-w-screen-xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8'>
        {products.map((item) => (
          <ProductsCard key={item.id} product={item}/>
        ))}
      </div>
    </div>
  );
};

export default Products;
