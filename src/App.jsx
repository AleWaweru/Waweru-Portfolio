import React from 'react'
import Header from './components/header/header';
import Navbar from './components/Navbar/navbar';
import About from './components/about/about';
import Experience from './components/experience/experience';
import Services from './components/services/services';
import Portfolio from './components/Portfolio/portfolio';
import Testimonial from './components/testimonials/testimonial';
import Contact from './components/contact/contact';
import Footer from './components/Footer/footer';

const App = () => {
  return (
      <>
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      </>
    
  )
}

export default App;

