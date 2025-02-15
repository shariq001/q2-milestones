"use client";

import {  faArrowUpRightFromSquare, faCircle } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type BlogPost = {
  id: string;
  title: string;
  date_of_publication: string;
  intropara: string;
  cover_image: string;
};

const Blogs = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [posts, setPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('/api/blog')
      const data = await res.json();
      setPosts(data);
    }
    fetchPosts()
  }, [])
  return (
    <div
    style={{
      backgroundColor: darkMode ? "#090D1F" : "#fff",
      color: darkMode ? "#fff" : "#090D1F",
    }}
     className="xl:px-[100px] py-[50px] flex justify-center flex-col transition-colors duration-500 sm:px-[16px] sm:min-w-[320px] sm:max-w-[767px] md:min-w-[768px] md:max-w-[1023px] md:px-[30px] lg:min-w-[1024px] lg:max-w-[1439px] lg:px-[80px] xl:min-w-[1440px] xl:max-w-full bg-[url('/Blog%201/back.png')] bg-repeat-y  bg-center">
      <div style={{
                backgroundColor: darkMode ? "#fff" : "#090D1F",
                color: darkMode ? "#090D1F" : "#fff",
              }} className="flex justify-between items-center w-[70px] rounded-full h-[35px] bg-white px-[8px] cursor-pointer ">
                  {/* Light Mode */}
                  <FontAwesomeIcon icon={faCircle} className="text-orange-500 size-[20px]" onClick={() => setDarkMode(false)}/>
              
                  {/* Dark Mode */}
                  <FontAwesomeIcon icon={faMoon} className=" size-[20px]" onClick={() => setDarkMode(true)} />
        </div>
        
        {/* Section 1 */}
        <div className="flex flex-wrap gap-[50px] py-[50px] justify-center">
          {posts.map((post) => (
            <div key={post.id} className="flex flex-col xl:w-[500px] gap-[20px] border-b-[2px] pb-[10px] sm:w-[288px] lg:w-[400px]">
              <Image src={post.cover_image} width={500} height={500} alt="Cover Image" className="sm:w-[288px] lg:w-[400px] xl:w-[500px]"/>
              <div className="flex flex-col gap-[10px]">
                <div className="flex justify-between items-center xl:w-[500px] sm:w-[288px] lg:w-[400px]">
                  <h2 className="xl:text-[22px] font-semibold xl:w-[450px] lg:w-[400px]">{post.title}</h2>
                  <Link href={`/Blogs/${post.id}`} className="">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </Link>
                </div>
                <p className="text-gray-500 sm:text-[12px] sm:w-[288px] lg:w-[400px]">{post.date_of_publication}</p>
                <p className="sm:text-[14px] sm:w-[288px] lg:w-[400px] xl:w-[500px]">{post.intropara.length > 120 ? post.intropara.slice(0, 120) + "..." : post.intropara}</p>
                
              </div>
            </div>
          ))}
    </div>
    </div>
  )
}

export default Blogs