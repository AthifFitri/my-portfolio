import { cn } from "@/lib/utils";

type LogoProps = {
    className?: string;
    iconClassName?: string;
    showText?: boolean;
};

export const Logo = ({
    className,
    iconClassName,
    showText = true,
}: LogoProps) => {
    return (
        <div className={cn("group inline-flex items-center gap-2.5", className)}>
            <LogoIcon
                className={cn(
                    "size-8 shrink-0 transition duration-300 group-hover:scale-105",
                    iconClassName
                )}
            />

            {showText && (
                <div className="leading-none">
                    <div className="flex items-center gap-1.5">
                        <span className="text-sm font-bold tracking-tight text-foreground">
                            Athif
                        </span>

                        <span className="text-sm font-semibold tracking-tight text-muted-foreground">
                            Fitri
                        </span>
                    </div>

                    <div className="mt-1.5 h-0.5 w-10 rounded-full bg-primary" />
                </div>
            )}
        </div>
    );
};

export const LogoIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            className={cn("text-foreground", className)}
            viewBox="0 0 64 64"
            fill="none"
            role="img"
            aria-label="Athif Fitri"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Icon container */}
            <rect
                x="6"
                y="6"
                width="52"
                height="52"
                rx="16"
                className="fill-background"
            />

            <rect
                x="6.5"
                y="6.5"
                width="51"
                height="51"
                rx="15.5"
                className="stroke-primary/70"
            />

            <rect
                x="10"
                y="10"
                width="44"
                height="44"
                rx="13"
                className="fill-primary/10"
            />

            {/* Letter A */}
            <path
                d="M18 42L26 22L34 42"
                className="stroke-foreground"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            <path
                d="M22 35H30"
                className="stroke-foreground"
                strokeWidth="3.5"
                strokeLinecap="round"
            />

            {/* Letter F */}
            <path
                d="M38 22V42"
                className="stroke-foreground"
                strokeWidth="4"
                strokeLinecap="round"
            />

            <path
                d="M38 23H47"
                className="stroke-foreground"
                strokeWidth="3.8"
                strokeLinecap="round"
            />

            <path
                d="M38 32H45"
                className="stroke-foreground"
                strokeWidth="3.8"
                strokeLinecap="round"
            />
        </svg>
    );
};