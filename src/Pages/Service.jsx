import React,{useState} from 'react'
import '../CSS/body.css'
import wheat from '../assets/wheat.png'
import medic from '../assets/medicinalherb.jpg'
import { useSpring, animated } from 'react-spring';
const Service = () => {
  const [showCard, setShowCard] = useState(false);
  const slideInProps = useSpring({
    opacity: showCard ? 1 : 0,
    transform: showCard ? 'translate3d(0, 0, 0)' : 'translate3d(100%, 0, 0)',
    from: { opacity: 0, transform: 'translate3d(100%, 0, 0)' },
    delay: 500 ,
  });
  const slideInPropsY = useSpring({
    opacity: showCard ? 1 : 0,
    transform: showCard ? 'translate3d(0, 0, 0)' : 'translate3d(0, 100%, 0)',
    from: { opacity: 0, transform: 'translate3d(0, 100%, 0)' },
    delay: 1000 
  });
  const slideInPropsZ = useSpring({
    opacity: showCard ? 1 : 0,
    transform: showCard ? 'translate3d(0, 0, 0)' : 'translate3d(0, -100%, 0)',
    from: { opacity: 0, transform: 'translate3d(0, -100%, 0)' },
    delay: 1500 
  });
  const slideInPropsXY = useSpring({
    opacity: showCard ? 1 : 0,
    transform: showCard ? 'translate3d(0, 0, 0)' : 'translate3d(0, 100%, 0)',
    from: { opacity: 0, transform: 'translate3d(0, 1000%, 0)' },
    delay: 2000 
  });
  const slideInPropsXYZ = useSpring({
    opacity: showCard ? 1 : 0,
    transform: showCard ? 'translate3d(0, 0, 0)' : 'translate3d(0, 100%, 0)',
    from: { opacity: 0, transform: 'translate3d(0, 1000%, 0)' },
    delay: 3000 
  });
  return (
    <div className='bg-gray-200 z-0'>
      <div className='my-bg h-[70vh] w-[100vw]'></div>
      <div className='text-center items-center text-black font-bold text-2xl my-6'>
        <h1>Our Services</h1>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-5 items-center justify-center z-0 '>
      <animated.div
      className=" rounded overflow-hidden shadow-sm shadow-gray-900 m-4  bg-gray-100"
      style={slideInProps}
      onMouseMove={() => setShowCard(true)}
    >
      <img className="w-full cursor-pointer hover:scale-105" src={medic} alt="Agriculture" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Fresh fruite</div>
        <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur culpa explicabo impedit numquam repudiandae magnam eum beatae saepe natus repellendus?</p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
           <a href="/service-detail">Learn More</a>
        </button>
      </div>
    </animated.div>
    <animated.div
      className="max-w-xs rounded overflow-hidden shadow-sm shadow-gray-900 m-4 bg-gray-100"
      style={slideInPropsZ}
      onMouseMove={() => setShowCard(true)}
    >
      <img className="w-full" src={medic} alt="Agriculture" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Fresh fruite</div>
        <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur culpa explicabo impedit numquam repudiandae magnam eum beatae saepe natus repellendus?</p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
            <a href="/service-detail">Learn More</a>
        </button>
      </div>
    </animated.div>
    <animated.div
      className="max-w-xs rounded overflow-hidden shadow-sm shadow-gray-900 m-4 bg-gray-100"
      style={slideInPropsY}
      onMouseMove={() => setShowCard(true)}
      >
      <img className="w-full" src={medic} alt="Agriculture" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Fresh fruite</div>
        <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur culpa explicabo impedit numquam repudiandae magnam eum beatae saepe natus repellendus?</p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
           <a href="/service-detail">Learn More</a>
        </button>
      </div>
    </animated.div>
    <animated.div
      className="max-w-xs rounded overflow-hidden shadow-sm shadow-gray-900 m-4 bg-gray-100"
      style={slideInPropsXY}
      onMouseMove={() => setShowCard(true)}
      >
      <img className="w-full" src={medic} alt="Agriculture" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Fresh fruite</div>
        <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur culpa explicabo impedit numquam repudiandae magnam eum beatae saepe natus repellendus?</p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
           <a href="/service-detail">Learn More</a>
        </button>
      </div>
    </animated.div>
    
    </div>
    <div className='grid lg:grid-cols-2 sm:grid-cols-1 bg-gray-300'>
      <div>
      <animated.div
      style={slideInPropsXYZ}
      onMouseMove={() => setShowCard(true)}
      >
      <img className="w-full" src={wheat} alt="Agriculture" />
    </animated.div>
      </div>
      <div className='flex flex-col text-black my-4 p-7'>
          <h1 className='text-xl font-bold px-6 py-2'>Pure & Organic</h1>
          <p className='px-6 py-2'>Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her.</p>
          <h1 className='text-xl font-bold px-6 py-2'>Always Fresh</h1>
          <p className='px-6 py-2'>Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her.</p>



      </div>

    </div>
      </div>
  )
}

export default Service