import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import faq from "../../data/faq.json";
import { useState } from "react";
// export default function FAQs() {
//   const [isShow, setIsShown] = useState(-1);
//   return (
//     <div className="w-full px-4 pt-48 " data-aos="zoom-in">
//       <h1 className="flex-col text-center pb-4 text-3xl md:text-5xl font-extrabold font-[Elianto-Regular] text-[#e9d59ae4]">
//         Frequently Asked Questions
//       </h1>

//       <div className=" w-4/5 mx-auto    ">
//         {faq.faqs.map((item, index) => {
//           return (
//             <Disclosure
//               as="div"
//               className="mt-2"
//               key={index}
//               onMouseEnter={() => setIsShown(index)}
//               onMouseLeave={() => setIsShown(-1)}
//             >
//               {({ open }) => (
//                 <>
//                   <Disclosure.Button className="flex   justify-between text:md  hover:rounded-xl hover:skew-y-1   font-[Hero-Bold] hover:drop-shadow-2xl w-full px-6 py-6 text-md hover:text-sky-200     bg-gray-700   focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75  hover:bg-[#27272a] text-sky-100 delay-100 duration-200">
//                     <span className="flex">
//                       <Image
//                         className={`  h-8 w-auto mr-4 align-middle ${isShow === index ? "flex" : "hidden"} `}
//                         width={500}
//                         height={500}
//                         src="/Assets/Yellow.png"
//                         alt="Your Company"
//                       />{" "}
//                       {item.question}
//                     </span>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth={2.5}
//                       stroke="currentColor"
//                       className={`${
//                         open ? "rotate-180 duration-300 transform" : ""
//                       } h-5 w-5 stroke-0 md:stroke-2   text-sky-100 duration-300 `}
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M19.5 8.25l-7.5 7.5-7.5-7.5"
//                       />
//                     </svg>
//                   </Disclosure.Button>

//                   <Disclosure.Panel className="px-4 bg-[#1a1a1d] bg-opacity-30 rounded-xl pt-4 pb-2 font-[Hero-Bold] text-md text-sky-100">
//                     <span>{item.answer}</span>
//                   </Disclosure.Panel>
//                 </>
//               )}
//             </Disclosure>
//           );
//         })}
//       </div>
//     </div>
//   );
// }





function FAQComponent() {
  
  const [faqs, setFaqs] = useState([
    ...faq.faqs
    // {
    //   question: 'Why do I need Alpine JS?',
    //   answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores iure quas laudantium dicta impedit, est id delectus molestiae deleniti enim nobis rem et nihil.',
    //   isOpen: true,
    // },
    // {
    //   question: 'Why am I so awesome?',
    //   answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi cumque, nulla harum aspernatur veniam ullam provident neque temporibus autem itaque odit.',
    //   isOpen: false,
    // },
    // {
    //   question: 'Why learn on Scrimba?',
    //   answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi cumque, nulla harum aspernatur veniam ullam provident neque temporibus autem itaque odit.',
    //   isOpen: false,
    // },
  ]);

  

  const toggleFAQ = (index) => {
    setFaqs(prevFaqs => {
      return prevFaqs.map((faq, i) => {
        if (i === index) {
          return { ...faq, isOpen: !faq.isOpen };
        } else {
          return { ...faq, isOpen: false };
        }
      });
    });
  };

  return (
    <div className="container text-gray-200 max-w-screen-lg mx-auto px-2 py-2 my-20">
      <h2 className="text-2xl font-bold">FAQs</h2>
      <div className="leading-loose text-lg mt-6">
        {faqs.map((faq, index) => (
          <div key={faq.question} >
            <button
              className={`w-full font-bold py-3 flex justify-between items-center mt-4 ${index !== faqs.length - 1 && 'text-gray-200 border-b border-gray-400'}`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {faq.isOpen ? (
                <svg className="fill-current" viewBox="0 0 24 24" width="24" height="24">
                  <path className="heroicon-ui" d="M12 22a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm4-8a1 1 0 01-1 1H9a1 1 0 010-2h6a1 1 0 011 1z" />
                </svg>
              ) : (
                <svg className="fill-current" viewBox="0 0 24 24" width="24" height="24">
                  <path className="heroicon-ui" d="M12 22a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm1-9h2a1 1 0 010 2h-2v2a1 1 0 01-2 0v-2H9a1 1 0 010-2h2V9a1 1 0 012 0v2z" />
                </svg>
              )}
            </button>
            {faq.isOpen && <div className="text-gray-300 text-sm mt-2">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQComponent;
