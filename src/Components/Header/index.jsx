import React from 'react'

function Header() {
  return (
    <div className='overflow-hidden'>
        <div className='bg-hero'>
            <div className='ml-[290px]'>
              <p className='text-white text-[50px] font-serif pt-[170px] '>Consult Your<br />Business With Us</p>
              <p className='text-[20px] mt-5 text-white'>We are the unique Consultancy Farm for your business solution, That is <br /> ready to take challenge and knockout your business problems.</p>
              <div className='flex gap-6 mt-7'>
                <button className='p-[15px] border border-white bg-white text-[#7370D8] text-[15px] font-semibold px-[35px] hover:bg-transparent hover:text-white hover:transition-all'>GET STARDET</button>
                <button className='p-[15px] border border-white bg-white text-[#7370D8] text-[15px] font-semibold px-[35px] hover:bg-transparent hover:text-white hover:transition-all'>EXPLORE MORE</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Header