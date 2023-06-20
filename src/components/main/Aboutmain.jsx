import React from 'react'
import './aboutmain.css'
import { Link } from 'react-router-dom'
import Aboutimg from '../../imgs/about.jpg'


const Aboutmain = () => {
  return (
    <div className="about_container  mb-12">
    
            <div className="about_h ">
                ABOUT US
           </div>
            <div className="about_left">
            <div className="about_text"><span>Lorem ipsum dolor</span> sit amet consectetur, adipisicing elit. Nostrum facere dolorum aspernatur, enim aut voluptatibus, ipsam eum consequatur fugit voluptate asperiores rerum alias tempore laborum modi corporis provident assumenda repudiandae nulla temporibus! Repellendus minima repudiandae magni ex velit unde veniam voluptas corporis, laborum iure delectus perferendis maxime ipsum? In mollitia excepturi beatae modi minus, laborum aliquam rerum cum quas ducimus nostrum laudantium quo quidem? Provident, tempore quos enim qui nisi ut vel repellat consequatur quasi excepturi fuga est alias dolore! <br/><Link to="/about"><button className="flex justify-center bg-[#1A5DAD] text-white w-[300px] rounded-md font-medium my-6 mx-auto px-6 py-3 ease-out duration-500 hover:bg-white hover:text-[#1A5DAD]">Read More ...</button></Link></div>
        

        <div className="about_img max-w-lg flex pt-10"><img src={Aboutimg} alt="about" /></div>
        </div>
        </div>
        
  )
}

export default Aboutmain