import React from 'react'
import './maincat.css'
import Chair from '../../imgs/chair2.png'
import Lamp from '../../imgs/lamp_cat.png'
import Desk from '../../imgs/desk2.png'
import Bed from '../../imgs/bed_cat.png'
import Table from '../../imgs/table_cat.png'
import Couch from '../../imgs/couch_cat.png'
import Kitchencat from '../../imgs/kitchen_cat.png'
import Kidcat from '../../imgs/kid_cat.png'
import { Link } from 'react-router-dom'


const Maincat = () => {
  return (
    <div className="bottom_container w-full">
    <div className="categories_h w-full flex justify-center md:text-4xl sm:text-3xl text-2xl font-bold py-2 mb-5'"><Link to='/catalog'>CATALOG</Link></div>
        <div className="categories_container max-w-[1400px] mx-auto grid md:grid-cols-4 gap-8">
        <div className="category">
            <Link to="/beds"><div className="category_img"><img className='w-72 h-72' src={Bed} alt="service"/></div>
            <div className="category_name">Beds</div></Link>
        </div>

        <div className="category">
            <Link to="/chairs"><div className="category_img"><img  className='w-72 h-72' src={Chair} alt="category"/></div>
            <div className="category_name">Chairs</div></Link>
        </div>

        <div className="category">
            <Link to="/desks"><div className="category_img"><img className='w-72 h-72' src={Desk} alt="category" /></div>
            <div className="category_name">Desks</div></Link>
        </div>

        <div className="category">
        <Link to="/couches"> <div className="category_img"><img className='w-72 h-72' src={Couch} alt="category" /></div>
            <div className="category_name">Couches</div></Link>
        </div>
        

        <div className="category">
        <Link to="/tables"><div className="category_img"><img className='w-72 h-72' src={Table} alt="category" /></div>
            <div className="category_name">Tables</div></Link>
        </div>

        <div className="category">
        <Link to="/lamps"><div className="category_img"><img className='w-72 h-72' src={Lamp} alt="category" /></div>
            <div className="category_name">Lamps</div></Link>
        </div>
        
        <div className="category">
        <Link to="/kitchens"><div className="category_img"><img className='w-72 h-72' src={Kitchencat} alt="category" /></div>
            <div className="category_name">Kitchens</div></Link>
        </div>
        
        <div className="category">
        <Link to="/kidsfurniture"><div className="category_img"><img className='w-72 h-72' src={Kidcat} alt="category" /></div>
            <div className="category_name">Kids Furniture</div></Link>
        </div>
    </div>
</div>
  );
};

export default Maincat