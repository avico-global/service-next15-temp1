import { React, useState } from "react";
import Container from "../common/Container";
import { ChevronDown } from "lucide-react";
export default function FAQs() {
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
      answer: "The cost of towing is $100 per hour. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
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
  const [openIndex, setOpenIndex] = useState(null);

  const handleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container className="py-10">
      <h2 className="text-3xl font-bold text-center">FAQs</h2>
      <div className="flex flex-col gap-5 mt-8">
        {faqs.map((item, index) => (
          <div key={item.id}>
            <div 
              onClick={() => handleOpen(index)} 
              className="border-2 rounded-md border-[#F7B914] cursor-pointer"
            >
              <div className="bg-[#F7B914] px-4 py-2 text-2xl text-white flex justify-between items-center">
                {item.question}
                <span className={`text-xl transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  <ChevronDown />
                </span>
              </div>
              <div 
                className={`answer-container overflow-hidden transition-all duration-300 ease-in-out`}
                style={{ 
                  maxHeight: openIndex === index ? '200px' : '0',
                  opacity: openIndex === index ? '1' : '0'
                }}
              >
                <div className="p-4">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
