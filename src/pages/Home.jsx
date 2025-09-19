import React from 'react'
import NavBar from "../components/Navbar";
import Pro from './../assets/Pro.png'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import img1 from './../assets/1.png'
import img2 from './../assets/2.png'
import img3 from './../assets/3.png'
import img4 from './../assets/4.png'
import img5 from './../assets/5.png'
import img6 from './../assets/6.png'
import img7 from './../assets/7.png'
import img8 from './../assets/8.png'
import img9 from './../assets/9.png'

export default function Home() {
  const hc = { color: 'yellow' };

  return (
    <>
      <NavBar hc={hc} />

      {/* ส่วนบน: ข้อความ + รูปโปรไฟล์ */}
      <div className='flex items-center justify-center mr-20 mt-20'>
        <div className='text-white mr-20'>
          <h1 style={{ fontFamily: 'Lora' }} className='text-3xl'>
            Frontend Web
          </h1>
          <h1 style={{ fontFamily: 'Lora' }} className='text-3xl'>
            Developer!
          </h1>
          <br />
          <span>Hi, I'm NiniN SAU, A passionate Front-end</span>
          <br />
          <span>Web Developer based in Thailand</span>
          <br />
          <div className='flex mt-6'>
            <FaLinkedinIn className='mr-2 text-4xl bg-white text-black p-2 rounded-full' />
            <FaGithub className='mr-2 text-4xl bg-black text-white  rounded-full' />
          </div>
        </div>

        <div className='ml-20'>
          <img className='w-50' src={Pro} alt='Profile' />
        </div>
      </div>

      {/* ส่วนล่าง: รูปภาพ img1 - img9 */}
      
        <div className='flex items-center justify-center mt-30 mr-30' >
            <img className='w-8 mx-4' src={img1} alt="img1" />
            <img className='w-8 mx-4' src={img2} alt="img2" />
            <img className='w-8 mx-4' src={img3} alt="img3" />
            <img className='w-8 mx-4' src={img4} alt="img4" />
            <img className='w-8 mx-4' src={img5} alt="img5" />
            <img className='w-8 mx-4' src={img6} alt="img6" />
            <img className='w-8 mx-4' src={img7} alt="img7" />
            <img className='w-8 mx-4' src={img8} alt="img8" />
            <img className='w-8 mx-4' src={img9} alt="img9" />
        </div>
        
    </>
  );
}