import React from "react";

import Link from "next/link";
import { RiTeamLine } from "react-icons/ri";

import { AiOutlineTeam } from "react-icons/ai";
import { FaRobot } from "react-icons/fa";

import { SiQiskit } from "react-icons/si";
import { FiCpu } from "react-icons/fi";
import { HiPresentationChartBar } from "react-icons/hi";
import { MdWork } from "react-icons/md";

import { IoThunderstormOutline } from "react-icons/io5";
import { TbWaveSine, TbAugmentedReality } from "react-icons/tb";
const projects = [
  {
    name: "AI/ML",
    href: "/Projects/ai",
    icon: FaRobot,
  },
  {
    name: "AR/VR",
    href: "/Projects/ar",
    icon: TbAugmentedReality,
  },
  {
    name: "IoT",
    href: "/Projects/iot",
    icon: IoThunderstormOutline,
  },
  {
    name: "EMBEDDED SYSTEMS",
    href: "/Projects/es",
    icon: FiCpu,
  },
  {
    name: "DSP",
    href: "/Projects/dsp",
    icon: TbWaveSine,
  },
  {
    name: "QUANTUM COMPUTING",
    href: "/Projects/quan",
    icon: SiQiskit,
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
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function ProjectNav({ hoveraway }) {
  return (
    <ul
      className="option-wrapper max-w-screen-xl mx-auto flex items-center justify-center mb-5 rounded-3xl z-50 fixed bottom-0 left-0 right-0 list-none flex justify-evenly items-center p-0 bg-slate-800 bg-opacity-100"
      onMouseLeave={hoveraway}
    >
      {projects.map((item) => (
        <li className="p-4 w-full rounded-3xl text-center cursor-pointer text-white hover:bg-gray-600 hover:rounded-3xl transition duration-300">
          <Link key={item.name} href={item.href} className="">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export function TeamNav({ hoveraway }) {
  return (
    <ul
      className="option-wrapper max-w-screen-md mx-auto flex items-center justify-center mb-5 rounded-3xl z-50 fixed bottom-0 left-0 right-0 list-none flex justify-evenly items-center p-0 bg-slate-800 bg-opacity-100"
      onMouseLeave={hoveraway}
    >
      {ourteam.map((item) => (
        <li className="p-4 w-full rounded-3xl text-center cursor-pointer text-white hover:bg-gray-600 hover:rounded-3xl transition duration-300">
          <Link key={item.name} href={item.href} className="">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function WorkNav({ hoveraway }) {
  return (
    <ul
      className="option-wrapper max-w-screen-md mx-auto flex items-center justify-center mb-5 rounded-3xl z-50 fixed bottom-0 left-0 right-0 list-none flex justify-evenly items-center p-0 bg-slate-800 bg-opacity-100"
      onMouseLeave={hoveraway}
    >
      {ourwork.map((item) => (
        <li className="p-4 w-full rounded-3xl text-center cursor-pointer text-white hover:bg-gray-600 hover:rounded-3xl transition duration-300">
          <Link key={item.name} href={item.href} className="">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
