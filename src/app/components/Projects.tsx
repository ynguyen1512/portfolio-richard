import Image, { StaticImageData } from "next/image";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Button from "./Button";
import project1 from "/public/images/projects/projects-1.png";
import project2 from "/public/images/projects/projects-2.png";
import project3 from "/public/images/projects/projects-3.png";
import project4 from "/public/images/projects/projects-4.png";
import project5 from "/public/images/projects/projects-5.png";

interface Project {
    title: string;
    description: string;
    image: StaticImageData;
    liveLink: string;
    tags: string[];
}

const projectsData: Project[] = [
  {
    title: "STEKShield",
    description:
      "STEKSHIELD is a powerful but simple platform that puts a wide selection of tools at your fingertips. Now, you can manage your shop, customers, and more to boost your shop performance.",
    image: project1,
    liveLink: "https://stekshield.com/",
    tags: ["ReactJS", "TailwindCSS", "i18n", "RTK Query", "React Hook Form", "Ant Design","React Flowbite", "ChartJS",],
  },
  {
    title: "Thinkware CMS",
    description:
      "This is a fully responsive landing page created based on the SMIT - Web Batch 12 Module 1 design on Figma. The project uses HTML, CSS, Bootstrap, and a little bit of JavaScript to deliver a smooth and interactive experience. It adapts seamlessly to different screen sizes, ensuring a great user experience across devices.",
    image: project2,
    liveLink: "https://thinkware-admin.wala-ict.org/",
    tags: ["ReactJS", "TailwindCSS", "Ant Design", "RTK Query", "i18n"],
  },
  
  {
    title: "Prenex AI Landing Page & CMS",
    description:
      "PrenexAI empowers organizations to develop and deploy AI agents using their proprietary data with unparalleled ease. Build sophisticated models effortlessly, supporting text, images, voice, and video, and integrate flawlessly with platforms like Monday.com, AWS, Azure, and Google Cloud.",
    image: project3,
    liveLink: "https://prenex-ai.wala-ict.org/home/",
    tags: ["ReactJS", "TailwindCSS", "React Query", "Ant Design", "i18n", "Mantine"],
  },
  {
    title: "Edunet",
    description:
      "Edunet is a public education information service with over 25 years of experience.",
    image: project4,
    liveLink: "https://www.edunet.net/main/",
    tags: ["HTML", "SCSS", "JavaScript"],
  },
  {
    title: "Chop Chep Pets",
    description:
      "Chọp Chẹp is a brand born from a deep and simple love for pets, aiming to provide quality, reasonably priced products for pet owners. At its core, Chọp Chẹp is dedicated to offering products that not only fulfill the basic needs of pets but also reflect their unique personalities through fashion and other special items.",
    image: project5,
    liveLink: "https://www.chopchepets.com/",
    tags: ["ReactJS", "TailwindCSS"],
  },
];

const Projects: React.FC = () => {
  return (
    <div>
      {projectsData.map((project, index) => (
        <div key={index} data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-12 projects-wrapper gap-6 my-4 p-5 rounded-3xl">
          <div className="md:col-span-4">
            <Image
              className="rounded-3xl w-full" layout="responsive"
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
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tags, index) => (
                <span key={index} className="bg-black text-white rounded-xl px-3 py-[0.5px]">
                  {tags}
                </span>
              ))}
            </div>
            <div className="relative block mt-8 line">
            <Button
                classes="border-white bg-transparent text-white hover:text-black hover:bg-white"
                title="Live Preview"
                icon={<FaChevronRight className="ml-1 inline-block text-sm font-bold w-6" />}
                link={project.liveLink}
            />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
