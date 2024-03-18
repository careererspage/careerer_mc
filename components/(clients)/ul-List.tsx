"use client";
import React from "react";

interface UlListsProps {
  data: { lists: string }[];
}
const UlList = ({ data }: UlListsProps) => {
  return (
    <div>
      <ul
        style={{ lineHeight: 1.8 }}
        className="text-sm sm:text-base list-disc flex flex-col gap-3 ml-4 ul-list"
      >
        {data.map((item, i) => (
          <li key={i}>{item.lists}</li>
        ))}
      </ul>
    </div>
  );
};

export default UlList;
