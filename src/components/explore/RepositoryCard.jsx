import { Link } from 'react-router-dom'


const RepositoryCard = ({ repository }) => {
    return (

        <div
            
            className="bg-white/3  rounded-2xl border border-white/10 p-6 hover:translate-y-1 hover:border-white/20 hover:bg-white/5 ">
            <Link
                className="text-lg font-semibold text-white"
                to={`/repository/${repository.owner.login}/${repository.name}`} >{repository.name}
            </Link>

            <p className="mt-1 text-sm text-zinc-500">{repository.full_name}</p>

            <p className="mt-4 line-clamp-2 text-sm leading-6 text-zinc-400">{repository.description || "No description available."}</p>

            <div className="mt-6 flex gap-6 text-xs text-zinc-500">
                <span>⭐ {repository.stargazers_count}</span>
                <span>forks {repository.forks_count}</span>
                <span>Language {repository.language || "Unknown"}</span>
            </div>
            
            <a
                href={repository.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex text-sm text-zinc-400 transition hover:text-white"
            >
                View on GitHub →
            </a>
        </div>

    )
}
export default RepositoryCard;