import { BiRadioCircle } from "react-icons/bi";
import React from 'react'

import Abb from "../../images/about/ab1.jpg"
import Abb2 from "../../images/about/ab2.jpg"

function OurHitory() {
    return (
        <div>
            <div>
                <div className='flex px-[190px] py-[90px]'>
                    <div>
                        <img src={Abb} alt="" />
                    </div>
                    <div className="mt-4 ml-[100px]">
                        <div>
                            <p className='font-medium text-[35px] font-serif'> Our History</p>
                            <p className='text-[16px] text-[#888888] font-medium font-sans mt-3'>Lorem ipsum dolor sit amet, consectetur adiping elit, sed do eiusmod <br /> tempor incidd ut labore rhei et dolore magna aliqua. Ut enim ad <br /> veniam, quis laboris nisi ut aliquip ex ea commodo. Duis aute irure <br /> dolor in repre voluptate in the velit esse.</p>
                        </div>
                        <div className="mt-12">
                            <div className="flex gap-8">
                                <p className="font-bold text-[18px] font-serif">2002</p>
                                <p><BiRadioCircle size={"24px"} color="#7370D8" /></p>
                                <p className="text-[#888888]">Duis aute irure dolor in reprehenderit in the voluptate velit esse <br /> cillum dolore eu ugiat nulla pariatur cupiat non proident.</p>
                            </div>
                            <div className="flex gap-8 mt-7">
                                <p className="font-bold text-[18px] font-serif">2002</p>
                                <p><BiRadioCircle size={"24px"} color="#7370D8" /></p>
                                <p className="text-[#888888]">Duis aute irure dolor in reprehenderit in the voluptate velit esse <br /> cillum dolore eu ugiat nulla pariatur cupiat non proident.</p>
                            </div>
                            <div className="flex gap-8 mt-7">
                                <p className="font-bold text-[18px] font-serif">2002</p>
                                <p><BiRadioCircle size={"24px"} color="#7370D8" /></p>
                                <p className="text-[#888888]">Duis aute irure dolor in reprehenderit in the voluptate velit esse <br /> cillum dolore eu ugiat nulla pariatur cupiat non proident.</p>
                            </div>
                            <div className="flex gap-8 mt-7">
                                <p className="font-bold text-[18px] font-serif">2002</p>
                                <p><BiRadioCircle size={"24px"} color="#7370D8" /></p>
                                <p className="text-[#888888]">Duis aute irure dolor in reprehenderit in the voluptate velit esse <br /> cillum dolore eu ugiat nulla pariatur cupiat non proident.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='flex px-[190px] py-[90px] justify-between'>
                    <div className="">
                        <div>
                            <p className='font-medium text-[35px] font-serif'> Our History</p>
                            <p className='text-[16px] text-[#888888] font-medium font-sans mt-3'>Lorem ipsum dolor sit amet, consectetur adiping elit, sed do eiusmod <br /> tempor incidd ut labore rhei et dolore magna aliqua. Ut enim ad <br /> veniam, quis laboris nisi ut aliquip ex ea commodo. Duis aute irure <br /> dolor in repre voluptate in the velit esse.</p>
                        </div>
                        <div className="mt-12">
                            <div className="flex gap-8">
                                <p><BiRadioCircle size={"24px"} color="#7370D8" /></p>
                                <p className="text-[#888888]">Duis aute irure dolor in reprehenderit in the voluptate velit esse <br /> cillum dolore eu ugiat nulla pariatur cupiat non proident.</p>
                            </div>
                            <div className="flex gap-8 mt-7">
                                <p><BiRadioCircle size={"24px"} color="#7370D8" /></p>
                                <p className="text-[#888888]">Duis aute irure dolor in reprehenderit in the voluptate velit esse <br /> cillum dolore eu ugiat nulla pariatur cupiat non proident.</p>
                            </div>
                            <div className="flex gap-8 mt-7">
                                <p><BiRadioCircle size={"24px"} color="#7370D8" /></p>
                                <p className="text-[#888888]">Duis aute irure dolor in reprehenderit in the voluptate velit esse <br /> cillum dolore eu ugiat nulla pariatur cupiat non proident.</p>
                            </div>
                            <div className="flex gap-8 mt-7">
                                <p><BiRadioCircle size={"24px"} color="#7370D8" /></p>
                                <p className="text-[#888888]">Duis aute irure dolor in reprehenderit in the voluptate velit esse <br /> cillum dolore eu ugiat nulla pariatur cupiat non proident.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={Abb2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurHitory