const Features=()=>{
    return (
        <section id="about" className="px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <p className="text-sm uppercase tracking-[0.2rem] text-zinc-500">Why OpenGraph</p>
                <h1 className="mt-3 text-white font-semibold text-4xl md:text-3xl">Understand the ecosystem behind every Repository</h1>

                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    <div className=" border bg-white/[0.03] border-white/10 p-6 rounded-2xl transition hover:border-white/20 hover:bg-white/[0.05]">
                        <div className="text-2xl">◇</div> 

                        <h3 className="mt-6 text-xl text-white">Repository Graph</h3>

                        <p className="mt-3 text-sm leading-6 text-zinc-400">Visualize relationships between repositories and discover connected projects.</p>   
                    </div>

                    <div className="border border-white/10 bg-white/[0.03] rounded-2xl p-6 transition hover:border-white/20 hover:bg-white/[0.05]">
                        <div className="text-2xl">◉</div>
                        <h3 className="mt-6 text-xl text-white ">Technology Connections</h3>
                        <p className="text-sm text-zinc-400 mt-3 leading-6"> Explore repositories connected through shared technologies and ecosystems.</p>

                    </div>

                    <div className="border border-white/10 bg-white/[0.03] rounded-2xl p-6 transition hover:border-white/20 hover:bg-white/[0.05]">
                        <div className="text-2xl">◎</div>
                        <h3 className="mt-6 text-xl text-white "> Repository Overview</h3>
                        <p className="text-sm text-zinc-400 mt-3 leading-6"> Understand repositories through languages, licenses, visibility, and branches.</p>

                    </div>
                    
                </div>

            </div>
        </section>
    )
}
export default Features;