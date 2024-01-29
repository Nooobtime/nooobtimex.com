import AboutMe from "@/components/section/AboutMe";
import Contact from "@/components/section/Contact";
import HeroSection from "@/components/section/HeroSection";
import Projects from "@/components/section/Projects";
import Skills from "@/components/section/Skills";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://nooobtimex.me/" />
      </Head>
      <HeroSection />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
