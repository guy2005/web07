import React from 'react'
import NavBar from "../components/Navbar";
import {  FaGithub } from 'react-icons/fa';
import Solo from './../assets/Solo.jpg'
import Gojo from './../assets/Gojo.jpg'
import Aqua from './../assets/Aqua.webp'
import Arr from './../assets/Arr.jpg'
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
                  เมะเรื่อง
                </h1>
                <img className='w-80 h-90 mt-10' src={Solo} alt="" />
            </div>

            {/* เนื้อหา 1 */}
          <div className="w-3/5 flex flex-col h-full ml-30 mb-10">
            <p className="text-xl font-semibold mb-6 leading-relaxed mr-50 text-white text-center">
              Solo Leveging
            </p>

            <div className='text-base leading-relaxed mt-6 mb-20 mr-10 text-white'>
              โลกที่เกิด "เกต" เชื่อมมิติกับดันเจี้ยน และมนุษย์ที่มีพลังพิเศษเรียกว่า 
              "ฮันเตอร์" พระเอก ซองจินอู ฮันเตอร์ที่อ่อนแอที่สุดในโลก 
              ได้รับโอกาสครั้งที่สองจากระบบลึกลับที่ทำให้เขาสามารถ "เลเวลอัพ" 
              ได้อย่างไร้ขีดจำกัด เพื่อก้าวขึ้นเป็นฮันเตอร์ที่แข็งแกร่งที่สุด
              <br />
              <div className='flex mt-14'>
              {/*<button className="ml-20 px-8 py-1 border border-white rounded-3xl text-white block">See More</button>*/}
              <a href="https://www.google.com/search?q=https://www.netflix.com/th/title/81691129" className="ml-20 px-8 py-2 border-3 hover:underline hover:decoration-red-500 hover:decoration-3 border-red-500 rounded-4xl text-white block" target="_blank"> 
              View netflix</a>

              <a href="https://www.google.com/search?q=https://www.bilibili.tv/th/play/2099308" className="ml-20 px-8 py-2 border-3 hover:underline hover:decoration-blue-500 hover:decoration-3 border-blue-500 rounded-4xl text-white block" target="_blank"> 
              View bilibili</a>
              {/* <RiNetflixFill className='ml-25 w-11 h-11 text-4xl bg-black text-red ' />
              <FaGithub className='ml-25 w-11 h-11 text-4xl bg-black text-white ' /> */}
              {/* <span className='ml-1 mt-3'>GitHub</span> */}
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
              Jujutsu ra Kaisen
            </p>
            
            <div className='text-base leading-relaxed mt-6 mb-20 mr-10 text-white'>
              อิตาโดริ ยูจิ นักเรียนมัธยมปลายที่มีพละกำลังเหนือมนุษย์ ได้เข้าร่วม "ชมรมเรื่องเร้นลับ" และเข้าไปพัวพันกับวัตถุต้องสาป 
              จนทำให้เพื่อนร่วมชมรมตกอยู่ในอันตราย เพื่อช่วยพวกเขา เขาตัดสินใจกลืนนิ้วต้องสาปซึ่งเป็นส่วนหนึ่งของ เรียวเมง สุคุนะ "ราชาคำสาป" 
              เข้าไป ทำให้เขากลายเป็น "ภาชนะ" ของสุคุนะ ด้วยเหตุนี้ เขาจึงต้องเข้าสู่โลกของเหล่าผู้ใช้ไสยเวทเพื่อเรียนรู้วิธีต่อสู้กับ 
              "วิญญาณคำสาป" และรวบรวมชิ้นส่วนคำสาปที่เหลือ
              <br />
              <div className='flex mt-14'>
              {/*<button className="ml-20 px-8 py-1 border border-white rounded-3xl text-white block">See More</button>*/}
              <a href="https://www.google.com/search?q=https://www.netflix.com/th/title/81691129" className="ml-20 px-8 py-2 border-3 hover:underline hover:decoration-red-500 hover:decoration-3 border-red-500 rounded-4xl text-white block" target="_blank"> 
              View netflix</a>

              <a href="https://www.google.com/search?q=https://www.bilibili.tv/th/play/2099308" className="ml-20 px-8 py-2 border-3 hover:underline hover:decoration-blue-500 hover:decoration-3 border-blue-500 rounded-4xl text-white block" target="_blank"> 
              View bilibili</a>
              </div>
            </div>
            
          {/* รูปที่ 2 */}
          </div>
          <div className='flex items-center justify-center'>
            <div className='text-white mr-10 ml-10 mb-40'>
              <img className='w-80 h-80' src={Gojo} alt="" />
            </div>
          </div>                   
        </div>
{/*------------------------------------------------------------------------------------------------------------- */}
      {/* หน้าที่ 3 */}

        {/* รูปที่ 3 */}
        <div className='flex items-center justify-center '>
            <div className='text-white ml-20 mb-40'>
                <img className='w-80 h-80' src={Aqua} alt="" />
            </div>

            {/* เนื้อหา 3 */}
          <div className="w-3/5 flex flex-col h-full ml-30 mb-20">
            <p className="text-xl font-semibold mb-6 leading-relaxed mr-50 text-white text-center">
              KonoSuma
            </p>

            <div className='text-base leading-relaxed mt-6 mb-20 mr-10 text-white'>
              คาซึมะ เด็กหนุ่มโอตาคุที่ตายอย่างน่าสมเพช ได้ถูกส่งไปเกิดใหม่ในโลกแฟนตาซีเพื่อปราบจอมมาร 
              โดยมีสิทธิ์เลือกของวิเศษติดตัวไปหนึ่งอย่าง แต่เขากลับเลือกพา อควา เทพธิดาไร้ประโยชน์ที่คอยเยาะเย้ยเขาไปด้วย 
              เรื่องราวในโลกใหม่ของเขาจึงไม่ได้เป็นฮีโร่ผู้กล้าหาญอย่างที่วาดฝัน แต่กลายเป็นชีวิตสุดวายป่วงที่เต็มไปด้วยปาร์ตี้สุดเพี้ยน 
              ทั้งเทพธิดาไร้สติ (อควา), จอมเวทสายระเบิดคลั่ง (เมกุมิน), และอัศวินมาโซคิสม์ (ดาร์คเนส)
              <br />
              <div className='flex mt-14'>
             <a href="https://www.google.com/search?q=https://www.netflix.com/th/title/81691129" className="ml-20 px-8 py-2 border-3 hover:underline hover:decoration-red-500 hover:decoration-3 border-red-500 rounded-4xl text-white block" target="_blank"> 
              View netflix</a>

              <a href="https://www.google.com/search?q=https://www.bilibili.tv/th/play/2099308" className="ml-20 px-8 py-2 border-3 hover:underline hover:decoration-blue-500 hover:decoration-3 border-blue-500 rounded-4xl text-white block" target="_blank"> 
              View bilibili</a>
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
               SPY x farm
            </p>
            
            <div className='text-base leading-relaxed mt-6 mb-20 mr-10 text-white'>
              "สนธยา" สุดยอดสายลับต้องสร้างครอบครัวปลอมๆ เพื่อปฏิบัติภารกิจลับระดับชาติ เขาจึงรับเลี้ยง อาเนีย 
              เด็กหญิงที่มีความสามารถพิเศษในการอ่านใจคน และแต่งงานกับ ยอร์ นักฆ่ามือฉมังที่แอบซ่อนตัวตน 
              ทั้งสามคนต่างมี ความลับ ที่ปกปิดซึ่งกันและกัน และพยายามใช้ชีวิตเป็นครอบครัวปกติสุดป่วน 
              โดยที่ไม่มีใครรู้ตัวตนที่แท้จริงของอีกฝ่ายเลย
              <br />
              <div className='flex mt-14'>
               <a href="https://www.google.com/search?q=https://www.netflix.com/th/title/81691129" className="ml-20 px-8 py-2 border-3 hover:underline hover:decoration-red-500 hover:decoration-3 border-red-500 rounded-4xl text-white block" target="_blank"> 
              View netflix</a>

              <a href="https://www.google.com/search?q=https://www.bilibili.tv/th/play/2099308" className="ml-20 px-8 py-2 border-3 hover:underline hover:decoration-blue-500 hover:decoration-3 border-blue-500 rounded-4xl text-white block" target="_blank"> 
              View bilibili</a>
              </div>
            </div>
          </div>

          {/* รูปที่ 4 */}
          <div className='flex items-center justify-center'>
            <div className='text-white mr-10 ml-10 mb-40'>
              <img className='w-80 h-80' src={Arr} alt="" />
            </div>
          </div>                   
        </div>
    </>
  );
}

export default Protfolio;
