import './desks.css';
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function Desks() {
    const slides = [
        {
          url: 'https://images.unsplash.com/photo-1596022326953-84f20bfebb77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1102&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1587823172314-0dc50d65a707?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1154&q=80',
        },
    
        {
          url: 'https://images.unsplash.com/photo-1650346910623-3a0d9ee1f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1624304314520-8acb626f91f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
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
            <div className="prod_desk">PRODUCTS</div>
                <div className="desk_cards">
                    <div className="desk1">
                        <div className="desk_img"><img className='w-72 h-60' src="/imgspub/desk1.png" alt="desk" /></div>
                        <div className="desk_name">Nice desks (VHV 321)</div>
                        <div className="desk_descr">Lorem ipsum dolor sit amet.</div>
                        <div className="desk_price">99$</div>
                        <div className="addtochart"><a href="/categories/contact/contacts.html"><button className='bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center'>Order Now</button></a></div>
                        </div>
                        
                        <div className="desk2">
                            <div className="desk_img"><img className='w-72 h-60' src="/imgspub/desk2.png" alt="desk" /></div>
                            <div className="desk_name">Nice desk (VHV 321)</div>
                            <div className="desk_descr">Lorem ipsum dolor sit amet.</div>
                            <div className="desk_price">129$</div>
                            <div className="addtochart"><button className='bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center'>Order Now</button></div>
                        </div>
                           
                            <div className="desk3">
                                <div className="desk_img"><img className='w-72 h-60' src="/imgspub/desk3.png" alt="desk" /></div>
                                <div className="desk_name">Nice desk (VHV 321)</div>
                                <div className="desk_descr">Lorem ipsum dolor sit amet.</div>
                                <div className="desk_price">109$</div>
                                <div className="addtochart"><button className='bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center'>Order Now</button></div>
                            </div>

                            <div className="desk4">
                                <div className="desk_img"><img className='w-72 h-60' src="/imgspub/desk4.png" alt="desk" /></div>
                                <div className="desk_name">Nice desk (VHV 321)</div>
                                <div className="desk_descr">Lorem ipsum dolor sit amet.</div>
                                <div className="desk_price">88$</div>
                                <div className="addtochart"><button className='bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center'>Order Now</button></div>
                            </div>

                            <div className="desk5">
                                <div className="desk_img"><img className='w-72 h-60' src="/imgspub/desk5.png" alt="desk" /></div>
                                <div className="desk_name">Nice desk (VHV 321)</div>
                                <div className="desk_descr">Lorem ipsum dolor sit amet.</div>
                                <div className="desk_price">190$</div>
                                <div className="addtochart"><button className='bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center'>Order Now</button></div>
                            </div>

                            <div className="desk6">
                                <div className="desk_img"><img className='w-72 h-60' src="/imgspub/desk6.png" alt="desk" /></div>
                                <div className="desk_name">Nice desk (VHV 321)</div>
                                <div className="desk_descr">Lorem ipsum dolor sit amet.</div>
                                <div className="desk_price">199$</div>
                                <div className="addtochart"><button className='bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center'>Order Now</button></div>
                            </div>

                            <div className="desk7">
                                <div className="desk_img"><img className='w-72 h-60' src="/imgspub/desk7.png" alt="desk" /></div>
                                <div className="desk_name">Nice desk (VHV 321)</div>
                                <div className="desk_descr">Lorem ipsum dolor sit amet.</div>
                                <div className="desk_price">329$</div>
                                <div className="addtochart"><button className='bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center'>Order Now</button></div>
                            </div>

                            <div className="desk8">
                                <div className="desk_img"><img className='w-72 h-60' src="/imgspub/desk8.png" alt="desk" /></div>
                                <div className="desk_name">Nice desk (VHV 321)</div>
                                <div className="desk_descr">Lorem ipsum dolor sit amet.</div>
                                <div className="desk_price">189$</div>
                                <div className="addtochart"><button className='bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center'>Order Now</button></div>
                            </div>

                            <div className="desk9">
                                <div className="desk_img"><img className='w-72 h-60' src="/imgspub/desk1.png" alt="desk" /></div>
                                <div className="desk_name">Nice desk (VHV 321)</div>
                                <div className="desk_descr">Lorem ipsum dolor sit amet.</div>
                                <div className="desk_price">499$</div>
                                <div className="addtochart"><button className='bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center'>Order Now</button></div>
                            </div>
                        </div>
                    </div>
    </>
    );
}

export default Desks;