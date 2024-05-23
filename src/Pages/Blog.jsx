import React from 'react'
import img from '../assets/natural.jpeg'
const Blog = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
            <div className='flex flex-col m-4 shadow-md shadow-gray-600'>
                <div>
                    <div className='relative'>
                        <img src={img} alt="imag" />
                    </div>
                    <div className='translate-y-[-30px] z-10 text-white w-32 text-center'>
                        <h1 className='bg-yellow-600 p-3 font-extrabold text-xl'>18</h1>
                        <p className='bg-green-600 p-3'>April, 2022</p>
                    </div>

                </div>
                <div className='flex flex-row text-gray-800  p-4'>
                    <span>Admin</span> <li>25 Comments</li>
                </div>
                <div className='flex flex-col p-4'>
                    <h1 className='text-black text-xl'>Research conducted to find better farming techniques.</h1>
                    <p className='text-gray-800'>Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now</p>
                </div>
                <div className='p-4'>
                    <button className='text-black rounded-md bg-yellow-600 p-3 hover:text-white hover:bg-green-600'>Learn More</button>
                </div>
            </div>
            <div className='flex flex-col m-4 shadow-sm shadow-black'>
                <div>
                    <div className='relative'>
                        <img src={img} alt="imag" />
                    </div>
                    <div className='translate-y-[-30px] z-10 text-white w-32 text-center'>
                        <h1 className='bg-yellow-600 p-3 font-extrabold text-xl'>18</h1>
                        <p className='bg-green-600 p-3'>April, 2022</p>
                    </div>

                </div>
                <div className='flex flex-row text-gray-800  p-4'>
                    <span>Admin</span> <li>25 Comments</li>
                </div>
                <div className='flex flex-col p-4'>
                    <h1 className='text-black text-xl'>Research conducted to find better farming techniques.</h1>
                    <p className='text-gray-800'>Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now</p>
                </div>
                <div className='p-4'>
                    <button className='text-black rounded-md bg-yellow-600 p-3 hover:text-white hover:bg-green-600'>Learn More</button>
                </div>
            </div>
            <div className='flex flex-col m-4 shadow-sm shadow-black'>
                <div>
                    <div className='relative'>
                        <img src={img} alt="imag" />
                    </div>
                    <div className='translate-y-[-30px] z-10 text-white w-32 text-center'>
                        <h1 className='bg-yellow-600 p-3 font-extrabold text-xl'>18</h1>
                        <p className='bg-green-600 p-3'>April, 2022</p>
                    </div>

                </div>
                <div className='flex flex-row text-gray-800  p-4'>
                    <span>Admin</span> <li>25 Comments</li>
                </div>
                <div className='flex flex-col p-4'>
                    <h1 className='text-black text-xl'>Research conducted to find better farming techniques.</h1>
                    <p className='text-gray-800'>Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now</p>
                </div>
                <div className='p-4'>
                    <button className='text-black rounded-md bg-yellow-600 p-3 hover:text-white hover:bg-green-600'>Learn More</button>
                </div>
            </div>
            {/* this starts fro the second div */}
            <div className='flex flex-col gap-4'>
                <div className='m-5 bg-green-100 rounded h-32 flex justify-center items-center'>
                    <input className='m-4 h-14 w-full' type="text" placeholder='Enter keyword' />
                </div>

                <div className='flex flex-col p-4 bg-green-100 m-4'>
                    <div >
                        <h1 className='text-3xl text-black underline'>Recent Post</h1>
                    </div>
                    <div className='flex flex-row my-4'>
                        <div className='overflow-hidden object-cover'>
                            <img className='h-20 hover:scale-125 transition-all duration-300 ease-in-out cursor-grab' src={img} alt="post" />
                        </div>
                        <div className='flex flex-col  ml-2'>
                            <p className='text-gray-900'>12 Feb , 2020</p>
                            <h1 className='text-black text-xl hover:text-green-600 transition-all duration-150 ease-in-out cursor-pointer'>Upcoming Hariyali Abhiyan projects</h1>
                        </div>

                    </div>
                    <div className='flex flex-row my-4'>
                        <div className='overflow-hidden object-cover'>
                            <img className='h-20 hover:scale-125 transition-all duration-300 ease-in-out cursor-grab' src={img} alt="post" />
                        </div>
                        <div className='flex flex-col  ml-2'>
                            <p className='text-gray-900'>12 Feb , 2020</p>
                            <h1 className='text-black text-xl hover:text-green-600 transition-all duration-150 ease-in-out cursor-pointer'>Upcoming Hariyali Abhiyan projects</h1>
                        </div>

                    </div>
                    <div className='flex flex-row my-4'>
                        <div className='overflow-hidden object-cover'>
                            <img className='h-20 hover:scale-125 transition-all duration-300 ease-in-out cursor-grab' src={img} alt="post" />
                        </div>
                        <div className='flex flex-col  ml-2'>
                            <p className='text-gray-900'>12 Feb , 2020</p>
                            <h1 className='text-black text-xl hover:text-green-600 transition-all duration-150 ease-in-out cursor-pointer'>Upcoming Hariyali Abhiyan projects</h1>
                        </div>

                    </div>
                    <div className='flex flex-row my-4'>
                        <div className='overflow-hidden object-cover'>
                            <img className='h-20 hover:scale-125 transition-all duration-300 ease-in-out cursor-grab' src={img} alt="post" />
                        </div>
                        <div className='flex flex-col  ml-2'>
                            <p className='text-gray-900'>12 Feb , 2020</p>
                            <h1 className='text-black text-xl hover:text-green-600 transition-all duration-150 ease-in-out cursor-pointer'>Upcoming Hariyali Abhiyan projects</h1>
                        </div>

                    </div>
                    <div className='flex flex-row my-4'>
                        <div className='overflow-hidden object-cover'>
                            <img className='h-20 hover:scale-125 transition-all duration-300 ease-in-out cursor-grab' src={img} alt="post" />
                        </div>
                        <div className='flex flex-col  ml-2'>
                            <p className='text-gray-900'>12 Feb , 2020</p>
                            <h1 className='text-black text-xl hover:text-green-600 transition-all duration-150 ease-in-out cursor-pointer'>Upcoming Hariyali Abhiyan projects</h1>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Blog