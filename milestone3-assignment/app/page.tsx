"use client";

import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useState } from "react";


const Main = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div
    style={{
      backgroundColor: darkMode ? "#090D1F" : "#fff",
      color: darkMode ? "#fff" : "#090D1F",
      borderColor: darkMode ? "#ffffff" : "#000000",
    }}
     className="xl:px-[100px] py-[50px] flex justify-center flex-col transition-colors duration-500 sm:h-screen sm:px-[16px] sm:min-w-[320px] sm:max-w-[767px] md:min-w-[768px] md:max-w-[1023px] md:px-[30px] lg:min-w-[1024px] lg:max-w-[1439px] lg:px-[80px] xl:min-w-[1440px] xl:max-w-full bg-[url('/Blog%201/back.png')] bg-repeat-y  bg-center">
      <div style={{
                backgroundColor: darkMode ? "#fff" : "#090D1F",
                color: darkMode ? "#090D1F" : "#fff",
                borderColor: darkMode ? "#ffffff" : "#000000",
              }} className="flex justify-between items-center w-[70px] rounded-full h-[35px] bg-white px-[8px] cursor-pointer">
                  {/* Light Mode */}
                  <FontAwesomeIcon icon={faCircle} className="text-orange-500 size-[20px]" onClick={() => setDarkMode(false)}/>
              
                  {/* Dark Mode */}
                  <FontAwesomeIcon icon={faMoon} className=" size-[20px]" onClick={() => setDarkMode(true)} />
        </div>
        <h1
        style={{
          borderColor: darkMode ? "#ffffff" : "#000000",
        }}
         className='font-bold xl:text-[200px] sm:text-[50px] md:text-[80px] lg:text-[120px] text-center border-y-[2px] my-[20px] pt-serif'>THE BLOG</h1>

         <h1 style={{
          borderColor: darkMode ? "#ffffff" : "#000000",
        }}
         className='font-bold xl:text-[110px] sm:text-[25px] md:text-[50px] lg:text-[80px] text-center border-y-[2px] my-[20px] leading-[90%] py-[30px] pt-serif'>MUHAMMAD SHARIQ</h1>
        
    </div>
  )
}

export default Main