import React from "react";
import {
  Html,
  Body,
  Head,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Button,
  Img,
  Heading,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type RegisterFormEmailProps = {
  senderName?: string;
};

export default function RegisterFormEmail({
  senderName,
}: RegisterFormEmailProps) {
  return (
    <Html>
      <Head />

      <Preview>Congrats on creating your account</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container style={container}>
            <Img
              src="https://lh3.googleusercontent.com/a/ACg8ocI8aM1erQxBJ1uym5R9_doVl1Jt1GpgA3ite7koYN8ZQses=s432-c-no"
              width="170"
              height="50"
              alt="Migrate Compass"
              style={logo}
              className="mx-auto my-4"
            />

            <Heading style={heading} className="text-center pt-4">
              Welcome to Migrate Compass
            </Heading>

            <Text style={paragraph}>Hi {senderName},</Text>

            <Text style={paragraph}>
              Congratulations on creating your new account.
            </Text>
            <Text style={paragraph}>
              You now have full access to all the features and experiences we
              offer online. We&apos;re excited for you to explore and make the
              most of them.
            </Text>

            <Section style={btnContainer}>
              If you have any further questions, Pls send us a
              <Button
                style={button}
                href="http://localhost:3000/invite/cd8cdd9f-a6ea-4b61-a06a-ead537c99ad5"
              >
                Chat
              </Button>
              on your account.
            </Section>

            <Text style={paragraph}>
              Best Regards,
              <br />
              Migrate Compass Team
            </Text>
            <Hr style={hr} />
            <Text style={footer}>
              Swiss office: Stockerstrasse 38, CH-8002, Zürich, Switzerland
            </Text>
            <Hr style={hr} />
            <Text style={footer}>U.S office: USCIS headquarters.</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const heading = {
  fontSize: "27px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
