import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Main from './components/main/Main'
import About from './components/about/About'
import Catalog from './components/catalog/Catalog';
import Beds from './components/catalog/beds/Beds';
import Chairs from './components/catalog/chairs/Chairs';
import Couches from './components/catalog/couches/Couches';
import Desks from './components/catalog/desks/Desks';
import Kids from './components/catalog/kidsfurniture/Kids';
import Kitchens from './components/catalog/kitchens/Kitchens';
import Lamps from './components/catalog/lamps/Lamps';
import Tables from './components/catalog/tables/Tables';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Sale from './components/sale/Sale';


import {Route, Routes} from 'react-router-dom';



function App() {
 
  return (
    <div className="App px-6">
      <Navbar/>
      <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/catalog" element={<Catalog/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/beds" element={<Beds/>}/>
            <Route path="/chairs" element={<Chairs/>}/>
            <Route path="/couches" element={<Couches/>}/>
            <Route path="/desks" element={<Desks/>}/>
            <Route path="/kidsfurniture" element={<Kids/>}/>
            <Route path="/kitchens" element={<Kitchens/>}/>
            <Route path="/lamps" element={<Lamps/>}/>
            <Route path="/tables" element={<Tables/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/sale" element={<Sale/>}/>
        </Routes>
      <Footer/>

      
    </div>
  );
}

export default App;
