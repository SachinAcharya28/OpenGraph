const SearchBar = ({ query, setQuery, handleSearch }) => {
  return (
    <div className=" px-6 py-12 md:px-10 lg:px-16">

     
      <div className="mb-10 text-center">
        <p className="mb-3 text-sm text-zinc-500">
          OPEN SOURCE EXPLORER
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Explore the open source world.
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-zinc-500">
          Search GitHub repositories and discover projects,
          technologies, and connections.
        </p>
      </div>

    
      <div className="mx-auto flex w-full max-w-3xl items-center rounded-xl border border-white/10 bg-white/[0.03] p-2">

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          placeholder="Search GitHub repositories..."
          className="flex-1 bg-transparent px-4 py-3 text-white outline-none placeholder:text-zinc-600"
        />

        <button
          onClick={()=>handleSearch()}
          className="rounded-lg bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
        >
          Search
        </button>
      </div>

     
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {["React", "Next.js", "TensorFlow", "Rust", "Python"].map((item) => (
          <button
            key={item}
            onClick={() => {setQuery(item)
              handleSearch(item)
            }}
            className="rounded-full border border-white/10 px-4 py-2 text-xs text-zinc-400 transition hover:border-white/20 hover:text-white"
          >
            {item}
          </button>
        ))}
      </div>

    </div>
  );
};

export default SearchBar;