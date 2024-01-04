import React from 'react'
import CCC from "../../images/counter/counter1.png"
import CCC2 from "../../images/counter/counter2.png"

import CCC3 from "../../images/counter/counter3.png"

import CCC4 from "../../images/counter/counter4.png"

import CountUp from 'react-countup';

import "./style.css"

function Counter() {
    return (
        <div className='my-[80px]'>
            <div className='bg-hero4'>
                <div className='grid grid-cols-4 px-[190px] py-[90px]'>
                    <div className='flex gap-7'>
                        <div>
                        <img src={CCC} alt="" />

                        </div>
                        <div>
                            <p className=' text-white font-semibold text-[30px] font-sans'> <CountUp end={2556} duration={3} /></p>
                            <div p className='text-white font-sans font-semibold text-[25px]'>Days Worked</div>
                        </div>
                    </div>
                    <div className='flex gap-7'>
                        <div>
                        <img src={CCC2} alt="" />

                        </div>
                        <div>
                        <p className=' text-white font-semibold text-[30px] font-sans'> <CountUp end={326} duration={3} /></p>
                            <div p className='text-white font-sans font-semibold text-[25px]'>Days Worked</div>
                        </div>
                    </div>
                    <div className='flex gap-7'>
                        <div>
                        <img src={CCC3} alt="" />

                        </div>
                        <div>
                        <p className=' text-white font-semibold text-[30px] font-sans'> <CountUp end={1526} duration={3} /></p>
                            <div p className='text-white font-sans font-semibold text-[25px]'>Days Worked</div>
                        </div>
                    </div>
                    <div className='flex gap-7'>
                        <div>
                        <img src={CCC4} alt="" />

                        </div>
                        <div>
                        <p className=' text-white font-semibold text-[30px] font-sans'> <CountUp end={856} duration={3} /></p>
                            <div p className='text-white font-sans font-semibold text-[25px]'>Days Worked</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter