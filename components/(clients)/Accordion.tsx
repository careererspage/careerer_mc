import useOpen from "@/hooks/useOpen";
import Lottie from "lottie-react";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface AccordionProps {
  faq: { question: string; answer: string };
}

export const Accordion = ({ faq }: AccordionProps) => {
  const { isOpen, toggle } = useOpen(false);
  return (
    <div className="">
      <ExpendableColumn
        question={faq.question}
        isOpen={isOpen}
        toggle={toggle}
      />
      {isOpen && <TextSection answer={faq.answer} isOpen />}
    </div>
  );
};

export const ExpendableColumn = ({
  question,
  isOpen,
  toggle,
}: {
  question: string;
  isOpen: boolean;
  toggle: () => any;
}) => {
  return (
    <div
      className={`flex items-center justify-between mt-5 cursor-pointer px-5 py-10 transition ${
        isOpen ? "bg-slate-300" : "bg-slate-200"
      }`}
      onClick={toggle}
      style={{
        animationName: isOpen ? "bganimate" : "",
        animationDuration: "1s",
      }}
    >
      {question}
      <FaChevronDown
        className="text-[#57a1e6]"
        style={{
          transform: `rotate(${isOpen ? 180 : 0}deg)`,
          transition: "all 0.25s ",
        }}
      />
    </div>
  );
};

export const TextSection = ({
  answer,
  isOpen,
}: {
  answer: string;
  isOpen: boolean;
}) => {
  return (
    <div className={` text-container px-5 p-10 ${isOpen ? "open" : ""}`}>
      {answer}
    </div>
  );
};
