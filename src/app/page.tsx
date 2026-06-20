import { Homepage } from "@/components/homepage";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

import { Background } from "@/components/ui/background"

export default function Home() {
  return (
    <div>
      <main className="relative min-h-screen overflow-x-hidden">
            <Background />

            <Homepage />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </main>
    </div>
  );
}
