import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
  senderName: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
  senderName,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your Migrate Compass site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Heading className="leading-tight">
              You received the following message from the contact form
            </Heading>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Text>{message}</Text>
              <Hr />
              <Text>
                The sender&apos;s email is: {senderEmail} and name is{" "}
                {senderName}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
