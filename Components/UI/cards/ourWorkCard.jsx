import React, { useState } from "react";
import Image from "next/image";
import ourWork from "../../../data/ourwork.json";

export default function ProjectCard({ card }) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="flex max-w-[22.5rem] h-[30rem] justify-center bg-neutral-800">
      <div className="relative items-center justify-center overflow-hidden transition-shadow rounded-lg cursor-pointer group hover:shadow-xl hover:shadow-black/30">
        <div className="h-full">
          <Image
            className="h-full rounded-t-lg "
            src={card.images}
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] text-white hover:text-[#dab971] flex-col items-center justify-center px-4 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="text-3xl font-bold font-dmserif ">{card.name}</h1>
          <p className="mb-3 italic text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            {card.content}
          </p>
          <>
            <button
              className="bg-[#dab971] hover:bg-[#b1965d] text-black  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              name="Modal pop up"
              onClick={() => setShowModal(true)}
            >
              Read More
            </button>
          </>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 w-auto flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative max-w-3xl mx-auto my-6">
              <div className="relative flex flex-col w-full bg-gray-600 border-0 rounded-lg shadow-lg outline-none bg-opacity-80 focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
                  <h3 className="text-3xl text-[#dab971] font-semibold">
                    {card.name}
                  </h3>
                  <button
                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                    name="modal close"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none"></span>
                  </button>
                </div>
                <div className="relative h-[24rem] w-auto overflow-y-scroll p-6 font-[Hero-Bold] text-xl flex-auto">
                  <h1 className="my-4 leading-relaxed text-gray-300">
                    {card.round1head}
                  </h1>
                  <h1 className="my-4 leading-relaxed text-gray-300">
                    {card.round1}
                  </h1>
                  <h1 className="my-4 leading-relaxed text-gray-300">
                    {card.round2head}
                  </h1>
                  <h1 className="my-4 leading-relaxed text-gray-300">
                    {card.round2}
                  </h1>
                  <h1 className="my-4 leading-relaxed text-gray-300">
                    {card.round3head}
                  </h1>
                  <h1 className="my-4 leading-relaxed text-gray-300">
                    {card.round3}
                  </h1>
                  <h1 className="my-4 leading-relaxed text-gray-300">
                    {card.round4head}
                  </h1>
                  <h1 className="my-4 leading-relaxed text-gray-300">
                    {card.round4}
                  </h1>
                </div>
                <div className="flex items-center justify-end p-6 rounded-b">
                  <button
                    className="bg-[#dab971] hover:bg-[#d5a02e] text-black font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    name="modal close"
                    onClick={() => setShowModal(false)}
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </div>
  );
}
