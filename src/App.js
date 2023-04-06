import React from 'react'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
import Food from './components/Food'
import Category from './components/Category'

import Home from './components/About'
import Team from './components/Team'
import Testimonial from './components/Testimonial'
import Reservation from './components/Reservation'


function App() {
  return (
    <div>

      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
      <Home />
      {/* <Team /> */}
      <Testimonial />
      <Reservation />
    </div>
  );
}

export default App;
