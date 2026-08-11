import { Link } from "react-router-dom";

const NavBar=()=>{
    return(
        <nav className='h-16 border-b flex items-center bg-[#0a0a0a] border-white/10 px-8 justify-between'>
            <div>
                <Link to='/' className="font-semibold text-white text-xl">◉OpenGraph</Link>
            </div>

            <div className="flex gap-8 items-center ">
                <Link className="text-sm text-zinc-400 transition-colors hover:text-white" to='/explore'>Explore</Link>
                <Link className="text-sm text-zinc-400 transition-colors hover:text-white" to='/trending'>Trending</Link>
                <Link className="text-sm text-zinc-400 transition-colors hover:text-white" to='/about'>About</Link>
            </div>

            <div>
                <a href='https://github.com/' className="rounded-lg border border-white/10 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-white/20 hover:text-white">GitHub(i)</a>
            </div>
        
        </nav>
    )
}
export default NavBar;