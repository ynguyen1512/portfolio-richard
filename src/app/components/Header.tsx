"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import logo from "/public/images/logo.jpeg";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    useEffect(() => {
      AOS.init({
        duration: 1000,
        offset: 100,  
      });
    }, []); 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 770) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const firstChild = document.body.children[0];
      const firstChildInner = firstChild ? firstChild.children[0] : null;

      if (window.scrollY > 50) {
        if (firstChild) {
          firstChild.classList.remove("lg:my-4");
          firstChild.classList.add("lg:mt-0");

          if (firstChildInner) {
            firstChildInner.classList.remove("rounded-full");
            firstChildInner.classList.add("rounded-bl-[30px]");
            firstChildInner.classList.add("rounded-br-[30px]");
          }
        }
      } else if (window.scrollY === 0) {
        if (firstChild) {
          firstChild.classList.add("lg:my-4");
          firstChild.classList.remove("lg:mt-0");

          if (firstChildInner) {
            firstChildInner.classList.add("rounded-full");
            firstChildInner.classList.remove("rounded-bl-[30px]");
            firstChildInner.classList.remove("rounded-br-[30px]");
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleHamburgerClick = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed transition-all flex justify-between lg:my-4 lg:px-20 pl-2 pr-6 z-10 w-full lg:bg-transparent bg-black">
        <nav className="justify-center w-full bg-black rounded-full lg:flex hidden transition-all">
          <ul className="flex items-center">
          <li className="text-white mx-10 my-6 relative font-semibold">
              <a href="#">Home</a>
            </li>
            <li className="text-white mx-10 my-6 relative font-semibold">
              <a href="#skills">Skills</a>
            </li>
            <li className="text-white mx-10 my-6 relative font-semibold">
              <a href="#projects">Project</a>
            </li>
            <li className="text-white mx-10 my-6 relative font-semibold">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Mobile navigation */}
        <nav className="lg:hidden flex justify-between w-full items-center py-2">
          <div className="logo flex items-center">
            <a href="#">
              <Image src={logo} alt="Logo" className="w-12 h-1w-12"/>
            </a>
          </div>
          <HiOutlineMenu
            className="text-white text-2xl cursor-pointer"
            width={24}
            height={24}
            onClick={handleHamburgerClick}
            aria-label="Open menu"
          />
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`mobile-menu lg:hidden z-50 fixed top-0 left-0 w-full h-screen bg-black text-white flex flex-col items-center justify-center transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="absolute top-0 right-10">
          <HiOutlineX
            width={24}
            height={24}
            className="text-white text-3xl mt-6 cursor-pointer"
            onClick={handleCloseMenu}
            aria-label="Close menu"
          />
        </div>
        <ul className="flex flex-col items-center space-y-6">
          <li className="text-white mx-10 relative">
            <a href="#" onClick={handleCloseMenu}>Home</a>
          </li>
          <li className="text-white mx-10 relative">
            <a href="#service" onClick={handleCloseMenu}>Service</a>
          </li>
          <li className="text-white mx-10 relative">
            <a href="#skills" onClick={handleCloseMenu}>Skills</a>
          </li>
          <li className="text-white mx-10 relative">
            <a href="#projects" onClick={handleCloseMenu}>Project</a>
          </li>
          <li className="text-white mx-10 relative">
            <a href="#contact" onClick={handleCloseMenu}>Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
