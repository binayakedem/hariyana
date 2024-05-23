import React from 'react'
import chairperson from '../assets/chairperson.jpg'
import programmanager from '../assets/programManager.jpg'
import healthD from '../assets/HealthDepartment.jpg'
import marketmanager from '../assets/MarketingManager.jpg'
import manager1 from '../assets/Manager1.jpg'
import manager2 from '../assets/Manager2.jpg'
const Team = () => {
  return (
    <>
      <div className='my-bg h-[70vh] w-[100vw]'>
      </div>
      <div className='text-center bg-green-50 flex flex-col items-center justify-center'><h1 className='py-6 text-black font-extrabold text-3xl'>Our Team</h1>
        <p className='text-black font-normal pb-6 lg:px-40'>Hariyali Abhiyan looks forward to hiring several personnels to help reach its short and long term objectives. Besides, one groundbreaking concept of engaging ground level stakeholders has been implemented, which is what we call Farmer Clusters. The farmers in the Project Area will be organized in clusters consisting of 50 in each with 5 standing committee members and will be registered as an Agricultural Farmers’ Group in Local Government.</p>
      </div>
      <div className='bg-green-50 h-auto w-[100vw]'>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 p-4'>
          <div className="flex flex-col items-center  cursor-pointer">
            <div className='rounded-full overflow-hidden'>
              <a href="/team-detail">
                <div className="group relative">
                  <img
                    className="rounded-full w-[200px] h-[200px] object-cover mb-2 hover:scale-125 duration-500 ease-in-out"
                    src={chairperson}
                    alt="rounded picture"
                  />
                  <p className="opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 right-0 bg-green-700 text-white text-center py-2">
                    Know More...
                  </p>
                </div>
              </a>
            </div>
            <p className="text-gray-800 font-medium">Chair Person</p>
            <h1 className='text-black font-bold text-2xl'>Sharad Sighn Bhandari</h1>
          </div>
          <div className="flex flex-col items-center  cursor-pointer">
            <div className='rounded-full overflow-hidden'>
              <a href="/team-detail">
                <div className="group relative">
                  <img
                    className="rounded-full w-[200px] h-[200px] object-cover mb-2 hover:scale-125 duration-500 ease-in-out"
                    src={programmanager}
                    alt="rounded picture"
                  />
                  <p className="opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 right-0 bg-green-700 text-white text-center py-2">
                    Know More...
                  </p>
                </div>
              </a>
            </div>
            <p className="text-gray-800 font-medium">Program Manager</p>
            <h1 className='text-black font-bold text-2xl'>Gopal Bhandari</h1>
          </div>
          <div className="flex flex-col items-center  cursor-pointer">
            <div className='rounded-full overflow-hidden'>
              <a href="/team-detail">
                <div className="group relative">
                  <img
                    className="rounded-full w-[200px] h-[200px] object-cover mb-2 hover:scale-125 duration-500 ease-in-out"
                    src={healthD}
                    alt="rounded picture"
                  />
                  <p className="opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 right-0 bg-green-700 text-white text-center py-2">
                    Know More...
                  </p>
                </div>
              </a>
            </div>
            <p className="text-gray-800 font-medium">Health Department Head</p>
            <h1 className='text-black font-bold text-2xl'>Lokendra B. Khadka</h1>
          </div>
          <div className="flex flex-col items-center  cursor-pointer">
            <div className='rounded-full overflow-hidden'>
              <a href="/team-detail">
                <div className="group relative">
                  <img
                    className="rounded-full w-[200px] h-[200px] object-cover mb-2 hover:scale-125 duration-500 ease-in-out"
                    src={marketmanager}
                    alt="rounded picture"
                  />
                  <p className="opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 right-0 bg-green-700 text-white text-center py-2">
                    Know More...
                  </p>
                </div>
              </a>
            </div>
            <p className="text-gray-800 font-medium">Marketing Manager</p>
            <h1 className='text-black font-bold text-2xl'>Laxman Bhusal</h1>
          </div>
          <div className="flex flex-col items-center  cursor-pointer">
            <div className='rounded-full overflow-hidden'>
              <a href="/team-detail">
                <div className="group relative">
                  <img
                    className="rounded-full w-[200px] h-[200px] object-cover mb-2 hover:scale-125 duration-500 ease-in-out"
                    src={manager1}
                    alt="rounded picture"
                  />
                  <p className="opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 right-0 bg-green-700 text-white text-center py-2">
                    Know More...
                  </p>
                </div>
              </a>
            </div>
            <p className="text-gray-800 font-medium">Manager</p>
            <h1 className='text-black font-bold text-2xl'>Hary Pandey</h1>
          </div>
          <div className="flex flex-col items-center  cursor-pointer">
            <div className='rounded-full overflow-hidden'>
              <a href="/team-detail">
                <div className="group relative">
                  <img
                    className="rounded-full w-[200px] h-[200px] object-cover mb-2 hover:scale-125 duration-500 ease-in-out"
                    src={manager2}
                    alt="rounded picture"
                  />
                  <p className="opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 right-0 bg-green-700 text-white text-center py-2">
                    Know More...
                  </p>
                </div>
              </a>
            </div>
            <p className="text-gray-800 font-medium">Manager</p>
            <h1 className='text-black font-bold text-2xl'>Jagat Shah</h1>
          </div>


        </div>


      </div>
    </>
  )
}

export default Team