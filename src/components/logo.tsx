import { cn } from '../lib/utils'

const gradientStops = (
    <>
        <stop stopColor="#7C3AED" />
        <stop
            offset="0.48"
            stopColor="#2563EB"
        />
        <stop
            offset="1"
            stopColor="#14B8A6"
        />
    </>
)

export const Logo = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    const paint = uniColor ? 'currentColor' : 'url(#af-logo-gradient)'

    return (
        <svg
            className={cn('text-foreground h-8 w-auto', className)}
            viewBox="0 0 358 88"
            fill="none"
            role="img"
            aria-label="Athif Fitri"
            xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient
                    id="af-logo-gradient"
                    x1="8"
                    y1="7"
                    x2="83"
                    y2="81"
                    gradientUnits="userSpaceOnUse">
                    {gradientStops}
                </linearGradient>
                <linearGradient
                    id="af-logo-glow"
                    x1="18"
                    y1="14"
                    x2="74"
                    y2="74"
                    gradientUnits="userSpaceOnUse">
                    <stop
                        stopColor="#FFFFFF"
                        stopOpacity="0.32"
                    />
                    <stop
                        offset="1"
                        stopColor="#FFFFFF"
                        stopOpacity="0"
                    />
                </linearGradient>
            </defs>

            <g>
                <rect
                    x="4"
                    y="4"
                    width="80"
                    height="80"
                    rx="24"
                    fill={paint}
                />
                {!uniColor && (
                    <rect
                        x="12"
                        y="10"
                        width="64"
                        height="62"
                        rx="18"
                        fill="url(#af-logo-glow)"
                    />
                )}
                <path
                    d="M24 65L43.5 22L63 65"
                    stroke="white"
                    strokeWidth="7.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M33.5 49.5H53.5"
                    stroke="white"
                    strokeWidth="6.5"
                    strokeLinecap="round"
                />
                <path
                    d="M52 24H69"
                    stroke="white"
                    strokeWidth="7.5"
                    strokeLinecap="round"
                />
                <path
                    d="M52 43.5H65"
                    stroke="white"
                    strokeWidth="7.5"
                    strokeLinecap="round"
                />
            </g>

            <g fill="currentColor">
                <text
                    x="106"
                    y="46"
                    fontSize="34"
                    fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
                    fontWeight="750"
                    letterSpacing="0">
                    Athif
                </text>
                <text
                    x="210"
                    y="46"
                    fontSize="34"
                    fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
                    fontWeight="650"
                    letterSpacing="0">
                    Fitri
                </text>
                <path
                    d="M108 61H172"
                    stroke={paint}
                    strokeWidth="5"
                    strokeLinecap="round"
                />
                <path
                    d="M184 61H197"
                    stroke={paint}
                    strokeWidth="5"
                    strokeLinecap="round"
                    opacity="0.68"
                />
            </g>
        </svg>
    )
}

export const LogoIcon = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    const paint = uniColor ? 'currentColor' : 'url(#af-logo-icon-gradient)'

    return (
        <svg
            className={cn('size-8', className)}
            viewBox="0 0 88 88"
            fill="none"
            role="img"
            aria-label="Athif Fitri"
            xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient
                    id="af-logo-icon-gradient"
                    x1="8"
                    y1="7"
                    x2="83"
                    y2="81"
                    gradientUnits="userSpaceOnUse">
                    {gradientStops}
                </linearGradient>
                <linearGradient
                    id="af-logo-icon-glow"
                    x1="18"
                    y1="14"
                    x2="74"
                    y2="74"
                    gradientUnits="userSpaceOnUse">
                    <stop
                        stopColor="#FFFFFF"
                        stopOpacity="0.32"
                    />
                    <stop
                        offset="1"
                        stopColor="#FFFFFF"
                        stopOpacity="0"
                    />
                </linearGradient>
            </defs>

            <rect
                x="4"
                y="4"
                width="80"
                height="80"
                rx="24"
                fill={paint}
            />
            {!uniColor && (
                <rect
                    x="12"
                    y="10"
                    width="64"
                    height="62"
                    rx="18"
                    fill="url(#af-logo-icon-glow)"
                />
            )}
            <path
                d="M24 65L43.5 22L63 65"
                stroke="white"
                strokeWidth="7.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M33.5 49.5H53.5"
                stroke="white"
                strokeWidth="6.5"
                strokeLinecap="round"
            />
            <path
                d="M52 24H69"
                stroke="white"
                strokeWidth="7.5"
                strokeLinecap="round"
            />
            <path
                d="M52 43.5H65"
                stroke="white"
                strokeWidth="7.5"
                strokeLinecap="round"
            />
        </svg>
    )
}
