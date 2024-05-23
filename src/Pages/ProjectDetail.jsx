import React from 'react'
import '../CSS/body.css'
const ProjectDetail = () => {
    return (
        <>
            <div className='my-bg w-[100vw] h-[70vh]'></div>
            <div className='flex flex-col text-center'>
                <h1 className='font-bold text-xl text-green-600'>Welcome To Our Organic Farm!</h1>
                <h1 className='font-bold text-2xl text-black'>Organic Farming</h1>
            </div>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
                <div></div>
                <div className='w-full lg:w-[80vw]'>
                    <p className='p-9'>Organic farming is rooted in the principles of sustainability and environmental stewardship. It seeks to provide authentic food while respecting natural life cycle processes, including ecological land management to balance animal life and promote biodiversity. The four guiding principles of organic farming—health, fairness, ecology, and care—form the foundation of this agricultural approach. These principles are based on the concept that organic agriculture should sustain and enhance the health of soil, plant, animal, human, and the planet as one interconnected system. Organic farming is not just about avoiding synthetic inputs; it is a holistic approach that aims to create a sustainable system, conserving energy, soil, and water while providing general maintenance of the environment.

                        The principle of health in organic agriculture emphasizes the production of superior quality products with high nutritional value and no chemicals, promoting good health for consumers. Ecology is another fundamental principle, highlighting the importance of basing organic agriculture on living ecological systems and cycles, working with them, emulating them, and helping sustain them. Fairness is integral to organic farming, as it is built on relationships that ensure fairness with regard to the common environment and life opportunities. The principle of care underlines the need for organic agriculture to be managed in a precautionary and responsible manner to protect the environment and ensure the well-being of current and future generations.
                        These principles not only guide the practices of organic farming but also express the contribution that organic agriculture can make to the world. They inspire environmentally friendly cultivation and provide a vision for agriculture that prioritizes the well-being of the planet and its inhabitants. As the demand for organic products continues to rise, understanding the ethical and ecological foundations of organic farming becomes increasingly important in shaping the future of agriculture and food production.</p>
                </div>

            </div>
        </>
    )
}

export default ProjectDetail