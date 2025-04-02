import { LinkedinIcon } from "lucide-react";
import Image from "next/image";
import { FaDownload } from "react-icons/fa6";
import { HiBriefcase, HiMail, HiPhone } from 'react-icons/hi';
import Button from "./components/Button";
import Projects from "./components/Projects";
import antDesignLogo from "/public/images/ant-design.svg";
import aboutMe from "/public/images/avatar-richard.jpg";
import cssLogo from "/public/images/css-logo.svg";
import dockerLogo from "/public/images/docker.png";
import htmlLogo from "/public/images/html-logo.png";
import javascriptLogo from "/public/images/js-logo.png";
import nextJSLogo from "/public/images/nextjs.png";
import nginx from "/public/images/nginx-logo.png";
import reactLogo from "/public/images/react-logo.webp";
import reduxLogo from "/public/images/redux-logo.png";
import tailwindLogo from "/public/images/tailwind.jpeg";
import typescriptLogo from "/public/images/typescript-logo.png";
import viteLogo from "/public/images/vite.png";
import wordpressLogo from "/public/images/wordpress.png";

export default function Home() {

    return (
        <>
            <section id="service" className="bg-black relative px-4 md:px-20 md:mt-10">
                {/* <Image className="absolute w-full rounded-[45px] bottom-0 left-0" src={servicesBg} alt=""/> */}

            </section>
            <section id="about-me" className="relative py-20">
                <div className="container mx-auto px-4 sm:px-10">
                    <div className="flex justify-center w-full gap-12 mt-10 max-sm:flex-col">
                        <div data-aos="fade-right" className="w-full">
                            <Image className="h-[600px] w-[600px] object-contain max-sm:w-full" src={aboutMe} alt="" />
                        </div>
                        <div data-aos="fade-left" className="w-full flex flex-col relative items-start justify-center">
                            <h1 className="relative text-black text-4xl sm:text-5xl">About Me</h1>
                            <div className="flex mt-2">
                                <div className="relative ms-24 w-3 h-3 border border-black rounded-full before:absolute before:h-0.5 before:top-1 before:bg-black before:w-16 before:right-5 after:absolute after:h-0.5 after:top-1 after:bg-black after:w-16 after:left-5"></div>
                            </div>
                            <div className="flex-wrap">
                                <p className="md:mt-2 text-gray-700 md:text-md sm:text-sm w-full text-left max-sm:mt-4 !leading-6">
                                    Passionate Front-End and Back-End Developer with over 2+ years of experience in web development and a strong expertise in ReactJS and NodeJS. Proficient in creating custom, SEO-friendly websites, currently advancing my skills in the MERN stack and AI to deliver cutting-edge solutions. Committed to providing high-quality, user-focused digital experiences.
                                </p>
                            </div>
                            <div className="relative block mt-8 line">
                                <Button
                                    classes="border-black bg-transparent stroke-black hover:text-black hover:bg-black"
                                    title="Download Resume"
                                    icon={<FaDownload className="ml-1 inline-block text-sm font-bold" width={24} height={24} />}
                                    link="/resume/frontend-developement-resume.pdf"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="skills" className="skills py-20">
                <div>
                    <div data-aos="fade-up">
                        <h1 className="relative text-5xl text-center">Tech Stacks</h1>
                        <div className="flex justify-center mt-2">
                            <div className="relative w-3 h-3 border border-black rounded-full before:absolute before:h-0.5 before:top-1 before:bg-black before:w-16 before:right-5 after:absolute after:h-0.5 after:top-1 after:bg-black after:w-16 after:left-5"></div>
                        </div>
                    </div>

                    {/* Test Infinity */}
                    <div className="w-full inline-flex flex-nowrap mt-12">
                        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                            <li>
                                <Image src={htmlLogo} alt="HTML" className="w-20 h-20" />
                            </li>
                            <li>
                                <Image src={cssLogo} alt="CSS" className="w-20 h-20" />
                            </li>
                            <li>
                                <Image src={reactLogo} alt="React" className="w-20 h-20" />
                            </li>
                            <li>
                                <Image src={reduxLogo} alt="Redux" className="w-20 h-20" />
                            </li>
                            <li>
                                <Image src={typescriptLogo} alt="Typescript" className="w-20 h-20" />
                            </li>
                            <li>
                                <Image src={nginx} alt="Typescript" className="w-48 h-20 object-cover" />
                            </li>
                            <li>
                                <Image src={javascriptLogo} alt="Typescript" className="w-20 h-20 object-cover rounded-md" />
                            </li>
                            <li>
                                <Image src={tailwindLogo} alt="Typescript" className="w-20 h-20 object-cover rounded-md" />
                            </li>
                            <li>
                                <Image src={dockerLogo} alt="Typescript" className="w-24 h-20 object-cover rounded-md" />
                            </li>
                            <li>
                                <Image src={viteLogo} alt="Typescript" className="w-24 h-20 object-cover rounded-md" />
                            </li>
                            <li><Image src={antDesignLogo} alt="Typescript" className="w-24 h-20 object-cover rounded-md" /></li>
                            <li>
                                <Image src={wordpressLogo} alt="Typescript" className="w-24 h-20 object-cover rounded-md" />

                            </li>
                            <li>
                                <Image src={nextJSLogo} alt="Typescript" className="w-36 h-20 object-cover rounded-md" />
                            </li>
                        </ul>
                        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                            <li>
                                <Image src={htmlLogo} alt="HTML" className="w-20 h-20" />
                            </li>
                            <li>
                                <Image src={cssLogo} alt="CSS" className="w-20 h-20" />
                            </li>
                            <li>
                                <Image src={reactLogo} alt="React" className="w-20 h-20" />
                            </li>
                            <li>
                                <Image src={reduxLogo} alt="Redux" className="w-20 h-20" />
                            </li>
                            <li>
                                <Image src={typescriptLogo} alt="Typescript" className="w-20 h-20" />
                            </li>
                            <li>
                                <Image src={nginx} alt="Typescript" className="w-48 h-20 object-cover" />
                            </li>
                            <li>
                                <Image src={javascriptLogo} alt="Typescript" className="w-20 h-20 object-cover rounded-md" />
                            </li>
                            <li>
                                <Image src={tailwindLogo} alt="Typescript" className="w-20 h-20 object-cover rounded-md" />
                            </li>
                            <li>
                                <Image src={dockerLogo} alt="Typescript" className="w-24 h-20 object-cover rounded-md" />
                            </li>
                            <li>
                                <Image src={viteLogo} alt="Typescript" className="w-24 h-20 object-cover rounded-md" />
                            </li>
                            <li><Image src={antDesignLogo} alt="Typescript" className="w-24 h-20 object-cover rounded-md" /></li>
                            <li>
                                <Image src={wordpressLogo} alt="Typescript" className="w-24 h-20 object-cover rounded-md" />

                            </li>
                            <li>
                                <Image src={nextJSLogo} alt="Typescript" className="w-36 h-20 object-cover rounded-md" />
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="my-journey py-20">
                <div data-aos="fade-up">
                    <h1 className="relative text-5xl text-center">My Professional Experience</h1>
                    <div className="flex justify-center mt-2 mb-14">
                        <div className="relative w-3 h-3 border border-black rounded-full before:absolute before:h-0.5 before:top-1 before:bg-black before:w-16 before:right-5 after:absolute after:h-0.5 after:top-1 after:bg-black after:w-16 after:left-5"></div>
                    </div>
                </div>
                <div className="m-5">
                    <div data-aos="fade-left" className="flex justify-center gap-5 w-full max-sm:flex-col">
                        <div className="card rounded-lg border-gray-300 shadow-2xl bg-gray-100 p-6 mb-6 w-2/3 h-fit max-sm:w-full">
                            <div className="border-b-2 flex items-center pb-4 gap-4">
                                <HiBriefcase className="bg-black text-white w-16 h-16 p-4 flex justify-center items-center rounded-full" />
                                <h2 className="text-3xl">Work Experience</h2>
                            </div>
                            <div className="card-body py-4">
                                <div className="flex justify-between items-center mt-4">
                                    <div className="w-full">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h2 className="text-xl font-medium">WALA ICT</h2>
                                                <p className="text-sm text-gray-500">Front-End Junior</p>
                                            </div>
                                            <p className="bg-black text-white px-2 py-1 rounded text-xs">July 2024 - Present</p>
                                        </div>
                                        <ul className="list-disc ml-6 md:mt-2 text-sm">
                                            <li>Work with Product Managers and Designers to implement and design the next generation of products
                                            </li>
                                            <li>Architect, build, and test new features</li>
                                            <li>Partner with backend teams to help shape API endpoints</li>
                                            <li>Work with UX teams to deliver important functionality to our flagship application</li>
                                            <li>Maintain excellent coding standards and practices</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center mt-4">
                                    <div className="w-full">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h2 className="text-xl font-medium">Midnight Tech</h2>
                                                <p className="text-sm text-gray-500">Software Engineer Freelancer</p>
                                            </div>
                                            <p className="bg-black text-white px-2 py-1 rounded text-xs">July 2024 - Present</p>
                                        </div>
                                        <ul className="list-disc ml-6 md:mt-2 text-sm">
                                            <li>Custom Web & Mobile Development: Tailored solutions to fit your unique needs.
                                            </li>
                                            <li>Cross-Platform Expertise: High-performance apps for both iOS and Android.</li>
                                            <li>Agile Delivery: Fast development cycles for quicker time-to-market.</li>
                                            <li>Cutting-Edge Technologies: Using the latest tools for scalable, future-ready solutions.</li>
                                            <li>User-Focused Design: Intuitive, engaging experiences for your audience.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center mt-4">
                                    <div className="w-full">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h2 className="text-xl font-medium">Nashtech Vietnam</h2>
                                                <p className="text-sm text-gray-500">Backend Developer Trainee</p>
                                            </div>
                                            <p className="bg-black text-white px-2 py-1 rounded text-xs">Apr 2024 – July 2024</p>
                                        </div>
                                        <ul className="list-disc ml-6 md:mt-2 text-sm">
                                            <li>Acquired proficiency in technical skills including Git, Web Foundations, PostgreSQL, Node.js, TypeScript, NestJS, ReactJS, GraphQL, Docker, NextJS and AWS.
                                            </li>
                                            <li>Gained experience in team collaboration through the Scrum methodology and project management on Azure DevOps.</li>
                                            <li>Successfully developed two projects utilizing the aforementioned technologies and Scrum methodology, with guidance from seasoned mentors at NashTech.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects" className="relative p-5 md:p-20 bg-black">
                {/* <Image className="absolute w-full rounded-[45px] bottom-0 left-0" src={servicesBg} alt=""/> */}
                <div data-aos="fade-up" className="mb-14">
                    <h1 className="relative text-white text-3xl md:text-5xl text-center">My Projects</h1>
                    <div className="flex justify-center mt-2">
                        <div className="relative w-3 h-3 border border-white rounded-full before:absolute before:h-0.5 before:top-1 before:bg-white before:w-24 before:right-5 after:absolute after:h-0.5 after:top-1 after:bg-white after:w-24 after:left-5"></div>
                    </div>
                </div>
                <Projects />
            </section>

            <section id="contact" className="contact py-20 px-4 md:px-20">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-6">
                        <h2 data-aos="fade-up" className="text-5xl font-">Let's <span className="stroke-black">Connect</span> &
                            <br /> <span className="stroke-black">Collaborate</span>
                        </h2>
                        <p data-aos="fade-up" className="my-6">Thank you for visiting my portfolio! If you have any questions, inquiries, or collaboration opportunities, I’d love to hear from you. Please fill out the contact form or reach out through the provided social media links, and I’ll get back to you as soon as possible.</p>

                        <ul data-aos="fade-up">
                            <li className="my-2"><a className="flex gap-4 items-center" href="tel:+84366515120"><HiPhone className="bg-black text-white text-sm w-10 h-10 p-2 rounded-full flex items-center justify-center" />  +84 366 515 120</a></li>
                            <li className="my-2"><a className="flex gap-4 items-center"><HiMail className="bg-black text-white cursor-none text-sm w-10 h-10 p-2 rounded-full flex items-center justify-center" /> nguyenphuyfgw@gmail.com</a></li>
                            <li className="my-2"><a className="flex gap-4 items-center" target="_blank" href="https://www.linkedin.com/in/ynguyen0101/"> <LinkedinIcon className="bg-black text-white text-sm w-10 h-10 p-2 rounded-full flex items-center justify-center" /> Y Nguyen (Richard)</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}
