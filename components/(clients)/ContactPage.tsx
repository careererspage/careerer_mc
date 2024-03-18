"use client";
import React from "react";
import Container from "../container";
import HeadingsText from "./HeadingsText";
import GeneralHero from "./generalHero";
import { Button } from "../ui/button";
import Lottie from "lottie-react";
import AnimateChat from "@/public/images/lottie/chat.json";

const ContactPage = () => {
  return (
    <div>
      <GeneralHero
        ImageUrl={require("@/public/images/hero/Call.jpg")}
        center
        chatAgent
        title="Connect
        with us directly through "
        subTitle="the chat feature on your free account."
      />
      <Container>
        <HeadingsText
          heading="Schedule A "
          subHead="Consultation"
          text="
          Please click the button below to schedule a consultation with one of our attorneys. In addition to phone consultations, we also offer live call consultations over on this platform. If you&lsquo;re local and would like to do an in-office consultations in our Fort Lauderdale office, we can accommodate that as well."
        />
        <Button className="flex items-center gap-3" variant="button" size="lg">
          Book Consultation
          <Lottie
            animationData={AnimateChat}
            loop
            autoplay
            className="w-[50px] h-[50px]"
          />
        </Button>

        <div className="grid md:grid-cols-[55%,45%] grid-rows-1  gap-10 mt-10">
          <div className="w-full">
            <h1 className="font-bold text-2xl">Send Us A Message</h1>
            <p className="text-[#2C2C2C] mt-2">
              We&apos;d love to help you with your immigration needs. Use the
              form below to drop us an email.
            </p>

            <form
              className="mt-10 flex flex-col gap-3 text-black"
              // action={async (formData) => {
              //   const { data, error } = await sendEmail(formData);

              //   if (error) {
              //     toast.error(error);
              //     return;
              //   }

              //   toast.success("Email sent successfully!");
              // }}
            >
              <div className="flex items-center gap-2">
                <input
                  className="h-14 w-full px-4 rounded-lg bg-white bg-opacity-50 border-2 border-slate-200 focus:bg-opacity-100 transition-all outline-none"
                  name="senderFirstName"
                  type="text"
                  required
                  maxLength={500}
                  placeholder="First name"
                />
                <input
                  className="h-14 w-full px-4 rounded-lg bg-white bg-opacity-50 border-2 border-slate-200 focus:bg-opacity-100 transition-all outline-none"
                  name="senderLastName"
                  type="text"
                  required
                  maxLength={500}
                  placeholder="Last name"
                />
              </div>

              <input
                className="h-14 px-4 rounded-lg bg-white bg-opacity-50 border-2 border-slate-200 focus:bg-opacity-100 transition-all outline-none"
                name="senderEmail"
                type="email"
                required
                maxLength={500}
                placeholder="Your email"
              />

              <input
                className="h-14 px-4 rounded-lg bg-white bg-opacity-50 border-2 border-slate-200 focus:bg-opacity-100 transition-all outline-none"
                name="senderNumber"
                type="tel"
                required
                maxLength={13}
                placeholder="Phone number"
              />

              <textarea
                className="h-52 my-3 rounded-lg p-4 bg-white bg-opacity-50 border-2 border-slate-200 focus:bg-opacity-100 transition-all outline-none"
                name="message"
                placeholder="Your message"
                required
                maxLength={5000}
              />
              {/* <SubmitBtn /> */}
            </form>
          </div>
          <div className="text-[#2C2C2C] w-full">
            <h1 className="font-bold text-2xl mb-2">
              Immigration Process Simplified
            </h1>

            <p
              className="mt-2 text-[#2c2c2c] text-base"
              style={{ lineHeight: "1.8" }}
            >
              To see how we&apos;ve helped our clients overcome difficult
              immigration challenges, visit our reviews page, and read what our
              clients say about our services on our reviews page.
            </p>
            <div className="flex flex-col gap-2 mt-1">
              <div>
                <h1 className="font-bold">Address</h1>
                <div className="text-[#2c2c2c]">
                  800 Corporate Dr, Suite 206
                </div>
                <div className="text-[rgb(44,44,44)]">
                  Fort Lauderdale, FL 33334
                </div>
              </div>

              <div className="flex items-center">
                <h1 className="font-bold">Phone:</h1>
                <div className="text-[#2c2c2c]">1-954-604-6406</div>
              </div>
              <div className="flex items-center">
                <h1 className="font-bold">Email:</h1>
                <div className="text-[#2c2c2c]">support@migratecompass.com</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
