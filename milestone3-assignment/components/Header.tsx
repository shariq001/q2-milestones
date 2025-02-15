"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="py-[20px] xl:px-[100px] flex justify-between items-center transition-colors duration-400 bg-[#090D1F] text-white sm:px-[16px] sm:min-w-[320px] sm:max-w-[767px] md:min-w-[768px] md:max-w-[1023px] md:px-[30px] lg:min-w-[1024px] lg:max-w-[1439px] lg:px-[80px] xl:min-w-[1440px] xl:max-w-full bg-[url('/Blog%201/back.png')] bg-repeat-y  bg-center">
      <h1 className="xl:text-[24px] lg:text-[22px] md:text-[20px] font-bold md:tracking-[3px] xl:tracking-[5px]">MUHAMMAD SHARIQ</h1>

      {/* Desktop Navigation */}
      <nav className="md:flex justify-end items-center gap-[30px]  xl:text-[20px] md:text-[18px] font-semibold sm:hidden">
        <Link href="/" className="hover:border-b-[2px] hover:border-white">
          HOME
        </Link>
        <Link href="/Blogs" className="hover:border-b-[2px] hover:border-white">
          BLOGS
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-[24px]" onClick={() => setMenuOpen(true)}>
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed right-0 top-0 h-auto w-auto bg-[#141722]  text-white flex flex-col items-start gap-[10px] p-[20px] z-50">
          {/* Close Button */}
          <button className="text-[24px] mb-[10px] self-end" onClick={() => setMenuOpen(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>

          {/* Menu Links */}
          <Link href="/" className="hover:border-b-[2px] hover:border-white" onClick={() => setMenuOpen(false)}>
            HOME
          </Link>
          <Link href="/Blogs" className="hover:border-b-[2px] hover:border-white" onClick={() => setMenuOpen(false)}>
            BLOGS
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
