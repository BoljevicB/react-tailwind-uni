import './lamps.css';
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function Lamps() {
    const slides = [
        {
          url: 'https://images.unsplash.com/photo-1570974802254-4b0ad1a755f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1582972136809-90a0524ec8d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1599135122388-171a7c50b55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        },
    
        {
          url: 'https://images.unsplash.com/photo-1504194008492-c55ffe34e18d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1592195986398-5484c0890b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    
      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };

    return (
        <>
        <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className='max-w-[1240px] h-[780px] w-full m-auto py-10 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
     
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
    
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
      <div className="mb-16 md:mb-0 md:max-w-xl sm:mx-auto md:text-center py-8">
        <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
        Lorem ipsum dolor sit amet{' '}
          <span className="inline-block text-[#1A5DAD]">
          consectetur adipiscing
          </span>
        </h2>
        <p className="mb-5 text-base text-gray-700 md:text-lg">
        There are many variations of passages of Lorem Ipsum available
        </p>
        
      </div>
    </div>
        <div className="container_bot">
            <div className="prod_lamp">PRODUCTS</div>
                <div className="lamp_cards">
                    <div className="lamp1">
                        <div className="lamp_img"><img className='h-72 w-72' src="/imgspub/lamp1.png" alt="lamp"/></div>
                        <div className="lamp_name">lamp (VHV 321)</div>
                        <div className="lamp_descr">Lorem ipsum dolor sit amet.</div>
                        <div className="lamp_price">78$</div>
                        <div className="addtochart"><a href="/categories/contact/contacts.html"><button className='bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center'>Order Now</button></a></div>
                        </div>
                        
                        <div className="lamp2">
                            <div className="lamp_img"><img className='h-72 w-72' src="/imgspub/lamp2.png" alt="lamp"/></div>
                            <div className="lamp_name">lamp (VHV 321)</div>
                            <div className="lamp_descr">Lorem ipsum dolor sit amet.</div>
                            <div className="lamp_price">59$</div>
                            <div className="addtochart"><button className='bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center'>Order Now</button></div>
                        </div>
                           
                            <div className="lamp3">
                                <div className="lamp_img"><img className='h-72 w-72' src="/imgspub/lamp3.png" alt="lamp"/></div>
                                <div className="lamp_name">lamp (VHV 321)</div>
                                <div className="lamp_descr">Lorem ipsum dolor sit amet.</div>
                                <div className="lamp_price">91$</div>
                                <div className="addtochart"><button className='bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center'>Order Now</button></div>
                            </div>

                            <div className="lamp4">
                                <div className="lamp_img"><img className='h-72 w-72' src="/imgspub/lamp4.png" alt="lamp"/></div>
                                <div className="lamp_name">lamp (VHV 321)</div>
                                <div className="lamp_descr">Lorem ipsum dolor sit amet.</div>
                                <div className="lamp_price">60$</div>
                                <div className="addtochart"><button className='bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center'>Order Now</button></div>
                            </div>

                            <div className="lamp5">
                                <div className="lamp_img"><img className='h-72 w-72' src="/imgspub/lamp5.png" alt="lamp"/></div>
                                <div className="lamp_name">lamp (VHV 321)</div>
                                <div className="lamp_descr">Lorem ipsum dolor sit amet.</div>
                                <div className="lamp_price">78$</div>
                                <div className="addtochart"><button className='bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center'>Order Now</button></div>
                            </div>

                            <div className="lamp6">
                                <div className="lamp_img"><img className='h-72 w-72' src="/imgspub/lamp6.png" alt="lamp"/></div>
                                <div className="lamp_name">Nice lamp (VHV 321)</div>
                                <div className="lamp_descr">Lorem ipsum dolor sit amet.</div>
                                <div className="lamp_price">199$</div>
                                <div className="addtochart"><button className='bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center'>Order Now</button></div>
                            </div>

                            <div className="lamp7">
                                <div className="lamp_img"><img className='h-72 w-72' src="/imgspub/lamp7.png" alt="lamp"/></div>
                                <div className="lamp_name">lamp (VHV 321)</div>
                                <div className="lamp_descr">Lorem ipsum dolor sit amet.</div>
                                <div className="lamp_price">53$</div>
                                <div className="addtochart"><button className='bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center'>Order Now</button></div>
                            </div>

                            <div className="lamp8">
                                <div className="lamp_img"><img className='h-72 w-72' src="/imgspub/lamp8.png" alt="lamp"/></div>
                                <div className="lamp_name">lamp (VHV 321)</div>
                                <div className="lamp_descr">Lorem ipsum dolor sit amet.</div>
                                <div className="lamp_price">82$</div>
                                <div className="addtochart"><button className='bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center'>Order Now</button></div>
                            </div>

                            <div className="lamp9">
                                <div className="lamp_img"><img className='h-72 w-72' src="/imgspub/lamp9.png" alt="lamp"/></div>
                                <div className="lamp_name">lamp (VHV 321)</div>
                                <div className="lamp_descr">Lorem ipsum dolor sit amet.</div>
                                <div className="lamp_price">23$</div>
                                <div className="addtochart"><button className='bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center'>Order Now</button></div>
                            </div>
                        </div>
                    </div>
    </>
    );
} 

export default Lamps;