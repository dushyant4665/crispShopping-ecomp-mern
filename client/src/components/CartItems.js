import { motion } from "framer-motion";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { MdOutlineClose } from 'react-icons/md';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { deleteItem, increamentQuantity, decrementQuantity } from '../redux/crispSlice';

const CartItems = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.crisp.productData);

  return (
    <div className='w-auto p-4 md:pr-10'>
  <h2 className='font-titleFont text-2xl md:text-3xl lg:text-4xl font-bold mb-4'>Shopping Cart</h2>
  <div>
    {productData.map((item) => (
      <div key={item.id} className='flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 mb-4 p-4 border border-gray-300 rounded-lg'>
        <div className='flex items-center gap-4'>
          <MdOutlineClose 
            onClick={() => dispatch(deleteItem(item.id)) && toast.error(`${item.title} removed`)} 
            className='text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300' 
          />
          <img className=' w-24 h-24 md:w-32 md:h-32 object-cover' src={item.image} alt='productImg'/>
        </div>
        <div className='flex flex-col items-start md:items-center w-full md:w-auto'>
          <h2 className='text-lg md:text-xl font-semibold mb-2'>{item.title}</h2>
          <p className='text-md md:text-lg font-medium mb-2'>${item.price}</p>
          <div className='flex items-center gap-4 border p-2 rounded-md'>
            <p className='text-sm font-medium'>Quantity</p>
            <div className='flex items-center gap-2 text-sm font-semibold'>
              <button 
                onClick={() => dispatch(decrementQuantity({ id: item.id }))}
                className='text-xl border w-8 h-8 font-normal flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black' 
              >
                -
              </button>
              <span className='text-lg'>{item.quantity}</span>
              <button 
                onClick={() => dispatch(increamentQuantity({ id: item.id }))}
                className='text-xl border w-8 h-8 font-normal flex items-center justify-center hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'
              >
                +
              </button>
            </div>
          </div>
        </div>
        <p className='text-md md:text-lg font-semibold'>${item.quantity * item.price}</p>
      </div>
    ))}
    <div className="flex justify-start mt-6 hover:text-orange-600 duration-300">
      <Link to='/'>
        <div className="flex items-center">
          <HiOutlineArrowLeft className="mr-2" />
          <p className='text-lg'>Go to Shopping</p>
        </div>
      </Link>
    </div>
  </div>
  <ToastContainer 
    position='top-left'
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme='dark'
  />
</div>

  );
};

export default CartItems;
