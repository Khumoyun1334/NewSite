import { FaPhoneAlt } from "react-icons/fa";
import React from 'react'
import { AiOutlineTwitter } from "react-icons/ai";
import { ImLinkedin2 } from "react-icons/im";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
function ContactUs() {
    return (
        <div>
            <div className='bg-hero5 py-[140px] px-[190px]'>
                <div>
                    <p className='font-medium text-white text-[30px] text-center font-serif'>Contact Us</p>
                    <p className='text-center text-white text-[20px]'>Pallamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum <br /> dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className="flex justify-between px-[110px] mt-10">
                    <div className="w-[50%]">
                        <div>
                            <p className='font-medium text-white text-[30px] mt-7 font-sans'>Contact Info</p>
                            <p className='text-white text-[16px] mt-5 font-sans'>125, Park street avenue, Brocklyn, Newyork.</p>
                        </div>
                        <div>
                            <div className="text-white text-[16px] mt-9 gap-3 flex items-center">
                                <FaPhoneAlt />
                                <p>+11253678958</p>
                            </div>
                            <div className="text-white text-[16px] gap-3 mt-8 flex items-center">
                                <FaPhoneAlt />
                                <p>+11253678958</p>
                            </div>
                            <div>
                                <p className="text-[24px] font-bold text-white mt-12">Social Partner</p>
                            </div>
                            <div className="flex gap-3 text-white text-[18px] mt-4 items-center">
                                <p><CgFacebook /></p>
                                <p><AiOutlineGooglePlus /></p>
                                <p><ImLinkedin2 /></p>
                                <p><AiOutlineTwitter /></p>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[50%] ">
                        <div>
                            <p className='font-medium text-white text-[30px] font-sans'>Leave Us A Massage Here</p>
                        </div>
                        <div className="mt-[30px]">
                            <div className='grid  gap-5'>
                                <div className='flex gap-5'>
                                    <input style={{ border: '1px solid #ced4da' }} type="text" placeholder='Your Name' className='flex items-center p-4  w-[218px] h-[58px] shadow-xl' />
                                    <input style={{ border: '1px solid #ced4da' }} type="text" placeholder='Your Email' className='flex items-center p-4  w-[218px] h-[58px] shadow-xl' />
                                </div>
                                <div className='flex gap-5'>
                                    <input style={{ border: '1px solid #ced4da' }} type="text" placeholder='Your Name' className='flex items-center p-4 w-[218px] h-[58px] shadow-xl' />
                                    <input style={{ border: '1px solid #ced4da' }} type="text" placeholder='Your Email' className='flex items-center p-4  w-[218px] h-[58px] shadow-xl' />

                                </div>
                                <div className='grid'>
                                    <textarea style={{ border: '1px solid #ced4da' }} className='w-[457px] h-[170px] p-4 shadow-xl' name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                                </div>
                                <div className="flex justify-between">
                                    <div></div>
                                    <button className='btnb   items-center w-[201px] h-[56px] text-white bg-[#7370D8]'>Send Message</button>
                                </div><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs