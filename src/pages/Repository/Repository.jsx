import { Link, useParams } from "react-router-dom";
import { getRepositories, searchRepositories } from "../../services/githubApi";
import { useEffect, useState } from "react";
import Graph from "../../components/Graph/Graph";
import { createGraphData } from "../../utils/graphData";



const Repository = () => {


    const { owner, name } = useParams();



    const [repository, setRepository] = useState(null);
    const [graphData, setGraphData] = useState({
        nodes: [],
        edges: []
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchRepository = async () => {
            try {
                setLoading(true);

                const data = await getRepositories(owner, name);
                setRepository(data);

                let relatedRepositories = await searchRepositories(name);

                const repositoryExists = relatedRepositories.some(
                    (repo) => repo.id === data.id
                );

                if (!repositoryExists) {
                    relatedRepositories = [data, ...relatedRepositories];
                }

                const graph = createGraphData(
                    relatedRepositories,
                    data.id
                );

                setGraphData(graph);
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
        <div className="min-h-screen px-4 py-10 text-white sm:px-6 md:px-10 lg:px-16">
            <Link to='/explore' className="inline-flex text-sm items-center text-zinc-500 transition hover:text-white">Back to Explore</Link>
            <div className="mx-auto max-w-5xl">
                <div className="mt-10">
                    <p className="text-sm text-zinc-500">
                        {repository.owner.login}
                    </p>

                    <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                        {repository.name}
                    </h1>

                    <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-400">
                        {repository.description || "No description available"}
                    </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">

                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-400">
                        ⭐ {repository.stargazers_count} stars
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-400">
                        🍴 {repository.forks_count} forks
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-400">
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

                <p className="mt-2 text-sm text-zinc-500">Explore the repositories connected to the project</p>

                <div className="mt-6 h-[500px] overflow-hidden rounded-xl border border-white/5 bg-white/[0.02]">
                    {graphData.nodes.length > 0 ? (
                        <Graph graphData={graphData} />
                    ) : (
                        <div className="flex h-full items-center justify-center">
                            <p className="text-sm text-zinc-600">
                                No graph data available.
                            </p>
                        </div>
                    )}
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