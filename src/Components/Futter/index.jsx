import React from 'react'

import Imh from "../../images/logo/logo.png"

function Futter() {
    return (

        <div>
            <div className='bg-[#212135]'>
                <div className='grid grid-cols-4 mx-[180px] py-[100px] gap-16 '>
                    <div>
                        <div>
                            <img src={Imh} alt="" />
                        </div>
                        <div>
                            <p className='text-[17px] mt-7 text-[#aaa]'>Lorem ipsum dolor sit amt <br /> conetur adcing elit. Sed do <br /> eiusod tempor utslr. Ut laboris <br /> nisi ut aute irure dolor in rein <br /> velit esse.</p>
                        </div>
                    </div>
                    <div className='ml-[60px]'>
                        <div>
                            <p className='text-[22px] font-serif text-white'>Useful Links</p>
                        </div>
                        <div className='text-[#aaa]'>
                            <p className='mt-4'>Home</p>
                            <p className='mt-4'>About</p>
                            <p className='mt-4'>Service</p>
                            <p className='mt-4'>Portfilo</p>
                            <p className='mt-4'>Blog</p>
                            <p className='mt-4'>Contact Us</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className='text-[22px] font-serif text-white'>From The News</p>
                        </div>
                        <div>
                            <p className='text-[#aaa] mt-5'>The Pros and Cons of <br /> Starting an Online <br /> Business.</p>
                            <p className='text-[12px] mt-3 text-[#aaa]'>12th June 2017</p>
                            <div className='border-[1px] border-[#aaa] w-full mt-6'></div>
                            <p className='text-[#aaa] mt-5'>The Pros and Cons of <br /> Starting an Online <br /> Business.</p>
                            <p className='text-[12px] mt-3 text-[#aaa]'>12th June 2017</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className='text-[22px] font-serif text-white'>Our Newsletter</p>
                        </div>
                        <div>
                            <p className='text-[#aaa] mt-5'>
                                Subscribe to our newsletter to get <br /> the latest News and offers..
                            </p>
                        </div>
                        <div className='flex mt-8'>
                            <input className='placeholder:font-semibold placeholder:text-[#8b8b8b] p-4 bg-[#3D3D4D]' placeholder='Email Address' type="text" />
                            <button className='p-4 bg-[#7370D8] text-white'>Go</button>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="footer-copyright">
                <div class="container">
                    <div class="row flex justify-between px-[190px] items-center">
                        <div class="col-sm-7">
                            <div class="foot-copyright pull-left pt-[35px]">
                                <p>
                                    &copy; All Rights Reserved. Designed and Developed by
                                    <a href="https://www.themesine.com">ThemeSINE</a>
                                </p>
                            </div>
                        </div>
                        <div class="col-sm-5">
                            <div class="foot-menu pull-right pt-[35px]
						">
                                <ul>
                                    <li ><a href="#">legal</a></li>
                                    <li ><a href="#">sitemap</a></li>
                                    <li ><a href="#">privacy policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div id="scroll-Top">
                        <i class="fa fa-angle-double-up return-to-top" id="scroll-top" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back to Top" aria-hidden="true"></i>
                    </div>
                </div>

            </footer>
        </div>
    )
}

export default Futter