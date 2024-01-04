import React from 'react'
import AboutC from '../../Components/AboutC'
import OurHitory from '../../Components/OutHistory'
import Cart from '../../Components/Cart'
import Pushti from '../../Components/Pushti'
import Counter from '../../Components/Counter'
import Carusel from '../../Components/Carusel'

function About() {
  return (
    <div>
      <AboutC/>
      <OurHitory/>
      <Counter/>
      <Cart/>
      <Carusel/>
      <div className='mt-20'></div>
      <Pushti/>
    </div>
  )
}

export default About