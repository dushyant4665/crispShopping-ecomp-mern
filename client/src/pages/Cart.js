'use client';
import { ReactNotifications } from 'react-notifications-component'
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from '../redux/crispSlice';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import {  artAtCart01, emptyCart } from '../../public/assets/index';
import CartItems from '../components/CartItems';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

const Cart = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.crisp.productData);
  const userInfo = useSelector((state) => state.crisp.userInfo);

  const proceedToCheckOut= ()=>{
    Store.addNotification({
      title: "Proceeding to Checkout",
      message: "You are being redirected to the payment gateway.",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"], 
      // container: 'top-right',
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true
      }
    });
  }

  const [totalAmt, setTotalAmt] = useState(0);
  const [payNow, setPayNow] = useState(null);

  useEffect(() => {
    let price = 0;
    productData.forEach((item) => {
      price += item.price * item.quantity;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);

  const handleCheckOut = () => {
    if (userInfo) {
      setPayNow(true);
      proceedToCheckOut();
      
      const payment = async (token) => {
        try {
            const response = await axios.post(`localhost:8001/pay`, {
                amount: totalAmt * 100,
                token: token,
            });
          console.log('Payment response:', response.data);
        } catch (error) {
          console.error('Error making payment:', error);
        }
      };
  
      console.log(payment);
    } else {
      toast.error('Please sign in to Checkout');
    }
  };

  return (
    <div className='flex items-center gap-2'>
      <div>
        <img
          className='w-[2000px] h-auto object-cover pb-8 lg:w-full lg:h-[400px]'
          // src={artAtCart01}
          src='/assets/artAtCart01.png'
          height={500}
          alt='cart'
        />

        {productData.length > 0 ? (
          <div className='gap-8'>
            <div className="pb-16">
              <div className="lg:flex flex-row">
                {/* Cart Items */}
                <div className="flex-1 w-full lg:w-auto">
                  <CartItems />
                </div>
                {/* Summary Section */}
                <div className="w-full lg:w-1/3 bg-[#fafafa] py-6 px-4">
                  <div className="flex flex-col gap-4 border-b-[1px] border-b-gray-400 pb-4">
                    <h2 className="text-2xl font-medium">Total product</h2>
                    <p className="flex items-center gap-2 text-base">
                      Subtotal: <span className="font-titleFont font-bold text-lg">{totalAmt}</span>
                    </p>
                    <p className="font-titleFont font-semibold flex justify-between mt-4">
                      Total <span className="text-xl font-bold">{totalAmt}</span>
                    </p>
                    <button
                      type="submit"
                      // onClick={proceedToCheckOut}
                      onClick={handleCheckOut}
                      className="text-base bg-black text-white w-full py-3 mt-4 hover:bg-gray-800 duration-300"
                    >
                      Proceed to checkout
                    </button>
                    {/* Payment Section */}
                    {payNow && (
                      <div className="w-full mt-4 flex items-center justify-center">
                        <StripeCheckout
                          stripeKey="pk_test_51PjnSYC9ZNLV42Mr66ipvV27uX3luDBXVpsjcoNqlMaRr3HaSkK3Ei3xhKWPZAIqpGDXSBLCOKizLICmspYIVTFd00KZemZ6Tl"
                          name="crisp shopping app"
                          amount={totalAmt * 100}
                          label="Pay to Crisp"
                          description={`Your payment amount is ${totalAmt}`}
                          email={userInfo.email}
                          onClick={proceedToCheckOut}
                        />
                      </div>
                    )}
                  </div>
                  {/* Reset Cart Button */}
                  <button
                    onClick={() => dispatch(resetCart())}
                    className="sm:w-16 mt-4 py-2 px-4 bg-red-500 text-white font-semibold uppercase hover:bg-red-700 duration-300 w-full lg:w-auto"
                  >
                    Reset cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col justify-center items-center gap-4 pb-16"
          >
            <div>
              <img
                className="w-60 sm:w-80 rounded-lg p-4 mx-auto"
                // src={emptyCart}
                src='/assets/emptyCart.png'
                alt="emptyCart"
              />
            </div>
            <div className="max-w-[500px] p-4 py-8 bg-white flex flex-col gap-4 items-center rounded-md shadow-lg text-center">
              <h1 className="font-titleFont text-xl font-bold uppercase">
                Your Cart feels lonely.
              </h1>
              <p className="text-sm px-10 -mt-2">
                Your Shopping cart lives to serve. Give it purpose - fill it with books, electronics, videos, etc. and make it happy.
              </p>
              <Link to="/">
                <button className="bg-black rounded-md cursor-pointer hover:bg-gray-700 active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </motion.div>
        )}

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
      <ReactNotifications 
      />
    </div>
  );
};

export default Cart;
