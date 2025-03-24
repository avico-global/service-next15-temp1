import { React, useState, useRef, useEffect } from "react";
import Container from "../common/Container";
import { Plus, Minus, Phone } from "lucide-react";
import Link from "next/link";
export default function FAQs({ faqs_heading, phone }) {
  const faqs = [
    {
      id: 1,
      question: "What is the cost of towing?",
      answer: "The cost of towing is $100 per hour.",
    },
    {
      id: 2,
      question: "What is the cost of towing?",
      answer: "The cost of towing is $100 per hour.",
    },
    {
      id: 3,
      question: "What is the cost of towing?",
      answer:
        "The cost of towing is $100 per hour. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
      id: 4,
      question: "What is the cost of towing?",
      answer: "The cost of towing is $100 per hour.",
    },
    {
      id: 5,
      question: "What is the cost of towing?",
      answer: "The cost of towing is $100 per hour.",
    },
    {
      id: 6,
      question: "What is the cost of towing?",
      answer: "The cost of towing is $100 per hour.",
    },
  ];

  const faqs_heading_data = faqs_heading?.value;

  const [openIndex, setOpenIndex] = useState(null);
  const answerRefs = useRef([]);
  const [answerHeights, setAnswerHeights] = useState([]);

  useEffect(() => {
    // Store actual heights of answer content
    setAnswerHeights(answerRefs.current.map((ref) => ref?.scrollHeight || 0));
  }, []);

  const handleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faqs" className="relative overflow-hidden py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 rounded-full bg-yellow-400/10"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 rounded-full bg-yellow-400/10"></div>

      <Container className="relative z-10">
        <div className="flex flex-col gap-1 pb-10 items-center text-center">
          <h3 className="text-sm font-medium text-gray-600 tracking-wide uppercase">
            FAQs
          </h3>
          <h2 className="text-4xl font-extrabold text-gray-900 leading-snug">
            Frequently Asked Questions
            <div className="w-30 h-1 bg-gradient-to-r from-[#F7B914] to-[white] mx-auto mb-4 rounded-full"></div>
          </h2>

          <p className="max-w-2xl text-base text-gray-700 leading-relaxed">
            We are here to help you. Please fill out the form below to get in
            touch with us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() => handleOpen(index)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none group"
                >
                  <span className="text-lg font-semibold text-gray-800 group-hover:text-yellow-600 transition-colors duration-200">
                    {item.question}
                  </span>
                  <div
                    className={`flex-shrink-0 ml-4 p-2 rounded-full bg-gray-100 group-hover:bg-yellow-100 transition-all duration-200 transform ${
                      openIndex === index
                        ? "bg-yellow-100 rotate-180"
                        : "rotate-0"
                    }`}
                  >
                    {openIndex === index ? (
                      <Minus size={18} className="text-yellow-600" />
                    ) : (
                      <Plus
                        size={18}
                        className="text-gray-500 group-hover:text-yellow-600"
                      />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out border-t ${
                    openIndex === index
                      ? "border-gray-100"
                      : "border-transparent"
                  }`}
                  style={{
                    maxHeight:
                      openIndex === index ? `${answerHeights[index]}px` : "0",
                  }}
                >
                  <div
                    ref={(el) => (answerRefs.current[index] = el)}
                    className="px-6 py-5 text-gray-600"
                  >
                    <div className="flex">
                      <div className="w-0.5 bg-yellow-200 rounded-full mr-4 self-stretch"></div>
                      <div>{item.answer}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href={`tel:${phone}`}
            className="inline-flex gap-2 flex-wrap items-center px-5 py-2.5 bg-yellow-50 text-yellow-700 rounded-full text-sm font-medium"
          >
            <Phone size={18} className="mr-2" />
            <div className="flex flex-col sm:flex-row sm:gap-2">
              <h2>Still have questions? Call us at </h2>
              <span className="text-yellow-700 font-bold text-start"> {phone}</span>
            </div>
          </Link>
        </div>
      </Container>
    </div>
  );
}
