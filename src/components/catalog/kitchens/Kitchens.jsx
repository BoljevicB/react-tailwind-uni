import './kitchens.css';
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function Kitchens (){
    const slides = [
        {
          url: 'https://images.unsplash.com/photo-1604709178681-82325c04f8bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1586208958839-06c17cacdf08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=965&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        },
    
        {
          url: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        },
        {
          url: 'https://images.unsplash.com/photo-1601760561441-16420502c7e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
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
            <div className="prod_kitchen">PRODUCTS</div>
                <div className="kitchen_cards">
                    <div className="kitchen1">
                        <div className="kitchen_img"><img className='h-72 w-72' src="/imgspub/kitchen1.png" /></div>
                        <div className="kitchen_name">kitchen (VHV 321)</div>
                        <div className="kitchen_descr">Lorem ipsum dolor sit amet.</div>
                        <div className="kitchen_price">78$</div>
                        <div className="addtochart"><a href="/categories/contact/contacts.html"><button className='bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center'>Order Now</button></a></div>
                        </div>
                        
                        <div className="kitchen2">
                            <div className="kitchen_img"><img className='h-72 w-72' src="/imgspub/kitchen2.png" /></div>
                            <div className="kitchen_name">kitchen (VHV 321)</div>
                            <div className="kitchen_descr">Lorem ipsum dolor sit amet.</div>
                            <div className="kitchen_price">59$</div>
                            <div className="addtochart"><button className='bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center'>Order Now</button></div>
                        </div>
                           
                            <div className="kitchen3">
                                <div className="kitchen_img"><img className='h-72 w-72' src="/imgspub/kitchen3.png" /></div>
                                <div className="kitchen_name">kitchen (VHV 321)</div>
                                <div className="kitchen_descr">Lorem ipsum dolor sit amet.</div>
                                <div className="kitchen_price">91$</div>
                                <div className="addtochart"><button className='bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center'>Order Now</button></div>
                            </div>

                            <div className="kitchen4">
                                <div className="kitchen_img"><img className='h-72 w-72' src="/imgspub/kitchen4.png" /></div>
                                <div className="kitchen_name">kitchen (VHV 321)</div>
                                <div className="kitchen_descr">Lorem ipsum dolor sit amet.</div>
                                <div className="kitchen_price">60$</div>
                                <div className="addtochart"><button className='bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center'>Order Now</button></div>
                            </div>

                            <div className="kitchen5">
                                <div className="kitchen_img"><img className='h-72 w-72' src="/imgspub/kitchen5.png" /></div>
                                <div className="kitchen_name">kitchen (VHV 321)</div>
                                <div className="kitchen_descr">Lorem ipsum dolor sit amet.</div>
                                <div className="kitchen_price">78$</div>
                                <div className="addtochart"><button className='bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center'>Order Now</button></div>
                            </div>

                            <div className="kitchen6">
                                <div className="kitchen_img"><img className='h-72 w-72' src="/imgspub/kitchen6.png" /></div>
                                <div className="kitchen_name">Nice kitchen (VHV 321)</div>
                                <div className="kitchen_descr">Lorem ipsum dolor sit amet.</div>
                                <div className="kitchen_price">199$</div>
                                <div className="addtochart"><button className='bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center'>Order Now</button></div>
                            </div>

                            <div className="kitchen7">
                                <div className="kitchen_img"><img className='h-72 w-72' src="/imgspub/kitchen7.png" /></div>
                                <div className="kitchen_name">kitchen (VHV 321)</div>
                                <div className="kitchen_descr">Lorem ipsum dolor sit amet.</div>
                                <div className="kitchen_price">53$</div>
                                <div className="addtochart"><button className='bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center'>Order Now</button></div>
                            </div>

                            <div className="kitchen8">
                                <div className="kitchen_img"><img className='h-72 w-72' src="/imgspub/kitchen8.png" /></div>
                                <div className="kitchen_name">kitchen (VHV 321)</div>
                                <div className="kitchen_descr">Lorem ipsum dolor sit amet.</div>
                                <div className="kitchen_price">82$</div>
                                <div className="addtochart"><button className='bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center'>Order Now</button></div>
                            </div>

                            <div className="kitchen9">
                                <div className="kitchen_img"><img className='h-72 w-72' src="/imgspub/kitchen9.png" /></div>
                                <div className="kitchen_name">kitchen (VHV 321)</div>
                                <div className="kitchen_descr">Lorem ipsum dolor sit amet.</div>
                                <div className="kitchen_price">23$</div>
                                <div className="addtochart"><button className='bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center'>Order Now</button></div>
                            </div>
                        </div>
                    </div>
    </>
    );
}

export default Kitchens;