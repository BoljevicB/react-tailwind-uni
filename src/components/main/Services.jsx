import React from 'react'
import Custom from '../../imgs/herodesk.jpg'
import Ship from '../../imgs/shipp.jpg'
import Consult from '../../imgs/consulting.jpg'

const Services = () => {
    return (
      <div className='w-full py-[2rem] px-4'>
        <h1 className='w-full flex justify-center md:text-4xl sm:text-3xl text-2xl font-bold py-2 mb-5'>OUR SERVICES</h1>
        <div className='max-w-[1400px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                
            <img className='w-72 h-72 mx-auto bg-white' src={Custom} alt="Custom made furniture" />
                <h2 className='text-2xl font-bold text-center py-8'>Custom made furniture</h2>
                <div className='text-center font-medium'>
                    
                    <p className='py-2 border-b mx-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, ea?</p>
                </div>
                <button className='bg-[#1A5DAD] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 ease-out duration-500 hover:bg-white hover:text-[#1A5DAD]'>Read More</button>
            </div>
            
           
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-72 h-72 mx-auto  bg-transparent' src={Ship} alt="Shipping" />
                <h2 className='text-2xl font-bold text-center py-8'>We Deliver Worldwide</h2>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, ea?</p>
                    
                </div>
                <button className='bg-[#1A5DAD] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 ease-out duration-500 hover:bg-white hover:text-[#1A5DAD]'>Read More</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-72 h-72 mx-auto bg-white' src={Consult} alt="Consulting" />
                <h2 className='text-2xl font-bold text-center py-8'>Consulting</h2>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, ea?</p>
                </div>
                <button className='bg-[#1A5DAD] text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 ease-out duration-500 hover:bg-white hover:text-[#1A5DAD]'>Read More</button>
            </div>
        </div>
      </div>
    );
  };

export default Services
