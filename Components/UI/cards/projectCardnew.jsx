import React from "react";
import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

function Card({ card }) {
  const [readMoreState, setReadMoreState] = useState(100);
  return (
    <>
      <div className="m-10 hover:border-4 hover:border-[#FF004D] font-lexend w-80 bg-white shadow-md rounded-lg overflow-hidden p-5 transition duration-150 ease-in transform hover:-translate-y-2 hover:shadow-lg">
        <div className="overflow-hidden rounded-lg">
          <img
            src={card.images}
            alt="An orange painted blue, cut in half laying on a blue background"
            className="w-full"
          />
        </div>
        <div className="text-2xl font-mono mt-4 text-right">{card.name}</div>
        <div className="mt-4">
          {/* <p className="text-lg font-semibold text-justify">{card.content}</p> */}
          {card.content.length > 140 ? (
            <p className="text-lg font-semibold text-justify text-gray-600">
              {card.content.substring(0, readMoreState)}{" "}
              <span
                className="text-gray-800 cursor-pointer"
                onClick={() =>
                  setReadMoreState((prev) => (prev === 140 ? 2000 : 140))
                }
              >
                {readMoreState === 140 ? "More" : "Less"}
              </span>
            </p>
          ) : (
            <p className="ext-lg font-semibold text-justify text-gray-600">
              {card.content}
            </p>
          )}
        </div>
        <div className="mt-4 border-t border-gray-300 pt-4 flex justify-between items- flex-wrap ">
          <Link
            href={card.github}
            target={"_blank"}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <FaGithub className="my-1 mx-2 " size={20} />
            Github
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card;
