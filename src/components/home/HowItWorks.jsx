const HowItWorks=()=>{
    return(
        <>
            <section className="px-6 py-24">
                <div className="mx-auto max-w-6xl">
                    <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">How it works</p>

                    <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">From repository to ecosystem.</h2>

                    <div className="grid gap-6 md:grid-cols-3 mt-12">
                        <div className=" border bg-white/[0.03] border-white/10 p-6 rounded-2xl transition hover:border-white/20 hover:bg-white/[0.05]">

                            <div className="text-2xl">01</div>
                            <h3 className="mt-6 text-xl text-white">Search</h3>
                            <p className="mt-3 text-sm leading-6 text-zinc-400">Find a repository you're interested in.</p>

                        </div>

                        <div className=" border bg-white/[0.03] border-white/10 p-6 rounded-2xl transition hover:border-white/20 hover:bg-white/[0.05]">

                            <div className="text-2xl">02</div>
                            <h3 className="mt-6 text-xl text-white">Explore</h3>
                            <p className="mt-3 text-sm leading-6 text-zinc-400">See its information, technologies, and connections.</p>

                        </div>

                        <div className=" border bg-white/[0.03] border-white/10 p-6 rounded-2xl transition hover:border-white/20 hover:bg-white/[0.05]">

                            <div className="text-2xl">03</div>
                            <h3 className="mt-6 text-xl text-white">Discover</h3>
                            <p className="mt-3 text-sm leading-6 text-zinc-400">Discover related repositories and explore their connections.</p>

                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}
export default HowItWorks;