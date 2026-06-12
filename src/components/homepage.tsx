"use client";

import Image from "next/image";
import Link from "next/link";
import {
    IconArrowRight,
    IconBrandGithub,
    IconBrandGitlab,
    IconBrandLinkedin,
    IconFileText,
} from "@tabler/icons-react";

import MyPic from "@/assets/images/mypic.png";

import { Header } from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import { TextLoop } from '@/components/motion-primitives/text-loop';

function SocialIcon({
    label,
    href,
    children,
}: {
    label: string;
    href: string;
    children: React.ReactNode;
}) {
    const isExternal = href.startsWith("http");

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="
                        size-11
                        rounded-xl
                        border
                        border-transparent
                        text-muted-foreground
                        transition
                        duration-300
                        hover:border-primary/30
                        hover:bg-primary/10
                        hover:text-foreground
                    "
                    asChild
                >
                    <Link
                        href={href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        aria-label={label}
                    >
                        {children}
                    </Link>
                </Button>
            </TooltipTrigger>

            <TooltipContent side="bottom">
                <p>{label}</p>
            </TooltipContent>
        </Tooltip>
    );
}

function SkillCard({
    text,
    compact = false,
}: {
    text: string;
    compact?: boolean;
}) {
    return (
        <div
            className={`
                group
                flex
                items-center
                gap-2
                whitespace-nowrap
                rounded-full
                border
                border-primary/20
                bg-background/60
                text-foreground
                shadow-lg
                shadow-primary/5
                backdrop-blur-xl
                transition
                duration-300
                hover:-translate-y-1
                hover:border-primary/50
                hover:bg-background/80
                hover:shadow-primary/15
                ${compact ? "px-3 py-1.5 text-xs" : "px-3.5 py-2 text-sm"}
            `}
        >
            <span className="size-1.5 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
            <span className="font-medium">{text}</span>
        </div>
    );
}

const skills = [
    {
        text: "PHP",
        className: "absolute left-[-35px] top-[22%] z-20",
    },
    {
        text: "Laravel",
        className: "absolute right-[-55px] top-[22%] z-20",
    },
    {
        text: "TypeScript",
        className: "absolute left-[-55px] top-[38%] z-20",
    },
    {
        text: "Next.js",
        className: "absolute right-[-65px] top-[38%] z-20",
    },
    {
        text: "C#",
        className: "absolute left-[-35px] top-[54%] z-20",
    },
    {
        text: "ASP.NET",
        className: "absolute right-[-45px] top-[54%] z-20",
    },
    {
        text: "Java",
        className: "absolute left-[10px] top-[70%] z-20",
    },
    {
        text: "React",
        className: "absolute right-[5px] top-[70%] z-20",
    },
];

function StatCard({
    title,
    label,
}: {
    title: string;
    label: string;
}) {
    return (
        <div className="rounded-xl border bg-background/50 p-3 backdrop-blur sm:p-4">
            <h3 className="text-xl font-bold sm:text-2xl">{title}</h3>
            <p className="text-xs text-muted-foreground sm:text-sm">
                {label}
            </p>
        </div>
    );
}

export function Homepage() {
    return (
        <section className="relative min-h-screen overflow-hidden px-4 md:px-10 lg:px-20">
            <Header />

            <div className="mx-auto w-full max-w-[1600px] pt-24">
                <div className="grid items-center gap-4 lg:min-h-[calc(100vh-96px)] lg:grid-cols-2 lg:gap-12">
                    {/* LEFT */}
                    <div className="space-y-6 py-5 lg:py-0">
                        <Badge
                            className="
                                w-fit
                                rounded-full
                                border-green-500/30
                                bg-green-500/10
                                px-4 py-1
                                text-green-400
                            "
                        >
                            ● Available For Opportunities
                        </Badge>

                        <div>
                            <h1 className="text-5xl font-black leading-tight md:text-7xl">
                                Hi, I&apos;m{" "}
                                <span className="bg-linear-to-r from-cyan-400 via-primary to-purple-500 bg-clip-text text-transparent">
                                    Athif Fitri
                                </span>
                            </h1>

                            <h2 className="mt-6 text-2xl font-bold leading-snug md:text-3xl">
                                Software Developer
                                <br />
                                <TextLoop className="inline-flex min-h-[32px] items-center overflow-hidden md:min-h-[40px]">
                                    <span className="bg-linear-to-r from-cyan-300 via-purple-300 to-pink-400 bg-clip-text text-xl font-bold text-transparent md:text-2xl">
                                        Building reliable web systems
                                    </span>

                                    <span className="bg-linear-to-r from-cyan-300 via-purple-300 to-pink-400 bg-clip-text text-xl font-bold text-transparent md:text-2xl">
                                        Developing scalable applications
                                    </span>

                                    <span className="bg-linear-to-r from-cyan-300 via-purple-300 to-pink-400 bg-clip-text text-xl font-bold text-transparent md:text-2xl">
                                        Crafting clean user experiences
                                    </span>

                                    <span className="bg-linear-to-r from-cyan-300 via-purple-300 to-pink-400 bg-clip-text text-xl font-bold text-transparent md:text-2xl">
                                        Delivering practical digital solutions
                                    </span>
                                </TextLoop>
                            </h2>

                            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                                I build practical, scalable, and user-friendly web applications with
                                clean code and reliable delivery.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-4">
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
                                <Link href="#contact">Hire Me</Link>
                            </Button>

                            <div className="ml-0 flex gap-2 md:ml-2">
                                <TooltipProvider delayDuration={100}>
                                    <SocialIcon
                                        label="LinkedIn"
                                        href="https://www.linkedin.com/in/muhammad-athif-fitri"
                                    >
                                        <IconBrandLinkedin className="size-6" />
                                    </SocialIcon>

                                    <SocialIcon
                                        label="GitHub"
                                        href="https://github.com/AthifFitri"
                                    >
                                        <IconBrandGithub className="size-6" />
                                    </SocialIcon>

                                    <SocialIcon
                                        label="GitLab"
                                        href="https://gitlab.com/athiffitri"
                                    >
                                        <IconBrandGitlab className="size-6" />
                                    </SocialIcon>

                                    <SocialIcon
                                        label="Resume"
                                        href="/resume.pdf"
                                    >
                                        <IconFileText className="size-6" />
                                    </SocialIcon>
                                </TooltipProvider>
                            </div>
                        </div>

                        <div className="grid max-w-lg grid-cols-2 gap-3 sm:grid-cols-4">
                            <StatCard title="8+" label="Projects" />
                            <StatCard title="2+" label="Years Exp." />
                            <StatCard title="5+" label="Tools" />
                            <StatCard title="2025" label="Graduated" />
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="relative hidden h-full items-end justify-center lg:flex">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="h-[500px] w-[500px] rounded-full bg-linear-to-r from-cyan-500/15 via-purple-500/15 to-pink-500/15 blur-3xl" />
                        </div>

                        <div className="absolute bottom-10 h-[420px] w-[420px] rounded-full border border-primary/10" />
                        <div className="absolute bottom-16 h-[330px] w-[330px] rounded-full border border-primary/5" />

                        <div className="relative flex h-full min-w-[410px] items-end justify-center">
                            <Image
                                src={MyPic}
                                alt="Athif Fitri"
                                priority
                                className="
                                    relative
                                    z-10
                                    max-h-[78vh]
                                    w-auto
                                    object-contain
                                    object-bottom
                                    drop-shadow-[0_0_50px_rgba(0,255,255,0.28)]
                                "
                            />

                            {skills.map((skill) => (
                                <div key={skill.text} className={skill.className}>
                                    <SkillCard text={skill.text} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Image */}
                    <div className="relative -mt-4 flex h-[360px] items-end justify-center overflow-hidden lg:hidden">
                        <div className="absolute bottom-8 h-[280px] w-[280px] rounded-full bg-linear-to-r from-cyan-500/15 via-purple-500/15 to-pink-500/15 blur-3xl" />

                        <div className="relative flex h-full w-full max-w-[340px] items-end justify-center">
                            <Image
                                src={MyPic}
                                alt="Athif Fitri"
                                priority
                                className="
                                    relative
                                    z-10
                                    max-h-[360px]
                                    w-auto
                                    object-contain
                                    object-bottom
                                    drop-shadow-[0_0_40px_rgba(0,255,255,0.22)]
                                "
                            />

                            <div className="absolute left-3 top-[6%] z-20">
                                <SkillCard text="Laravel" compact />
                            </div>

                            <div className="absolute right-1 top-[14%] z-20">
                                <SkillCard text="Next.js" compact />
                            </div>

                            <div className="absolute left-4 top-[42%] z-20">
                                <SkillCard text="ASP.NET" compact />
                            </div>

                            <div className="absolute right-3 top-[52%] z-20">
                                <SkillCard text="React" compact />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}