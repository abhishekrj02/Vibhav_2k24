import { useState } from "react";
import "../../../styles/nav.module.css"
import { ProjectNav, TeamNav, WorkNav } from "./SubNavigation";
import Navigation from "./Navigation";
//no use pf this file main code is in header file
function Mainnav() {
  const [isproject, setisproject] = useState(false);
  const [ismain, setismain] = useState(true);
  const [isteam, setisteam] = useState(false);
  const [iswork, setiswork] = useState(false);
  return (
    <div>
      {ismain && (
        <Navigation
          projectmousein={() => {
            setismain(false);
            setisproject(true);
          }}
          teammousein={() => {
            setismain(false);
            setisteam(true);
          }}
          workmousein={() => {
            setismain(false);
            setiswork(true);
          }}
        />
      )}
      
      {isproject && (
        <ProjectNav
          hoveraway={() => {
            setismain(true);
            setisproject(false);
            setisteam(false);
            setiswork(false);
          }}
        />
      )}
      {isteam && (
        <TeamNav
          hoveraway={() => {
            setismain(true);
            setisproject(false);
            setisteam(false);
            setiswork(false);
          }}
        />
      )}
      {iswork && (
        <WorkNav
          hoveraway={() => {
            setismain(true);
            setisproject(false);
            setisteam(false);
            setiswork(false);
          }}
        />
      )}
    </div>
  );
}

export default Mainnav;


