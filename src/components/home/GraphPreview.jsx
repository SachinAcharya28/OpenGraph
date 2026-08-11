const GraphPreview=()=>{
 return(
    <>
        <section className="px-6 py-24">

            <div className="mx-auto max-w-6xl">

                    <p className="text-sm uppercase tracking-[0.2rem] text-zinc-500">Explore Connections</p>
                    <h2 className="text-3xl mt-3 font-semibold text-white md:text-4xl ">See how repositories connect.</h2>
                    <p className="mt-4 max-w-2xl text-zinc-400"> OpenGraph transforms repository relationships into an interactive visual map.</p>
            </div>

            <div className="relative mt-12 h-100 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] ">

              <div className="absolute left-1/2 top-1/4 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm text-white">React
              </div>

              <div className="absolute left-1/4 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm text-white">Redux
              </div>

              <div className="absolute right-1/4 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm text-white">Vite
              </div>

              <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm text-white">Next js
              </div>

            </div>
           

        </section>
    
    </>
 )
}
export default GraphPreview;