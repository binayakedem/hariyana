import React from 'react'
import { LuCheckSquare } from "react-icons/lu";
import veg from '../assets/nutrientveg.jpg'
import { FaPhone } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import herb from '../assets/medicinalherb.jpg'
import '../CSS/body.css'
const ServiceDetail = () => {
  return (
    <>
    <div className='h-[70vh] w-[100vw] my-bg'>

    </div>
    <div className='w-[100vw] p-6 grid lg:grid-cols-2 sm:grid-cols-1 bg-gray-100'>
        <div>
            <div>
            <div className='m-6 flex flex-col bg-gray-50 w-auto sm:p-0 p-4'>
                <h1 className='my-4 font-bold text-xl underline'>Learn More...</h1>
<div className="relative inline-block mb-4">
  <button className="rounded-sm w-[300px] relative overflow-hidden px-4 py-2 bg-yellow-600 text-white   group">
    <span className="absolute left-0 top-0 bg-yellow-900 w-0 h-full transition-all duration-300 ease-in-out group-hover:w-full"></span>
    <span className="relative z-10">Agricultural Products</span>
  </button>
</div>
<div className="relative inline-block mb-4">
  <button className="rounded-sm w-[300px] relative overflow-hidden px-4 py-2 bg-yellow-600 text-white   group">
    <span className="absolute left-0 top-0 bg-yellow-900 w-0 h-full transition-all duration-300 ease-in-out group-hover:w-full"></span>
    <span className="relative z-10 ">Fresh fruits</span>
  </button>
</div>
<div className="relative inline-block mb-4">
  <button className="rounded-sm w-[300px] relative overflow-hidden px-4 py-2 bg-yellow-600 text-white   group">
    <span className="absolute left-0 top-0 bg-yellow-900 w-0 h-full transition-all duration-300 ease-in-out group-hover:w-full"></span>
    <span className="relative z-10 ">Organic vegetables</span>
  </button>
</div>
        </div>
            <h1 className=' text-3xl  font-extrabold text-black text-center my-4'>Agriculture Products</h1>
           <div >   
                <p className='text-black font-normal my-4'>Welcome to Hariyali Abhiyan, where we are dedicated to providing a wide range of high-quality organic products. Our commitment to sustainable and eco-friendly practices ensures that all our offerings, from fresh fruits and vegetables to natural medicinal herbs, promote a healthy lifestyle and contribute to the preservation of the environment. Explore our diverse selection of organic products and join us in supporting a greener future.</p>
           </div>
            </div>
            <div>
                <div className='flex flex-row my-6 text-center items-center'>
                    <h1 className='font-bold text-green-700 text-center text-2xl'>Our Products</h1>
                </div>
    {/* next */}
    <div className="relative group mb-5">
      <div className="rounded-sm bg-green-600 p-2  cursor-pointer group-hover:bg-green-700 text-white">
        <span className='flex flex-row font-semibold text-lg '><LuCheckSquare  className='mr-2'/>Fresh Fruits .....</span>
      </div>
      <div className="absolute z-50 left-0 w-full bg-yellow-600 transition-all duration-500 ease-in-out opacity-0 transform translate-x-[-1000px] group-hover:opacity-100 group-hover:translate-x-0">
        <div className='grid grid-cols-2'>
        <div>
        <p className=" text-white p-4">
          Discover the juiciest and most flavorful assortment of organic fruits, carefully cultivated to bring nature's goodness to your table. From succulent berries to crisp apples, our fresh fruits are a true delight for the senses.
        </p>
        </div>
        <div className='max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl'>
                <img className='w-full h-auto' src={veg} alt="veg-picture" />
        </div>
        </div>
      </div>
    </div>
    <div className="relative group mb-5">
      <div className="rounded-sm bg-green-600 p-2  cursor-pointer group-hover:bg-green-700 text-white">
        <span className='flex flex-row font-semibold text-lg '><LuCheckSquare  className='mr-2'/>Nutrient-Rich Vegetables .....</span>
      </div>
      <div className="absolute z-50 left-0 w-full bg-yellow-600 transition-all duration-500 ease-in-out opacity-0 transform translate-x-[-1000px] group-hover:opacity-100 group-hover:translate-x-0">
        <div className='grid grid-cols-2'>
        <div>
        <p className=" text-white p-4">
        Experience the vibrant colors and exceptional flavors of our organically grown vegetables. Packed with essential nutrients, our vegetables are a testament to our unwavering commitment to sustainable farming practices.
        </p>
        </div>
        <div className='max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl'>
                <img className='w-full h-auto' src={veg} alt="veg-picture" />
        </div>
        </div>
      </div>
    </div>
    {/* next */}
    <div className="relative group mb-5">
      <div className="rounded-sm bg-green-600 p-2  cursor-pointer group-hover:bg-green-700 text-white">
        <span className='flex flex-row font-semibold text-lg '><LuCheckSquare  className='mr-2'/>Medicinal Herbs  ....</span>
      </div>
      <div className="absolute z-50 left-0 w-full bg-yellow-600 transition-all duration-500 ease-in-out opacity-0 transform translate-x-[-1000px] group-hover:opacity-100 group-hover:translate-x-0">
        <div className='grid grid-cols-2'>
        <div>
        <p className=" text-white p-4">
        Unlock the power of nature with our collection of natural medicinal herbs. Sourced and harvested with care, these herbs are perfect for promoting holistic well-being and are a testament to our dedication to preserving traditional herbal knowledge.
        </p>
        </div>
        <div className='rounded-md max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl'>
                <img className='w-full h-auto rounded-md' src={veg} alt="veg-picture" />
        </div>
        </div>
      </div>
    </div>
    {/* button */}
    <div className='object-cover overflow-hidden'>
    <img className='w-[100%] h-[100%] cursor-pointer hover:scale-125 duration-1000' src={herb} alt="picture" />
    </div>

    </div>
        </div>
        {/* contact section */}
        <div className='p-9'>
        
            <div>
                <h1 className='my-6 text-3xl  font-extrabold text-black'>Speciality Products</h1>
                <p className='text-black mb-6'>In addition to our core offerings, we also provide a range of specialty products, including honey, preserves, and natural skincare items. Each of these products is crafted with the same level of care and commitment to sustainability that defines our farm.</p>
                <h1 className='my-6 text-3xl  font-extrabold text-black'>Harvest Innovations</h1>
                <p  className='text-black mb-6'>We are passionate about revolutionizing the harvest process. Through careful planning and the integration of modern technologies, we have developed innovative harvest methods that maximize yield while minimizing environmental impact. Experience the next generation of sustainable harvesting with us.</p>
                <h1 className='my-6 text-3xl  font-extrabold text-black'>Project Experiences</h1>
                <p  className='text-black mb-6'>Join us as we share our firsthand experiences in the world of organic farming. From overcoming challenges to celebrating successes, our team is dedicated to documenting and sharing the valuable lessons we've learned. Get inspired by our project experiences and be part of our organic farming community. This example content provides an overview of the agricultural products offered, highlights the farm's commitment to sustainable practices, and invites visitors to engage with the farm's journey and experiences.</p>
                
            </div>
            <div className='flex flex-col justify-center items-center text-center shadow-sm shadow-gray-900 bg-green-200 p-9 cursor-pointer hover:scale-105 duration-500 overflow-hidden hover:bg-green-100 transition-all ease-in-out'>
            <h1 className='text-xl font-extrabold text-black py-4 underline'>Need Help?</h1>
            <p className='text-normal font-normal text-black py-6'>Speak with a human to filling out a form? call corporate office and we will connect you with a team member help.</p>
            <p className='flex flex-row py-4'><span><FaPhone color='green' /></span><span>+(977) 9851108121</span></p>
            <p className='flex flex-row py-4 underline'><span><MdMail color='red' /></span><span>abhiyanhariyali@gmail.com</span></p>
            <button className='px-4 py-2 font-semibold text-xl bg-green-600 text-white shadow-lg shadow-gray-100 hover:bg-green-800 duration-300 transition ease-in-out'>Contact us</button>
        </div>
        </div>
   
       
    </div>
    </>
  )
}

export default ServiceDetail