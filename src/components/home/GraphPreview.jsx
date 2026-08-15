const GraphPreview = () => {
    return (
        <section className="px-6 py-24">
            <div className="mx-auto max-w-6xl">

                <p className="text-sm uppercase tracking-[0.2rem] text-zinc-500">
                    Explore Connections
                </p>

                <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
                    See how repositories connect.
                </h2>

                <p className="mt-4 max-w-2xl text-zinc-400">
                    OpenGraph turns repository relationships into an interactive
                    visual map.
                </p>

                <div className="relative mt-12 h-[400px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">

                    {/* Edges */}

                    <svg
                        className="absolute inset-0 h-full w-full"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                    >
                        <line
                            x1="25"
                            y1="50"
                            x2="50"
                            y2="25"
                            stroke="rgba(255,255,255,0.2)"
                            strokeWidth="0.15"
                        />

                        <line
                            x1="50"
                            y1="25"
                            x2="50"
                            y2="50"
                            stroke="rgba(255,255,255,0.2)"
                            strokeWidth="0.15"
                        />

                        <line
                            x1="50"
                            y1="50"
                            x2="75"
                            y2="50"
                            stroke="rgba(255,255,255,0.2)"
                            strokeWidth="0.15"
                        />
                    </svg>


                    {/* Nodes */}

                    <div className="absolute left-1/2 top-1/4 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm text-white transition hover:bg-white/15">
                        React
                    </div>

                    <div className="absolute left-1/4 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm text-white transition hover:bg-white/15">
                        Redux
                    </div>

                    <div className="absolute right-1/4 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm text-white transition hover:bg-white/15">
                        Vite
                    </div>

                    <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-sm text-white shadow-[0_0_30px_rgba(255,255,255,0.08)] transition hover:bg-white/15">
                        Next.js
                    </div>

                </div>
            </div>
        </section>
    );
};

export default GraphPreview;