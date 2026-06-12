export function Background() {
    return (
        <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden bg-background">
            {/* Glow behind grid */}
            <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
            <div className="absolute left-[40%] top-[45%] h-80 w-80 rounded-full bg-pink-500/5 blur-3xl" />

            {/* Background Grid */}
            <div
                className="
                    absolute
                    inset-0
                    bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)]
                    bg-[size:48px_48px]
                "
            />

            {/* Optional dark fade, but very light only */}
            <div className="absolute inset-0 bg-background/20" />
        </div>
    );
}