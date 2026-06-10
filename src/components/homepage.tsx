import Image from "next/image";
import Link from "next/link";
import {
    IconArrowRight,
    IconBrandGithub,
    IconBrandLinkedin,
    IconFileText,
} from "@tabler/icons-react";

import MyPic from "@/assets/images/mypic.png";

import { Header } from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Homepage() {
    return (
        <section className="relative min-h-screen overflow-hidden px-20">

            <Header />

            {/* Background Grid */}
            <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[48px_48px]" />

            {/* Glow */}
            <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl -z-10" />
            <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl -z-10" />

            <div className="container mx-auto pt-24">

                <div className="grid min-h-[calc(100vh-96px)] items-center gap-12 lg:grid-cols-2">

                    {/* LEFT */}
                    <div className="space-y-6 py-5">

                        <Badge
                            className="
                                w-fit
                                rounded-full
                                border-green-500/30
                                bg-green-500/10
                                text-green-400
                                px-4 py-1
                            "
                        >
                            ● Available For Opportunities
                        </Badge>

                        <div>
                            <h1 className="text-5xl md:text-7xl font-black leading-tight">
                                Hi, I'm{" "}
                                <span className="bg-linear-to-r from-cyan-400 via-primary to-purple-500 bg-clip-text text-transparent">
                                    Athif Fitri
                                </span>
                            </h1>

                            <h2 className="mt-6 text-2xl md:text-3xl font-semibold">
                                Software Developer
                                <br />
                                <span className="text-muted-foreground">
                                    & Quality Assurance Enthusiast
                                </span>
                            </h2>

                            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                                Final-year Software Engineering student
                                passionate about building scalable web
                                applications, automation testing solutions,
                                and reliable digital experiences.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Button
                                size="lg"
                                className="shadow-lg shadow-primary/30"
                                asChild
                            >
                                <Link href="#projects">
                                    View Projects
                                    <IconArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-background/30 backdrop-blur"
                                asChild
                            >
                                <Link href="#contact">
                                    Hire Me
                                </Link>
                            </Button>
                        </div>

                        <div className="flex gap-4">
                            <Button variant="ghost" size="icon" asChild>
                                <Link
                                    href="https://github.com/yourusername"
                                    target="_blank"
                                >
                                    <IconBrandGithub className="h-5 w-5" />
                                </Link>
                            </Button>

                            <Button variant="ghost" size="icon" asChild>
                                <Link
                                    href="https://linkedin.com/in/yourusername"
                                    target="_blank"
                                >
                                    <IconBrandLinkedin className="h-5 w-5" />
                                </Link>
                            </Button>

                            <Button variant="ghost" size="icon" asChild>
                                <Link href="/resume.pdf">
                                    <IconFileText className="h-5 w-5" />
                                </Link>
                            </Button>
                        </div>

                        <div className="grid max-w-md grid-cols-3 gap-4">
                            <StatCard title="10+" label="Projects Built" />
                            <StatCard title="2+" label="Years Learning" />
                            <StatCard title="2025" label="Graduate" />
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="relative flex items-center justify-center">

                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="h-h-112.5 w-h-112.5 rounded-full bg-linear-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl" />
                        </div>

                        <div className="relative">

                            <Image
                                src={MyPic}
                                alt="Athif Fitri"
                                priority
                                className="
                                    relative
                                    z-10
                                    w-auto
                                    max-h-[80vh]
                                    object-contain
                                    drop-shadow-[0_0_50px_rgba(0,255,255,0.35)]
                                "
                            />

                            <div className="absolute -left-8 top-20">
                                <SkillCard text="Laravel" />
                            </div>

                            <div className="absolute -right-8 top-10">
                                <SkillCard text="React" />
                            </div>

                            <div className="absolute -right-10 top-40">
                                <SkillCard text="QA Testing" />
                            </div>

                            <div className="absolute left-0 bottom-28">
                                <SkillCard text="ASP.NET" />
                            </div>

                            <div className="absolute right-0 bottom-12">
                                <SkillCard text="Automation" />
                            </div>

                            <div className="absolute left-10 bottom-0">
                                <SkillCard text="Next.js" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

function SkillCard({ text }: { text: string }) {
    return (
        <div className="rounded-full border bg-background/70 backdrop-blur-md px-4 py-2 shadow-lg shadow-primary/20 text-sm font-medium whitespace-nowrap">
            {text}
        </div>
    );
}

function StatCard({
    title,
    label,
}: {
    title: string;
    label: string;
}) {
    return (
        <div className="rounded-xl border bg-background/50 backdrop-blur p-4">
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="text-xs text-muted-foreground">{label}</p>
        </div>
    );
}