import React from 'react'
import '../CSS/body.css'
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import why from '../assets/fresh.jpg'
const Whychooseus = () => {
  return (
    <div className='flex flex-row md:flex-col items-center justify-center bg-gray-200 h-auto '>
       <div>
       <h1 className='text-green-500 text-2xl font-semibold my-8'>Why Choose Us</h1>
       </div>
       <div className='flex flex-row '>
            <div>
                <img src={why}className=' px-8 py-4 h-3/2 ml-4 '  alt="fresh" />
                </div>
        <div>
        <h2 className='text-black font-bold text-3xl my-3 flex flex-row justify-center items-center '>Get Products That's Truly Organic.</h2>
        <p className='text-black font-normal text-lg px-12 py-4 leading-8 '>Hariyali Abhiyan is a company that aims to provide customers with truly organic products. The company employs natural farming techniques, such as organic farming, permaculture, and agroforestry, to produce food that is free from synthetic chemicals and pesticides. The company's goal is to ensure that its farming practices are sustainable and eco-friendly, contributing to the overall health of the ecosystem. By prioritizing top-quality, healthy food production, the company aims to provide customers with food that is not only safe but also highly nutritious. The company's commitment to eco-friendly farming techniques ensures that its products are truly organic, produced using sustainable and eco-friendly farming methods.</p>
        </div>
       </div>
       {/* start for box */}
       <div className='flex flex-row p-4'>

        <div  className='w-[33] object-cover m-6 shadow-md shadow-gray-500 cursor-pointer overflow-hidden'>
            <img className='hover:scale-x-125 duration-500 ease-in-out' src={why} alt="fresh" />
            <p className='fot-semibold text-2xl  bg-green-600 flex  justify-center text-white py-2'>Top Quality Healthy Food Production</p>
        </div >
        {/* second */}
        <div  className='w-[33] object-cover m-6 shadow-md shadow-gray-500 cursor-pointer overflow-hidden'>
            <img className='hover:scale-x-125 duration-500 ease-in-out' src={why} alt="fresh" />
            <p className='fot-semibold text-2xl  bg-green-600 flex  justify-center text-white py-2'>Top Quality Healthy Food Production</p>
        </div >
        {/* third */}
        <div  className='w-[33] object-cover m-6 shadow-md shadow-gray-500 cursor-pointer overflow-hidden'>
            <img className='hover:scale-x-125 duration-500 ease-in-out' src={why} alt="fresh" />
            <p className='fot-semibold text-2xl  bg-green-600 flex  justify-center text-white py-2'>Top Quality Healthy Food Production</p>
        </div >
       </div>
    </div>
  )
}

export default Whychooseus
