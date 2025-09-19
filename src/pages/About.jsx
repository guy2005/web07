// About.jsx (โค้ดสำหรับจัดกึ่งกลางและชิดล่าง)

import React from 'react';
import NavBar from "../components/Navbar";
import Pro from './../assets/Pro.png';

function About() {
  const ac = { color: "yellow" };
  return (
    <>
      <NavBar ac={ac} />

      {/* 1. SECTION หลัก: flex items-center เพื่อจัดกึ่งกลางแนวตั้ง */}
      <section className="flex max-w-7xl mx-auto px-5 min-h-screen pt-20 pb-20 text-white **items-center**">

        {/* 2. คอลัมน์ซ้าย (About Me): w-2/5 */}
        <div className="w-2/5 pr-14 flex flex-col items-center">
          <h1 style={{ fontFamily: 'Lora' }} className='text-5xl mb-8'>
            About Me
          </h1>
          <img className='w-48 h-48 rounded-full object-cover mt-10' src={Pro} alt='Profile' />
        </div>

        {/* 3. คอลัมน์ขวา (เนื้อหา): w-3/5, flex-col, ***m-0 p-0*** */}
        <div className="w-3/5 flex flex-col h-full ">

          {/* HEADER (Hi, I'm Ninnin SAU...) */}
          <p className="text-xl font-semibold mb-6 leading-relaxed mr-50">
            Hi, I'm Ninnin SAU. A passionate Front-end Web
            Developer based in Thailand.
          </p>

          {/* ย่อหน้า (Lorem ipsum...) */}
          <div className='text-base leading-relaxed mt-6 mb-20 mr-50'>
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
          </div>

          <div className="mt-auto w-full">
            <button className="-mt-10 px-8 py-3 border border-white rounded-3xl text-white block ">
              Download CV
            </button>
          </div>


        </div>
      </section>
    </>
  );
};

export default About;