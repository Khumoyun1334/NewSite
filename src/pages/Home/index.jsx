import React from 'react'
import Header from '../../Components/Header'
import Cart from '../../Components/Cart'
import AboutUs from '../../Components/AboutUs'
import OurService from '../../Components/OurService'
import Carusel from '../../Components/Carusel'
import Dollar from '../../Components/Dollar'
import ImgC from '../../Components/ImgC'
import Counter from '../../Components/Counter'
import Fuctoinal from '../../Components/Fuctional'
import Soz from '../../Components/Soz'
import ContactUs from '../../Components/ContactUs'
import TeamCard from '../../Components/TeamCard'
import Boshqa from '../../Components/Boshqa'
import Pushti from '../../Components/Pushti'
import { useNavigate } from 'react-router'

function Home() {


  return (
    <div>
      <div>
        <Header />

        <Cart />

        <AboutUs />

        <OurService />
        <Counter />

        <Soz />

        <Fuctoinal />
        <div className='flex justify-center mt-10'>
          <a href='/project' className='bg-[#7370D8] border border-[#7370D8] transition-all flex justify-center items-center text-white p-4 px-[50px] font-bold mt-8 hover:border hover:border-[#7370D8] hover:text-[#7370D8] hover:bg-transparent'>LEARN MORE</a>
        </div>

        <TeamCard />
        <Dollar />




        <Carusel />
        <div></div>
        <ImgC />


        <Boshqa />

        <ContactUs />
        <Pushti />





        {/* <Carusel/> */}

      </div>


    </div>
  )
}

export default Home