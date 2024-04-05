"use client";
import React from "react";

interface HeadingProps {
  heading: string;
  subHead: string;
  text: string;
}

const HeadingsText = ({ heading, subHead, text }: HeadingProps) => {
  return (
    <div className="text-[#2C2C2C] text-base mt-8">
      <h2 className="font-bold sm:text-2xl text-lg mb-2">
        {heading} <span className="text-[#dd531d]">{subHead} </span>
      </h2>
      <p className="mb-4">{text}</p>
    </div>
  );
};

export default HeadingsText;
