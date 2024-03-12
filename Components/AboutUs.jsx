import React from "react";
import Image from "next/image";
import vibhav from '../public/Assets/4x/IMG_5249.jpg'
// export default function AboutUs() {
//   return (
//     <section
//       data-aos="fade-up"
//       className="  flex justify-center md:h-full items-center relative"
//     >
//       <div className="flex flex-col w-4/5 h-full mb-8 bg-gray-700 center md:pb-24 rounded-t-2xl md:mb-24 ">
//         <div className="w-full h-10 bg-black bg-opacity-40 rounded-t-2xl">
//           <div className="flex items-center justify-around w-16 h-full ml-4">
//             <span className="w-3 h-3 bg-red-500 rounded-full"></span>
//             <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
//             <span className="w-3 h-3 bg-green-500 rounded-full"></span>
//           </div>
//         </div>
//         <div className="flex  flex-col">
//           <h1 className="text-center text-[#e9d59ae4] text-3xl md:text-5xl    font-bold mt-8 font-[Elianto-Regular]">
//             About Us
//           </h1>
//           <p className="text-sky-100 text-sm pb-4 md:text-xl p-4 md:p-8 font-[Hero-Bold]  text-justify">
//             The family of innovative and creative minds, VIBHAV is the
//             departmental team of Electronics and Communication Engineering that
//             works for one of the largest technical fest of North India - NIMBUS
//             of NIT-Hamirpur. Our primary aim is to bring innovation that can
//             make people explore beyond infinity. We at VIBHAV work with great
//             euphoria and enthusiasm as it consists of highly energetic members
//             who put strenuous efforts to make a change. Team Vibhav nurtures
//             intense and genuine commitment. We have a diverse pool of students
//             who are constantly trying to innovate and push the boundaries.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function AboutUs() {
  return (
    <div className="flex justify-center items-center mx-auto max-w-screen-lg bg-gray-800 shadow-lg my-20 bg-opacity-50">
      {/* <img
        className="w-1/2 h-full bg-center bg-cover h-100 bg-no-repeat"
        src="https://img.freepik.com/free-photo/majestic-mountain-peak-tranquil-winter-landscape-generated-by-ai_188544-15662.jpg"
        alt="Majestic Mountain"
      /> */}
      <div className="content-wrapper   px-5 box-border text-gray-200">
        <h1 className="font-bold text-7xl capitalize mb-10 text-center">About Us</h1>
        <p className="text-sm mb-8 text-justify">
          The family of innovative and creative minds, VIBHAV is the
          departmental team of Electronics and Communication Engineering that
          works for one of the largest technical fest of North India - NIMBUS of
          NIT-Hamirpur. Our primary aim is to bring innovation that can make
          people explore beyond infinity. We at VIBHAV work with grea euphoria
          and enthusiasm as it consists of highly energetic members who put
          strenuous efforts to make a change. Team Vibhav nurtures intense and
          genuine commitment. We have a diverse pool of students who are
          constantly trying to innovate and push the boundaries.
        </p>
      </div>
    </div>
  );
}
