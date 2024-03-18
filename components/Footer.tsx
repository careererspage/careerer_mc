import React from "react";
import Container from "./container";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-10 mt-10 bg-[#112e5f]">
      <Container>
        <hr className="mt-10 border border-t" />
        <div className="flex sm:!flex-row flex-col sm:justify-center gap-10 mt-10">
          <div className="flex flex-col gap-3 w-full sm:w-[321px]">
            <h1 className="text-3xl font-bold text-gray-100">
              Migrate Compass
            </h1>
            <div className="text-sm text-white">
              Copyright © 2005-2024 Travel Visa Pro ®
            </div>
            <p
              className="text-sm text-gray-300 leading-10"
              style={{ lineHeight: 1.8 }}
            >
              Travel Visa Pro, a registered service with the U.S. Dept of State,
              offers form completion and courier services for visa applications.
              We officially follow all instructions protocol based on your
              input, Dept of State and foreign consulates/embassies.
            </p>
          </div>

          <div className="grid grid-cols-3 w-full gap-3 sm:text-base text-[12px] text-gray-300">
            <ul className="flex flex-col gap-3">
              <Link
                href="/about Us"
                className="cursor-pointer hover:text-white transition w-[100px]"
              >
                About Us
              </Link>
              <Link
                href="/contact Us"
                className="cursor-pointer hover:text-white transition w-[100px]"
              >
                Contact Us
              </Link>
              <Link
                href="/vvip Service"
                className="cursor-pointer hover:text-white transition w-[100px]"
              >
                VVIP Service
              </Link>
              <Link
                href="/agent"
                className="cursor-pointer hover:text-white transition w-[100px]"
              >
                Chat with agent
              </Link>
              <Link
                href="/support"
                className="cursor-pointer hover:text-white transition w-[100px]"
              >
                Support
              </Link>
            </ul>

            <ul className="flex flex-col gap-3">
              <Link
                href="/charges"
                className="cursor-pointer hover:text-white transition w-[100px]"
              >
                Payment Plan
              </Link>
              <Link
                href="/reviews"
                className="cursor-pointer hover:text-white transition w-[100px]"
              >
                Reviews
              </Link>
              <Link
                href="/privacy"
                className="cursor-pointer hover:text-white transition w-[100px]"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="cursor-pointer hover:text-white transition w-[100px]"
              >
                Terms
              </Link>
              <Link
                href="/faq"
                className="cursor-pointer hover:text-white transition w-[100px]"
              >
                faq
              </Link>
            </ul>

            <ul className="flex flex-col gap-3">
              <Link
                href="/charges"
                className="cursor-pointer hover:text-white transition w-[100px]"
              >
                Work Visa
              </Link>
              <Link
                href="/refund-policy"
                className="cursor-pointer hover:text-white transition w-[100px]"
              >
                Parent Migration
              </Link>
              <Link
                href="/faq"
                className="cursor-pointer hover:text-white transition w-[100px]"
              >
                School Visa
              </Link>
              <Link
                href="/faq"
                className="cursor-pointer hover:text-white transition w-[100px]"
              >
                Business Visa
              </Link>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
