import React, { useState, useEffect } from 'react';
// import { logoDark, cart } from '../public/assets/index';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdClose } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { motion } from "framer-motion";


const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const productData = useSelector((state) => state.crisp.productData);
  const userInfo = useSelector((state) => state.crisp.userInfo);

  useEffect(() => {
    const ResponsiveMenu = () => {
      if (window.innerWidth < 667) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };
    ResponsiveMenu();
    window.addEventListener("resize", ResponsiveMenu);
  }, []);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className='flex w-full h-20 bg-white font-titleFont border-b-[1px] border-b-gray-800 pl-4 pr-4 md:pl-20 md:pr-20 sticky top-0 z-50'>
      <div className='max-w-screen-xl w-full h-full mx-auto flex items-center justify-between'>
        <div>
          <img className='w-36' 
          // src={logoDark}
          src='assets/logoDark.png'
           alt='logo' />
        </div>

        <div className='flex items-center gap-4 md:gap-8'>
          {showMenu && (
            <motion.ul
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className='hidden md:flex items-center gap-8'
            >
              <Link to='/'>
                <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
                  Home
                </li>
              </Link>
              <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
                Pages
              </li>
              <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
                Shop
              </li>
              <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
                Element
              </li>
              <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
                Blog
              </li>
            </motion.ul>
          )}

          <HiMenuAlt2
            onClick={toggleMobileMenu}
            className="md:hidden cursor-pointer w-8 h-6"
          />

          {showMobileMenu && (
            <div className="fixed top-0 left-0 w-full h-screen bg-black text-gray-200 bg-opacity-80 z-50">
              <motion.div
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-[80%] h-full bg-white p-6"
              >
                <MdClose
                  onClick={toggleMobileMenu}
                  className="cursor-pointer w-8 h-8 text-black absolute top-6 right-6"
                />
                <ul className="text-black flex flex-col gap-4 mt-10">
                  <Link to='/'>
                    <li
                      onClick={toggleMobileMenu}
                      className='text-base font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'
                    >
                      Home
                    </li>
                  </Link>
                  <li
                    onClick={toggleMobileMenu}
                    className='text-base font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'
                  >
                    Pages
                  </li>
                  <li
                    onClick={toggleMobileMenu}
                    className='text-base font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'
                  >
                    Shop
                  </li>
                  <li
                    onClick={toggleMobileMenu}
                    className='text-base font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'
                  >
                    Element
                  </li>
                  <li
                    onClick={toggleMobileMenu}
                    className='text-base font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'
                  >
                    Blog
                  </li>
                </ul>
              </motion.div>
            </div>
          )}

          <Link to='/cart'>
            <div className='relative'>
              <img className='w-6'
              // src={cart} 
              src='/assets/cart.png'
              alt='cart' />
              <span className='absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold'>
                {productData.length}
              </span>
            </div>
          </Link>

          <Link to='/login'>
            <img className='w-8 h-8 rounded-full' src={userInfo ? userInfo.image : 'https://th.bing.com/th/id/R.fcecc3d00a96586827936b2f8f1f50ac?rik=K638ymGAiMeDnw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-_FOdSivHbN8%2fVkVpjalJSkI%2fAAAAAAAAJVY%2fMeyTOgjzbFA%2fs1600%2fRG_02A.jpg&ehk=mwoty5KvexLblrWX1Nq79Yrm4JtOrvQNJqJreeH1ET0%3d&risl=&pid=ImgRaw&r=0'} alt='user profile' />
          </Link>

          {userInfo && (
            <p className='hidden md:block w-auto rounded-full'>{userInfo.name}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
