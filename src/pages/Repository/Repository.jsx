import { Link, useParams } from "react-router-dom";
import { getRepositories } from "../../services/githubApi";
import { useEffect, useState } from "react";


const Repository = () => {
    
  
    const { owner, name } = useParams();

    const [repository, setRepository] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchRepository = async () => {
            try {
                setLoading(true);
                const data = await getRepositories(owner, name);
                setRepository(data);
            }
            catch (error) {
                setError(error);
            }
            finally {
                setLoading(false);
            }
        }
        fetchRepository();

    }, [owner, name])

    if (loading) {
        return (
            <div className="min-h-screen px-6 py-12 text-white">
                <p className="text-zinc-500">Loading.....</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className="flex min-h-[60vh] items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold text-white">
                        Repository not found
                    </h1>

                    <p className="mt-3 text-zinc-500">
                        We couldn't find the repository you're looking for.
                    </p>

                    <Link
                        to="/explore"
                        className="mt-6 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-medium text-black"
                    >
                        Back to Explore
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="text-white min-h-screen px-6 py-12 md:px-10 lg:px-16">
            <Link to='/explore' className="inline-flex text-sm items-center text-zinc-500 transition hover:text-white">Back to Explore</Link>
            <div className="mx-auto max-w-5xl">
                <div className="mt-10">
                    <p className="text-sm text-zinc-500">{repository.owner.login}/{repository.name}</p>

                    <h1 className="mt-3 text-4xl tracking-tight font-semibold md:text-5xl">{repository.name}</h1>

                    <p className="text-zinc-400 mt-5 text-base leading-7 max-w-3xl">{repository.description || "No description available"}</p>
                </div>

                <div className="mt-8 flex flex-wrap gap-6 text-sm text-zinc-400">

                    <span>
                        ⭐ {repository.stargazers_count}
                    </span>

                    <span>
                        🍴 {repository.forks_count}
                    </span>

                    <span>
                        {repository.language || "Unknown"}
                    </span>

                </div>

                <a
                    href={repository.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
                >
                    View on GitHub →
                </a>
            </div>

            <div className="mt-16 border border-white/10 bg-white/2 rounded-2xl p-6">
                <h1 className="text-lg font-medium text-white">Repository Connections</h1>
                <p className="mt-2 text-sm text-zinc-500">Explore the repositories connected o the project</p>
                <div className="mt-6 border flex justify-center bg-white/20 border-white/5 min-h-100 items-center rounded-xl">
                    <p className="text-sm text-zinc-600">Interactive graph loading..... </p>
                </div>

            </div>

            <div className="mt-10">
                <h2 className="text-lg font-medium text-white">Repository overview</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-5">

                    <div className="border border-white/10 bg-white/3 p-5 rounded-xl">
                        <p className="text-sm text-zinc-500">Language</p>
                        <p className="mt-2 text-sm font-medium text-white">
                            {repository.language || "Unknown"}
                        </p>

                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/3 p-5">
                        <p className="text-sm text-zinc-500">
                            License
                        </p>

                        <p className="mt-2 text-sm font-medium text-white">
                            {repository.license?.name || "Not specified"}
                        </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/3 p-5">
                        <p className="text-sm text-zinc-500">
                            Visibility
                        </p>

                        <p className="mt-2 text-sm font-medium text-white capitalize">
                            {repository.visibility}
                        </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/3 p-5">
                        <p className="text-sm text-zinc-500">
                            Default Branch
                        </p>

                        <p className="mt-2 text-sm font-medium text-white">
                            {repository.default_branch}
                        </p>
                    </div>



                </div>
            </div>
        </div>


    )
}
export default Repository;