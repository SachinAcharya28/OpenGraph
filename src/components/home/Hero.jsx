import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Hero = () => {

    const navigate = useNavigate();
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        if (!query.trim()) return;

        navigate(`/explore?search=${encodeURIComponent(query.trim())}`);
    };


    return (
        <div className="flex flex-col  min-h-[calc(100vh-4rem)] justify-center text-center px-6 items-center ">

            <p className="mb-6 text-xs uppercase tracking-[0.2rem] font-medium text-zinc-500">OPEN SOURCE EXPLORER</p>

            <h1 className="max-w-4xl font-semibold tracking-tight text-5xl text-white md:text-7xl">Explore Open Source Differently</h1>

            <p className="text-zinc-500 text-lg mt-6 max-w-2xl leading-8">Discover repositories, technologies, and connections through an interactive visual ecosystem.</p>

            <div className="mt-10 flex w-full max-w-2xl items-center rounded-xl border border-white/10 bg-white/[0.03] p-2 transition-transform hover:scale-105">
                <span className="px-3 text-zinc-500">🔍</span>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSearch();
                        }
                    }}
                    placeholder="Search repositories..."
                    className="flex-1 bg-transparent px-2 py-3 text-sm text-white outline-none placeholder:text-zinc-600"
                />
                <button
                    onClick={handleSearch}
                    className="rounded-lg bg-white px-4 py-3 text-sm font-medium text-black transition-transform hover:scale-105"
                >
                    Search
                </button>
            </div>

            <div className="mt-6 flex items-center gap-6 text-xs text-zinc-600">
                <span>Repositories</span>
                <span>Connections</span>
                <span>Technologies</span>
            </div>


        </div>
    )
}
export default Hero;