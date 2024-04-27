import React from "react"
import useAppData from "../../data/hook/useAppData";
import Slider from "./Slider";


export default function Projects () {
    const { language } = useAppData();


    return (
        <div id="projects" className="bg-gradient-to-r from-mainBlue to-mainBlueDark h-full">
            <h1 className="flex justify-center font-raleway  text-5xl text-white font-extrabold">
                {language === "pt" ? "Projetos" : "Projects"}
            </h1>
            <div className="flex self-center w-3/4 border-t-2 border-mainBlue"></div>
            <div className="w-full min-h-screen mx-auto grid place-items-center">
              <Slider/>
            </div>
        </div>
    );
};
