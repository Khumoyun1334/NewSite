import React from 'react'

import Img from "../../images/service/service1.png"

function Cart() {



  return (
    <div className='mx-[190px]'>
        <div className='py-[50px]'>
            <p className='font-semibold text-[25px] text-center font-serif'>What We Do</p>
            <p className='text-center text-gray-500 mt-4'>Pallamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat <br /> nulla pariatur.</p>
        </div>
        <div className='grid grid-cols-3 gap-[25px]'>
            <div className='border py-[50px] hover:shadow-xl transition-shadow shadow-gray-200'>
                <div className='flex justify-center'>
                    <img src={Img} alt="" />
                </div>
                <div>
                    <p className='font-serif font-normal mt-5 text-[20px] text-center'>Business Consultancy</p>
                    <p className='text-[16px] mt-5 text-center font-normal text-gray-500'>Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit, sed do eiusmod tempor <br /> incididunt ul.</p>
                </div>
            </div>
            <div className='border py-[50px] hover:shadow-xl transition-shadow'>
                <div className='flex justify-center'>
                    <img src={Img} alt="" />
                </div>
                <div>
                    <p className='font-serif font-normal mt-5 text-[20px] text-center'>Business Consultancy</p>
                    <p className='text-[16px] mt-5 text-center font-normal text-gray-500'>Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit, sed do eiusmod tempor <br /> incididunt ul.</p>
                </div>
            </div>
            <div className='border py-[50px] hover:shadow-xl transition-shadow'>
                <div className='flex justify-center'>
                    <img src={Img} alt="" />
                </div>
                <div>
                    <p className='font-serif font-normal mt-5 text-[20px] text-center'>Business Consultancy</p>
                    <p className='text-[16px] mt-5 text-center font-normal text-gray-500'>Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit, sed do eiusmod tempor <br /> incididunt ul.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart