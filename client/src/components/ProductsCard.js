import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/crispSlice';
import {ToastContainer,toast} from 'react-toastify'

const ProductsCard = ({product}) => {
  const dispatch = useDispatch()
    const navigate = useNavigate();
    const id = product.title
    const idString = (id) => {
      return String(id).toLowerCase().split(" ").join("");
    };
    const rootId = idString(id);
   
    const handleDetails = () => {
        const { id, title, price, description, category, image, rating } = product;
        navigate(`/product/${rootId}`, {
          state:
        { item: {
            id,
            title,
            price,
            description,
            category,
            image,
            rating: {
              rate: rating.rate,
              count: rating.count,
            },
          },}
        });
      };


       // const handleDetails = () => {
    //   navigate(`/product/${rootId}`, {
    //     state: {
    //       item:product,
    //     },
    //   });
    // };
      
        return (
      <div className='group relative'>
          <div onClick={handleDetails} className='w-full h-[390px] cursor-pointer overflow-hidden '>
              <img  className=' object-cover group-hover:scale-95 duration-500 place-content-center' 
              src={product.image}
              alt='productImage'
            />
          </div>
          <div className='w-full border-[1px] px-2 py-4 gap-0'>
            <div className='flex justify-between items-center'>
              <div>
                  <h2 className='w-auto font-titleFont text-sm font-bold'>{product.title.substring(0,15)} 
                  </h2>
              </div>
              <div className='flex gap-2 relative overflow-hidden w-28 text-sm'>
               
                <div className='flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500'>
                &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
                <p className='font-bold justify-end'>
                ${product.price}
                </p>
                
                </div>
                  <button 
                    onClick={() =>
                     dispatch(
                      addToCart({
                        id: product.id,
                        title: product.title,
                        image: product.image,
                        price: product.price,
                        quantity: 1,
                        description: product.description,
                      })
                     ) & toast.success(`${product.title} is added`)
                    }
               className='absolute z-20 w-[100px]text-gray-500 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500'>add to cart{''}
                     <span>
                        <FaArrowRight/>
                     </span>
                   </button>
                </div>
            </div>
            <div>
                <p>{product.category}</p> 
                <div className='absolute top-8 right-0'>
                    {
                        product.isNew=(
                            <p className='bg-black text-white font-semibold font-titleFont px-6 py-1'>
                                Sale
                     </p>
                    )}
                </div>
            </div>
            <ToastContainer
                  position='top-left'
                  auto-class={3000}
                  hideProgressbar={false}
                  newestOntp={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="dark"/>
        </div>
    </div>
  )
}
export default ProductsCard