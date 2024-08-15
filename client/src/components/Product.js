// import React, { useEffect, useState} from 'react';
// import { useLocation } from 'react-router-dom';
// import {MdOutlineStar} from 'react-icons/md'
// import { toast } from 'react-toastify';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../redux/crispSlice';
//  import {ToastContainer} from 'react-toastify'
// import CartItems from './CartItems';

// const Product = () => {
//   const [details, setDetails] = useState({});
//   const location = useLocation();

//   useEffect(() => {
//     if (location.state && location.state.item) {
//       setDetails(location.state.item);
//       console.log(location.state.item);
//     }
//   }, [location]);

// const Product = () => {
//   const dispatch =useDispatch()
//   const [baseQuantity,setBaseQuantity]=useState(1)
//   var [details,setDetails]=useState({});
//   const location = useLocation();
//      useEffect(()=>{
//       setDetails(location.state.item)
//       console.log(location.state.item)
//      },[location]
//      )

//      const items = [


//   ];
//      return(
    
//     <div>
//         {items.map(item => (
//         <CartItems key={item.id} item={item} />
//     ))}
//       <div className='max-w-screen-xl mx-auto my-10 flex gap-10'>
//         <div className='w-2/5 relative'>
//           <img
//               className='w-full h-[500px] object-cover'
//               src= {details.image}
//               alt='productImg'
//               />
//                 </div>
                
//               <div className='w-3/5 flex flex-col justify-center gap-12'>
//               <div>
//               <h2 className=' text-2xl font-semibold'>{details.title}</h2>
//               <div className='flex item-center gap-4 mt-3'>
//                 <p className='text-2xl font-medium text-gray-900'>
//                     ${details.price}
//                 </p>
//                 </div>
//             <div className='flex items-center gap-2 text-base'>
//                <div className='flex'>
//                  <MdOutlineStar />
//                  <MdOutlineStar />
//                  <MdOutlineStar />
//                  <MdOutlineStar />
//                  <MdOutlineStar />
//                </div>
//                <p className='text-xs text-gray-500'> (customers  review)</p>
//             </div>
//             <p className=' text-gray-500 pt-10 pb-5'>{details.description}</p>
//             <div className='flex gap-10'>
//             <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
//                <p className='text-sm'>Quantity</p> 
//              <div className='flex items-center gap-4 text-sm font-semibold'>
//                <button onClick={()=>setBaseQuantity(baseQuantity-1
//                 // baseQuantity===1? (baseQuantity=1): baseQuantity -1
//                )} className='text-xl border w-6 h-6 font-normal flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black' >-</button>
//                <span>{baseQuantity}</span>
//                <button 
//                onClick={()=>
//                setBaseQuantity(
//                 baseQuantity+1
//                 // baseQuantity===1? (baseQuantity=1): baseQuantity +1
//               )}  
//                className='text-xl border w-6 h-6 font-normal flex items-center justify-center hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>+</button>
//              </div>
//               </div>
//               <button  
//                       onClick={() =>
//                       dispatch(
//                       addToCart({
//                         id: details.id,
//                         title: details.title,
//                         image: details.image,
//                         price: details.price,
//                         quantity: baseQuantity,
//                         description: details.description,
//                       })
//                      ) & toast.success(`${details.title} is added`)
//                     } className='w-40 h-12 text-md text-white bg-black cursor-pointer '>add to cart
//               </button>
//               <button  
//                       onClick={() =>
//                       dispatch(
//                       addToCart({
//                         id: details.id,
//                         title: details.title,
//                         image: details.image,
//                         price: details.price,
//                         quantity: baseQuantity,
//                         description: details.description,
//                       })
//                      ) & toast.success(`${details.title} is added`)
//                     } className='w-40 h-12 text-md text-white bg-black cursor-pointer '>add to cart
//               </button>
//             </div>
//             <p className='text-base text-gray-500 pt-5'>
//               Category : <span className='font-medium capitalize'> {details.category}</span>
//             </p>
//          </div> 
//         </div>
//             <ToastContainer
//                   position='top-left'
//                   auto-class={3000}
//                   hideProgressbar={false}
//                   newestOntp={false}
//                   closeOnClick
//                   rtl={false}
//                   pauseOnFocusLoss
//                   draggable
//                   pauseOnHover
//                   theme="dark"/> 
//       </div>
//      </div>
//      )}
// export default Product


import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MdOutlineStar } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/crispSlice';
import CartItems from './CartItems';

const Product = () => {
  const dispatch = useDispatch();
  const [baseQuantity, setBaseQuantity] = useState(1);
  const [details, setDetails] = useState({});
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.item) {
      setDetails(location.state.item);
    }
  }, [location]);

  const items = []; // Add items here

  return (
    <div className='container mx-auto px-4 py-10'>
      {items.length > 0 && (
        <div className='flex flex-wrap gap-8'>
          {items.map(item => (
            <CartItems key={item.id} item={item} />
          ))}
        </div>
      )}
  <div className='flex flex-col lg:flex-row gap-10'>
  <div className='flex-1'>
    <img
      className='w-full h-[300px] md:h-[500px] object-cover'
      src={details.image}
      alt='productImg'
    />
  </div>
  <div className='flex-1 flex flex-col justify-center gap-8'>
    <h2 className='text-2xl md:text-3xl font-semibold'>{details.title}</h2>
    <div className='flex items-center gap-4 mt-3'>
      <p className='text-xl md:text-2xl font-medium text-gray-900'>
        ${details.price}
      </p>
    </div>
    <div className='flex items-center gap-2 text-base'>
      <div className='flex'>
        {[...Array(5)].map((_, i) => (
          <MdOutlineStar key={i} />
        ))}
      </div>
      <p className='text-xs text-gray-500'>(customer reviews)</p>
    </div>
    <p className='text-gray-500 pt-5'>{details.description}</p>
    <div className='flex flex-col md:flex-row gap-8'>
      <div className='w-full md:w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
        <p className='text-sm'>Quantity</p>
        <div className='flex items-center gap-4 text-sm font-semibold'>
          <button
            onClick={() => setBaseQuantity(Math.max(baseQuantity - 1, 1))}
            className='text-xl border w-8 h-8 flex items-center justify-center hover:bg-gray-700 hover:text-white cursor-pointer duration-300'
          >
            -
          </button>
          <span>{baseQuantity}</span>
          <button
            onClick={() => setBaseQuantity(baseQuantity + 1)}
            className='text-xl border w-8 h-8 flex items-center justify-center hover:bg-gray-700 hover:text-white cursor-pointer duration-300'
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={() => {
          dispatch(
            addToCart({
              id: details.id,
              title: details.title,
              image: details.image,
              price: details.price,
              quantity: baseQuantity,
              description: details.description,
            })
          );
          toast.success(`${details.title} is added to cart`);
        }}
        className='w-full md:w-40 h-12 text-md text-white bg-black cursor-pointer'
      >
        Add to Cart
      </button>
    </div>
    <p className='text-base text-gray-500 pt-5'>
      Category: <span className='font-medium capitalize'>{details.category}</span>
    </p>
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

export default Product;
