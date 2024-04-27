import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useAppData from '../../data/hook/useAppData';
import projectsData from '../../data/projects.json';

interface Project {
  id: number;
  href: string;
  title: string;
  entitle: string;
  imgSrc: string;
}

export default function Slider() {
  const { language } = useAppData();
  const [activeImage, setActiveImage] = useState<number>(0);
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);

  const clickImage = (index: number) => {
    setActiveImage(index);
  };

  const positions = ["center", "left1", "left", "right", "right1"];
  const projects: Project[] = projectsData;

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center items-center transition-transform ease-in-out duration-500 rounded-2xl">
        <div className="flex justify-center items-center mb-20">
          <div className={`bg-mainBlueDark p-2 text-center text-mainBlueLight rounded-md text-2xl  ${isMouseOver ? "border-2 border-mainBlue opacity-100" : ' opacity-80 '}`}>
            {language === 'pt' ? projects[activeImage].title : projects[activeImage].entitle}
          </div>
        </div>
        {projects.map((project, index) => (
          <motion.img
            key={project.id}
            src={`${process.env.PUBLIC_URL}/${project.imgSrc}`}
            alt={project.title}
            className={`rounded-[12px] absolute max-w-[400px] shadow-2xl hover:shadow-gray-900 hover:border-2 border-mainBlue ${project.id === 4 ? 'max-h-[300px]' : 'max-h-[400px]'}`}
            initial="center"
            animate={positions[activeImage === index ? 0 : (index - activeImage + 5) % 5]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            style={{ width: "40%" }}
            onClick={() => clickImage(index)}
            onMouseOver={() => setIsMouseOver(true)}
            onMouseOut={() => setIsMouseOver(false)}
          />
        ))}
        <div className=" mt-60 items-center">
          <a href={projects[activeImage].href} target="_blank" className="p-4">
            <button className="flex bg-black opacity-70 text-mainBlueLight uppercase p-2 rounded-md hover:opacity-100" >
              {language === 'pt' ? "Visite" : "Visit"}
              <img src="./github-mark-white.png" alt="GitHub" className="ml-2 w-5 h-5 mr-1 mt-0" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
