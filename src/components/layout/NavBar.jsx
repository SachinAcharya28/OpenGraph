import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className='h-16 border-b flex items-center bg-[#0a0a0a] border-white/10 px-8 justify-between'>
            <div>
                <Link to='/' className="font-semibold text-white text-xl">◉OpenGraph</Link>
            </div>

            <div className="flex gap-8 items-center ">
                <Link className="text-sm text-zinc-400 transition-colors hover:text-white" to='/explore'>Explore</Link>
                <a href="/#about" className="text-sm text-zinc-400 transition-colors hover:text-white" to='/explore'>About</a>

            </div>

            <div>
                <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
                >
                    <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4 fill-current"
                        aria-hidden="true"
                    >
                        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.13c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.73-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17A10.9 10.9 0 0 1 12 8.58c.97 0 1.94.13 2.85.38 2.18-1.48 3.14-1.17 3.14-1.17.62 1.58.23 2.75.12 3.04.73.8 1.17 1.82 1.17 3.07 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.04.78 2.1v3.11c0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                    </svg>

                    <span>GitHub</span>
                </a>
            </div>

        </nav>
    )
}
export default NavBar;