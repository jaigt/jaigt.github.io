"use client";

import { MotionConfig } from "motion/react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main>
        <Hero />
        <BentoGrid />
      </main>
      <Footer />
    </MotionConfig>
  );
}
