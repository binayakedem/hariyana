import React from 'react'
import '../CSS/body.css'
import { MdExpandMore } from "react-icons/md";const Body = () => {
  return (
    <div className='flex justify-center items-center text-white h-[90vh] w-[100vw] my-bg bg-transparent '>
        <div>
            <div className='font-black text-4xl tracking-wide mr-4 mt-4 mb-4' ><span className='text-white bg-green-600  rounded p-4 '>HARIYALI</span> <span> ABHIYAN</span></div>
            <div className='mt-8'><p className='font-normal text-white mt-3'>Farming for better future.</p></div>
            <div><button className='text-white bg-yellow-600  rounded flex flex-row p-3 mt-3'><MdExpandMore />Dicover more</button></div>
        </div>

    </div>
  )
}

export default Body