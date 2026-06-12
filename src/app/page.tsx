import { Homepage } from "@/components/homepage";
import { Skills } from "@/components/skills";

import { Background } from "@/components/ui/background"

export default function Home() {
  return (
    <div>
      <main className="relative min-h-screen overflow-x-hidden">
            <Background />

            <Homepage />
            <Skills />
        </main>
    </div>
  );
}
