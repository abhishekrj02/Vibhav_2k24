import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
export default function CC() {
  return (
    <div className="overflow-x-hidden">
      <h1 className="title-font sm:text-5xl text-4xl flex justify-center font-[Elianto-Regular] text-[#e9d59ae4] relative font-black mt-48">
        Core-coordinators
      </h1>
      <div className="flex pt-8 items-center justify-center ">
        <div className="flex flex-col md:flex-row justify-center items-center gap-24 ">
          <div
            // data-aos="fade-right"
            className="  group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
          >
            <div className="h-96 w-72">
              <Image
                className="h-full  w-full  object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="/Assets/TeamPhotos/CC/Bhavneesh.webp"
                width={330}
                height={330}
              />
            </div>
            <div className="absolute inset-0  bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute  inset-0 flex  flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-sky-100  mt-72 ">
                Bhavneesh
              </h1>
            </div>
          </div>
          <div
            // data-aos="fade-left"
            className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
          >
            <div className="h-96 w-72">
              <Image
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="/Assets/TeamPhotos/CC/agrim koundal.webp"
                width={330}
                height={330}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex  flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-sky-100 mt-72 ">
                Agrim{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
