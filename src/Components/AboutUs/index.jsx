import React from 'react'

import Imn from "../../images/about/about-part.jpg"

function AboutUs() {
  return (
    <div className='px-[190px] mt-[60px] bg-[#F9FAFF] py-[130px]'>
        <div className='flex items-center'>
            <div  className='w-[50%]'>
                <div>
                    <p className='text-[23px] font-semibold font-serif'>About Us</p>
                    <p className='font-normal mt-5 font-sans text-[16px] text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br /> ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br /> aliquip ex ea commodo consequat. Duis aute irure dolor in <br /> reprehenderit in voluptate velit esse.</p>
                </div>
                <div>
                    <button className='bg-[#7370D8] border border-[#7370D8] transition-all text-white p-4 px-[50px] font-bold mt-8 hover:border hover:border-[#7370D8] hover:text-[#7370D8] hover:bg-transparent'>LEARN MORE</button>
                </div>
            </div>
            <div className='w-[50%] border'>
                <div className='border-[2px] border-gray-500 '>
                <img className='w-full ' src={Imn} alt="" />

                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs