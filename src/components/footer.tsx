import Link from "next/link";
import {
    IconBrandGithub,
    IconBrandGitlab,
    IconBrandLinkedin,
    IconFileText,
    IconMail,
} from "@tabler/icons-react";

import { Logo } from "@/components/logo";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

const socialLinks = [
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/muhammad-athif-fitri",
        icon: IconBrandLinkedin,
    },
    {
        name: "GitHub",
        href: "https://github.com/AthifFitri",
        icon: IconBrandGithub,
    },
    {
        name: "GitLab",
        href: "https://gitlab.com/athiffitri",
        icon: IconBrandGitlab,
    },
    {
        name: "Resume",
        href: "/resume.pdf",
        icon: IconFileText,
    },
    {
        name: "Email",
        href: "mailto:athiffitri@gmail.com",
        icon: IconMail,
    },
];

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="
                relative
                border-t
                border-primary/10
                px-4
                py-6
                md:px-10
                lg:px-20
            "
        >
            <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-24 bg-linear-to-b from-primary/5 to-transparent" />

            <div
                className="
                    mx-auto
                    flex
                    w-full
                    max-w-[1600px]
                    flex-col
                    items-center
                    justify-between
                    gap-5
                    text-center
                    md:flex-row
                    md:text-left
                "
            >
                {/* Left */}
                <div className="flex flex-col items-center md:items-start">
                    <Link
                        href="/"
                        aria-label="Home"
                        className="inline-flex items-center"
                    >
                        <Logo />
                    </Link>

                    <p className="mt-3 text-sm text-muted-foreground">
                        © {currentYear} Athif Fitri. Let's get to work!
                    </p>
                </div>

                {/* Right Social Icons */}
                <TooltipProvider delayDuration={100}>
                    <div className="flex items-center justify-center gap-2">
                        {socialLinks.map((item) => {
                            const Icon = item.icon;
                            const isExternal = item.href.startsWith("http");

                            return (
                                <Tooltip key={item.name}>
                                    <TooltipTrigger asChild>
                                        <Link
                                            href={item.href}
                                            target={
                                                isExternal
                                                    ? "_blank"
                                                    : undefined
                                            }
                                            rel={
                                                isExternal
                                                    ? "noopener noreferrer"
                                                    : undefined
                                            }
                                            aria-label={item.name}
                                            className="
                                                flex
                                                size-9
                                                items-center
                                                justify-center
                                                rounded-xl
                                                border
                                                border-primary/10
                                                bg-background/40
                                                text-muted-foreground
                                                backdrop-blur
                                                transition
                                                duration-300
                                                hover:-translate-y-0.5
                                                hover:border-primary/40
                                                hover:bg-primary/10
                                                hover:text-foreground
                                            "
                                        >
                                            <Icon className="size-4.5" />
                                        </Link>
                                    </TooltipTrigger>

                                    <TooltipContent side="top">
                                        <p>{item.name}</p>
                                    </TooltipContent>
                                </Tooltip>
                            );
                        })}
                    </div>
                </TooltipProvider>
            </div>
        </footer>
    );
}