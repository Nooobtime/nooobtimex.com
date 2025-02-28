import SectionTransition from "@/components/SectionTransition";
import Contact from "@/components/section/Contact";
import HeroSection from "@/components/section/HeroSection";
import Projects from "@/components/section/Projects";
import Skills from "@/components/section/Skills";
import Head from "next/head";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://nooobtimex.me/" />
      </Head>
      <SectionTransition>
        <HeroSection />
      </SectionTransition>
      <SectionTransition>
        <Skills />
      </SectionTransition>
      <SectionTransition>
        <Projects />
      </SectionTransition>
      <SectionTransition>
        <Contact />
      </SectionTransition>
    </>
  );
};

export default Home;
