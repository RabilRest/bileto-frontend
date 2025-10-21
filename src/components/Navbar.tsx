"use client"
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {

    const images = [ 
  "/coway.png",
  "/coway2.jpg"
]
   const [current, setCurrent] = useState(0);
    const length = images.length;

    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };  
    
  return <div className="flex flex-col justify-between">
    <div className ="flex justify-between">
    <div className="font-extrabold text-2xl  dark:text-background text-blue-600">Billeto-Id</div>
    <div className="flex gap-4"> 
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register</button>
    </div>
  </div>;
  <div className="flex mt-0 justify-center min-h-screen bg-gray-100">
  <div className="absolute">
    <input
      type="text"
      placeholder="Search..."
      className="w-100 rounded-full border border-gray-300 bg-white py-2 pl-4 pr-10 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      className="absolute right-2 top-5 -translate-y-1/2 text-gray-500 hover:text-blue-500"
    >
      🔍
    </button>

  </div>
  <div className="mt-20">
 <div className= "relative flex w-screen h-120 mb-10 overflow-hidden " >
      {images.map((img, index) => (
        <div 
        key={index}
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
          ${index === current ? 'opacity-100' : 'opacity-0'}
        `}
        >
          <button className="absolute top-[50%] left-8 text-3xl text-white z-10" onClick={prevSlide}> &#10094; </button>
            <div className="absolute inset-0 pointer-events-none 
    [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] 
    [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]" >

          <Image
            src={img}
            alt="Vercel Logo"
            width={1400}
            height={1000}
            className="h-full w-screen md:object-cover object-contain "
            priority
          />
        </div>

           <button className="absolute top-[50%] right-8 text-3xl text-white z-10" onClick={nextSlide}> &#10095; </button>
        </div>
        
      ))}
  
    

      
     
      </div>
      </div>
  </div>
</div>

 
};

export default Navbar;
