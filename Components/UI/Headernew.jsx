import React from "react";
import { useState } from "react";

import Link from "next/link";
import { RiTeamLine } from "react-icons/ri";

import { AiOutlineTeam } from "react-icons/ai";
import { FaRobot } from "react-icons/fa";

import { SiQiskit } from "react-icons/si";
import { FiCpu } from "react-icons/fi";
import { HiPresentationChartBar } from "react-icons/hi";
import { MdWork } from "react-icons/md";

import { IoThunderstormOutline } from "react-icons/io5";
import { TbWaveSine } from "react-icons/tb";
import { TbAugmentedReality } from "react-icons/tb";
import { useEffect } from "react";
import {
  AudioLines,
  BookMarked,
  Box,
  Cpu,
  History,
  Home,
  Mail,
  Slack,
  User,
  Wifi,
} from "lucide-react";
import { Bot } from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    name: "AI/ML",
    href: "/Projects/ai",
    icon: Bot,
  },
  {
    name: "AR/VR",
    href: "/Projects/ar",
    icon: Box,
  },
  {
    name: "IoT",
    href: "/Projects/iot",
    icon: Wifi,
  },
  {
    name: "DSP",
    href: "/Projects/dsp",
    icon: AudioLines,
  },
  {
    name: "EMBEDDED SYSTEMS",
    href: "/Projects/es",
    icon: Cpu,
  },

  {
    name: "QUANTUM COMPUTING",
    href: "/Projects/quan",
    icon: Slack,
  },
];
const ourwork = [
  {
    name: "Current Year",
    href: "/OurWork/Current",
    icon: MdWork,
  },
  {
    name: "Previous Year",
    href: "/OurWork/Previous",
    icon: HiPresentationChartBar,
  },
];
const ourteam = [
  {
    name: "Current Team",
    href: "/OurTeam/currteam",
    icon: RiTeamLine,
  },
  {
    name: "Alumni",
    href: "/OurTeam/alumni",
    icon: AiOutlineTeam,
  },
];
// const Arrow = ({ ...props }) => {
//   return (
//     <svg width="12" height="12" viewBox="0 0 12 12" fill="none" {...props}>
//       <g id="Img">
//         <path
//           id="Vector"
//           d="M2 5L6 8L10 5"
//           stroke="white"
//           strokeWidth="1.0625"
//           strokeLinejoin="round"
//         />
//       </g>
//     </svg>
//   );
// };

const MyLink = ({ onClick }) => {
  return <a onClick={onClick}>Contact</a>;
};

function StickyBottomNavigation() {
  const [isMobile, setIsMobile] = useState(false);
  const [ProjectVisible, setProjectVisible] = useState(false);
  const [WorkVisible, setWorkVisible] = useState(false);
  const [TeamVisible, setTeamVisible] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Call handleResize initially to set the initial state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleProjectVisibility = () => {
    setProjectVisible(!ProjectVisible);
  };

  const handlePorjectClick = (e) => {
    e.preventDefault();
    if (ProjectVisible) {
      document.documentElement.style.setProperty(
        "--border-radius--menu-wrapper",
        "50px"
      );
      document.documentElement.style.setProperty(
        "--border-radius--menu-link",
        "192px"
      );
    } else {
      document.documentElement.style.setProperty(
        "--border-radius--menu-wrapper",
        "32px"
      );
      document.documentElement.style.setProperty(
        "--border-radius--menu-link",
        "23px"
      );
    }
    toggleProjectVisibility();
    setWorkVisible(false);
    setTeamVisible(false);
  };

  const toggleWorkVisibility = () => {
    setWorkVisible(!WorkVisible);
  };

  const handleWorkClick = (e) => {
    e.preventDefault();
    if (WorkVisible) {
      document.documentElement.style.setProperty(
        "--border-radius--menu-wrapper",
        "50px"
      );
      document.documentElement.style.setProperty(
        "--border-radius--menu-link",
        "192px"
      );
    } else {
      document.documentElement.style.setProperty(
        "--border-radius--menu-wrapper",
        "32px"
      );
      document.documentElement.style.setProperty(
        "--border-radius--menu-link",
        "23px"
      );
    }
    toggleWorkVisibility();
    setProjectVisible(false);
    setTeamVisible(false);
  };

  const toggleTeamVisibility = () => {
    setTeamVisible(!TeamVisible);
  };

  const handleTeamClick = (e) => {
    e.preventDefault();
    if (TeamVisible) {
      document.documentElement.style.setProperty(
        "--border-radius--menu-wrapper",
        "50px"
      );
      document.documentElement.style.setProperty(
        "--border-radius--menu-link",
        "192px"
      );
    } else {
      document.documentElement.style.setProperty(
        "--border-radius--menu-wrapper",
        "32px"
      );
      document.documentElement.style.setProperty(
        "--border-radius--menu-link",
        "23px"
      );
    }
    toggleTeamVisibility();
    setProjectVisible(false);
    setWorkVisible(false);
  };

  const handleScroll = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleLinkClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    handleScroll();
  };
  // const navRef = useRef(null);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (navRef.current && !navRef.current.contains(event.target)) {
  //       setProjectVisible(false);
  //       setWorkVisible(false);
  //       setTeamVisible(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setProjectVisible(false);
        setWorkVisible(false);
        setTeamVisible(false);
      }
    };

    const handleScroll = () => {
      // Close subnavigation menus when scrolling down
      if (
        window.scrollY > window.scrollY / 2 &&
        (ProjectVisible || WorkVisible || TeamVisible)
      ) {
        setProjectVisible(false);
        setWorkVisible(false);
        setTeamVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ProjectVisible, WorkVisible, TeamVisible]);

  return isMobile ? (
    <nav
      ref={navRef}
      className="fixed bottom-0 left-0 right-0 z-50 mx-auto max-w-screen-xl gap-x-2 gap-y-2  rounded-[var(--border-radius--menu-wrapper)] bg-[rgba(26,27,30,0.4)] border flex-col flex  p-[9px] max-sm:p-[5px] border-solid border-[#222325]  transition-custom "
    >
      {ProjectVisible && (
        <div className="max-w-full gap-x-6 gap-y-6 bg-[#1a1b1e] flex-col flex overflow-hidden p-0 rounded-[23px] animateNav transition-custom">
          {/* <div className="text-[#313235] text-[10px] leading-[120%] mt-6 mx-6 pb-[13px] border-b-[#222325] border-b border-solid">
            LEARN
          </div> */}
          <div className="gap-x-4 gap-y-4 grid-rows-[auto] grid-cols-[1fr] auto-cols-[1fr] justify-items-center grid my-6 mx-6 ">
            {projects.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white text-center text-sm max-sm:text-xs font-normal leading-[142.857%] max-sm:leading-none no-underline hover:underline transition-all duration-[0.2s] ease-[ease-in-out]"
              >
                <item.icon className="inline mx-4 w-7 h-7" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
      {WorkVisible && (
        <div className="max-w-full gap-x-6 gap-y-6 bg-[#1a1b1e] flex-col flex overflow-hidden p-0 rounded-[23px] animateNav transition-custom">
          {/* <div className="text-[#313235] text-[10px] leading-[120%] mt-6 mx-6 pb-[13px] border-b-[#222325] border-b border-solid">
            LEARN
          </div> */}
          <div className="gap-x-4 gap-y-4 grid-rows-[auto] grid-cols-[1fr] auto-cols-[1fr] justify-items-center grid my-6 mx-6">
            {ourwork.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white text-center text-sm max-sm:text-xs font-normal leading-[142.857%] max-sm:leading-none no-underline hover:underline transition-all duration-[0.2s] ease-[ease-in-out]"
              >
                <item.icon className="inline mx-4 w-7 h-7" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
      {TeamVisible && (
        <div className="max-w-full gap-x-6 gap-y-6 bg-[#1a1b1e] flex-col flex overflow-hidden p-0 rounded-[23px] animateNav transition-custom">
          {/* <div className="text-[#313235] text-[10px] leading-[120%] mt-6 mx-6 pb-[13px] border-b-[#222325] border-b border-solid">
            LEARN
          </div> */}
          <div className="gap-x-4 gap-y-4 grid-rows-[auto] grid-cols-[1fr] auto-cols-[1fr] justify-items-center grid my-6 mx-6">
            {ourteam.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white text-center text-sm max-sm:text-xs font-normal leading-[142.857%] max-sm:leading-none no-underline hover:underline transition-all duration-[0.2s] ease-[ease-in-out]"
              >
                <item.icon className="inline mx-4 w-7 h-7" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
      <div className="w-full gap-x-2 max-md:gap-1 gap-y-2 rounded-[var(--border-radius--menu-link)] bg-[#1a1b1e] justify-between flex overflow-auto p-3 max-sm:p-2 transition-custom">
        <button className="menuLink" onClick={handlePorjectClick}>
          <div>
            <BookMarked className="w-7 h-7 text-gray-200 mx-auto" />
            <p>Projects</p>
          </div>
        </button>
        <p className="menuLink" onClick={handleWorkClick}>
          <div>
            <History className="w-7 h-7 text-gray-200 mx-auto" />
            <p>Work</p>
          </div>
        </p>

        <Link href="/" className="menuLink">
          <div>
            <Home className="w-7 h-7 text-gray-200 mx-auto" />
            <p>Home</p>
          </div>
        </Link>

        <p className="menuLink" onClick={handleTeamClick}>
          <div>
            <User className="w-7 h-7 text-gray-200 mx-auto" />
            <p>Team</p>
          </div>
        </p>

        {/* <MyLink onClick={handleLinkClick} /> */}
        <a
          onClick={handleLinkClick}
          className="menuLink bg-[#36353a] hover:text-[#111] hover:bg-[#fff]"
        >
          <div>
            <Mail className="w-7 h-7 text-gray-200 mx-auto" />
            <p>Contact</p>
          </div>
        </a>
      </div>
    </nav>
  ) : (
    <nav
      ref={navRef}
      className=" fixed bottom-8 left-0 right-0 z-50 mx-auto max-w-screen-xl gap-x-2 gap-y-2  rounded-[var(--border-radius--menu-wrapper)] bg-[rgba(26,27,30,0.4)] border flex-col flex  p-[9px] max-sm:p-[5px] border-solid border-[#222325]  transition-custom "
    >
      {ProjectVisible && (
        <div className="max-w-full gap-x-6 gap-y-6 bg-[#1a1b1e] flex-col flex overflow-hidden p-0 rounded-[23px] animateNav transition-custom">
          {/* <div className="text-[#313235] text-[10px] leading-[120%] mt-6 mx-6 pb-[13px] border-b-[#222325] border-b border-solid">
            LEARN
          </div> */}
          <div className="gap-x-4 gap-y-4 grid-rows-[auto_auto] grid-cols-[1fr_1fr_1fr] auto-cols-[1fr] justify-items-center grid my-6 mx-6 ">
            {projects.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white text-center text-sm max-sm:text-xs font-normal leading-[142.857%] max-sm:leading-none no-underline hover:underline transition-all duration-[0.2s] ease-[ease-in-out]"
              >
                <item.icon className="inline mx-4 w-6 h-6" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
      {WorkVisible && (
        <div className="max-w-full gap-x-6 gap-y-6 bg-[#1a1b1e] flex-col flex overflow-hidden p-0 rounded-[23px] animateNav transition-custom">
          {/* <div className="text-[#313235] text-[10px] leading-[120%] mt-6 mx-6 pb-[13px] border-b-[#222325] border-b border-solid">
            LEARN
          </div> */}
          <div className="gap-x-4 gap-y-4 grid-rows-[auto] grid-cols-[1fr_1fr] auto-cols-[1fr] justify-items-center grid my-6 mx-6">
            {ourwork.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white text-center text-sm max-sm:text-xs font-normal leading-[142.857%] max-sm:leading-none no-underline hover:underline transition-all duration-[0.2s] ease-[ease-in-out]"
              >
                <item.icon className="inline mx-4 w-6 h-6" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
      {TeamVisible && (
        <div className="max-w-full gap-x-6 gap-y-6 bg-[#1a1b1e] flex-col flex overflow-hidden p-0 rounded-[23px] animateNav transition-custom">
          {/* <div className="text-[#313235] text-[10px] leading-[120%] mt-6 mx-6 pb-[13px] border-b-[#222325] border-b border-solid">
            LEARN
          </div> */}
          <div className="gap-x-4 gap-y-4 grid-rows-[auto] grid-cols-[1fr_1fr] auto-cols-[1fr] justify-items-center grid my-6 mx-6">
            {ourteam.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white text-center text-sm max-sm:text-xs font-normal leading-[142.857%] max-sm:leading-none no-underline hover:underline transition-all duration-[0.2s] ease-[ease-in-out]"
              >
                <item.icon className="inline mx-4 w-6 h-6" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
      <div className="w-full gap-x-2 max-md:gap-1 gap-y-2 rounded-[var(--border-radius--menu-link)] bg-[#1a1b1e] justify-between flex overflow-auto p-3 max-sm:p-2 transition-custom">
        <button className="menuLink" onClick={handlePorjectClick}>
          Projects
        </button>
        <p className="menuLink" onClick={handleWorkClick}>
          Work
        </p>

        <Link href="/" className="menuLink">
          <Home className="w-5 h-5 text-gray-300" />
          Home
        </Link>

        <p className="menuLink" onClick={handleTeamClick}>
          Team
        </p>

        {/* <MyLink onClick={handleLinkClick} /> */}
        <a
          onClick={handleLinkClick}
          className="menuLink bg-[#36353a] hover:text-[#111] hover:bg-[#fff]"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default StickyBottomNavigation;
