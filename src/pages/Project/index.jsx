import React from 'react'
import ProjectC from '../../Components/ProjectC'
import Soz from '../../Components/Soz'
import Fuctoinal from '../../Components/Fuctional'
import Pushti from '../../Components/Pushti'
import { useLocation } from 'react-router'

function Project() {



  return (
    <div>
      <ProjectC />
      <Soz />
      <Fuctoinal />
      <div className='mt-[30px]'>

      </div>
      <Fuctoinal />
      <div className='flex justify-center my-10'>
        <button className='bg-[#7370D8] border border-[#7370D8] transition-all text-white p-4 px-[50px] font-bold mt-8 hover:border hover:border-[#7370D8] hover:text-[#7370D8] hover:bg-transparent'>LEARN MORE</button>
      </div>
      <Pushti/>
    </div>
  )
}

export default Project