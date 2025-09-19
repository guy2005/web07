import React from 'react'
import NavBar from "../components/Navbar";
import img1 from './../assets/1.png'
import Ar from './../assets/Ar.jpg'
import {  FaGithub } from 'react-icons/fa';
function Protfolio() {
  const pc = { color: "yellow" };
  return (
    <>
      <NavBar pc={pc} />
{/*------------------------------------------------------------------------------------------------------------- */}
      {/* หน้าที่ 1 */}

        {/* รูปที่ 1 */}
        <div className='flex items-center justify-center mt-10'>
            <div className='text-white ml-20 mb-40'>
                <h1 style={{ fontFamily: 'Lora' }} className='text-5xl font-extrabold ml-5'>
                  Protfolio
                </h1>
                <img className='w-80 h-80 mt-10' src={Ar} alt="" />
            </div>

            {/* เนื้อหา 1 */}
          <div className="w-3/5 flex flex-col h-full ml-30 mb-10">
            <p className="text-xl font-semibold mb-6 leading-relaxed mr-50 text-white text-center">
              Developer based in Thailand
            </p>

            <div className='text-base leading-relaxed mt-6 mb-20 mr-10 text-white'>
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Nesciunt rem odit labore unde nemo omnis sequi
              hic sit laudantium repellendus recusandae vitae ea
              laborum, ipsa nisi eos autem. Blanditiis consequuntur
              velit nesciunt aperiam odit excepturi repellat libero in
              enim praesentium! Ex dicta est suscipit ipsam
              voluptate tempora voluptatum quam distinctio minus
              saepe nobis nulla amet fugiat sit autem deserunt
              asperiores vitae ea, libero sed! Libero fugit non,
              placeat nulla quae odio asperiores ratione!
              Accusantium placeat dolorem minus eos excepturi
              modi.
              <br />
              <div className='flex mt-14'>
              <button className="ml-20 px-8 py-1 border border-white rounded-3xl text-white block">See More</button>
              <FaGithub className='ml-25 w-11 h-11 text-4xl bg-black text-white ' />
              <span className='ml-1 mt-3'>GitHub</span>
              </div>
            </div>
          </div>               
        </div>
{/*------------------------------------------------------------------------------------------------------------- */}
        {/* หน้าที่ 2 */}
        
          {/* เนื้อหา 2 */}
        <div className='flex items-center justify-center '>
          <div className="w-3/5 flex flex-col h-full ml-30 mb-20">
            <p className="text-xl font-semibold mb-6 leading-relaxed mr-50 text-white text-center">
              Developer based in Thailand
            </p>
            
            <div className='text-base leading-relaxed mt-6 mb-20 mr-10 text-white'>
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Nesciunt rem odit labore unde nemo omnis sequi
              hic sit laudantium repellendus recusandae vitae ea
              laborum, ipsa nisi eos autem. Blanditiis consequuntur
              velit nesciunt aperiam odit excepturi repellat libero in
              enim praesentium! Ex dicta est suscipit ipsam
              voluptate tempora voluptatum quam distinctio minus
              saepe nobis nulla amet fugiat sit autem deserunt
              asperiores vitae ea, libero sed! Libero fugit non,
              placeat nulla quae odio asperiores ratione!
              Accusantium placeat dolorem minus eos excepturi
              modi.
              <br />
              <div className='flex mt-14'>
              <button className="ml-20 px-8 py-1 border border-white rounded-3xl text-white block">See More</button>
              <FaGithub className='ml-25 w-11 h-11 text-4xl bg-black text-white ' />
              <span className='ml-1 mt-3'>GitHub</span>
              </div>
            </div>
            
          {/* รูปที่ 2 */}
          </div>
          <div className='flex items-center justify-center'>
            <div className='text-white mr-10 ml-10 mb-40'>
              <img className='w-80 h-80' src={Ar} alt="" />
            </div>
          </div>                   
        </div>
{/*------------------------------------------------------------------------------------------------------------- */}
      {/* หน้าที่ 3 */}

        {/* รูปที่ 3 */}
        <div className='flex items-center justify-center '>
            <div className='text-white ml-20 mb-40'>
                <img className='w-80 h-80' src={Ar} alt="" />
            </div>

            {/* เนื้อหา 3 */}
          <div className="w-3/5 flex flex-col h-full ml-30 mb-20">
            <p className="text-xl font-semibold mb-6 leading-relaxed mr-50 text-white text-center">
              Developer based in Thailand
            </p>

            <div className='text-base leading-relaxed mt-6 mb-20 mr-10 text-white'>
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Nesciunt rem odit labore unde nemo omnis sequi
              hic sit laudantium repellendus recusandae vitae ea
              laborum, ipsa nisi eos autem. Blanditiis consequuntur
              velit nesciunt aperiam odit excepturi repellat libero in
              enim praesentium! Ex dicta est suscipit ipsam
              voluptate tempora voluptatum quam distinctio minus
              saepe nobis nulla amet fugiat sit autem deserunt
              asperiores vitae ea, libero sed! Libero fugit non,
              placeat nulla quae odio asperiores ratione!
              Accusantium placeat dolorem minus eos excepturi
              modi.
              <br />
              <div className='flex mt-14'>
              <button className="ml-20 px-8 py-1 border border-white rounded-3xl text-white block">See More</button>
              <FaGithub className='ml-25 w-11 h-11 text-4xl bg-black text-white ' />
              <span className='ml-1 mt-3'>GitHub</span>
              </div>
            </div>
          </div>               
        </div>
{/*------------------------------------------------------------------------------------------------------------- */}
        {/* หน้าที่ 4 */}

         {/* เนื้อหา 4 */}
        <div className='flex items-center justify-center '>
          <div className="w-3/5 flex flex-col h-full ml-30 mb-20">
            <p className="text-xl font-semibold mb-6 leading-relaxed mr-50 text-white text-center">
              Developer based in Thailand
            </p>
            
            <div className='text-base leading-relaxed mt-6 mb-20 mr-10 text-white'>
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Nesciunt rem odit labore unde nemo omnis sequi
              hic sit laudantium repellendus recusandae vitae ea
              laborum, ipsa nisi eos autem. Blanditiis consequuntur
              velit nesciunt aperiam odit excepturi repellat libero in
              enim praesentium! Ex dicta est suscipit ipsam
              voluptate tempora voluptatum quam distinctio minus
              saepe nobis nulla amet fugiat sit autem deserunt
              asperiores vitae ea, libero sed! Libero fugit non,
              placeat nulla quae odio asperiores ratione!
              Accusantium placeat dolorem minus eos excepturi
              modi.
              <br />
              <div className='flex mt-14'>
              <button className="ml-20 px-8 py-1 border border-white rounded-3xl text-white block">See More</button>
              <FaGithub className='ml-25 w-11 h-11 text-4xl bg-black text-white ' />
              <span className='ml-1 mt-3'>GitHub</span>
              </div>
            </div>
          </div>

          {/* รูปที่ 4 */}
          <div className='flex items-center justify-center'>
            <div className='text-white mr-10 ml-10 mb-40'>
              <img className='w-80 h-80' src={Ar} alt="" />
            </div>
          </div>                   
        </div>
    </>
  );
}

export default Protfolio;
