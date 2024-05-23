import React from 'react'
import cucumber from '../assets/cucumber.png'
import cucumbers from '../assets/cucumber.jpg'
import organic from '../assets/organic.png'
const About = () => {
  return (
    <div className='bg-gray-200'>
    <div className='flex flex-col justify-center items-center py-9'>
        <h1 className='text-green-600 font-lg text-4xl mb-4'>About Us</h1>
        </div>
    <div className='flex flex-col md:flex-row h-[90vh] w-[100vw] '>
        <div className=' overflow-hidden w-[100vw] '>
            <img className='object-cover w-[90vw] ' src={cucumbers} alt="cucumber" />
            </div>
        <div className='flex flex-col m-9 md:flex-ro'>
            <h1 className='text-black font-black text-3xl mb-4'>Hariyali Abhiyan Pvt. Ltd.</h1>
            <p className='text-gray-900 mb-4'>Hariyali Abhiyan has introduced the concept of “natural farming” to trail blaze the way of organic farming in Nepal. Hariyali Abhiyan was founded realizing the necessities of agri-business concept to be spread all over the country for the promotion of financial status of the people and ecology and to address the issues that has been dominating the discussion of agriculture and farming.</p>
            <button className='bg-green-600 text-white font-bold w-[200px] p-4 rounded-lg my-2 hover:bg-green-500'>Learn More</button>
            <div className='flex flex-row justify-center items-center'>
            <div className=' flex flex-col justify-center items-center h-[250px] w-[250px] bg-green-600 rounded text-white shadow-lg shadow-gray-900 font-bold text-lg m-4 p-4 border-solid border-8 border-white cursor-pointer hover:scale-110 '>
                <img className='object-cover ' src={cucumber} alt="" />
                    <p>100% Guaranteed Organic</p>
                </div>
                <div className=' flex flex-col justify-center items-center h-[250px] w-[250px] bg-yellow-600 rounded text-white shadow-lg shadow-gray-900 font-bold text-lg m-4 p-4 border-solid border-8 border-white cursor-pointer hover:scale-110 '>
                <img className='object-cover' src={organic} alt="" />
                    <p>Top-quality healthy food</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About