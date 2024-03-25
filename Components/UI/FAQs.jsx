import faq from "../../data/faq.json";
import { useState } from "react";

function FAQComponent() {
  const [faqs, setFaqs] = useState([...faq.faqs]);

  const toggleFAQ = (index) => {
    setFaqs((prevFaqs) => {
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
          <div key={faq.question}>
            <button
              className={`w-full font-bold py-3 flex justify-between items-center mt-4 ${index !== faqs.length - 1 && "text-gray-200 border-b border-gray-400"}`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {faq.isOpen ? (
                <svg
                  className="fill-current"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    className="heroicon-ui"
                    d="M12 22a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm4-8a1 1 0 01-1 1H9a1 1 0 010-2h6a1 1 0 011 1z"
                  />
                </svg>
              ) : (
                <svg
                  className="fill-current"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    className="heroicon-ui"
                    d="M12 22a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm1-9h2a1 1 0 010 2h-2v2a1 1 0 01-2 0v-2H9a1 1 0 010-2h2V9a1 1 0 012 0v2z"
                  />
                </svg>
              )}
            </button>
            {faq.isOpen && (
              <div className="text-gray-300 text-sm mt-2">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQComponent;
