// export default function Loading() {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <p className="text-[5.5rem] md:text-[10rem] text-[#fdff00] font-[ARCADECLASSIC] mb-8">
//         VIBHAV
//       </p>

//       <div className="pacman">
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//       </div>
//       <div className="flex flex-row justify-start mt-8">
//         <p className="text-4xl text-white font-[ARCADECLASSIC]">Loading </p>
//         <div className="flex flex-row ml-4 text-4xl text-white">
//           <div className={`loading`}>
//             <h1>...</h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import Image from "next/image";
import loader from "../public/Assets/anne-roos-leeuwis-character-run-animation.gif";
// export default function Loading() {
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <Image src={loader} className="w-20 " />
//     </div>
//   );
// }
import { useState, useEffect } from "react";

export default function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the timeout duration as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      {loading && (
        <div className="w-20 overflow-hidden animate-slideRight">
          <Image
            src={loader}
            alt="Loading Animation"
            layout="responsive"
            width={100}
            height={100}
          />
        </div>
      )}
    </div>
  );
}
