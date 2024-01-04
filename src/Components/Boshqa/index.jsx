import React from 'react'

import Myimg1 from "../../images/blog/bl1.jpg"
import Myimg2 from "../../images/blog/bl2.jpg"
import Myimg3 from "../../images/blog/bl3.jpg"


function Boshqa() {
    return (
        <div>
            <section class="news">
                <div class="container">
                    <div class="news-details">
                        <div class="section-header text-center">
                            <p className='text-[35px] font-serif font-medium'>Our latest news</p>
                            <p className='text-[18px] mt-11 text-[#888888]'>
                                Pallamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum <br /> dolore eu fugiat nulla pariatur.
                            </p>
                        </div>
                        <div class="news-card news-card-pb-25">
                            <div class="row grid grid-cols-3 gap-[30px] mx-[190px]">
                                <div class="col-md-4 col-sm-6">
                                    <div class="single-news-box">
                                        <div class="news-box-bg">
                                            <img src={Myimg1} alt="blog image" />
                                            <div class="isotope-overlay">
                                                <a href="blog_single.html">
                                                    <span class="lnr lnr-link"></span>

                                                </a>
                                            </div>

                                        </div>
                                        <div class="news-box-inner">
                                            <h3>
                                                <a href="blog_single.html">
                                                    The Pros and Cons of Starting an Online Consulting Business
                                                </a>
                                            </h3>
                                            <p class="news-meta">
                                                Posted By:  <span>Mick Steven</span>  //  On <span>12th June, 2017</span>
                                            </p>
                                            <a href="#" class="learn-btn">
                                                learn more
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-6">
                                    <div class="single-news-box">
                                        <div class="news-box-bg">
                                            <img className='w-full' src={Myimg2} alt="" />
                                            <div class="isotope-overlay">
                                                <a href="blog_single.html">
                                                    <span class="lnr lnr-link"></span>

                                                </a>
                                            </div>

                                        </div>
                                        <div class="news-box-inner">
                                            <h3>
                                                <a href="blog_single.html">
                                                    8 Secrets for Your successful Business Mentor Won't Tell You
                                                </a>
                                            </h3>
                                            <p class="news-meta">
                                                Posted By:  <span>Mick Steven</span>  //  On <span>12th June, 2017</span>
                                            </p>
                                            <a href="#" class="learn-btn">
                                                learn more
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-6">
                                    <div class="single-news-box">
                                        <div class="news-box-bg">
                                            <img className='w-full' src={Myimg3} alt="" />
                                            <div class="isotope-overlay">
                                                <a href="blog_single.html">
                                                    <span class="lnr lnr-link"></span>

                                                </a>
                                            </div>

                                        </div>
                                        <div class="news-box-inner">
                                            <h3>
                                                <a href="blog_single.html">
                                                    Hire a Branding Consultant With a Similar Aesthetic to Your Own
                                                </a>
                                            </h3>
                                            <p class="news-meta">
                                                Posted By:  <span>Mick Steven</span>  //  On <span>12th June, 2017</span>
                                            </p>
                                            <a href="#" class="learn-btn">
                                                learn more
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center mt-10'>
                                <a href='/blog' className='bg-[#7370D8] flex justify-center items-center border border-[#7370D8] transition-all text-white p-4 px-[50px] font-bold mt-8 hover:border hover:border-[#7370D8] hover:text-[#7370D8] hover:bg-transparent'>LEARN MORE</a>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </div>
    )
}

export default Boshqa