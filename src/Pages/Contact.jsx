import React from 'react'
import '../CSS/body.css'
import { BsSendFill } from "react-icons/bs";
import {FaPhone  } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import map from '../assets/map.jpg'
const Contact = () => {
  return (
    <>
   <div className='my-bg justify-center items-center text-center h-[70vh] w-[100vw] bg-gray-400'>
   </div>
   <div className='bg-gray-200'>
   <h1 className='font-extrabold text-2xl text-center text-black  py-6  '>Contact Us</h1>
   </div>
   <div className='flex flex-col lg:flex-row justify-between items-center bg-gray-200'>
    {/* for contact form */}
    <div className='flex flex-col p-20 shadow-lg shadow-black m-9 bg-white'>
        <div className='my-2'>
            <h1 className='font-semibold text-lg text-green-600'>Have Questions?</h1>
        </div >
        <div className='my-2'>
            <h1 className=' text-black font-extrabold text-3xl'>Send us a message</h1>
        </div>
        <div className='my-2'>
            <input type="text" placeholder='Enter your name' className='border border-solid border-gray-900 rounded-sm lg:w-[30vw] h-10' />
        </div>
        <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center my-2'>
            <div className=' my-2 lg:pr-3'><input type="text" placeholder='Enter phone' className='border border-solid border-gray-900 rounded-sm h-10' /></div>
            <div className='my-2 lg:px-2'><input type="text" placeholder='Enter Email' className='border border-solid border-gray-900 rounded-sm h-10'  /></div>
        </div>
        <div className='my-2'>
            <input type="textarea" placeholder='Enter Message here'className='border border-solid border-gray-900 rounded-sm lg:w-[30vw] h-24' />
        </div>
        <div>
            <button className='flex flex-row shadow-md shadow-black rounded-md p-4 bg-green-600 hover:bg-green-500 hover:scale-105 text-black'><BsSendFill />Get in Touch</button>
        </div>

    </div>
    {/* for information providing */}
    <div className='m-8'>
        <div><h1 className='font-extrabold text-2xl font-poppins text-black my-10'>Contact Information</h1></div>
        <div><p className='text-black font-sans my-3 '>Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing.</p></div>
        <div>
            <span className='flex flex-row my-4'><FaPhone color='green'/>+977 985 110 8121</span>
            <span className='flex flex-row my-4'><FaLocationDot color='blue'/>Bhimsengola Marg, Baneshwor, Kathmandu</span>
            <span className='flex flex-row my-4'><MdEmail color='red'/>abhiyanhariyali@gmail.com</span>
        </div>
        <div className='object-fit'>
            <img className='lg:h-[30vh]  border border-solid border-green-600 rounded-md' src={map} alt="map" />
        </div>

    </div>

   </div>
    </>
  )
}

export default Contact