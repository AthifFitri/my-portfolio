"use client";

import * as React from "react";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import {
    IconBrandGithub,
    IconCode,
    IconDeviceDesktop,
    IconExternalLink,
    IconServer,
} from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";

const projects = [
    {
        title: "HRMS Attendance System",
        shortTitle: "HRMS",
        category: "Web Application",
        status: "Featured",
        description:
            "A human resource management system with attendance tracking, employee management, dashboards, leave, and claim modules.",
        tech: ["Laravel", "Livewire", "MySQL", "Bootstrap", "ApexCharts"],
        liveUrl: "#",
        githubUrl: "#",
        icon: IconDeviceDesktop,
    },
    {
        title: "TaniCart Mart",
        shortTitle: "TaniCart",
        category: "Mobile / POS",
        status: "In Progress",
        description:
            "A shopping and cashier system with order management, receipt printing, barcode scanning, and customer order flow.",
        tech: ["Flutter", "Laravel API", "MySQL", "OneSignal"],
        liveUrl: "#",
        githubUrl: "#",
        icon: IconCode,
    },
    {
        title: "ASBF Application System",
        shortTitle: "ASBF",
        category: "Web System",
        status: "Completed",
        description:
            "An online application system for hostel registration, profile management, examination flow, and admin verification.",
        tech: ["Laravel", "Livewire", "Fortify", "DataTables"],
        liveUrl: "#",
        githubUrl: "#",
        icon: IconServer,
    },
    {
        title: "Vendor Management System",
        shortTitle: "Vendor",
        category: "Enterprise System",
        status: "Case Study",
        description:
            "A vendor registration and renewal system with document validation, category management, audit trail, and policy acceptance.",
        tech: ["Laravel", "MySQL", "API Integration", "Reports"],
        liveUrl: "#",
        githubUrl: "#",
        icon: IconDeviceDesktop,
    },
    {
        title: "Digital Wedding Invitation",
        shortTitle: "Wedding",
        category: "Mini Project",
        status: "Personal",
        description:
            "A beautiful and interactive digital wedding invitation website with event details, gallery section, RSVP flow, and elegant animation.",
        tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
        liveUrl: "#",
        githubUrl: "#",
        icon: IconCode,
    },
];

function TechBadge({ name }: { name: string }) {
    return (
        <span
            className="
                rounded-full
                border
                border-primary/15
                bg-background/60
                px-3
                py-1.5
                text-xs
                text-muted-foreground
                transition
                duration-300
                group-hover:border-primary/40
                group-hover:text-foreground
            "
        >
            {name}
        </span>
    );
}

function ProjectMockup({ title }: { title: string }) {
    return (
        <div
            className="
                relative
                h-full
                min-h-[330px]
                overflow-hidden
                rounded-3xl
                border
                border-primary/20
                bg-background/50
                p-4
                shadow-2xl
                shadow-primary/10
                backdrop-blur-xl
            "
        >
            {/* Glow */}
            <div className="absolute right-[-100px] top-[-100px] size-72 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute bottom-[-100px] left-[-100px] size-72 rounded-full bg-purple-500/20 blur-3xl" />

            {/* Browser Bar */}
            <div className="relative z-10 mb-4 flex items-center gap-2">
                <span className="size-3 rounded-full bg-red-400/80" />
                <span className="size-3 rounded-full bg-yellow-400/80" />
                <span className="size-3 rounded-full bg-green-400/80" />

                <div className="ml-3 h-7 flex-1 rounded-full border border-primary/10 bg-background/70 px-4 text-xs text-muted-foreground">
                    <div className="flex h-full items-center">
                        portfolio.dev/projects
                    </div>
                </div>
            </div>

            {/* Fake Screen */}
            <div
                className="
                    relative
                    z-10
                    overflow-hidden
                    rounded-2xl
                    border
                    border-primary/10
                    bg-linear-to-br
                    from-cyan-500/10
                    via-purple-500/10
                    to-pink-500/10
                    p-5
                "
            >
                <div className="mb-6">
                    <div className="mb-3 h-4 w-24 rounded-full bg-primary/40" />
                    <div className="h-8 w-4/5 rounded-xl bg-foreground/15" />
                    <div className="mt-2 h-4 w-1/2 rounded-xl bg-foreground/10" />
                </div>

                <div className="grid grid-cols-3 gap-3">
                    <div className="h-24 rounded-2xl border border-primary/10 bg-background/60" />
                    <div className="h-24 rounded-2xl border border-primary/10 bg-background/60" />
                    <div className="h-24 rounded-2xl border border-primary/10 bg-background/60" />
                </div>

                <div className="mt-5 space-y-3 rounded-2xl border border-primary/10 bg-background/50 p-4">
                    <div className="h-3 w-full rounded-full bg-foreground/10" />
                    <div className="h-3 w-5/6 rounded-full bg-foreground/10" />
                    <div className="h-3 w-2/3 rounded-full bg-foreground/10" />
                </div>

                <div className="mt-5 inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                    {title}
                </div>
            </div>
        </div>
    );
}

export function Projects() {
    const plugin = React.useRef(
        Autoplay({
            delay: 7500,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
        })
    );

    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
        if (!api) return;

        const onSelect = () => {
            setCurrent(api.selectedScrollSnap());
        };

        onSelect();

        api.on("select", onSelect);
        api.on("reInit", onSelect);

        return () => {
            api.off("select", onSelect);
            api.off("reInit", onSelect);
        };
    }, [api]);

    return (
        <section
            id="projects"
            className="relative overflow-hidden px-4 py-24 md:px-10 lg:px-20"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-20 size-[420px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute bottom-10 right-10 size-[320px] rounded-full bg-cyan-400/10 blur-3xl" />
            </div>

            <div className="mx-auto w-full max-w-[1600px]">
                {/* Section Header */}
                <div className="mx-auto mb-10 max-w-3xl text-center">

                    <h2 className="text-4xl font-black leading-tight md:text-6xl">
                        Featured{" "}
                        <span className="bg-linear-to-r from-cyan-400 via-primary to-purple-500 bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h2>

                    <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                        A collection of systems and applications I have built,
                        focusing on practical features, clean interfaces, and
                        reliable delivery.
                    </p>
                </div>

                {/* Project Indicators */}
                <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
                    {projects.map((project, index) => {
                        const isActive = current === index;

                        return (
                            <button
                                key={project.title}
                                type="button"
                                onClick={() => api?.scrollTo(index)}
                                className={`
                                    rounded-full
                                    border
                                    px-4
                                    py-2
                                    text-sm
                                    font-medium
                                    backdrop-blur
                                    transition
                                    duration-300
                                    ${
                                        isActive
                                            ? `
                                                scale-105
                                                border-primary/60
                                                bg-primary/15
                                                text-primary
                                                shadow-lg
                                                shadow-primary/20
                                            `
                                            : `
                                                border-primary/15
                                                bg-background/50
                                                text-muted-foreground
                                                hover:border-primary/40
                                                hover:bg-primary/10
                                                hover:text-foreground
                                            `
                                    }
                                `}
                            >
                                {project.shortTitle}
                            </button>
                        );
                    })}
                </div>

                {/* Current Project Info */}
                <div className="mb-8 flex justify-center">
                    <div
                        className="
                            rounded-full
                            border
                            border-primary/15
                            bg-background/50
                            px-4
                            py-2
                            text-xs
                            text-muted-foreground
                            backdrop-blur
                        "
                    >
                        Current:{" "}
                        <span className="font-medium text-primary">
                            {projects[current]?.title}
                        </span>
                        <span className="mx-2">|</span>
                        {current + 1} / {projects.length}
                    </div>
                </div>

                {/* Carousel */}
                <Carousel
                    setApi={setApi}
                    plugins={[plugin.current]}
                    opts={{
                        align: "center",
                        loop: true,
                    }}
                    className="relative mx-auto w-full max-w-[1350px]"
                >
                    <CarouselContent>
                        {projects.map((project) => {
                            const ProjectIcon = project.icon;

                            return (
                                <CarouselItem
                                    key={project.title}
                                    className="basis-full"
                                >
                                    <div
                                        className="
                                            group
                                            grid
                                            gap-8
                                            overflow-hidden
                                            rounded-3xl
                                            border
                                            bg-background/50
                                            p-5
                                            backdrop-blur-xl
                                            transition
                                            duration-300
                                            hover:border-primary/40
                                            hover:shadow-2xl
                                            hover:shadow-primary/10
                                            lg:grid-cols-2
                                            lg:p-8
                                        "
                                    >
                                        {/* Left Preview */}
                                        <ProjectMockup title={project.title} />

                                        {/* Right Content */}
                                        <div className="flex flex-col justify-center">
                                            <div className="mb-5 flex flex-wrap gap-2">
                                                <Badge className="rounded-full bg-primary/15 text-primary hover:bg-primary/20">
                                                    {project.status}
                                                </Badge>

                                                <Badge
                                                    variant="outline"
                                                    className="rounded-full border-primary/20"
                                                >
                                                    {project.category}
                                                </Badge>
                                            </div>

                                            <div className="mb-5 flex items-center gap-4">
                                                <div
                                                    className="
                                                        rounded-2xl
                                                        border
                                                        border-primary/20
                                                        bg-primary/10
                                                        p-3
                                                        text-primary
                                                        shadow-lg
                                                        shadow-primary/10
                                                        transition
                                                        duration-300
                                                        group-hover:bg-primary/20
                                                    "
                                                >
                                                    <ProjectIcon className="size-7" />
                                                </div>

                                                <h3 className="text-3xl font-black leading-tight md:text-5xl">
                                                    {project.title}
                                                </h3>
                                            </div>

                                            <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                                                {project.description}
                                            </p>

                                            <div className="mt-6 flex flex-wrap gap-2">
                                                {project.tech.map((tech) => (
                                                    <TechBadge
                                                        key={tech}
                                                        name={tech}
                                                    />
                                                ))}
                                            </div>

                                            <div className="mt-8 flex flex-wrap gap-3">
                                                <Button
                                                    size="lg"
                                                    className="shadow-lg shadow-primary/30"
                                                    asChild
                                                >
                                                    <Link href={project.liveUrl}>
                                                        View Project
                                                        <IconExternalLink className="ml-2 size-4" />
                                                    </Link>
                                                </Button>

                                                <Button
                                                    size="lg"
                                                    variant="outline"
                                                    className="bg-background/30 backdrop-blur"
                                                    asChild
                                                >
                                                    <Link href={project.githubUrl}>
                                                        Source Code
                                                        <IconBrandGithub className="ml-2 size-4" />
                                                    </Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            );
                        })}
                    </CarouselContent>

                    {/* Controls */}
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                        <CarouselPrevious
                            className="
                                static
                                translate-y-0
                                border-primary/20
                                bg-background/60
                                backdrop-blur
                                hover:bg-primary/10
                            "
                        />

                        <div className="rounded-full border border-primary/15 bg-background/50 px-4 py-2 text-xs text-muted-foreground backdrop-blur">
                            Auto-scroll · Hover to pause
                        </div>

                        <CarouselNext
                            className="
                                static
                                translate-y-0
                                border-primary/20
                                bg-background/60
                                backdrop-blur
                                hover:bg-primary/10
                            "
                        />
                    </div>
                </Carousel>
            </div>
        </section>
    );
}