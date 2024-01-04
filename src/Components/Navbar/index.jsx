import { CiSearch } from "react-icons/ci"; 
import { RiShoppingCartLine } from "react-icons/ri"; 
import { AiOutlineTwitter } from "react-icons/ai"; 
import { ImLinkedin2 } from "react-icons/im"; 
import { AiOutlineGooglePlus } from "react-icons/ai"; 
import { CgFacebook } from "react-icons/cg"; 
import { MdEmail } from "react-icons/md";
import { HiPhone } from "react-icons/hi";
import React from 'react'
import { Link } from "react-router-dom";

import Nnavbar from '../../Navbar'

function Navbar() {
    return (
        <div>
            <div id="hh">

            </div>
            <div>
                <div className='nav1 flex justify-between px-[190px] py-[25px]'>
                    <div className="flex gap-[60px] ">
                        <div className="flex items-center gap-3">
                            <p className="text-[20px] text-[#888]"><HiPhone /></p>
                            <p className="text-[15px] text-[#888] font-semibold">+992 563 542</p>

                        </div>
                        <div className="flex items-center gap-3">
                            <p className="text-[20px] text-[#888]"><MdEmail /></p>
                            <p className="text-[15px] text-[#888] font-semibold">info@mail.com</p>

                        </div>

                    </div>
                    <div className="flex gap-5">
                        <div className="flex gap-4 text-[#888]">
                            <p>Register</p>
                            <p>/</p>
                            <p>Log in</p>
                        </div>
                        <div className="flex gap-3 text-[#888] text-[23px] items-center">
                            <p><CgFacebook /></p>
                            <p><AiOutlineGooglePlus /></p>
                            <p><ImLinkedin2 /></p>
                            <p><AiOutlineTwitter /></p>
                        </div>
                    </div>
                </div>
                <div className='nav2 bg-[#7370D8] w-full py-[30px] sticky'>
                    <div className="flex justify-between items-center mx-[190px]">
                    <div className="text-white">
                        <p className="font-bold text-[30px]">ZomBiz</p>
                    </div>
                    <div className="flex gap-7 text-[17px] text-white font-semibold">
                        <Link to={'/'}>Home</Link>
                        <Link to={'/about'}>About</Link>
                        <Link to={'/service'}>Service</Link>
                        <Link to={'/project'}>Project</Link>
                        <Link to={'/team'}>Team</Link>
                        <Link to={'/blog'}>Blog</Link>
                        <Link to={'/contact'}>Contact</Link>
                        <div className="flex gap-10 text-[23px] items-center">
                            <p><RiShoppingCartLine /></p>
                            <p><CiSearch /></p>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar