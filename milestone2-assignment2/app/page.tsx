import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className='xl:px-[150px] sm:px-[10px] md:px-[30px] xl:min-w-[1440px] sm:min-w-[320px] md:min-w-[768px] lg:min-w-[1024px] lg:px-[50px]'>
      
      {/* Section 1 */}
      <div className='flex lg:flex-row xl:justify-around xl:py-[100px] sm:py-[50px] sm:flex-col sm:items-center sm:justify-start sm:gap-[30px] '>

        {/* Left */}
        <div className='xl:w-[50%] sm:w-full sm:text-center'>
          <h1 className='font-[500] lg:text-[60px] sm:text-[47px] dm-sans xl:leading-[58.32px] sm:leading-[90%] tracking-[-3%]'>Hello, I&apos;m <br /> Mehmet Akif.</h1>
        </div>

        {/* Right */}
        <div className='xl:w-[50%] xl:mt-[70px] sm:w-full sm:text-center'>
          <p className='xl:text-[32px] font-[400] dm-sans leading-[37.44px] sm:text-[28px] '>A senior-year design student who trying to specialize in 3D modeling & texturing.</p>
        </div>
      </div>

      {/* Arrow */}
      <div className='py-[100px] xl:block sm:hidden lg:block'>
        <Image src='/images/arrow.png' width={40} height={40} alt='Arrow Down' />
      </div>

      {/* Projects Section */}

      {/* 1 */}
      <div className='flex md:flex-row md:justify-between xl:py-[100px] border-black border-b-[3px] sm:flex-col sm:justify-start sm:gap-[30px] sm:py-[50px] sm:items-center lg:items-start'>

        {/* Left */}
        <div className='xl:max-w-[400px] flex flex-col gap-5 inter sm:w-[300px] md:w-[350px] lg:w-[450px]'>
          <h2 className='text-[18px] font-[500]'>01/PROJECT NAME</h2>
          <h3 className='leading-[21.87px] text-[18px] font-[400] '>Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.</h3>
          <p className='text-[14px] leading-[17.01px] font-[400]'>Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.</p>
          <a href="" className='xl:mt-[160px] flex items-center gap-3 border-black border-b-[2px] w-[235px]'>More shots from this poject <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='size-[15px]' /></a>
        </div>

        {/* Right */}
        <div className='bg-[#606060] h-[364.68px] xl:w-[640px] sm:w-[300px] sm:h-[300px] md:w-[350px] lg:w-[450px] xl:h-[400px]'></div>

      </div>

      {/* 2 */}
      <div className='flex md:flex-row md:justify-between xl:py-[100px] border-black border-b-[3px] sm:flex-col sm:justify-start sm:gap-[30px] sm:py-[50px] sm:items-center lg:items-start'>

        {/* Left */}
        <div className='xl:max-w-[400px] flex flex-col gap-5 inter sm:w-[300px] md:w-[350px] lg:w-[450px]'>
          <h2 className='text-[18px] font-[500]'>02/PROJECT NAME</h2>
          <h3 className='leading-[21.87px] text-[18px] font-[400] '>Subsurface weight, specular roughness, diffuse maps generated with the procedure and manual techniques.</h3>
          <a href="" className='xl:mt-[210px] flex items-center gap-3 border-black border-b-[2px] w-[144px]'>See case study <FontAwesomeIcon icon={faArrowRight} className='size-[15px]' /></a>
        </div>

        {/* Right */}
        <div className='bg-[#606060] h-[364.68px] xl:w-[640px] sm:w-[300px] sm:h-[300px] md:w-[350px] lg:w-[450px] xl:h-[400px]'></div>

      </div>

      {/* 3 */}
      <div className='flex md:flex-row md:justify-between xl:py-[100px] border-black border-b-[3px] sm:flex-col sm:justify-start sm:gap-[30px] sm:py-[50px] sm:items-center lg:items-start'>

        {/* Left */}
        <div className='xl:max-w-[500px] flex flex-col gap-5 inter sm:w-[300px] md:w-[350px] lg:w-[450px]'>
          <h2 className='text-[18px] font-[500]'>03/PROJECT NAME</h2>
          <h3 className='leading-[21.87px] text-[18px] font-[400] '>Experimental creature modeling for school project.</h3>
          <p className='xl:mt-[230px] border-[#606060] border-b-[2px] w-[90px]'>Project WIP</p>
        </div>

        {/* Right */}
        <div className='bg-[#606060] h-[364.68px] xl:w-[640px] sm:w-[300px] sm:h-[300px] md:w-[350px] lg:w-[450px] xl:h-[400px]'></div>

      </div>




    </div>
  )
}

export default Home