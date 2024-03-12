import Link from "next/link";
import React from "react";
import { useEffect } from "react";
const MyLink = ({ onClick }) => {
  return <a onClick={onClick}>Contact</a>;
};

function Navigation({ projectmousein, teammousein, workmousein }) {
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

  useEffect(() => {
    // Cleanup
    return () => {
      // You can remove the event listener if necessary, but with passHref, it's not needed.
    };
  }, []);
  return (
    <>
      <ul className="option-wrapper max-w-screen-lg mx-auto flex items-center justify-center mb-5 rounded-3xl z-50 fixed bottom-0 left-0 right-0 list-none flex justify-evenly items-center p-0 bg-slate-800 bg-opacity-100">
        <li
          className="p-4 w-full rounded-3xl text-center cursor-pointer text-white hover:bg-gray-600 hover:rounded-3xl transition duration-300"
          onClick={projectmousein}
        >
          Project
        </li>
        <li
          className="p-4 w-full rounded-3xl text-center cursor-pointer text-white hover:bg-gray-600 hover:rounded-3xl transition duration-300"
          onClick={workmousein}
        >
          Work
        </li>

        <li className="p-4 w-full rounded-3xl text-center cursor-pointer text-white hover:bg-gray-600 hover:rounded-3xl transition duration-300">
          <Link href="/">Home</Link>
        </li>
        <li
          className="p-4 w-full rounded-3xl text-center cursor-pointer text-white hover:bg-gray-600 hover:rounded-3xl transition duration-300"
          onClick={teammousein}
        >
          Team
        </li>

        <li className="p-4 w-full rounded-3xl text-center cursor-pointer text-white hover:bg-gray-600 hover:rounded-3xl transition duration-300">
          <MyLink onClick={handleLinkClick} />
        </li>
      </ul>
    </>
  );
}

export default Navigation;
