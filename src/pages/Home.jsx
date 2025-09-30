import NavBar from "../components/Navbar";
import Pro from './../assets/Pro.png'
import { FaLinkedin } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import img1 from './../assets/1.png'
import img2 from './../assets/2.png'
import img3 from './../assets/3.png'
import img4 from './../assets/4.png'
import img5 from './../assets/5.png'
import img6 from './../assets/6.png'
import img7 from './../assets/7.png'
import img8 from './../assets/8.png'
import img9 from './../assets/9.png'
function Home() {
  const hc = {color: "yellow" };

  return (
    <>
      <NavBar hc={hc} />
      <div className='flex items-center justify-center mt-20'>
        {/*ทางซ้าย*/}
        <div className="text-white mr-20">
          <h1 style={{fontFamily: 'Lora'}} className="text-3xl">Frontend Web</h1>
          <h1 style={{fontFamily: 'Lora'}} className="text-3xl">Developer</h1>
          <br />
          <span>
            Hi
          </span>
          <br />
          <span>Web</span>
        </div>

        <div className="flex mt-5">
          <FaLinkedin className="mr-2 text-4xl bg-white text-black p-2 rounded-4xl"/>
          <BsGithub className="mr-2 text-4xl"/>
        </div>
      </div>
      {/*ทางขวา*/}
      <div className="ml-30">
      <img className="w-70" src={Pro} alt="Pro" />
      </div>
    <div className="flex items-center justify-center mt-20">
       <h1 className="text-2xl text-white">my</h1>

    </div>
    <div className="flex items-center justify-center mt-20">
      <img className="w-8 mx-2" src={img1}/>
      <img className="w-8 mx-2" src={img2}/>
      <img className="w-8 mx-2" src={img3}/>
      <img className="w-8 mx-2" src={img4}/>
      <img className="w-8 mx-2" src={img5}/>
      <img className="w-8 mx-2" src={img6}/>
      <img className="w-8 mx-2" src={img7}/>
      <img className="w-8 mx-2" src={img8}/>
      <img className="w-8 mx-2" src={img9}/>

    </div>
    </>
  );
}

export default Home;
