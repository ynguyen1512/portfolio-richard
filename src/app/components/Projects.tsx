import React from "react";
import { FaChevronRight } from "react-icons/fa";
import project1 from "/public/images/services/frontend-web-development.png";
import project2 from "/public/images/services/wordPress-website-creation.png";
import project3 from "/public/images/services/figma-to-HTML-conversion.png";
import Image, { StaticImageData } from "next/image";

interface Project {
    title: string;
    description: string;
    image: StaticImageData;
    liveLink: string;
    tags: string[];
}

const projectsData: Project[] = [
  {
    title: "Positivus - Responsive Landing Page",
    description:
      "This is a fully responsive landing page created based on the SMIT - Web Batch 12 Module 1 design on Figma. The project uses HTML, CSS, Bootstrap, and a little bit of JavaScript to deliver a smooth and interactive experience. It adapts seamlessly to different screen sizes, ensuring a great user experience across devices.",
    image: project1,
    liveLink: "https://codewithshabbir.github.io/Positivus/",
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5"],
  },
  {
    title: "Restoran - Complete Front-end Solution",
    description:
      "A sleek, modern, and fully responsive website template for restaurants, built with HTML, CSS, Bootstrap, JavaScript, Slick Slider, and AOS. This template includes sections like the menu, about us, testimonials, gallery, and contact information, designed to offer a seamless user experience across all devices.",
    image: project2,
    liveLink: "https://codewithshabbir.github.io/Restoran/",
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Slick Slider", "AOS"],
  },
  {
    title: "Social Scoop - Responsive Landing Page",
    description:
      "This responsive HTML template is designed for digital marketing agencies. It features a hero banner that includes a call-to-action form and navigation menu. The project utilizes custom fonts and FontAwesome icons to enhance the user experience.",
    image: project3,
    liveLink: "https://html-template-task.netlify.app/",
    tags: ["HTML5", "CSS3"],
  },
];

const Projects: React.FC = () => {
  return (
    <div>
      {projectsData.map((project) => (
        <div className="grid grid-cols-1 md:grid-cols-12 projects-wrapper gap-6 my-4 p-5 rounded-3xl">
          <div className="md:col-span-4">
            <Image
              className="rounded-3xl"
              src={project.image}
              alt={project.title}
            />
          </div>
          <div className="md:col-span-8 flex flex-col justify-center">
            <h2 className="text-xl md:text-3xl font-bold text-white">
              {project.title}
            </h2>
            <p className="text-sm mt-2 text-gray-200 mb-2">
              {project.description}
            </p>
            <div>
              {project.tags.map((tags) => (
                <span className="bg-orange-400 text-white rounded-xl px-3 mr-2 py-[0.5px]">
                  {tags}
                </span>
              ))}
            </div>
            <div className="relative block mt-8 line">
              <a
                className="about-btn border-2 border-white relative inline-block text-[16px] leading-[50px] font-bold bg-transparent rounded-xl px-[35px] pt-[1px] pb-0 overflow-hidden font-sans capitalize transition-all ease-linear duration-300 text-white hover:text-white z-[1]"
                target="_blank"
                href={project.liveLink}
                rel="noopener noreferrer"
              >
                Live Preview
                <FaChevronRight className="ml-1 inline-block text-sm font-bold w-6" />
                <span className="hover-btn hover-bx"></span>
                <span className="hover-btn hover-bx2"></span>
                <span className="hover-btn hover-bx3"></span>
                <span className="hover-btn hover-bx4"></span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
