import React from 'react'
import '../CSS/body.css'
import natural from '../assets/natural.jpeg'
import state from '../assets/state.jpeg'
import objective from '../assets/objective.jpeg'
import mission from '../assets/mission.jpg'
import Slider from "react-slick";
import first from '../assets/1.png'
import second from '../assets/2.png'
import third from '../assets/3.png'
import fourth from '../assets/4.png'
import sixth from '../assets/2.png'
import fifth from '../assets/3.png'
const AboutUs = () => {
  return (
    <>
      <div className='my-bg h-[70vh] w-[100vw]'></div>
      <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
        <div className='overflow-hidden  p-9'>
          <img className='rounded-lg hover:scale-90 duration-500 ease-in-out cursor-pointer' src={natural} alt="natural" />
        </div>
        <div className='p-4'>
          <h1 className='text-center font-bold text-xl text-black my-3'>
            Natural Farming</h1>
          <h2 className='text-xl font-bold text-green-600 my-3'>Concept And Origin</h2>
          <p>The idea was first developed by a Japanese agricultural scientist Masanobu Fukuoka in 1930. The idea is to go back to nature to produce things we need deriving power from the nature and only using natural techniques. natural farming is a form of agriculture that has been practiced in nearly every imaginable climate and culture around the world over many thousands of years of human history. It is a way of thinking and living that shares common roots with many Eastern religions, wisdom traditions, and the ecological mindsets of indigenous peoples from many—though of course not all—regions of the world. Thus aligning the concept of sustainable development and sustainability, where we go back to our roots without compromising our ability to feed continual increase in human consumption of resources. Natural farming is not only a way of growing food, but of finding ways to carry out every aspect of human life on earth in ways that regenerate our own health, the health of society, and the health of the environment aroun</p>
        </div>
      </div>
      <div className='border border-l my-2'></div>
      <div className='grid lg:grid-cols-2 sm:grid-cols-1'>

        <div className='p-4'>
          <h1 className='text-center font-bold text-xl text-black my-3'>
            Natural Farming</h1>
          <h2 className='text-xl font-bold text-green-600 my-3'>Concept And Origin</h2>
          <p>The idea was first developed by a Japanese agricultural scientist Masanobu Fukuoka in 1930. The idea is to go back to nature to produce things we need deriving power from the nature and only using natural techniques. natural farming is a form of agriculture that has been practiced in nearly every imaginable climate and culture around the world over many thousands of years of human history. It is a way of thinking and living that shares common roots with many Eastern religions, wisdom traditions, and the ecological mindsets of indigenous peoples from many—though of course not all—regions of the world. Thus aligning the concept of sustainable development and sustainability, where we go back to our roots without compromising our ability to feed continual increase in human consumption of resources. Natural farming is not only a way of growing food, but of finding ways to carry out every aspect of human life on earth in ways that regenerate our own health, the health of society, and the health of the environment aroun</p>
        </div>
        <div className='overflow-hidden  p-9'>
          <img className='rounded-lg hover:scale-90 duration-500 ease-in-out cursor-pointer' src={natural} alt="natural" />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5 m-4">
        <div className="relative  bg-gray-200 border border-gray-300 rounded-lg overflow-hidden shadow-md cursor-pointer">
          <div className=" overflow-hidden">
            <img
              className="w-full h-full object-cover hover:scale-125 duration-500 ease-in-out transition"
              src={mission}
              alt="Card"
            />
          </div>
          <div className="absolute inset-0 flex  justify-center bg-gray-100 bg-opacity-100 opacity-100 translate-y-[483px] hover:translate-y-0 transition duration-500 ease-in-out">
            <div className=" text-black">
              <h2 className="text-lg font-semibold text-center p-5 bg-yellow-400 w-[100vw]">Our Mission</h2>
              <p className="text-sm text-center mt-9">To help recognize Nepal as the natural, healthy and sustainable food haven of the world.</p>
            </div>
          </div>
        </div>
        <div className="relative  bg-gray-200 border border-gray-300 rounded-lg overflow-hidden shadow-md cursor-pointer">
          <div className=" overflow-hidden">
            <img
              className="w-full h-full object-cover hover:scale-125 duration-500 ease-in-out transition"
              src={objective}
              alt="Card"
            />
          </div>
          <div className="absolute inset-0 flex  justify-center bg-gray-100 bg-opacity-100 opacity-100 translate-y-[483px] hover:translate-y-0 transition duration-500 ease-in-out">
            <div className=" text-black">
              <h2 className="text-lg font-semibold text-center p-5 bg-yellow-400 w-[100vw]">Our Mission</h2>
              <p className="text-sm text-center mt-9">To help recognize Nepal as the natural, healthy and sustainable food haven of the world.</p>
            </div>
          </div>
        </div>
        <div className="relative  bg-gray-200 border border-gray-300 rounded-lg overflow-hidden shadow-md cursor-pointer">
          <div className=" overflow-hidden">
            <img
              className="w-full h-full object-cover hover:scale-125 duration-500 ease-in-out transition"
              src={natural}
              alt="Card"
            />
          </div>
          <div className="absolute inset-0 flex  justify-center bg-gray-100 bg-opacity-100 opacity-100 translate-y-[483px] hover:translate-y-0 transition duration-500 ease-in-out">
            <div className=" text-black">
              <h2 className="text-lg font-semibold text-center p-5 bg-yellow-400 w-[100vw]">Our Mission</h2>
              <p className="text-sm text-center mt-9">To help recognize Nepal as the natural, healthy and sustainable food haven of the world.</p>
            </div>
          </div>
        </div>
        <div className="relative  bg-gray-200 border border-gray-300 rounded-lg overflow-hidden shadow-md cursor-pointer">
          <div className=" overflow-hidden">
            <img
              className="w-full h-full object-cover hover:scale-125 duration-500 ease-in-out transition"
              src={state}
              alt="Card"
            />
          </div>
          <div className="absolute inset-0 flex  justify-center bg-gray-100 bg-opacity-100 opacity-100 translate-y-[483px] hover:translate-y-0 transition duration-500 ease-in-out">
            <div className=" text-black">
              <h2 className="text-lg font-semibold text-center p-5 bg-yellow-400 w-[100vw]">Our Mission</h2>
              <p className="text-sm text-center mt-9">To help recognize Nepal as the natural, healthy and sustainable food haven of the world.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-green-700 text-white text-4xl font-bold m-4 rounded text-center p-4'>
        <p>SLogan goes here</p>

      </div>
      <div className=' p-3 flex flex-col bg-gray-200'>
        <div className='flex flex-col text-center gap-3'>
          <h1 className='font-bold text-3xl text-black'>Our Partners</h1>
          <h3 className='font-normal text-lg text-green-600'>Working with the best </h3>
        </div>
        <div className='flex flex-wrap overflow-hidden gap-10 justify-between m-4 '>
          <img src={first} alt="logo" />
          <img src={second} alt="logo" />
          <img src={third} alt="logo" />
          <img src={fourth} alt="logo" />
          <img src={fifth} alt="logo" />
          <img src={sixth} alt="logo" />

        </div>

      </div>
    </>
  )
}

export default AboutUs