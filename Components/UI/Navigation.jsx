import React from "react";
import { useState } from "react";
import Link from "next/link";
import { RiTeamLine } from "react-icons/ri";
import { AiOutlineTeam } from "react-icons/ai";
import { HiPresentationChartBar } from "react-icons/hi";
import { MdWork } from "react-icons/md";
import { useEffect } from "react";
import { useRouter } from "next/router";
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

export default function Navigation() {
  const [isMobile, setIsMobile] = useState(false);
  const [ProjectVisible, setProjectVisible] = useState(false);
  const [WorkVisible, setWorkVisible] = useState(false);
  const [TeamVisible, setTeamVisible] = useState(false);
  const navRef = useRef(null);
  const router = useRouter();
  const [activeRoute, setActiveRoute] = useState("");

  const scrollToBottom = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 800); 
  }; //scrolltobottom

  // useEffect(() => {
  //   const handleClick = () => {
  //     scrollToBottom();
  //   };
  //   document.querySelector(".menuLink").addEventListener("click", handleClick);
  //   return () => {
  //     document
  //       .querySelector(".menuLink")
  //       .removeEventListener("click", handleClick);
  //   };
  // }, []); //for contact navigation

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000); // Adjust the breakpoint as needed
    };
    setActiveRoute(router.pathname);

    handleResize(); // Call handleResize initially to set the initial state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [router.pathname]); //for resize

  const toggleProjectVisibility = () => {
    setProjectVisible(!ProjectVisible);
  };

  const handleProjectClick = (e) => {
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
  }, [ProjectVisible, WorkVisible, TeamVisible]); //navigation of submenus

  return isMobile ? (
    <nav
      ref={navRef}
      className="fixed bottom-0 left-0 right-0 z-50 mx-auto max-w-screen-xl gap-x-2 gap-y-2  rounded-[var(--border-radius--menu-wrapper)] bg-[rgba(26,27,30,0.4)] border flex-col flex  p-[9px] max-sm:p-[5px] border-solid border-[#222325]  transition-custom "
    >
      {ProjectVisible && (
        <div className="max-w-full gap-x-6 gap-y-6 bg-[#1a1b1e] flex-col flex overflow-hidden p-0 rounded-[23px] animateNav transition-custom">
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
        <p
          onClick={(e) => {
            handleProjectClick(e);
          }}
          className={`menuLink ${activeRoute === "/Projects/[id]" ? "active" : ""}`}
        >
          <div>
            <BookMarked className="w-7 h-7 text-gray-200 mx-auto" />
            <p>Projects</p>
          </div>
        </p>

        <p
          onClick={(e) => {
            handleWorkClick(e);
          }}
          className={`menuLink ${activeRoute === "/OurWork/[id]" ? "active" : ""}`}
        >
          <div>
            <History className="w-7 h-7 text-gray-200 mx-auto" />
            <p> Work</p>
          </div>
        </p>

        <Link
          href="/"
          className={`menuLink ${location.pathname === "/" ? "active" : ""}`}
        >
          <div>
            <Home className="w-7 h-7 text-gray-300 mx-auto" />
            <p>Home</p>
          </div>
        </Link>

        <p
          onClick={(e) => {
            handleTeamClick(e);
          }}
          className={`menuLink ${activeRoute === "/OurTeam/[id]" ? "active" : ""}`}
        >
          <div>
            <User className="w-7 h-7 text-gray-200 mx-auto" />
            <p>Team</p>
          </div>
        </p>

        <Link href="/" scroll={false}>
          <div onClick={scrollToBottom} className="menuLink">
            <div>
              <Mail className="w-7 h-7 text-gray-200 mx-auto " />
              <p>Contact</p>
            </div>
          </div>
        </Link>
      </div>
    </nav> //for mobile view
  ) : (
    <nav
      ref={navRef}
      className=" fixed bottom-8 left-0 right-0 z-50 mx-auto max-w-screen-xl gap-x-2 gap-y-2  rounded-[var(--border-radius--menu-wrapper)] bg-[rgba(26,27,30,0.4)] border flex-col flex  p-[9px] max-sm:p-[5px] border-solid border-[#333333]  transition-custom "
    >
      {ProjectVisible && (
        <div className="max-w-full gap-x-6 gap-y-6 bg-[#1a1b1e] flex-col flex overflow-hidden p-0 rounded-[23px] animateNav transition-custom">
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
          <div className="grid-rows-[auto] grid-cols-[1fr_1fr] auto-cols-[1fr] justify-items-center grid my-6 mx-6">
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
        <p
          onClick={(e) => {
            handleProjectClick(e);
          }}
          className={`menuLink ${activeRoute === "/Projects/[id]" ? "active" : ""}`}
        >
          Projects
        </p>
        <p
          onClick={(e) => {
            handleWorkClick(e);
          }}
          className={`menuLink ${activeRoute === "/OurWork/[id]" ? "active" : ""}`}
        >
          Work
        </p>

        <Link
          href="/"
          className={`menuLink ${location.pathname === "/" ? "active" : ""}`}
        >
          <Home className="w-5 h-5 text-gray-300" />
          Home
        </Link>

        <p
          onClick={(e) => {
            handleTeamClick(e);
            
          }}
          className={`menuLink ${activeRoute === "/OurTeam/[id]" ? "active" : ""}`}
        >
          Team
        </p>

        <Link href="/" scroll={false}>
          <p className="menuLink" onClick={scrollToBottom}>
            Contact
          </p>
        </Link>
      </div>
    </nav> //navigation for desktop view
  );
}


