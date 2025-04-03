import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Home } from './components/home';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { About } from './components/about';
import { Menu } from './components/menu';
import { Testimonials } from './components/testimonials';
import { Chefs } from './components/chefs';
import { BookTable } from './components/book';
import { Contact } from './components/contact';
import { Event } from './components/event';
import {Gallery} from './components/gallery';
import './App.css';

function App() {

  <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css" rel="stylesheet" />
  return (
    <>
      <router>
        <div className="flex flex-col min-h-screen ">

          <Navbar />
          <div className=" flex-grow"> {/* Adjust pt value as needed */}
            <Routes>
              <Route path="/" element={<>
                <Home />
                <About />
                <Menu />
                <Testimonials />
                <Event />
                <Chefs />
                <Gallery/>
                <BookTable />
                <Contact />
              </>} />

            </Routes>
          </div>
          <Footer />

        </div>
      </router>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
    </>
  )
}

export default App
