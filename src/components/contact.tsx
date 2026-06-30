"use client";

import Link from "next/link";
import {
    IconBrandGithub,
    IconBrandGitlab,
    IconBrandLinkedin,
    IconMail,
    IconMapPin,
    IconFileText,
    IconSend,
} from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const contactLinks = [
    {
        label: "Email",
        value: "athiffitri@gmail.com",
        href: "mailto:athiffitri@gmail.com",
        icon: IconMail,
    },
    {
        label: "LinkedIn",
        value: "muhammad-athif-fitri",
        href: "https://www.linkedin.com/in/muhammad-athif-fitri",
        icon: IconBrandLinkedin,
    },
    {
        label: "GitHub",
        value: "AthifFitri",
        href: "https://github.com/AthifFitri",
        icon: IconBrandGithub,
    },
    {
        label: "GitLab",
        value: "athiffitri",
        href: "https://gitlab.com/athiffitri",
        icon: IconBrandGitlab,
    },
];

export function Contact() {
    return (
        <section
            id="contact"
            className="relative overflow-hidden px-4 py-24 md:px-10 lg:px-20"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-10 top-20 size-[360px] rounded-full bg-cyan-400/10 blur-3xl" />
                <div className="absolute bottom-10 right-10 size-[420px] rounded-full bg-purple-500/10 blur-3xl" />
            </div>

            <div className="mx-auto w-full max-w-[1600px]">
                {/* Header */}
                <div className="mx-auto mb-12 max-w-3xl text-center">

                    <h2 className="text-4xl font-black leading-tight md:text-6xl">
                        Let&apos;s Work{" "}
                        <span className="bg-linear-to-r from-cyan-400 via-primary to-purple-500 bg-clip-text text-transparent">
                            Together
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                        I&apos;m open to software development opportunities,
                        freelance work, and collaboration. Feel free to reach
                        me through any platform below.
                    </p>
                </div>

                {/* Main Contact Card */}
                <div
                    className="
                        mx-auto
                        max-w-5xl
                        overflow-hidden
                        rounded-3xl
                        border
                        bg-background/50
                        p-6
                        backdrop-blur-xl
                        transition
                        duration-300
                        hover:border-primary/40
                        hover:shadow-2xl
                        hover:shadow-primary/10
                        md:p-8
                    "
                >
                    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                        {/* Left */}
                        <div className="flex flex-col justify-center">
                            <div
                                className="
                                    mb-6
                                    flex
                                    size-16
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    border
                                    border-primary/20
                                    bg-primary/10
                                    text-primary
                                    shadow-lg
                                    shadow-primary/10
                                "
                            >
                                <IconSend className="size-8" />
                            </div>

                            <h3 className="text-2xl font-bold md:text-3xl">
                                Have a project or opportunity?
                            </h3>

                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                I enjoy building clean, practical, and reliable
                                web systems. If you think I can help with your
                                project, let&apos;s connect.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-3">
                                <Badge
                                    variant="outline"
                                    className="rounded-full border-green-500/30 bg-green-500/10 px-4 py-1.5 text-green-400"
                                >
                                    Available For Opportunities
                                </Badge>

                                <Badge
                                    variant="outline"
                                    className="rounded-full border-primary/20 bg-background/40 px-4 py-1.5"
                                >
                                    <IconMapPin className="mr-1.5 size-3.5" />
                                    Malaysia
                                </Badge>
                            </div>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <Button
                                    size="lg"
                                    className="shadow-lg shadow-primary/30"
                                    asChild
                                >
                                    <Link href="/resume.pdf" target="_blank">
                                        Resume
                                        <IconFileText className="ml-2 size-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        {/* Right Contact Links */}
                        <div className="grid gap-4 sm:grid-cols-2">
                            {contactLinks.map((item) => {
                                const Icon = item.icon;
                                const isExternal = item.href.startsWith("http");

                                return (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        target={isExternal ? "_blank" : undefined}
                                        rel={
                                            isExternal
                                                ? "noopener noreferrer"
                                                : undefined
                                        }
                                        className="
                                            group
                                            rounded-2xl
                                            border
                                            border-primary/15
                                            bg-background/50
                                            p-5
                                            backdrop-blur
                                            transition
                                            duration-300
                                            hover:-translate-y-1
                                            hover:border-primary/40
                                            hover:bg-primary/10
                                        "
                                    >
                                        <div
                                            className="
                                                mb-5
                                                flex
                                                size-12
                                                items-center
                                                justify-center
                                                rounded-xl
                                                border
                                                border-primary/20
                                                bg-primary/10
                                                text-primary
                                                transition
                                                duration-300
                                                group-hover:bg-primary/20
                                            "
                                        >
                                            <Icon className="size-6" />
                                        </div>

                                        <p className="text-sm text-muted-foreground">
                                            {item.label}
                                        </p>

                                        <p className="mt-1 wrap-break-word font-semibold text-foreground">
                                            {item.value}
                                        </p>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Small Footer Text */}
                <p className="mt-8 text-center text-sm text-muted-foreground">
                    Prefer a quick message? Email or LinkedIn is the best way to reach me.
                </p>
            </div>
        </section>
    );
}