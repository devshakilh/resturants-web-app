import React from 'react'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
import Food from './components/Food'
import Category from './components/Category'
import Navbar from './components/Navbar.jsx'
import Home from './components/About'
import Team from './components/Team'
import Testimonial from './components/Testimonial'
import Reservation from './components/Reservation'
import ContactUs from './components/ContactUs'


function App() {
  return (
    <div>

      <Navbar />
      <Hero />

      <HeadlineCards />
      <Home />
      <Food />
      <Category />

      {/* <Team /> */}
      <Testimonial />
      <Reservation />
      <ContactUs />
    </div>
  );
}

export default App;
