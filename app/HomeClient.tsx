"use client";
import Categories from "@/components/(clients)/category/categories";
import CustomerExperience from "@/components/(clients)/customer-experience";
import Hero from "@/components/(clients)/hero";
import Navbar from "@/components/(clients)/navbar";
import Process from "@/components/(clients)/process";
import Region from "@/components/(clients)/region";
import Footer from "@/components/Footer";
import { SafeUser } from "@/types";

interface HomeClientProps {
  currentUser: SafeUser | null;
}
const HomeClient = ({ currentUser }: HomeClientProps) => {
  return (
    <div>
      <Navbar currentUser={currentUser} />
      <Hero />
      <Categories />
      <Region />
      <CustomerExperience />
      <Process />
      <Footer />
    </div>
  );
};

export default HomeClient;
