import { FaQuoteLeft } from "react-icons/fa";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import SSAA from "../../images/client/testimonial1.jpg"
import SSAA2 from "../../images/client/testimonial2.jpg"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Carusel() {
  return (
    <div className="mt-20">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="py-[100px] bg-[#F9FAFF]">
            <div>
              <p className='font-medium text-[35px] font-serif'>What Our Client Say About Us</p>
            </div>
            <div className='flex justify-center mt-16'>
              <img className='w-[130px] border-[3px] border-[#7370D8] rounded-full h-[130px]' src={SSAA} alt="" />
            </div>

            <div className="flex justify-center  mt-[70px]">
              <FaQuoteLeft size={'40px'} color="#BEBEE8" />
            </div>

            <div>
              <p className="font-sans font-bold text-[24px] mt-11 text-[#888888]">									Lorem ipsum dolor sit amet conse adipisicing elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua. Ut enim ad minim veniam..
              </p>
            </div>

            <div>
              <p className="text-[24px] text-[#7370D8] font-semibold mt-5">
                Kevin watson
              </p>
              <p className="text-[18px] text-[#888888]">CEO, Kingston</p>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="py-[100px] bg-[#F9FAFF]">
            <div>
              <p className='font-medium text-[35px] font-serif'>What Our Client Say About Us</p>
            </div>
            <div className='flex justify-center mt-16'>
              <img className='w-[130px] border-[3px] border-[#7370D8] rounded-full h-[130px]' src={SSAA} alt="" />
            </div>

            <div className="flex justify-center  mt-[70px]">
              <FaQuoteLeft size={'40px'} color="#BEBEE8" />
            </div>

            <div>
              <p className="font-sans font-bold text-[24px] mt-11 text-[#888888]">									Lorem ipsum dolor sit amet conse adipisicing elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua. Ut enim ad minim veniam..
              </p>
            </div>

            <div>
              <p className="text-[24px] text-[#7370D8] font-semibold mt-5">
                Kevin watson
              </p>
              <p className="text-[18px] text-[#888888]">CEO, Kingston</p>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="py-[100px] bg-[#F9FAFF]">
            <div>
              <p className='font-medium text-[35px] font-serif'>What Our Client Say About Us</p>
            </div>
            <div className='flex justify-center mt-16'>
              <img className='w-[130px] border-[3px] border-[#7370D8] rounded-full h-[130px]' src={SSAA} alt="" />
            </div>

            <div className="flex justify-center  mt-[70px]">
              <FaQuoteLeft size={'40px'} color="#BEBEE8" />
            </div>

            <div>
              <p className="font-sans font-bold text-[24px] mt-11 text-[#888888]">									Lorem ipsum dolor sit amet conse adipisicing elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua. Ut enim ad minim veniam..
              </p>
            </div>

            <div>
              <p className="text-[24px] text-[#7370D8] font-semibold mt-5">
                Kevin watson
              </p>
              <p className="text-[18px] text-[#888888]">CEO, Kingston</p>
            </div>

          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
