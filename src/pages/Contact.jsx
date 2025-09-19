import React from 'react'
import Navbar from '../components/Navbar'
function Contact() {
  const cc = { color: "yellow" };
  return (
    <>
      <Navbar cc={cc} />
       
        <div className='text-white ml-20  flex items-right justify-right mt-10'>
            <h1 style={{ fontFamily: 'Lora' }} className='text-5xl font-extrabold ml-5'>
              Contact
            </h1>
        </div>
        <div className='text-white flex items-center justify-center'>
            <p style={{ fontFamily: 'Lora' }} className='text-3xl font-extrabold mt-10 mb-10 '>
               Let's Connect
            </p>
        </div>
        <div className='text-white flex items-center justify-center'>
            <p style={{ fontFamily: 'Lora' }} className='text-2xl font-extrabold  '>
              Don't be shy! Feel free to reach out for collaborations.
            </p>
        </div>
        
        
        </>
  )
}

export default Contact
