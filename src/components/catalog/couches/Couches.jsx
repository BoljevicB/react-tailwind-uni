import './couches.css';
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function Couches() {
    const slides = [
        {
          url: 'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1106&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        },
    
        {
          url: 'https://images.unsplash.com/photo-1547166812-0fca6370dc03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1638962502979-05d81dcaa096?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1577&q=80',
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
            <div className="prod_couch">PRODUCTS</div>
                <div className="couch_cards">
                    <div className="couch1">
                        <div className="couch_img"><img  className="h-52 w-80" src="/imgspub/couch1.png" alt="couch"/></div>
                        <div className="couch_name">couch (VHV 321)</div>
                        <div className="couch_descr">Lorem ipsum dolor sit amet.</div>
                        <div className="couch_price">78$</div>
                        <div className="addtochart"><a href="/categories/contact/contacts.html"><button className='bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center'>Order Now</button></a></div>
                        </div>
                        
                        <div className="couch2">
                            <div className="couch_img"><img className="h-52 w-80" src="/imgspub/couch2.png" alt="couch" /></div>
                            <div className="couch_name">couch (VHV 321)</div>
                            <div className="couch_descr">Lorem ipsum dolor sit amet.</div>
                            <div className="couch_price">59$</div>
                            <div className="addtochart"><button className='bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center'>Order Now</button></div>
                        </div>
                           
                            <div className="couch3">
                                <div className="couch_img"><img className="h-52 w-80" src="/imgspub/couch3.png" alt="couch" /></div>
                                <div className="couch_name">couch (VHV 321)</div>
                                <div className="couch_descr">Lorem ipsum dolor sit amet.</div>
                                <div className="couch_price">91$</div>
                                <div className="addtochart"><button className='bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center'>Order Now</button></div>
                            </div>

                            <div className="couch4">
                                <div className="couch_img"><img className="h-52 w-80" src="/imgspub/couch4.png" alt="couch" /></div>
                                <div className="couch_name">couch (VHV 321)</div>
                                <div className="couch_descr">Lorem ipsum dolor sit amet.</div>
                                <div className="couch_price">60$</div>
                                <div className="addtochart"><button className='bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center'>Order Now</button></div>
                            </div>

                            <div className="couch5">
                                <div className="couch_img"><img className="h-52 w-80" src="/imgspub/couch5.png" alt="couch" /></div>
                                <div className="couch_name">couch (VHV 321)</div>
                                <div className="couch_descr">Lorem ipsum dolor sit amet.</div>
                                <div className="couch_price">78$</div>
                                <div className="addtochart"><button className='bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center'>Order Now</button></div>
                            </div>

                            <div className="couch6">
                                <div className="couch_img"><img className="h-52 w-80" src="/imgspub/couch6.png" alt="couch" /></div>
                                <div className="couch_name">Nice couch (VHV 321)</div>
                                <div className="couch_descr">Lorem ipsum dolor sit amet.</div>
                                <div className="couch_price">199$</div>
                                <div className="addtochart"><button className='bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center'>Order Now</button></div>
                            </div>

                            <div className="couch7">
                                <div className="couch_img"><img className="h-52 w-80" src="/imgspub/couch7.png" alt="couch" /></div>
                                <div className="couch_name">couch (VHV 321)</div>
                                <div className="couch_descr">Lorem ipsum dolor sit amet.</div>
                                <div className="couch_price">53$</div>
                                <div className="addtochart"><button className='bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center'>Order Now</button></div>
                            </div>

                            <div className="couch8">
                                <div className="couch_img"><img className="h-52 w-80" src="/imgspub/couch8.png" alt="couch" /></div>
                                <div className="couch_name">couch (VHV 321)</div>
                                <div className="couch_descr">Lorem ipsum dolor sit amet.</div>
                                <div className="couch_price">82$</div>
                                <div className="addtochart"><button className='bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center'>Order Now</button></div>
                            </div>

                            <div className="couch9">
                                <div className="couch_img"><img className="h-52 w-80" src="/imgspub/couch9.png" alt="couch" /></div>
                                <div className="couch_name">couch (VHV 321)</div>
                                <div className="couch_descr">Lorem ipsum dolor sit amet.</div>
                                <div className="couch_price">23$</div>
                                <div className="addtochart"><button className='bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center'>Order Now</button></div>
                            </div>
                        </div>
                    </div>
    </>
    );
}

export default Couches;