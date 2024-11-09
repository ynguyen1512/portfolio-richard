import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaCodepen, FaPhone, FaGlobe, FaEnvelope, FaMap } from 'react-icons/fa'; // Importing the icons
import logo from '/public/images/muhammad-shabbir-logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="px-4 lg:px-20">
      <div className="bg-black w-full rounded-tl-[30px] rounded-tr-[30px] p-10 pb-0">
        <h2>Let's Connect there</h2>
        <div className="grid grid-cols-12 gap-6 border-b-[1px] pb-6">
          <div className="col-span-12 lg:col-span-4">
            <div className="logo">
              <Image src={logo} alt="Muhammad Shabbir Logo" />
              <p className="text-gray-300 text-sm">
                Hi, I'm Muhammad Shabbir, a passionate web developer with expertise in creating modern, responsive websites. With a strong background in HTML, CSS, JavaScript, and WordPress, I specialize in delivering high-quality web solutions. Explore my portfolio to see my latest projects and get in touch for collaborations!
              </p>
              <ul className="flex gap-4">
                <li className="my-2">
                  <a className="flex gap-4 items-center" href="https://www.linkedin.com/in/codewithshabbir/">
                    <FaLinkedin className="p-2 bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center" />
                  </a>
                </li>
                <li className="my-2">
                  <a className="flex gap-4 items-center" href="https://codepen.io/codewithshabbir">
                    <FaCodepen className="p-2 bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center" />
                  </a>
                </li>
                <li className="my-2">
                  <a className="flex gap-4 items-center" target="_blank" href="https://github.com/codewithshabbir">
                    <FaGithub className="p-2 bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-2">
            <h2 className="text-white mb-4 text-xl">Navigation</h2>
            <ul>
              <li className="leading-6"><a className="text-sm text-gray-300" href="#">Home</a></li>
              <li className="leading-6"><a className="text-sm text-gray-300" href="#">About</a></li>
              <li className="leading-6"><a className="text-sm text-gray-300" href="#">Service</a></li>
              <li className="leading-6"><a className="text-sm text-gray-300" href="#">Resume</a></li>
              <li className="leading-6"><a className="text-sm text-gray-300" href="#">Project</a></li>
              <li className="leading-6"><a className="text-sm text-gray-300" href="#">Contact</a></li>
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <h2 className="text-white mb-4 text-xl">Contact</h2>
            <ul>
              <li className="flex items-center gap-2 leading-6">
                <FaPhone className="text-white" />
                <a className="text-sm text-gray-300" href="tel:+923153987478">+92 3153987478</a>
              </li>
              <li className="flex items-center gap-2 leading-6">
                <FaGlobe className="text-white" />
                <a className="text-sm text-gray-300" href="https://codewithshabbir.github.io/Portfolio/">My Website</a>
              </li>
              <li className="flex items-center gap-2 leading-6">
                <FaEnvelope className="text-white" />
                <a className="text-sm text-gray-300" href="mailto:muhammadshabbir4589@gmail.com">muhammadshabbir4589@ <br />gmail.com</a>
              </li>
              <li className="flex items-center gap-2 leading-6">
                <FaMap className="text-white" />
                <a className="text-sm text-gray-300" href="#">Karachi, Pakistan</a>
              </li>
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <h2 className="text-white mb-4 text-xl">Get the latest information</h2>
            <div className="bg-gray-300 h-10 flex rounded-lg">
              <input type="text" placeholder="Email Address" className="h-full w-[100%] p-3 rounded-tl-lg rounded-bl-lg focus:ring-transparent focus-visible:outline-none text-black border-none" />
              <i className="fa-solid fa-angles-right bg-orange-500 w-12 flex justify-center items-center cursor-pointer text-white rounded-tr-lg rounded-br-lg"></i>
            </div>
          </div>
        </div>
        <p className="text-center py-5 text-white text-sm">
          © <span id="copyrightCurrentYear" className="mr-1">2024</span> 
          <b className="font-bold">Muhammad Shabbir</b>. All Rights Reserved. 
          <br />
          <a href="https://www.linkedin.com/in/codewithshabbir/" 
            className="text-orange-500 hover:text-orange-400 font-medium"
            target="_blank" 
            rel="noopener noreferrer">
            Connect with me on LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
