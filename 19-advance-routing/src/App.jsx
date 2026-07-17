import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Notfound from './pages/NOtfound';
import Product from './pages/Product';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';
import Brand from './pages/Brand';
import BrandDetails from './pages/BrandDetails';

const App = () => {
  return (
    <div className='min-h-screen flex flex-col bg-black text-white'>
      <Navbar />
      <main className='flex-1'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/brand' element={<Brand />} />
          <Route path='/brand/:id' element={<BrandDetails/>} />
          <Route path='/product' element={<Product />}>
            <Route path='men' element={<Men />}></Route>
            <Route path='women' element={<Women />}></Route>
            <Route path='kids' element={<Kids />}/>
          </Route>
          <Route path='*' element={<Notfound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App