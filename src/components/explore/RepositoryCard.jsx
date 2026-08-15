import { useNavigate } from "react-router-dom";

const RepositoryCard = ({ repository }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/repository/${repository.owner.login}/${repository.name}`);
    };

    return (
        <div
            onClick={handleClick}
            className="cursor-pointer rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05] hover:-translate-y-1"
        >
            <p className="text-sm text-zinc-500">
                {repository.owner.login}
            </p>

            <h3 className="mt-2 text-lg font-medium text-white">
                {repository.name}
            </h3>

            <p className="mt-3 line-clamp-2 text-sm leading-6 text-zinc-400">
                {repository.description || "No description available"}
            </p>

            <div className="mt-5 flex flex-wrap gap-4 text-xs text-zinc-500">
                <span>⭐ {repository.stargazers_count}</span>
                <span>🍴 {repository.forks_count}</span>
                <span>{repository.language || "Unknown"}</span>
            </div>
        </div>
    );
};

export default RepositoryCard;