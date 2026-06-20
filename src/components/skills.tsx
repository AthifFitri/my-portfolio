"use client";

import {
    IconBrandReact,
    IconBrandTypescript,
    IconBrandBootstrap,
    IconBrandTailwind,
    IconCode,
    IconBrandPhp,
    IconBrandPython,
    IconBrandCSharp,
    IconBrandMysql,
    IconDatabase,
    IconBrandLaravel,
    IconBrandNextjs,
    IconServer,
    IconTools,
    IconBrandGit,
    IconBrandGithub,
    IconBrandGitlab,
    IconBrandVscode,
    IconBrandCypress,
} from "@tabler/icons-react";

import { Card, CardContent } from "@/components/ui/card";

const skillGroups = [
    {
        title: "Frontend",
        description: "Building clean, responsive, and interactive user interfaces.",
        icon: IconCode,
        skills: [
            { name: "React", icon: IconBrandReact },
            { name: "TypeScript", icon: IconBrandTypescript },
            { name: "Bootstrap", icon: IconBrandBootstrap },
            { name: "Tailwind CSS", icon: IconBrandTailwind },
            { name: "Shadcn UI", icon: IconCode },
        ],
    },
    {
        title: "Backend / Languages",
        description: "Building APIs, business logic, and server-side application features.",
        icon: IconServer,
        skills: [
            { name: "PHP", icon: IconBrandPhp },
            { name: "Python", icon: IconBrandPython },
            { name: "C#", icon: IconBrandCSharp },
            { name: "Java", icon: IconCode },
        ],
    },
    {
        title: "Database",
        description: "Managing relational data, queries, reports, and integrations.",
        icon: IconDatabase,
        skills: [
            { name: "MySQL", icon: IconBrandMysql },
            { name: "MSSQL", icon: IconDatabase },
            { name: "SQL Server", icon: IconDatabase },
            { name: "PostgreSQL", icon: IconDatabase },
        ],
    },
    {
        title: "Frameworks",
        description: "Working with modern frameworks for frontend, backend, and full-stack development.",
        icon: IconTools,
        skills: [
            { name: "Laravel", icon: IconBrandLaravel },
            { name: "Next.js", icon: IconBrandNextjs },
            { name: "ASP.NET", icon: IconServer },
            { name: "JSP / Servlet", icon: IconCode },
        ],
    },
    {
        title: "Tools",
        description: "Daily tools for version control, development, API testing, and automation.",
        icon: IconTools,
        skills: [
            { name: "Git", icon: IconBrandGit },
            { name: "GitHub", icon: IconBrandGithub },
            { name: "GitLab", icon: IconBrandGitlab },
            { name: "VS Code", icon: IconBrandVscode },
            { name: "Postman", icon: IconTools },
            { name: "Cypress", icon: IconBrandCypress },
        ],
    },
];

export function Skills() {
    return (
        <section
            id="skills"
            className="relative overflow-hidden px-4 py-24 md:px-10 lg:px-20"
        >

            <div className="mx-auto w-full max-w-[1600px]">
                {/* Section Header */}
                <div className="mx-auto mb-14 max-w-3xl text-center">

                    <h2 className="text-4xl font-black leading-tight md:text-6xl">
                        Skills &{" "}
                        <span className="bg-linear-to-r from-cyan-400 via-primary to-purple-500 bg-clip-text text-transparent">
                            Technologies
                        </span>
                    </h2>

                    <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                        Technologies I use to build practical, scalable, and reliable
                        web applications.
                    </p>
                </div>

                <div className="mx-auto w-full max-w-[1450px]">
                    {/* Skill Groups */}
                    <div className="grid gap-6 md:grid-cols-6">
                        {skillGroups.map((group, index) => {
                            const GroupIcon = group.icon;

                            const cardPosition =
                                index === 3
                                    ? "md:col-span-2 md:col-start-2"
                                    : "md:col-span-2";

                            return (
                                <Card
                                    key={group.title}
                                    className={`
                                        group
                                        overflow-hidden
                                        border
                                        bg-background/50
                                        backdrop-blur-xl
                                        transition
                                        duration-300
                                        hover:-translate-y-1
                                        hover:border-primary/40
                                        hover:shadow-2xl
                                        hover:shadow-primary/10
                                        ${cardPosition}
                                    `}
                                >
                                    <CardContent className="p-7">
                                        <div className="mb-5 flex items-start gap-4">
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
                                                    group-hover:border-primary/50
                                                    group-hover:bg-primary/20
                                                "
                                            >
                                                <GroupIcon className="size-6" />
                                            </div>

                                            <div>
                                                <h3 className="text-xl font-bold">
                                                    {group.title}
                                                </h3>

                                                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                                                    {group.description}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {group.skills.map((skill) => {
                                                const SkillIcon = skill.icon;

                                                return (
                                                    <div
                                                        key={skill.name}
                                                        className="
                                                            flex
                                                            items-center
                                                            gap-2
                                                            rounded-full
                                                            border
                                                            border-primary/15
                                                            bg-background/60
                                                            px-3
                                                            py-2
                                                            text-sm
                                                            text-foreground
                                                            transition
                                                            duration-300
                                                            hover:border-primary/50
                                                            hover:bg-primary/10
                                                        "
                                                    >
                                                        <SkillIcon className="size-4 text-primary" />
                                                        <span>{skill.name}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}