import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ card }) {
  const [readMoreState, setReadMoreState] = useState(100);
  return (
    <div>
      <div className="bg-white border border-gray-200 rounded-lg shadow bg-opacity-60 dark:bg-gray-800 dark:border-gray-700">
        <div className="">
          <Image
            className="w-full rounded-t-lg"
            src={card.images}
            alt="project Image"
            width={100}
            height={100}
          />
        </div>
        <div className="p-4">
          <h5 className="mb-2 text-xl tracking-tight text-gray-900 dark:text-[#dab971]">
            {card.name}
          </h5>
          <div>
            {card.github === "" ? (
              card.content.length > 140 ? (
                <p className="mb-3 text-gray-700 dark:text-gray-400">
                  {card.content.substring(0, readMoreState)}{" "}
                  <span
                    className="text-white cursor-pointer"
                    onClick={() =>
                      setReadMoreState((prev) => (prev === 140 ? 1000 : 140))
                    }
                  >
                    {readMoreState === 140 ? "Read more" : "Read Less"}
                  </span>
                </p>
              ) : (
                <p className="mb-3 text-gray-700 text-justify dark:text-gray-400">
                  {card.content}
                </p>
              )
            ) : (
              <div>
                {card.content.length > 100 ? (
                  <p className="mb-3 text-gray-700 dark:text-gray-400">
                    {card.content.substring(0, readMoreState)}{" "}
                    <span
                      className="text-white cursor-pointer"
                      onClick={() =>
                        setReadMoreState((prev) => (prev === 100 ? 1000 : 100))
                      }
                    >
                      {readMoreState === 100 ? "Read more" : "Read Less"}
                    </span>
                  </p>
                ) : (
                  <p className="mb-3 text-gray-700 text-justify dark:text-gray-400">
                    {card.content}
                  </p>
                )}
                <Link
                  href={card.github}
                  target={"_blank"}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <FaGithub className="m-1" size={20} />
                  Github
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
