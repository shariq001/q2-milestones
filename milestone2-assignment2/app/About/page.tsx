import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const About = () => {
  return (
    <div className='xl:px-[150px] sm:px-[10px] md:px-[30px] lg:px-[50px] xl:min-w-[1440px] sm:min-w-[320px] md:min-w-[768px] lg:min-w-[1024px] '>
        
        {/* Section 1 */}
        <div className='flex lg:flex-row lg:justify-between xl:items-start py-[100px] sm:flex-col sm:py-[50px] sm:justify-start sm:items-center sm:gap-[30px]'>

            {/* Left */}
            <div className='lg:w-[400px] dm-sans flex flex-col gap-7 sm:w-[300px] md:w-[600px]'>
                <h1 className='xl:text-[60px] sm:text-[40px] font-[500] leading-[58.32px] mb-[10px]'>Hi I&apos;m Mehmet Akif Karasu, 3D artist & sculptor.</h1>
                
                <p className='xl:text-[32px] sm:text-[24px] font-[400] leading-[37.44px]'>My work is mainly focused on third-dimension modeling, texturing and rendering. I like exploring the creatures with a touch of dark surrealism for characters and production.</p>
                <p className='xl:text-[32px] sm:text-[24px] font-[400] leading-[37.44px]'>Now I&apos;m an interactive media design student in Istanbul ⏤ currently freelancing and seeking internship opportunities.</p>
            </div>

            {/* Right */}
            <div className='bg-[#606060] xl:max-w-[421px] xl:h-[590px] sm:w-[300px] lg:w-[421px]'>
                <Image src='/images/Profile Photo.png' alt='Profile Photo' width={421} height={590} className='lg:w-[421px] xl:h-[590px] sm:w-[300px] '/>
            </div>
        </div>

        {/* Section 2 */}
        <div className='lg:py-[100px] lg:max-w-[58%] sm:w-[300px] md:w-full flex sm:flex-col gap-[70px] sm:py-[50px] items-start md:flex-row md:justify-between lg:flex-col'>

           {/* First */}
           <div className='flex lg:flex-row sm:flex-col sm:gap-[30px] justify-between'>
                {/* Left */}
                <div className=''>
                    <h2 className='text-[18px] inter font-[500] underline lg:w-[130px]'>Main Software</h2>
                </div>

                {/* Right */}
                <div className='flex flex-col gap-8'>
                    <h3 className='text-[18px] inter font-[400]'>Pixologic ZBrush, Autodesk Maya, The Foundry Mari, Arnold Renderer, Bleder, Forger</h3>
                    <h3 className='text-[18px] inter font-[400]'>Adobe CC, Figma, Ableton</h3>
                </div>
           </div>

           {/* Second */}
           <div className='flex lg:flex-row sm:flex-col sm:gap-[30px] justify-between'>
                {/* Left */}
                <div className=''>
                    <h2 className='text-[18px] inter font-[500] underline lg:w-[130px]'>Main Skills</h2>
                </div>

                {/* Right */}
                <div className=' '>
                    <h3 className='text-[18px] inter font-[400]'>Organic and Polygonal Modeling, UV Layout, Texturing, Retopology, Ilustration, Sound Design</h3>
                </div>
           </div>
        </div>

        {/* Section 3 */}
        <div className='xl:py-[100px] sm:py-[50px] flex xl:flex-row sm:flex-col sm:gap-[30px] justify-between gap-[200px] border-black border-t-[3px]'>
            <h2 className='xl:w-[40%] xl:text-[32px] sm:text-[28px] font-[400] dm-sans '>I am thrilled to answer to your next project <FontAwesomeIcon icon={faArrowRight} className='xl:size-[30px] sm:size-[25px] inline-flex items-center' /></h2>
            <div className='xl:w-[50%] xl:text-[32px] sm:text-[24px] font-[400] dm-sans'>
                <h2>makifkarasu@outlook.com</h2>
                <Link href='' className='text-[18px] inter font-[400]'>View Resume</Link>
            </div>
        </div>
    </div>
  )
}

export default About