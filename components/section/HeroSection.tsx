import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-base-200 text-base-content flex items-center justify-center">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold md:text-6xl">FRONTEND PORTFOLIO</h1>
        <p className="mt-4 text-lg md:text-xl">
          Passionate about turning ideas into seamless digital experiences. I
          specialize in modern web development with frameworks like NEXT JS
        </p>
        <div className="mt-8 flex justify-center space-x-4 mb-4">
          <Link href="/project">
            <Button className="px-6 py-3 font-medium">VIEW PROJECTS</Button>
          </Link>
          <Link href="/skill">
            <Button className="px-6 py-3 font-medium">VIEW SKILL</Button>
          </Link>
        </div>
        <Link
          href="https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/CV_Wongsaphat_Puangsorn.pdf?alt=media&token=bc279fdc-80e4-40b1-8969-b61d3397cde2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="px-6 py-3 font-medium">
            Download CV
          </Button>
        </Link>
      </div>
    </section>
  );
}
