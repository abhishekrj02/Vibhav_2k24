import React from "react";
import style from "../../../styles/team.module.css";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import Link from "next/link";

export default function TeamCard({ data, cardType }) {
  return (
    <div className="flex items-center justify-center sm:p-4">
      <div
        className={
          (cardType === "alumni" ? style.alumniCard : style.mainCard) +
          " flex flex-col justify-center py-4 sm:py-2 sm:p-4 rounded-2xl"
        }
      >
        <div className="flex items-center text-[#ffffffd6] justify-start w-full px-2 sm:px-4 ">
          <img
            alt={data.Name}
            src={data.Profile}
            className={"rounded-full object-cover h-[50px] w-[50px]"}
            height={50}
            width={50}
          />
          <p className="text-2xl font-semibold ml-4 text-[#ffffffd6]">
            {data.NickName}{" "}
          </p>
        </div>
        <div className="p-3 text-[#ffffffd6] sm:p-4">
          <img
            alt={data.Name}
            src={data.Profile}
            className={
              " h-[300px] w-[280px] sm:h-[300px] sm:w-[330px] object-cover rounded-2xl shadow-2xl "
            }
            height={550}
            width={550}
          />
        </div>
        <div className="flex flex-col p-4">
          <div className=" flex flex-col text-[#ffffffae]">
            <p className="text-xl font-semibold">{data.Name}</p>
            <p>{data.Position}</p>
          </div>
          <div className="flex flex-row justify-end ">
            {cardType === "team" ? (
              <Link href={data.Github} target={"_blank"}>
                <div className="rounded-full cursor-pointer p-2 mr-2 bg-[#eae4d8] bg-opacity-50 hover:bg-[#ffffff] hover:scale-105">
                  <FiGithub className="w-6 h-6 " />
                </div>
              </Link>
            ) : undefined}
            <Link href={data.LinkedIn} target={"_blank"}>
              <div className="rounded-full cursor-pointer p-2 mr-2 bg-[#eae4d8] bg-opacity-50 hover:bg-[#ffffff] hover:scale-105">
                <FiLinkedin className="w-6 h-6 " />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
