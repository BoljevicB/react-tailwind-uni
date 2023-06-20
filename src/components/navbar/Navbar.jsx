import React, {useState} from 'react'
import {SlMenu, SlArrowLeft} from 'react-icons/sl';
import {Routes, Route, Link} from 'react-router-dom'


const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto' >
        <h1 className='w-full text-3xl font-bold'>FURNITURE</h1>
        <ul className='hidden md:flex text-xl font-medium'>
            <li className='p-4 hover:text-[#1A5DAD] ease-in duration-100'><Link to='/'>Main</Link></li>
            <li className='p-4 hover:text-[#1A5DAD] ease-in duration-100'><Link to='/catalog'>Catalog</Link></li>
            <li className='p-4 hover:text-[#1A5DAD] ease-in duration-100'><Link to='/sale'>Sale</Link></li>
            <li className='p-4 hover:text-[#1A5DAD] ease-in duration-100'><Link to='/blog'>Blog</Link></li>
            <li className='p-4 hover:text-[#1A5DAD] ease-in duration-100'><Link to='/about'>About</Link></li>
            <li className='p-4'><Link to='/contact'>Contact</Link></li>
        </ul>

    <div onClick={handleNav} className='block md:hidden'>
        { nav ? <SlArrowLeft size={25}/> : <SlMenu size={25}/> }
        
    </div>
    <div className={ nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 z-[100]' : 'fixed left-[-100%]' } >
    <h1 className='w-full text-3xl font-bold m-6 py-2' >FURNITURE</h1>
       
        <ul className='uppercase p-4 '>
            <li className='p-4 border-b border-gray-900 hover:text-[#1A5DAD] ease-in duration-100'><Link to='/'>Main</Link></li>
            <li className='p-4 border-b border-gray-900 hover:text-[#1A5DAD] ease-in duration-100'><Link to='/catalog'>Catalog</Link></li>
            <li className='p-4 border-b border-gray-900 hover:text-[#1A5DAD] ease-in duration-100'><Link to='/sale'>Sale</Link></li>
            <li className='p-4 border-b border-gray-900 hover:text-[#1A5DAD] ease-in duration-100'><Link to='/blog'>Blog</Link></li>
            <li className='p-4 border-b border-gray-900 hover:text-[#1A5DAD] ease-in duration-100'><Link to='/about'>About</Link></li>
            <li className='p-4 border-b border-gray-900 hover:text-[#1A5DAD] ease-in duration-100'><Link to='/contact'>Contact</Link></li> 
        </ul>
    </div>
    </div>
  )
}

export default Navbar