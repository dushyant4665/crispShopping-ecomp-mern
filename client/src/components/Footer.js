import React, { useState } from 'react';
import { FaGithub, FaFacebook, FaTwitter, FaInstagram, FaHome } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Footer = () => {
    const [email, setEmail] = useState('');

    const isValidEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Improved regex for email validation
        return re.test(email);
    };

    const handleSubscribe = async () => {
       
            
    console.log('MONGODB_URI:', process.env.MONGODB_URI);

        if (!isValidEmail(email)) {
            toast.error('Invalid email address');
            return;
        }
    
        try {
            const response = await fetch('/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            })
            
    
            if (!response.ok) {  
                throw new Error('Failed to subscribe');
            }
    
            toast.success('Thanks for subscribing!');
            setEmail('');
        } catch (error) {
            console.error('Error during subscription:', error);
            toast.error('An error occurred during subscription');
        }
    };
    

    return (
        <div>
            <div className='bg-black text-[#949494] py-10 font-titleFont lg:w-full sm:w-full'>
                <div className='max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-8 px-4'>
                    <div className='flex flex-col gap-4'>
                        <img className='w-40' src='/assets/logoLight.jpg' alt='logoLight' />
                        <h4 className='text-lg font-bold text-white'>Here is the CEO</h4>
                        <a className='hover:text-white duration-300' href='mailto:dushyantkhandelwal4665@gmail.com'>
                            dushyantkhandelwal4665@gmail.com
                        </a>
                        <div className='flex gap-4 mt-4'>
                            <FaGithub className='text-xl hover:text-white duration-300 cursor-pointer' />
                            <FaFacebook className='text-xl hover:text-white duration-300 cursor-pointer' />
                            <FaTwitter className='text-xl hover:text-white duration-300 cursor-pointer' />
                            <FaInstagram className='text-xl hover:text-white duration-300 cursor-pointer' />
                            <FaHome className='text-xl hover:text-white duration-300 cursor-pointer' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-2xl font-semibold text-white mb-4'>Locate</h2>
                        <p>NIMS UNIVERSITY JAIPUR</p>
                        <p>dushyantkhandelwal4665@gmail.com</p>
                        <p>I am a Computer Science student. Please put your email if you like that.</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-2xl font-semibold text-white mb-4'>Subscribe</h2>
                        <div className='flex flex-col'>
                            <input
                                className='bg-transparent border px-4 py-2 text-sm mb-2'
                                type='email'
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button
                                className='text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black'
                                onClick={handleSubscribe}
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-2xl font-semibold text-white mb-4'>Payments</h2>
                        <img className='w-40' src='/assets/paymentLogo.png' alt='paymentLogo' />
                        <p>Do not purchase, just a Demo project</p>
                    </div>
                </div>
            </div>

            <div className='footer bg-gray-800 py-2'>
                <p className='footer-text text-white flex text-sm justify-end font-medium text-center pr-10'>
                    Technologies Used: <span className='text-yellow-400'>React.Js, Tailwindcss, Firebase Auth, React Router Dom, React Redux, Framer Motion, Express.Js, MongoDB, Stripe</span>
                </p>
            </div>
        </div>
    );
};

export default Footer;
