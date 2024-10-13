import Briefer from "@/components/main/Briefer";
import Work from "@/components/work/Work";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Briefer />
      <Work />
    </main>
  );
}
