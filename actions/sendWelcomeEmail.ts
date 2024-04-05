"use server";

import RegisterFormEmail from "@/email/regiter-form-email";
import { getErrorMessage } from "@/lib/utils";
import { FormType } from "@/types";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export const sendWelcomeEmail = async (values: FormType) => {
  const senderEmail = "onboarding@resend.dev"; // replace with your email
  const recipientEmail = values.email;
  const senderName = values.firstname;

  let data;
  try {
    data = await resend.emails.send({
      from: `Migrate Compass <${senderEmail}>`,
      to: recipientEmail,
      subject: "Welcome to our platform",
      reply_to: senderEmail,
      react: React.createElement(RegisterFormEmail, {
        senderName: senderName,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
