import React from "react";
import { Button } from "@/components/ui/button";
import { FaClipboardCheck } from "react-icons/fa";
import { Separator } from "../ui/separator";

interface ServiceCardItemProps {
  listItems: string[];
  title: string;
}

const ServiceCard = ({ listItems, title }: ServiceCardItemProps) => {
  return (
    <div className="md:!h-[390px] sm:!h-[300px] top-40 md:sticky flex flex-col justify-center gap-2 p-4 rounded-md shadow-md bg-white">
      <h1 className="font-bold lg:text-2xl md:text-lg text-lg text-gray-700 text-center">
        {title}
      </h1>
      <Separator className="bg-orange-500 h-[4px] my-2" />

      <ul
        style={{ lineHeight: 1.8 }}
        className="text-sm lg:!text-base flex flex-col gap-2 lg:gap-3 ul-list ul-none"
      >
        {listItems.map((item, index) => (
          <div className="flex gap-2" key={index}>
            <FaClipboardCheck
              className="text-[#0559a8] mt-1 w-4 h-4"
              size={20}
            />
            <li className="w-full flex items-start leading-6 font-semibold text-gray-700">
              <span>{item}</span>
            </li>
          </div>
        ))}
      </ul>
      <Button variant="primary" size="default">
        Book Session with Expert
      </Button>
    </div>
  );
};

export default ServiceCard;
