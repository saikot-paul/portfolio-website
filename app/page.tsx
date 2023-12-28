import Briefer from "@/components/main/Briefer";
import AboutMe from "@/components/main/AboutMe";
import Projects from "@/components/projects/Projects";
import Work from "@/components/work/Work";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Briefer></Briefer>
      <AboutMe></AboutMe>
      <Work></Work>
      <Projects></Projects>
    </main>
  );
}
