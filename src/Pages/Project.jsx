import React from 'react'
import fruits from '../assets/fruits.png'
import veg from '../assets/vegetables.png'
import ferti from '../assets/fertilizer.png'
import field from '../assets/field.png'
import ilam from '../assets/ilam.jpg'
import morang from '../assets/morang.jpg'
import '../CSS/body.css'
import { Link } from 'react-router-dom'
const Project = () => {
  return (
    <>
      <div className='my-bg h-[70vh] w-[100vw]'></div>
      <div className='bg-gray-200'>
        <h1 className='text-black font-extrabold text-2xl py-6 text-center'>Our Services</h1>
      </div>
      <div className='grid lg:grid-cols-2 sm:grid-cols-1 text-black bg-gray-200'>
        <div className='rounded-md m-4 flex-col justify-center items-center text-center bg-[#1d4422] text-white p-9'>
          <h1 className='my-4 text-xl font-bold'>Healthy Foods</h1>
          <h2 className='my-3 text-xl font-extrabold'>Best OrganicAgriculture Firms</h2>
          <p className='my-3'>Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out.</p>
        </div>
        <div>
          <div className='grid grid-cols-2'>
            <div className='flex flex-col justify-center items-center p-8 shadow-md shadow-gray-400 bg-gray-100 m-3 rouded-md overflow-hidden cursor-pointer'>
              <img className='h-24  hover:scale-125 duration-500 ease-in-out' src={fruits} alt="fruits" />
              <Link to="/project-detail"></Link>
              <h1 className=' text-center text-xl font-extrabold text-green-600 mt-2'>Fresh Fruits</h1>
            </div>
            <div className='flex flex-col justify-center items-center p-8 shadow-md shadow-gray-400 bg-gray-100 m-3 rouded-md overflow-hidden cursor-pointer'>
              <img className='h-24  hover:scale-125 duration-500 ease-in-out' src={veg} alt="fruits" />
              <h1 className=' text-center text-xl font-extrabold text-green-600 mt-2'>Fresh Vegetables</h1>
            </div>
          </div>
          <div className='grid grid-cols-2'>
            <div className='flex flex-col justify-center items-center p-8 shadow-md shadow-gray-400 bg-gray-100 m-3 rouded-md overflow-hidden cursor-pointer'>
              <img className='h-24  hover:scale-125 duration-500 ease-in-out' src={ferti} alt="fruits" />
              <h1 className=' text-center text-xl font-extrabold text-green-600 mt-2'>Organic Fertilizer</h1>
            </div>
            <div className='flex flex-col justify-center items-center p-8 shadow-md shadow-gray-400 bg-gray-100 m-3 rouded-md overflow-hidden cursor-pointer'>
              <img className='h-24  hover:scale-125 duration-500 ease-in-out' src={field} alt="fruits" />
              <h1 className=' text-center text-xl font-extrabold text-green-600 mt-2'>Farming Training</h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='flex flex-row justify-center items-center text-center'>
          <h1 className='font-extrabold text-3xl text-green-600 my-6'>Our Currently Active Natural Farming Projects</h1>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-9 justify-center items-center'>
          <div className="max-w-sm  cursor-pointer rounded overflow-hidden shadow-lg m-4 sm:items-center">
            <div className="relative group">
              <Link to="/project-detail">
                <img
                  className=" object-cover transition duration-500 transform group-hover:scale-125"
                  src={morang}
                  alt="ilam"
                />
                <div className="absolute inset-0 bg-black opacity-50 transition duration-500 group-hover:opacity-0"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition duration-500 group-hover:opacity-100">
                  <h1 className='text-white font-extrabold text-2xl'>Ilam</h1>
                  <p className="text-white text-xl">Koshi Province</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="max-w-sm  cursor-pointer rounded overflow-hidden shadow-lg m-4">
            <div className="relative group">
              <Link to="/project-detail">
                <img
                  className=" object-cover transition duration-500 transform group-hover:scale-125"
                  src={ilam}
                  alt="ilam"
                />
                <div className="absolute inset-0 bg-black opacity-50 transition duration-500 group-hover:opacity-0"></div>
                <div className="absolute inset-0 flex  flex-col  items-center justify-center opacity-0 transition duration-500 group-hover:opacity-100">
                  <h1 className='text-white font-extrabold text-2xl'>Kailali</h1>
                  <p className="text-white text-xl">SUDURPASHCHIM PROVINCE</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="max-w-sm  cursor-pointer rounded overflow-hidden shadow-lg m-4">
            <div className="relative group">
              <Link to="/project-detail">
                <img
                  className=" object-cover transition duration-500 transform group-hover:scale-125"
                  src={morang}
                  alt="ilam"
                />
                <div className="absolute inset-0 bg-black opacity-50 transition duration-500 group-hover:opacity-0"></div>
                <div className="absolute inset-0 flex  flex-col  items-center justify-center opacity-0 transition duration-500 group-hover:opacity-100">
                  <h1 className='text-white font-extrabold text-2xl'>Bajhang</h1>
                  <p className="text-white text-xl">SUDURPASHCHIM PROVINCE</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="max-w-sm  cursor-pointer rounded overflow-hidden shadow-lg m-4">
            <div className="relative group">
              <Link to="/project-detail">

                <img
                  className=" object-cover transition duration-500 transform group-hover:scale-125"
                  src={ilam}
                  alt="ilam"
                />
                <div className="absolute inset-0 bg-black opacity-50 transition duration-500 group-hover:opacity-0"></div>
                <div className="absolute inset-0 flex  flex-col  items-center justify-center opacity-0 transition duration-500 group-hover:opacity-100">
                  <h1 className='text-white font-extrabold text-2xl'>Baitadi</h1>
                  <p className="text-white text-xl">SUDURPASHCHIM PROVINCE</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="max-w-sm  cursor-pointer rounded overflow-hidden shadow-lg m-4">
            <div className="relative group">
              <Link to="/project-detail">
                <img
                  className=" object-cover transition duration-500 transform group-hover:scale-125"
                  src={morang}
                  alt="ilam"
                />
                <div className="absolute inset-0 bg-black opacity-50 transition duration-500 group-hover:opacity-0"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition duration-500 group-hover:opacity-100">
                  <h1 className='text-white font-extrabold text-2xl'>Argakhachi</h1>
                  <p className="text-white text-xl">LUMBINI PROVINCE</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="max-w-sm  cursor-pointer rounded overflow-hidden shadow-lg m-4">
            <div className="relative group">
              <Link to="/project-detail">
                <img
                  className=" object-cover transition duration-500 transform group-hover:scale-125"
                  src={ilam}
                  alt="ilam"
                />
                <div className="absolute inset-0 bg-black opacity-50 transition duration-500 group-hover:opacity-0"></div>
                <div className=" flex flex-col absolute inset-0  items-center justify-center opacity-0 transition duration-500 group-hover:opacity-100">
                  <h1 className='text-white font-extrabold text-2xl'>Morang</h1>
                  <p className="text-white text-xl">KOSHI PROVINCE</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Project