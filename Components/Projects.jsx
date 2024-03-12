import React, { useState } from "react";
import projects from "../data/tabs.json";
import Contact from "./Contactnew";
import ProjectCard from "./UI/cards/projectCard";
import Card from "./UI/cards/projectCardnew";

export default function Projects({ id }) {
  const [cardState, setCarState] = useState(0);
  const tabs = {
    ai: "AI/ML",
    ar: "AR/VR",
    iot: "IoT",
    es: "EMBEDDED SYSTEMS",
    dsp: "DSP",
    quan: "QUANTUM COMPUTING",
  };
  return (
    <>
      <div className="p-3 pt-24 justify-center">
        <h1 className="text-[#dab971] mt-10 justify-center flex text-5xl md:text-6xl md:p-0 p-2 font-mono">
          Projects
        </h1>

        <div className="text-[#dab971]  justify-center flex mt-6 mb-8 font-sans text-5xl font-black">
          {tabs[id]}
        </div>
        {/* <div className="grid lg:grid-cols-4 md:grid-cols-3 font-[Azonix] sm:grid-cols-2 lg:gap-6 md:gap-3 sm:gap-2 lg:px-6 md:px-4 sm:px-2">
          {projects[tabs[id]]?.map((card, ind) => {
            return (
              <div key={ind} className="justify-center mb-3">
                <ProjectCard card={card} />
              </div>
            );
          })}
        </div> */}
      </div>
      <div className="flex flex-wrap justify-around justify-start">
        {projects[tabs[id]]?.map((card, ind) => {
          return (
            <div key={ind} className="justify-center mb-3 w-fit">
              <Card card={card} />
            </div>
          );
        })}
      </div>
    </>
  );
}
