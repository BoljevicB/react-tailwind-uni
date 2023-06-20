import React from 'react'
import { Link } from 'react-router-dom'

import Chaircat1 from '../../imgs/chair1.png'
import Chaircat2 from '../../imgs/chair2.png'
import Chaircat3 from '../../imgs/chair3.png'
import Chaircat4 from '../../imgs/chair4.png'

import Bedcat1 from '../../imgs/bed1.png'
import Bedcat2 from '../../imgs/bed14.png'
import Bedcat3 from '../../imgs/bed13.png'
import Bedcat4 from '../../imgs/bed12.png'

import Couchcat1 from '../../imgs/couch9.png'
import Couchcat2 from '../../imgs/couch2.png'
import Couchcat3 from '../../imgs/couch3.png'
import Couchcat4 from '../../imgs/couch10.png'

import Deskcat1 from '../../imgs/desk10.png'
import Deskcat2 from '../../imgs/desk2.png'
import Deskcat3 from '../../imgs/desk3.png'
import Deskcat4 from '../../imgs/desk4.png'

import Tablecat1 from '../../imgs/table1.png'
import Tablecat2 from '../../imgs/table2.png'
import Tablecat3 from '../../imgs/table3.png'
import Tablecat4 from '../../imgs/table4.png'

import Kitchencat1 from '../../imgs/kitchen1.png'
import Kitchencat2 from '../../imgs/kitchen2.png'
import Kitchencat3 from '../../imgs/kitchen3.png'
import Kitchencat4 from '../../imgs/kitchen4.png'

import Lampscat1 from '../../imgs/lamp1.png'
import Lampscat2 from '../../imgs/lamp2.png'
import Lampscat3 from '../../imgs/lamp3.png'
import Lampscat4 from '../../imgs/lamp4.png'

import Kidscat1 from '../../imgs/kid1.png'
import Kidscat2 from '../../imgs/kid2.png'
import Kidscat3 from '../../imgs/kid3.png'
import Kidscat4 from '../../imgs/kid4.png'


const Catalogcards = () => {
  return (
    <>
    <div className="mt-6 mx-auto lg:mt-0 lg:px-2 lg:w-4/5 ">
                    <div className="flex items-center justify-between text-sm tracking-widest uppercase ">
                        <p className="text-[#1A5DAD] font-bold text-3xl">Chairs</p>
                        <div className="flex items-center">
                        
                            <Link to="/chairs" className="flex flex-row text-lg hover:text-[#1A5DAD]">View All
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg></Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto shadow-md rounded-md ease-out duration-500 hover:scale-105">
                            <img className="object-cover w-fit h-fit xl:h-80" src={Chaircat1} alt="Chair" />
                            <h4 className="my-2 text-lg font-medium text-gray-700 dark:text-gray-200">Lorem ipsum</h4>
                            <p className="text-blue-500 font-bold text-2xl">$12.55</p>

                            <button className="bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center">
                                
                                <span className="mx-1">View Details</span>
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto shadow-md rounded-md ease-out duration-500 hover:scale-105">
                            <img className="object-cover w-fit h-fit xl:h-80" src={Chaircat2} alt="Chair" />
                            <h4 className="my-2 text-lg font-medium text-gray-700 dark:text-gray-200">Lorem ipsum</h4>
                            <p className="text-blue-500 font-bold text-2xl">$12.55</p>

                            <button className="bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center">
                                
                                <span className="mx-1">View Details</span>
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto shadow-md rounded-md ease-out duration-500 hover:scale-105">
                            <img className="object-cover w-fit h-fit xl:h-80" src={Chaircat3} alt="Chair" />
                            <h4 className="my-2 text-lg font-medium text-gray-700 dark:text-gray-200">Lorem ipsum</h4>
                            <p className="text-blue-500 font-bold text-2xl">$12.55</p>

                            <button className="bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center">
                                
                                <span className="mx-1">View Details</span>
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto shadow-md rounded-md ease-out duration-500 hover:scale-105">
                            <img className="object-cover w-fit h-fit xl:h-80" src={Chaircat4} alt="Chair" />
                            <h4 className="my-2 text-lg font-medium text-gray-700 dark:text-gray-200">Lorem ipsum</h4>
                            <p className="text-blue-500 font-bold text-2xl">$12.55</p>

                            <button className="bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center">
                                
                                <span className="mx-1">View Details</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-6 mx-auto lg:mt-0 lg:px-2 lg:w-4/5 ">
                    <div className="mt-10 flex items-center justify-between text-sm tracking-widest uppercase ">
                        <p className="text-[#1A5DAD] font-bold text-3xl">Beds</p>
                        <div className="flex items-center">
                        
                            <Link to="/beds" className="flex flex-row text-lg hover:text-[#1A5DAD]">View All
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg></Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto shadow-md rounded-md ease-out duration-500 hover:scale-105">
                            <img className="object-cover w-fit h-fit xl:h-80" src={Bedcat1} alt="Bed" />
                            <h4 className="my-2 text-lg font-medium text-gray-700 dark:text-gray-200">Lorem ipsum</h4>
                            <p className="text-blue-500 font-bold text-2xl">$12.55</p>

                            <button className="bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center">
                                
                                <span className="mx-1">View Details</span>
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto shadow-md rounded-md ease-out duration-500 hover:scale-105">
                            <img className="object-cover w-fit h-fit xl:h-80" src={Bedcat2} alt="Bed" />
                            <h4 className="my-2 text-lg font-medium text-gray-700 dark:text-gray-200">Lorem ipsum</h4>
                            <p className="text-blue-500 font-bold text-2xl">$12.55</p>

                            <button className="bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center">
                                
                                <span className="mx-1">View Details</span>
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto shadow-md rounded-md ease-out duration-500 hover:scale-105">
                            <img className="object-cover w-fit h-fit xl:h-80" src={Bedcat3} alt="Bed" />
                            <h4 className="my-2 text-lg font-medium text-gray-700 dark:text-gray-200">Lorem ipsum</h4>
                            <p className="text-blue-500 font-bold text-2xl">$12.55</p>

                            <button className="bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center">
                                
                                <span className="mx-1">View Details</span>
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto shadow-md rounded-md ease-out duration-500 hover:scale-105">
                            <img className="object-cover w-fit h-fit xl:h-80" src={Bedcat4} alt="Bed" />
                            <h4 className="my-2 text-lg font-medium text-gray-700 dark:text-gray-200">Lorem ipsum</h4>
                            <p className="text-blue-500 font-bold text-2xl">$12.55</p>

                            <button className="bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center">
                                
                                <span className="mx-1">View Details</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-6 mx-auto lg:mt-0 lg:px-2 lg:w-4/5 ">
                    <div className="mt-10 flex items-center justify-between text-sm tracking-widest uppercase ">
                        <p className="text-[#1A5DAD] font-bold text-3xl">Couches</p>
                        <div className="flex items-center">
                        
                            <Link to="/couches" className="flex flex-row text-lg hover:text-[#1A5DAD]">View All
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg></Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto shadow-md rounded-md ease-out duration-500 hover:scale-105">
                            <img className="object-cover w-fit h-fit xl:h-80" src={Couchcat1} alt="Couch" />
                            <h4 className="my-2 text-lg font-medium text-gray-700 dark:text-gray-200">Lorem ipsum</h4>
                            <p className="text-blue-500 font-bold text-2xl">$12.55</p>

                            <button className="bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center">
                                
                                <span className="mx-1">View Details</span>
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto shadow-md rounded-md ease-out duration-500 hover:scale-105">
                            <img className="object-cover w-fit h-fit xl:h-80" src={Couchcat2} alt="Couch" />
                            <h4 className="my-2 text-lg font-medium text-gray-700 dark:text-gray-200">Lorem ipsum</h4>
                            <p className="text-blue-500 font-bold text-2xl">$12.55</p>

                            <button className="bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center">
                                
                                <span className="mx-1">View Details</span>
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto shadow-md rounded-md ease-out duration-500 hover:scale-105">
                            <img className="object-cover w-fit h-fit xl:h-80" src={Couchcat3} alt="Couch" />
                            <h4 className="my-2 text-lg font-medium text-gray-700 dark:text-gray-200">Lorem ipsum</h4>
                            <p className="text-blue-500 font-bold text-2xl">$12.55</p>

                            <button className="bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center">
                                
                                <span className="mx-1">View Details</span>
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto shadow-md rounded-md ease-out duration-500 hover:scale-105">
                            <img className="object-cover w-fit h-fit xl:h-80" src={Couchcat4} alt="Couch" />
                            <h4 className="my-2 text-lg font-medium text-gray-700 dark:text-gray-200">Lorem ipsum</h4>
                            <p className="text-blue-500 font-bold text-2xl">$12.55</p>

                            <button className="bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center">
                                
                                <span className="mx-1">View Details</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-6 mx-auto lg:mt-0 lg:px-2 lg:w-4/5 ">
                    <div className="mt-10 flex items-center justify-between text-sm tracking-widest uppercase ">
                        <p className="text-[#1A5DAD] font-bold text-3xl">Desks</p>
                        <div className="flex items-center">
                        
                            <Link to="/desks" className="flex flex-row text-lg hover:text-[#1A5DAD]">View All
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg></Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto shadow-md rounded-md ease-out duration-500 hover:scale-105">
                            <img className="object-cover w-fit h-fit xl:h-80" src={Deskcat1} alt="Desk" />
                            <h4 className="my-2 text-lg font-medium text-gray-700 dark:text-gray-200">Lorem ipsum</h4>
                            <p className="text-blue-500 font-bold text-2xl">$12.55</p>

                            <button className="bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center">
                                
                                <span className="mx-1">View Details</span>
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto shadow-md rounded-md ease-out duration-500 hover:scale-105">
                            <img className="object-cover w-fit h-fit xl:h-80" src={Deskcat2} alt="Desk" />
                            <h4 className="my-2 text-lg font-medium text-gray-700 dark:text-gray-200">Lorem ipsum</h4>
                            <p className="text-blue-500 font-bold text-2xl">$12.55</p>

                            <button className="bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center">
                                
                                <span className="mx-1">View Details</span>
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto shadow-md rounded-md ease-out duration-500 hover:scale-105">
                            <img className="object-cover w-fit h-fit xl:h-80" src={Deskcat3} alt="Desk" />
                            <h4 className="my-2 text-lg font-medium text-gray-700 dark:text-gray-200">Lorem ipsum</h4>
                            <p className="text-blue-500 font-bold text-2xl">$12.55</p>

                            <button className="bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center">
                                
                                <span className="mx-1">View Details</span>
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto shadow-md rounded-md ease-out duration-500 hover:scale-105">
                            <img className="object-cover w-fit h-fit xl:h-80" src={Deskcat4} alt="Desk" />
                            <h4 className="my-2 text-lg font-medium text-gray-700 dark:text-gray-200">Lorem ipsum</h4>
                            <p className="text-blue-500 font-bold text-2xl">$12.55</p>

                            <button className="bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center">
                                
                                <span className="mx-1">View Details</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-6 mx-auto lg:mt-0 lg:px-2 lg:w-4/5 ">
                    <div className="mt-10 flex items-center justify-between text-sm tracking-widest uppercase ">
                        <p className="text-[#1A5DAD] font-bold text-3xl">Tables</p>
                        <div className="flex items-center">
                        
                            <Link to="/tables" className="flex flex-row text-lg hover:text-[#1A5DAD]">View All
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg></Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto shadow-md rounded-md ease-out duration-500 hover:scale-105">
                            <img className="object-cover w-fit h-fit xl:h-80" src={Tablecat1} alt="Table" />
                            <h4 className="my-2 text-lg font-medium text-gray-700 dark:text-gray-200">Lorem ipsum</h4>
                            <p className="text-blue-500 font-bold text-2xl">$12.55</p>

                            <button className="bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center">
                                
                                <span className="mx-1">View Details</span>
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto shadow-md rounded-md ease-out duration-500 hover:scale-105">
                            <img className="object-cover w-fit h-fit xl:h-80" src={Tablecat2} alt="Table" />
                            <h4 className="my-2 text-lg font-medium text-gray-700 dark:text-gray-200">Lorem ipsum</h4>
                            <p className="text-blue-500 font-bold text-2xl">$12.55</p>

                            <button className="bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center">
                                
                                <span className="mx-1">View Details</span>
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto shadow-md rounded-md ease-out duration-500 hover:scale-105">
                            <img className="object-cover w-fit h-fit xl:h-80" src={Tablecat3} alt="Table" />
                            <h4 className="my-2 text-lg font-medium text-gray-700 dark:text-gray-200">Lorem ipsum</h4>
                            <p className="text-blue-500 font-bold text-2xl">$12.55</p>

                            <button className="bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center">
                                
                                <span className="mx-1">View Details</span>
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto shadow-md rounded-md ease-out duration-500 hover:scale-105">
                            <img className="object-cover w-fit h-fit xl:h-80" src={Tablecat4} alt="Table" />
                            <h4 className="my-2 text-lg font-medium text-gray-700 dark:text-gray-200">Lorem ipsum</h4>
                            <p className="text-blue-500 font-bold text-2xl">$12.55</p>

                            <button className="bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center">
                                
                                <span className="mx-1">View Details</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-6 mx-auto lg:mt-0 lg:px-2 lg:w-4/5 ">
                    <div className="mt-10 flex items-center justify-between text-sm tracking-widest uppercase ">
                        <p className="text-[#1A5DAD] font-bold text-3xl">Kitchens</p>
                        <div className="flex items-center">
                        
                            <Link to="/kitchens" className="flex flex-row text-lg hover:text-[#1A5DAD]">View All
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg></Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto shadow-md rounded-md ease-out duration-500 hover:scale-105">
                            <img className="object-cover w-fit h-fit xl:h-80" src={Kitchencat1} alt="Kitchen" />
                            <h4 className="my-2 text-lg font-medium text-gray-700 dark:text-gray-200">Lorem ipsum</h4>
                            <p className="text-blue-500 font-bold text-2xl">$12.55</p>

                            <button className="bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center">
                                
                                <span className="mx-1">View Details</span>
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto shadow-md rounded-md ease-out duration-500 hover:scale-105">
                            <img className="object-cover w-fit h-fit xl:h-80" src={Kitchencat2} alt="Kitchen" />
                            <h4 className="my-2 text-lg font-medium text-gray-700 dark:text-gray-200">Lorem ipsum</h4>
                            <p className="text-blue-500 font-bold text-2xl">$12.55</p>

                            <button className="bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center">
                                
                                <span className="mx-1">View Details</span>
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto shadow-md rounded-md ease-out duration-500 hover:scale-105">
                            <img className="object-cover w-fit h-fit xl:h-80" src={Kitchencat3} alt="Kitchen" />
                            <h4 className="my-2 text-lg font-medium text-gray-700 dark:text-gray-200">Lorem ipsum</h4>
                            <p className="text-blue-500 font-bold text-2xl">$12.55</p>

                            <button className="bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center">
                                
                                <span className="mx-1">View Details</span>
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto shadow-md rounded-md ease-out duration-500 hover:scale-105">
                            <img className="object-cover w-fit h-fit xl:h-80" src={Kitchencat4} alt="Kitchen" />
                            <h4 className="my-2 text-lg font-medium text-gray-700 dark:text-gray-200">Lorem ipsum</h4>
                            <p className="text-blue-500 font-bold text-2xl">$12.55</p>

                            <button className="bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center">
                                
                                <span className="mx-1">View Details</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-6 mx-auto lg:mt-0 lg:px-2 lg:w-4/5 ">
                    <div className="mt-10 flex items-center justify-between text-sm tracking-widest uppercase ">
                        <p className="text-[#1A5DAD] font-bold text-3xl">Lamps</p>
                        <div className="flex items-center">
                        
                            <Link to="/lamps" className="flex flex-row text-lg hover:text-[#1A5DAD]">View All
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg></Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto shadow-md rounded-md ease-out duration-500 hover:scale-105">
                            <img className="object-cover w-fit h-fit xl:h-80" src={Lampscat1} alt="Lamp" />
                            <h4 className="my-2 text-lg font-medium text-gray-700 dark:text-gray-200">Lorem ipsum</h4>
                            <p className="text-blue-500 font-bold text-2xl">$12.55</p>

                            <button className="bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center">
                                
                                <span className="mx-1">View Details</span>
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto shadow-md rounded-md ease-out duration-500 hover:scale-105">
                            <img className="object-cover w-fit h-fit xl:h-80" src={Lampscat2} alt="Lamp" />
                            <h4 className="my-2 text-lg font-medium text-gray-700 dark:text-gray-200">Lorem ipsum</h4>
                            <p className="text-blue-500 font-bold text-2xl">$12.55</p>

                            <button className="bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center">
                                
                                <span className="mx-1">View Details</span>
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto shadow-md rounded-md ease-out duration-500 hover:scale-105">
                            <img className="object-cover w-fit h-fit xl:h-80" src={Lampscat3} alt="Lamp" />
                            <h4 className="my-2 text-lg font-medium text-gray-700 dark:text-gray-200">Lorem ipsum</h4>
                            <p className="text-blue-500 font-bold text-2xl">$12.55</p>

                            <button className="bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center">
                                
                                <span className="mx-1">View Details</span>
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto shadow-md rounded-md ease-out duration-500 hover:scale-105">
                            <img className="object-cover w-fit h-fit xl:h-80" src={Lampscat4} alt="Lamp" />
                            <h4 className="my-2 text-lg font-medium text-gray-700 dark:text-gray-200">Lorem ipsum</h4>
                            <p className="text-blue-500 font-bold text-2xl">$12.55</p>

                            <button className="bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center">
                                
                                <span className="mx-1">View Details</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-6 mx-auto lg:mt-0 lg:px-2 lg:w-4/5 ">
                    <div className="mt-10 flex items-center justify-between text-sm tracking-widest uppercase ">
                        <p className="text-[#1A5DAD] font-bold text-3xl">Kids Furniture</p>
                        <div className="flex items-center">
                        
                            <Link to="/kidsfurniture" className="flex flex-row text-lg hover:text-[#1A5DAD]">View All
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg></Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto shadow-md rounded-md ease-out duration-500 hover:scale-105">
                            <img className="object-cover w-fit h-fit xl:h-80" src={Kidscat1} alt="Kids furniture" />
                            <h4 className="my-2 text-lg font-medium text-gray-700 dark:text-gray-200">Lorem ipsum</h4>
                            <p className="text-blue-500 font-bold text-2xl">$12.55</p>

                            <button className="bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center">
                                
                                <span className="mx-1">View Details</span>
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto shadow-md rounded-md ease-out duration-500 hover:scale-105">
                            <img className="object-cover w-fit h-fit xl:h-80" src={Kidscat2} alt="Kids furniture" />
                            <h4 className="my-2 text-lg font-medium text-gray-700 dark:text-gray-200">Lorem ipsum</h4>
                            <p className="text-blue-500 font-bold text-2xl">$12.55</p>

                            <button className="bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center">
                                
                                <span className="mx-1">View Details</span>
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto shadow-md rounded-md ease-out duration-500 hover:scale-105">
                            <img className="object-cover w-fit h-fit xl:h-80" src={Kidscat3} alt="Kids furniture" />
                            <h4 className="my-2 text-lg font-medium text-gray-700 dark:text-gray-200">Lorem ipsum</h4>
                            <p className="text-blue-500 font-bold text-2xl">$12.55</p>

                            <button className="bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center">
                                
                                <span className="mx-1">View Details</span>
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto shadow-md rounded-md ease-out duration-500 hover:scale-105">
                            <img className="object-cover w-fit h-fit xl:h-80" src={Kidscat4} alt="Kids furniture" />
                            <h4 className="my-2 text-lg font-medium text-gray-700 dark:text-gray-200">Lorem ipsum</h4>
                            <p className="text-blue-500 font-bold text-2xl">$12.55</p>

                            <button className="bg-[#1A5DAD] rounded-full py-2 px-4 my-4 text-sm text-white ease-out duration-500 hover:bg-white hover:text-[#1A5DAD] flex flex-row justify-center">
                                
                                <span className="mx-1">View Details</span>
                            </button>
                        </div>
                    </div>
                </div>
                </>
            
  )
}

export default Catalogcards