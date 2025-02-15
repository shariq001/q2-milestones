"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import Link from "next/link";

type BlogPost = {
  id: string;
  title: string;
  slug: string;
  author: string;
  date_of_publication: string;
  tags: string[];
  cover_image: string;
  intropara: string;
  image1: string;
  head1: string;
  subHead1: string;
  para1: string;
  subHead2: string;
  list1: string[];
  para2: string;
  image2: string;
  head2: string;
  subHead3: string;
  para3: string;
  subHead4: string;
  list2: string[];
  subHead5: string;
  list3: string[];
  image3: string;
  head3: string;
  subHead6: string;
  para4: string;
  subHead7: string;
  para5: string;
  list4: string[];
  para6: string;
  list5: string[];
  image4: string;
  head4: string;
  subHead8: string;
  para7: string;
  subHead9: string;
  list6: string[];
  subHead10: string;
  list7: string[];
  para8: string;
  image5: string;
  head5: string;
  para9: string;
  subHead11: string;
  para10: string;
  calltoaction: string;
};

const BlogPost = () => {
  const { slug } = useParams();
  const [darkMode, setDarkMode] = useState(true);
  const [post, setPost] = useState<BlogPost | null>(null); // Ensure post is a single object, not an array

  useEffect(() => {
    if (slug) {
      async function fetchPost() {
        const res = await fetch(`/api/blog?id=${slug}`);
        const data: BlogPost = await res.json(); // Explicitly type response
        setPost(data);
      }
      fetchPost();
    }
  }, [slug]);

  if (!post) return <p>Loading...</p>;

  return (
    <div
    style={{
      backgroundColor: darkMode ? "#090D1F" : "#fff",
      color: darkMode ? "#fff" : "#090D1F",
      borderColor: darkMode ? "#ffffff" : "#000000",
    }}
     className="xl:px-[100px] py-[50px] flex justify-center flex-col transition-colors duration-500 sm:px-[16px] sm:min-w-[320px] sm:max-w-[767px] md:min-w-[768px] md:max-w-[1023px] md:px-[30px] lg:min-w-[1024px] lg:max-w-[1439px] lg:px-[80px] xl:min-w-[1440px] xl:max-w-full bg-[url('/Blog%201/back.png')] bg-repeat-y  bg-center">
      <div style={{
                backgroundColor: darkMode ? "#fff" : "#090D1F",
                color: darkMode ? "#090D1F" : "#fff",
              }} className="flex justify-between items-center w-[70px] rounded-full h-[35px] bg-white px-[8px] cursor-pointer">
                  {/* Light Mode */}
                  <FontAwesomeIcon icon={faCircle} className="text-orange-500 size-[20px]" onClick={() => setDarkMode(false)}/>
              
                  {/* Dark Mode */}
                  <FontAwesomeIcon icon={faMoon} className=" size-[20px]" onClick={() => setDarkMode(true)} />
        </div>

        {/* sect 1 */}
        <div className="flex lg:flex-row sm:flex-col justify-between py-[50px]">
        <div
              style={{
                
                borderColor: darkMode ? "#ffffff" : "#000000",
              }}
               className="flex flex-col xl:w-[800px] gap-[20px]  border-x-[2px] xl:px-[30px] py-[50px] sm:px-[10px] md:px-[20px] md:max-w-[800px]">
                <p className="text-gray-500 font-semibold lg:text-[14px] sm:text-[12px]">{post.date_of_publication}</p>
                <h1 className="xl:text-[26px] font-bold sm:text-[18px] md:text-[21px] lg:text-[24px]">{post.title}</h1>
                <Image src={post.cover_image} width={700} height={500} alt="Cover Image"/>
                <p className="lg:text-[16px] sm:text-[12px] md:text-[14px]">{post.intropara}</p>

                {/* Section 1 */}
                <Image src={post.image1} width={700} height={500} alt="Section 1" />
                <h1 className=" lg:text-[26px] font-bold sm:text-[18px] md:text-[21px]">{post.head1}</h1>
                <h2 className="text-[#853376] lg:text-[22px] font-semibold md:text-[18px]">&#8227; {post.subHead1}</h2>
                <p className="lg:text-[16px] sm:text-[12px] md:text-[14px]">{post.para1}</p>
                <h2 className="text-[#853376] lg:text-[22px] font-semibold md:text-[18px] ">&#8227; {post.subHead2}</h2>
                <ul className="ml-[20px] list-disc lg:text-[16px] sm:text-[12px] md:text-[14px]">
                  {post.list1.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="lg:text-[16px] sm:text-[12px] md:text-[14px]">{post.para2}</p>
                <Image src={post.image2} width={700} height={500} alt="Section 1" />
                <h1 className=" lg:text-[26px] font-bold sm:text-[18px] md:text-[21px]">{post.head2}</h1>
                <h2 className="text-[#853376] lg:text-[22px] font-semibold md:text-[18px] ">&#8227; {post.subHead3}</h2>
                <p className="lg:text-[16px] sm:text-[12px] md:text-[14px]">{post.para3}</p>
                <h2 className="text-[#853376] lg:text-[22px] font-semibold md:text-[18px] ">&#8227; {post.subHead4}</h2>
                <ul className="ml-[20px] list-disc lg:text-[16px] sm:text-[12px] md:text-[14px]">
                  {post.list2.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <h2 className="text-[#853376] lg:text-[22px] font-semibold md:text-[18px] ">&#8227; {post.subHead5}</h2>
                <ul className="ml-[20px] list-disc lg:text-[16px] sm:text-[12px] md:text-[14px]">
                  {post.list3.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <Image src={post.image3} width={700} height={500} alt="Section 1" />
                <h1 className=" lg:text-[26px] font-bold sm:text-[18px] md:text-[21px]">{post.head3}</h1>
                <h2 className="text-[#853376] lg:text-[22px] font-semibold md:text-[18px] ">&#8227; {post.subHead6}</h2>
                <p className="lg:text-[16px] sm:text-[12px] md:text-[14px]">{post.para4}</p>
                <h2 className="text-[#853376] lg:text-[22px] font-semibold md:text-[18px] ">&#8227; {post.subHead7}</h2>
                <p className="lg:text-[16px] sm:text-[12px] md:text-[14px]">{post.para5}</p>
                <ul className="ml-[20px] list-disc lg:text-[16px] sm:text-[12px] md:text-[14px]">
                  {post.list4.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="lg:text-[16px] sm:text-[12px] md:text-[14px]">{post.para6}</p>
                <ul className="ml-[20px] list-disc lg:text-[16px] sm:text-[12px] md:text-[14px]">
                  {post.list5.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <Image src={post.image4} width={700} height={500} alt="Section 1" />
                <h1 className=" lg:text-[26px] font-bold sm:text-[18px] md:text-[21px]">{post.head4}</h1>
                <h2 className="text-[#853376] lg:text-[22px] font-semibold md:text-[18px] ">&#8227; {post.subHead8}</h2>
                <p className="lg:text-[16px] sm:text-[12px] md:text-[14px]">{post.para7}</p>
                <h2 className="text-[#853376] lg:text-[22px] font-semibold md:text-[18px] ">&#8227; {post.subHead9}</h2>
                <ul className="ml-[20px] list-disc lg:text-[16px] sm:text-[12px] md:text-[14px]">
                  {post.list6.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <h2 className="text-[#853376] lg:text-[22px] font-semibold md:text-[18px] ">&#8227; {post.subHead10}</h2>
                <ul className="ml-[20px] list-disc lg:text-[16px] sm:text-[12px] md:text-[14px]">
                  {post.list7.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="lg:text-[16px] sm:text-[12px] md:text-[14px]">{post.para8}</p>
                <Image src={post.image5} width={700} height={500} alt="Section 1" />
                <h1 className=" lg:text-[26px] font-bold sm:text-[18px] md:text-[21px]">{post.head5}</h1>
                <p className="lg:text-[16px] sm:text-[12px] md:text-[14px]">{post.para9}</p>
                <h2 className="text-[#853376] lg:text-[22px] font-semibold md:text-[18px] ">&#8227; {post.subHead11}</h2>
                <p className="lg:text-[16px] sm:text-[12px] md:text-[14px]">{post.para10}</p>
                <p className=" italic text-[#853376] lg:text-[16px] sm:text-[12px] md:text-[14px]">Follow me on <Link
                style={{
                  color: darkMode ? "#ffffff" : "#000000",
                }}
                 href='https://www.linkedin.com/in/muhammad---shariq' className="underline text-white " target="_blank" >LinkedIn</Link> for more insights on Web Development and AI! Share this article with your fellow developers and AI enthusiasts!</p>
            </div>

            <div className="h-full flex items-center justify-center xl:px-[52px] sm:px-[20px] md:max-w-[800px]">
              <p className="lg:[writing-mode:vertical-rl] xl:text-[200px] lg:text-[100px] lg:tracking-[30px] font-bold pt-serif lg:whitespace-nowrap md:text-[20px]">{post.author} | {post.slug} | {post.date_of_publication}</p>
            </div>
        </div>
    </div>
  );
};

export default BlogPost;
