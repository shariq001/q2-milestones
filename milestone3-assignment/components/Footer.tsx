import { faGithub, faLinkedinIn, faQuora } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="bg-[#090D1F] text-white py-[20px]  xl:text-[18px] border-t-[1px] border-[#3f3e3e] flex justify-between items-center xl:px-[100px] pt-serif font-semibold tracking-[5px] sm:px-[16px] sm:min-w-[320px] sm:max-w-[767px] md:min-w-[768px] md:max-w-[1023px] md:px-[30px] lg:min-w-[1024px] lg:max-w-[1439px] lg:px-[80px] xl:min-w-[1440px] xl:max-w-full bg-[url('/Blog%201/back.png')] bg-repeat-y  bg-center">
        <p>&copy; MUHAMMAD SHARIQ</p>
        <nav className='md:flex justify-end gap-[20px] items-center sm:hidden'>
          <Link href='https://www.linkedin.com/in/muhammad---shariq' target='_blank' className='hover:bg-white p-[5px] hover:text-black transition-colors duration-500 rounded-full'><FontAwesomeIcon icon={faLinkedinIn} className='size-[25px]'/></Link>
          <Link href='https://www.quora.com/profile/Muhammad-Shariq-163' target='_blank'  className='hover:bg-white p-[5px] hover:text-black transition-colors duration-500 rounded-full'><FontAwesomeIcon icon={faQuora} className='size-[25px]'/></Link>
          <Link href='https://github.com/shariq001' target='_blank'  className='hover:bg-white p-[5px] hover:text-black transition-colors duration-500 rounded-full'><FontAwesomeIcon icon={faGithub} className='size-[25px]'/></Link>
        </nav>
    </div>
  )
}

export default Footer