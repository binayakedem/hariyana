import React from 'react'
import '../CSS/body.css'
import treelogo from '../assets/treelogo.png'
import { FaFacebook } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaTwitterSquare,FaPinterest ,FaInstagramSquare,FaHome ,FaPhone  } from "react-icons/fa";
const Footer = () => {
  return (
    <div className=' sticky  footer-bg '>
    <div className='flex flex-row p-10 gap-20 text-black justify-center items-center'>
        <div className='flex flex-row w-[35vw]'>
            <div>
                <img className='h-[150px]' src={treelogo} alt="treelogo" />
                <p>Hariyali Abhiyan has introduced the concept of “natural farming” to trail blaze the way of organic farming in Nepal.</p>
                <div>
                    <span className='flex flex-rew gap-3 my-3 font-semibold text-lg'>Social: <FaFacebook size={24} color='blue'/><FaTwitterSquare size={24} color='blue'/><FaPinterest size={24} color='red'/><FaInstagramSquare size={24} color='red' /></span>
                </div>
            </div>
        </div>
        {/* <div className="h-[300px] w-[0.5px] border-2 border-gray-900 mb-0"></div> */}
        <div className='flex flex-col gap-4 w-[32vw]'>
            <h1 className='font-semibold text-xl'>Explore</h1>
            <p className=' font-normal text-lg'>About Us</p>
            <p className=' font-normal text-lg'>Meet Our Team</p>
            <p className=' font-normal text-lg'>Latest Blog</p>
            <p className=' font-normal text-lg'>Active Projects</p>
            <p className=' font-normal text-lg'>Contact Us</p>
        </div>
        <div className='flex flex-col gap-3 w-[32vw]'>
            <h1 className='font-semibold text-xl'>Contact Info</h1>
            <span><span className='flex flex-row font-semibold text-md '><FaHome size={24} color='blue' /> <span className='ml-3'>ADDRESS :</span></span><span>Bhimsengola Marg, Baneshwor, Kathmandu</span></span>
            <span><span className='flex flex-row font-semibold text-md'><MdEmail size={24} color='red'/> <span className='ml-3'>EMAIL :</span></span> <span>abhiyanhariyali@gmail.com</span></span>
            <span><span className='flex flex-row font-semibold text-md'><FaPhone size={24} color='green'/> <span className='ml-3'>PHONE :</span></span> <span>+977 985 110 8121</span></span>
        </div> 
    </div>
    <div className='flex justify-center items-center p-4'>
    <span>Copyright © 2024. <span className='text-black'>Hariyali Abhiyan</span> | All Rights Reserved</span>
</div>

    </div>
  )
}

export default Footer