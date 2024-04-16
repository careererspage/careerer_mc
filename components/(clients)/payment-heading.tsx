import React from "react";

interface PaymentProps {
  heading: string;
  price: string;
  text: string;
  subText?: boolean;
}

const PaymentHeading = ({ heading, price, text, subText }: PaymentProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h1 className="text-base sm:text-xl text-gray-700 font-extrabold">
          {heading}
        </h1>

        <span className="text-[18px] font-semibold text-green-600">
          {price}
        </span>
      </div>
      <p className="text-sm sm:!text-[15px]">
        {text}

        {subText && (
          <span className="font-bold">Migrate Compass contract.</span>
        )}
      </p>{" "}
    </div>
  );
};

export default PaymentHeading;
