import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex md:justify-between items-center xl:px-[150px] xl:py-[100px] sm:px-[10px] md:px-[30px] lg:px-[50px] sm:py-[16px] sm:justify-center'>
        <h2 className='xl:text-[21px] font-[500] dm-sans text-[#2429AF] sm:text-[16px] md:text-[18px]'>Mehmet Akif Karasu -- 2020 </h2>
        <nav className='md:flex gap-5 items-center xl:text-[21px] dm-sans font-[500] sm:hidden md:text-[18px]'>
            <Link href=''>Artstation</Link>
            <Link href=''>Linkedin</Link>
            <Link href=''>Twitter</Link>
        </nav>
    </footer>
  )
}

export default Footer