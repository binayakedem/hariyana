import React from 'react'
import '../CSS/body.css'
import { IoMailOpenOutline } from "react-icons/io5";
import { FaCheckSquare } from "react-icons/fa";
import { FaInstagramSquare, FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
const TeamDetail = () => {
    return (
        <>
            <div className='my-bg w-[100vw] h-[70vh]'></div>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 '>
                <div className='team-bg mt-4'></div>
                <div className='lg:m-9 lg:p-9'>
                    <div className='text-black'>
                        <h1 className='text-3xl font-bold my-4'>Sharad Singh Bhandari</h1>
                        <p className='text-green-600 text-xl font-semibold my-4'>CHAIRPERSON</p>
                        <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring house in never fruit up. Pasture imagine my garrets..</p>
                        <p className='my-9 flex flex-row underline'><IoMailOpenOutline color='red' size={24} /><span className='ml-2 text-blue-600 '> sharadbhandari@gmail.com</span></p>
                    </div>
                    <div className='text-black '><h1 className='font-bold text-lg underline'>Connect Me</h1></div>
                    <div className='flex flex-row flex-wrap'>
                        <div className='cursor-pointer m-3 flex flex-row justify-center items-center rounded-full  h-10 w-10 shadow-md shadow-gray-500 bg-gray-200 hover:scale-125 duration-500 ease-in-out hover:shadow-lg hover:shadow-green-600'>
                            <FaInstagramSquare className='hover:scale-125 duration-500 ease-in-out' size={20} color='red' />
                        </div>
                        <div className='cursor-pointer m-3 flex flex-row justify-center items-center rounded-full  h-10 w-10 shadow-md shadow-gray-500 bg-gray-200 hover:scale-125 duration-500 ease-in-out hover:shadow-lg hover:shadow-green-600'>
                            <FaFacebook className='hover:scale-125 duration-500 ease-in-out' size={20} color='blue' />
                        </div>
                        <div className='cursor-pointer m-3 flex flex-row justify-center items-center rounded-full  h-10 w-10 shadow-md shadow-gray-500 bg-gray-200 hover:scale-125 duration-500 ease-in-out hover:shadow-lg hover:shadow-green-600'>
                            <FaTwitter className='hover:scale-125 duration-500 ease-in-out' size={20} color='blue' />
                        </div>
                        <div className='cursor-pointer m-3 flex flex-row justify-center items-center rounded-full  h-10 w-10 shadow-md shadow-gray-500 bg-gray-200 hover:scale-125 duration-500 ease-in-out hover:shadow-lg hover:shadow-green-600'>
                            <FaGithub className='hover:scale-125 duration-500 ease-in-out' size={20} />
                        </div>
                        <div className='cursor-pointer m-3 flex flex-row justify-center items-center rounded-full  h-10 w-10 shadow-md shadow-gray-500 bg-gray-200 hover:scale-125 duration-500 ease-in-out hover:shadow-lg hover:shadow-green-600'>
                            <FaLinkedin className='hover:scale-125 duration-500 ease-in-out' size={20} color='blue' />
                        </div>
                    </div>
                    <hr className="border my-6" />
                    <div className='bg-yellow-100 p-4'>
                        <h1 className='text-green-600 text-xl my-3 font-bold'>Main Skills</h1>
                        <h2 className='text-black text-xl font-bold mb-2 flex flex-row'><FaCheckSquare color='green' /><span>Management</span></h2>
                        <p className='mb-4'>With over 10 years of management experience.</p>
                        <h2 className='text-black text-xl font-bold mb-2 flex flex-row'><FaCheckSquare color='green' /><span>Operations</span></h2>
                        <p>it's important for the chairperson to have a strong understanding of the running the company.</p>
                    </div>
                    <hr className='border' />
                    <div className='bg-yellow-100 p-4'>
                        <h1 className='text-green-600 text-xl my-3 font-bold'>Expertise</h1>
                        <h2 className='text-black text-xl font-bold mb-2 flex flex-row'><FaCheckSquare color='green' /><span>Agriculture</span></h2>
                        <p className='mb-4'>Agriculture development and innovation is a very important skill.</p>
                        <h2 className='text-black text-xl font-bold mb-2 flex flex-row'><FaCheckSquare color='green' /><span>Interpersonal</span></h2>
                        <p>Interpersonal skills also help farmers effectively interact with buyers.</p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default TeamDetail