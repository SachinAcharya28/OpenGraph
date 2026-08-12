const Hero=()=>{
    return(
        <div className="flex flex-col  min-h-[calc(100vh-4rem)] justify-center text-center px-6 items-center ">

            <p className="mb-6 text-xs uppercase tracking-[0.2rem] font-medium text-zinc-500">OPEN SOURCE EXPLORER</p>

            <h1 className="max-w-4xl font-semibold tracking-tight text-5xl text-white md:text-7xl">Explore Open Source Differently</h1>

            <p className="text-zinc-500 text-lg mt-6 max-w-2xl leading-8">Discover repositories, technologies, contributors, and connections through an interactive visual ecosystem.</p>

           <div className="mt-10 flex w-full max-w-2xl items-center rounded-xl border border-white/10 bg-white/[0.03] p-2 transition-transform hover:scale-105">
            <span className="px-3 text-zinc-500">🔍</span>
            <input 
                type="text"
            
               
                placeholder="Search repositories..."
                className="flex-1 bg-transparent px-2 py-3 text-sm text-white outline-none placeholder:text-zinc-600 "
            
            />
            <button className="rounded-lg bg-white px-4 py-3 text-sm font-medium text-black transition-transform hover:scale-105">→</button>
            </div>

            <div className="mt-6 flex gap-6 items-center text-zinc-600 text-xs">
                <span>Repositories</span>
                <span>Connections</span>
                <span>Developers</span>
            </div>

            

        </div>
    )
}
export default Hero;