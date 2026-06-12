"use client";

import Link from "next/link";
import React from "react";
import { Menu, X } from "lucide-react";

import { Logo } from "@/components/logo";
import { ThemeToggleButton } from "@/components/ui/theme-toggle-button";
import { cn } from "@/lib/utils";

const menuItems = [
    { name: "Home", href: "/" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const Header = () => {
    const [menuState, setMenuState] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header>
            <nav
                data-state={menuState ? "active" : "inactive"}
                className="fixed inset-x-0 top-0 z-50 w-full px-4 md:px-10 lg:px-20"
            >
                <div
                    className={cn(
                        "mx-auto mt-2 w-full max-w-[1600px] transition-all duration-300",
                        isScrolled &&
                            "max-w-6xl rounded-2xl border bg-background/50 px-6 backdrop-blur-lg"
                    )}
                >
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        {/* Logo + Mobile Button */}
                        <div className="flex w-full items-center justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="Home"
                                className="flex items-center space-x-2"
                            >
                                <Logo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={
                                    menuState ? "Close Menu" : "Open Menu"
                                }
                                className="relative z-20 -m-2.5 block cursor-pointer p-2.5 lg:hidden"
                            >
                                <Menu
                                    className={cn(
                                        "m-auto size-6 duration-200",
                                        menuState &&
                                            "rotate-180 scale-0 opacity-0"
                                    )}
                                />

                                <X
                                    className={cn(
                                        "absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200",
                                        menuState &&
                                            "rotate-0 scale-100 opacity-100"
                                    )}
                                />
                            </button>
                        </div>

                        {/* Desktop Menu Center */}
                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="block text-muted-foreground duration-150 hover:text-foreground"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Side / Mobile Dropdown */}
                        <div
                            className={cn(
                                "hidden w-full flex-wrap items-center justify-end rounded-3xl border bg-background p-6 shadow-2xl shadow-zinc-300/20 dark:shadow-none",
                                "lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none",
                                menuState && "block"
                            )}
                        >
                            {/* Mobile Menu */}
                            <div className="w-full lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                onClick={() =>
                                                    setMenuState(false)
                                                }
                                                className="block text-muted-foreground duration-150 hover:text-foreground"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-6 flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 lg:mt-0 lg:w-fit">
                                <ThemeToggleButton />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};