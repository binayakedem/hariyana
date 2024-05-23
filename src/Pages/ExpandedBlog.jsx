import React from 'react'
import imgb from '../assets/organic.png'
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";
import profile from '../assets/profile.png'
import comment1 from '../assets/comment1.png'
import { BiSolidShare } from "react-icons/bi";
import { FaFolder, FaSearch, FaAngleDoubleLeft, FaFacebook, FaPinterestP, FaTwitter, FaLinkedinIn, FaAngleDoubleRight } from "react-icons/fa";

const ExpandedBlog = () => {
    return (
        <div class="grid grid-col-1 lg:grid-cols-10 gap-4 bg-gray-100">
            <div class="lg:col-span-6 p-10">
                <div>
                    <img src={imgb} alt="image" />
                </div>
                <div className='overflow-hidden text-white flex flex-col justify-start items-start'>
                    <h3 className='bg-yellow-600 p-2 w-28 text-center font-bold text-2xl'>18</h3>
                    <p className=' text-white  p-2 bg-green-600 w-28 text-center'>April, 2022</p>
                </div>
                <div className='flex flex-row justify-start items-start gap-8 text-gray-800 my-6'>
                    <p className='flex flex-row gap-3'><FaRegUserCircle color='green' /><span>Admin</span></p>
                    <p className='flex flex-row gap-3'><FaRegComments color='green' /><span>Comments</span></p>

                </div>
                <div>
                    <p className='mb-4'>Innovative Agricultural Technologies and Techniques Shaping the Future of Farming
                        The agricultural industry is undergoing a significant transformation, driven by a wave of innovative technologies and techniques that are revolutionizing traditional farming practices. From precision agriculture to automation and sustainable farming solutions, these advancements are poised to shape the future of food production. In this blog post, we will explore the top up-and-coming agricultural technologies and techniques that are helping to modernize farming practices and address the challenges of the 21st century.</p>
                    <p>Precision Agriculture: Maximizing Efficiency and Managing Costs One of the most impactful developments in modern farming is the rise of precision agriculture. This technology allows farmers to maximize soil conditions, microclimates, and plant health through the use of advanced sensors, aerial imaging, and robotic systems. By providing more accurate techniques for planting and growing crops, precision agriculture enables farmers to increase efficiency and manage costs, ultimately leading to higher yields and sustainable farming practices</p>

                </div>
                <div className='bg-yellow-900 text-white my-3 p-20'>
                    <p className='font-sans font-bold text-xl'>Maximizing Efficiency and Managing Costs One of the most impactful developments in modern farming is the rise of precision agriculture.</p>

                </div>
                <div className='my-3'>
                    <span className='text-black font-bold underline text-lg'> Automation:</span> <span className='font-normal'> Redefining Farming Operations The adoption of automation in farming has led to a significant reduction in labor time, higher yields, and the efficient use of resources. Farmers are now utilizing automated harvesters, drones, autonomous tractors, seeding, and weeding to transform how they cultivate their crops. This technology takes care of menial and recurring tasks, allowing farmers to focus on more critical functions and improve overall productivity</span>

                </div>
                <div className='my-3'>
                    <span className='text-black font-bold underline text-lg'> Sustainable Farming Solutions:</span> <span className='font-normal'>  Meeting Environmental Challenges In an age where environmental concerns and climate change fears are at an all-time high, sustainable farming is a hotbed issue. The industry is increasingly turning to innovative solutions to address these challenges. From advancements in precision agriculture to the adoption of smart irrigation, biotechnology, and modern greenhouse practices, farmers are embracing technologies that promote sustainability in food production. Indoor vertical farming, which can increase crop yields and overcome limited land area, is also gaining traction as a sustainable farming solution</span>

                </div>
                <div className='my-3'>
                    <span className='text-black font-bold  underline text-lg'> The Future of Forming:</span> <span className='font-normal'>  Embracing Agriculture Technology As the demand for food continues to surge in line with rapid population growth, the agriculture industry is at a critical juncture. The adoption of innovative agricultural technologies and techniques is essential to meet the growing demand for food while ensuring the long-term sustainability of farming practices. From precision agriculture to automation and sustainable farming solutions, these advancements are reshaping the future of food production and paving the way for a more efficient, sustainable, and productive agricultural sector. In conclusion, the integration of innovative agricultural technologies and techniques is poised to revolutionize the farming industry, enabling farmers to maximize efficiency, reduce environmental impact, and meet the growing demand for food. By embracing these advancements, the agriculture industry is laying the groundwork for a more sustainable and productive future.</span>
                </div>
                <div className='grid grid-cols-2 bg-white border shadow'>
                    <div className='object-cover overflow-hidden '>
                        <img className='object-cover p-20' src={profile} alt="profile" />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className=' my-4 text-xl text-black font-black'>
                            Sita Ram Rawal</h1>
                        <p className='px-4'>Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec at odio aea the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit to the consectetur elit. All the Lorem Ipsum generators on the Internet tend.</p>
                    </div>


                </div>
                <div className='flex flex-row my-4'>
                    <div className='flex flex-row flex-wrap items-center gap-3'>
                        <h1 className=' text-xl text-black font-semibold text-center'>Tags:</h1>
                        <p className='p-3 m- bg-gray-200 hover:bg-green-900 hover:text-white duration-500 rounded cursor-pointer'>Research</p>
                        <p className='p-3 m- bg-gray-200 hover:bg-green-900 hover:text-white duration-500 rounded cursor-pointer'>Farming</p>
                        <p className='p-3 m- bg-gray-200 hover:bg-green-900 hover:text-white duration-500 rounded cursor-pointer'>Agriculture</p>
                    </div>
                    <div className='flex flex-row flex-wrap items-center gap-3'>
                        <h1 className=' text-xl text-black font-semibold text-center'>Tags:</h1>
                        <p className='p-3 m- bg-green-500  hover:text-white duration-500 cursor-pointer rounded-full hover:bg-green-400 hover:scale-105'><FaFacebook color='black' /></p>
                        <p className='p-3 m- bg-green-500  hover:text-white duration-500 cursor-pointer rounded-full hover:bg-green-400 hover:scale-105'><FaTwitter color='black' /></p>
                        <p className='p-3 m- bg-green-500  hover:text-white duration-500 cursor-pointer rounded-full hover:bg-green-400 hover:scale-105'><FaPinterestP color='black' /></p>
                        <p className='p-3 m- bg-green-500  hover:text-white duration-500 cursor-pointer rounded-full hover:bg-green-400 hover:scale-105'><FaLinkedinIn color='black' /></p>
                    </div>

                </div>
                <div className='flex flex-row border p-4 gap-4 bg-gray-50'>
                    <div className='flex flex-row items-center gap-4'>
                        <div className='border p-4 hover:bg-green-400 cursor-pointer'><FaAngleDoubleLeft /></div>
                        <div className='flex flex-col'>
                            <h1 className='text-xl text-black my-2  hover:text-green-600 cursor-pointer'>PREVIUS POST</h1>
                            <p className=' hover:text-green-600 cursor-pointer'>Organic Farming Proven to be letter for ecosystem</p>
                        </div>
                    </div>
                    <div className='flex flex-row items-center gap-4'>
                        <div className='flex flex-col'>
                            <h1 className='text-xl text-black my-2  hover:text-green-600 cursor-pointer'>NEXT POST</h1>
                            <p className=' hover:text-green-600 cursor-pointer'>Crop rotation to protect soil health
                            </p>
                        </div>
                        <div className='border p-4 hover:bg-green-400 cursor-pointer'><FaAngleDoubleRight /></div>
                    </div>

                </div>
                <div className='flex flex-row justify-between  bg-white p-4 my-4 shadow'>
                    <div className='mr-4 justify-start items-start'> <img src={profile} alt="comment" /></div>
                    <div className='flex flex-col'>
                        <div className='flex flex-row justify-between items-center'>
                            <div>
                                <h1 className='font-bold text-lg mb-1 text-black'>Ram Krishna Paudel</h1>
                                <p className='mb-4'>28 Feb, 2022</p>
                            </div>
                            <div className='flex flex-row bg-green-600 text-white rounded-lg justify-center items-center'>
                                <BiSolidShare /> <span className='p-2 cursor-grab hover:scale-110'>Reply</span>

                            </div>
                        </div>
                        <div>
                            <p>Delivered ye sportsmen zealously arranging frankness estimable as. Nay any article enabled musical shyness yet sixteen yet blushes. Entire its the did figure wonder off. sportsmen zealously arranging to the main pint. Discourse unwilling am no described dejection incommode no listening of. Before nature his parish boy.</p>
                        </div>

                    </div>

                </div>
                <div className='flex flex-row   bg-white p-4 my-4 shadowjustify-end'>
                    <div className='mr-4 justify-start items-start'> <img src={profile} alt="comment" /></div>
                    <div className='flex flex-col'>
                        <div className='flex flex-row justify-between items-center'>
                            <div>
                                <h1 className='font-bold text-lg mb-1 text-black'>Manish Khadgi</h1>
                                <p className='mb-4'>15 Mar, 2022</p>
                            </div>
                            <div className='flex flex-row bg-green-600 text-white rounded-lg justify-center items-center'>
                                <BiSolidShare /> <span className='p-2 cursor-grab hover:scale-110'>Reply</span>

                            </div>
                        </div>
                        <div>
                            <p>Delivered ye sportsmen zealously arranging frankness estimable as. Nay any article enabled musical shyness yet sixteen yet blushes. Entire its the did figure wonder off. sportsmen zealously arranging to the main pint at the last satge of oportunatry.</p>
                        </div>

                    </div>

                </div>
                <div className='bg-green-50 p-4'>
                    <div className='my-4 font-extrabold text-lg text-black'>
                        <h1>Leave a Comment</h1>
                    </div>
                    <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 mb-4'>
                        <input className='py-3' type="text" placeholder='Name*' />
                        <input className='py-3 ' type="email" placeholder='Email*' />
                    </div>
                    <div className='grid grid-cols-1 mb-6'>
                        <input className=' h-32' type="textarea" placeholder='Comment' />
                    </div>
                    <div>
                        <button className='p-3 rounded text-white text-lg bg-green-600 hover:bg-green-500'>Post Comment</button>
                    </div>
                </div>
            </div>
            <div class="lg:col-span-4 p-10 ">
                <div className='bg-green-50 p-10'>
                    <div class="relative">
                        <input type="text" class="w-full py-4 pl-10 pr-4 rounded-md border border-gray-300 focus:border-indigo-500 focus:outline-none" placeholder="Search..." />
                        <div class="absolute inset-y-0 right-0 pl-3 flex items-center bg-green-600 m-1 px-6 rounded text-white"><button className='text-black  hover:scale-125'>  <FaSearch className='cursor-pointer' /></button>
                        </div>
                    </div>
                </div>
                <div className='my-4 p-4 bg-green-50 rounded'>
                    <div >
                        <h1 className='text-black text-xl underline'>Recent Post</h1>
                    </div>
                    <div className=' overflow-hidden flex flex-row justify-start gap-4 items-start mb-4'>
                        <img className='h-20 cursor-grab hover:scale-110 duration-500 ' src={imgb} alt="" />
                        <div className='flex flex-col'>
                            <p className='text-gray-900 mb-1'>12 Feb, 2020</p>
                            <p className='text-lg font-serif text-black cursor-pointer hover:underline hover:text-green-600'>Upcoming Hariyali Abhiyan projects</p>
                        </div>
                    </div>
                    <div className=' overflow-hidden flex flex-row justify-start gap-4 items-start mb-4'>
                        <img className='h-20 cursor-grab hover:scale-110 duration-500 ' src={imgb} alt="" />
                        <div className='flex flex-col'>
                            <p className='text-gray-900 mb-1'>12 Feb, 2020</p>
                            <p className='text-lg font-serif text-black cursor-pointer hover:underline hover:text-green-600'>Upcoming Hariyali Abhiyan projects</p>
                        </div>
                    </div>
                    <div className=' overflow-hidden flex flex-row justify-start gap-4 items-start mb-4'>
                        <img className='h-20 cursor-grab hover:scale-110 duration-500 ' src={imgb} alt="" />
                        <div className='flex flex-col'>
                            <p className='text-gray-900 mb-1'>12 Feb, 2020</p>
                            <p className='text-lg font-serif text-black cursor-pointer hover:underline hover:text-green-600'>Upcoming Hariyali Abhiyan projects</p>
                        </div>
                    </div>
                    <div className=' overflow-hidden flex flex-row justify-start gap-4 items-start mb-4'>
                        <img className='h-20 cursor-grab hover:scale-110 duration-500 ' src={imgb} alt="" />
                        <div className='flex flex-col'>
                            <p className='text-gray-900 mb-1'>12 Feb, 2020</p>
                            <p className='text-lg font-serif text-black cursor-pointer hover:underline hover:text-green-600'>Upcoming Hariyali Abhiyan projects</p>
                        </div>
                    </div>
                </div>
                <div className='my-4 p-4 bg-green-50 rounded'>
                    <div >
                        <h1 className='text-black text-xl underline'>Category List</h1>
                    </div>
                    <div className='flex flex-row justify-between my-2 px-4'>
                        <p className='font-normal text-gray-600'>National</p>
                        <p className=' rounded-full p-3 bg-white text-black'>69</p>
                    </div>
                    <div className='flex flex-row justify-between my-2 px-4'>
                        <p className='font-normal text-gray-600'>National</p>
                        <p className=' rounded-full p-3 bg-white text-black'>69</p>
                    </div>
                    <div className='flex flex-row justify-between my-2 px-4'>
                        <p className='font-normal text-gray-600'>National</p>
                        <p className=' rounded-full p-3 bg-white text-black'>69</p>
                    </div>
                    <div className='flex flex-row justify-between my-2 px-4'>
                        <p className='font-normal text-gray-600'>National</p>
                        <p className=' rounded-full p-3 bg-white text-black'>69</p>
                    </div>
                    <div className='flex flex-row justify-between my-2 px-4'>
                        <p className='font-normal text-gray-600'>National</p>
                        <p className=' rounded-full p-3 bg-white text-black'>69</p>
                    </div>
                </div>

                <div className='my-4 p-4 bg-green-50 rounded'>
                    <div >
                        <h1 className='text-black text-xl underline'>Category List</h1>
                    </div>
                    <div className='flex flex-row items-center gap-4  my-2 px-4'>
                        <p className='font-normal text-gray-600 cursor-pointer hover:text-green-600'><FaFolder /></p>
                        <p className='  text-black cursor-pointer hover:text-green-600'>Aug 2020</p>
                    </div>
                    <div className='flex flex-row items-center gap-4  my-2 px-4'>
                        <p className='font-normal text-gray-600 cursor-pointer hover:text-green-600'><FaFolder /></p>
                        <p className='  text-black cursor-pointer hover:text-green-600'>Aug 2020</p>
                    </div>
                    <div className='flex flex-row items-center gap-4  my-2 px-4'>
                        <p className='font-normal text-gray-600 cursor-pointer hover:text-green-600'><FaFolder /></p>
                        <p className='  text-black cursor-pointer hover:text-green-600'>Aug 2020</p>
                    </div>
                    <div className='flex flex-row items-center gap-4  my-2 px-4'>
                        <p className='font-normal text-gray-600 cursor-pointer hover:text-green-600'><FaFolder /></p>
                        <p className='  text-black cursor-pointer hover:text-green-600'>Aug 2020</p>
                    </div>
                    <div className='flex flex-row items-center gap-4  my-2 px-4'>
                        <p className='font-normal text-gray-600 cursor-pointer hover:text-green-600'><FaFolder /></p>
                        <p className='  text-black cursor-pointer hover:text-green-600'>Aug 2020</p>
                    </div>


                </div>
                <div className='my-4 p-4 bg-green-50 rounded'>
                    <div >
                        <h1 className='text-black text-xl underline'>Category List</h1>
                    </div>
                    <div className='flex flex-row flex-wrap gap-4 my-4'>
                        <FaFacebook size={45} color='white' className='bg-blue-900 p-2 cursor-pointer hover:scale-105 hover:bg-blue-800' />
                        <FaTwitter size={45} color='white' className='bg-blue-900 p-2 cursor-pointer hover:scale-105 hover:bg-blue-800' />
                        <FaPinterestP size={45} color='white' className='bg-red-600 p-2 cursor-pointer hover:scale-105 hover:bg-red-500' />
                        <FaLinkedinIn size={45} color='white' className='bg-blue-900 p-2 cursor-pointer hover:scale-105 hover:bg-blue-800' />
                    </div>
                </div>
                <div className='my-4 p-4 bg-green-50 rounded '>
                    <div >
                        <h1 className='text-black text-xl underline'>Tags</h1>
                    </div>
                    <div className='flex flex-row flex-wrap mt-4 gap-2'>
                        <p className='py-2 px-4 bg-white rounded-full text-black text-lg font-bold cursor-pointer hover:bg-green-600 hover:text-white duration-300'>Health</p>
                        <p className='py-2 px-4 bg-white rounded-full text-black text-lg font-bold cursor-pointer hover:bg-green-600 hover:text-white duration-300'>Health</p>
                        <p className='py-2 px-4 bg-white rounded-full text-black text-lg font-bold cursor-pointer hover:bg-green-600 hover:text-white duration-300'>Health</p>
                        <p className='py-2 px-4 bg-white rounded-full text-black text-lg font-bold cursor-pointer hover:bg-green-600 hover:text-white duration-300'>Health</p>
                        <p className='py-2 px-4 bg-white rounded-full text-black text-lg font-bold cursor-pointer hover:bg-green-600 hover:text-white duration-300'>Health</p>
                        <p className='py-2 px-4 bg-white rounded-full text-black text-lg font-bold cursor-pointer hover:bg-green-600 hover:text-white duration-300'>Health</p>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default ExpandedBlog