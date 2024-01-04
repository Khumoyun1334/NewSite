import React from 'react'
import Imgg1 from "../../images/client/client2.png"
import Imgg2 from "../../images/client/client3.png"
import Imgg3 from "../../images/client/client4.png"
import Imgg4 from "../../images/client/client5.png"
import Imgg5 from "../../images/client/client1.png"


function ImgC() {
  return (
    <div>
        <div className='bg-[#7370D8] flex px-[190px] p-24 justify-between ' >
            <img src={Imgg1} alt="" />
            <img src={Imgg2} alt="" />
            <img src={Imgg3} alt="" />
            <img src={Imgg4} alt="" />
            <img src={Imgg5} alt="" />

        </div>
    </div>
  )
}

export default ImgC