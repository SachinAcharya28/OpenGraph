import { useState, useEffect, useCallback } from "react";
import { searchRepositories } from "../../services/githubApi";
import SearchBar from "../../components/explore/SearchBar";
import RepositoryCard from "../../components/explore/RepositoryCard";
import { createGraphData } from "../../utils/graphData";
import Graph from "../../components/Graph/Graph";
import { useSearchParams } from "react-router-dom";

const Explore = () => {
    const [searchParams] = useSearchParams();
    const [query, setQuery] = useState(
        () => searchParams.get("search") || ""
    );
    const [repositories, setRepositories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [hasSearched, setHasSearched] = useState(false);
    const [graphData, setGraphData] = useState({ nodes: [], edges: [] })

    const handleSearch = useCallback(async (searchQuery = query) => {
        if (!searchQuery.trim()) {
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const data = await searchRepositories(searchQuery);
            const newgraphData = createGraphData(data);

            setGraphData(newgraphData);
            setRepositories(data);
            setHasSearched(true);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [query]);

    useEffect(() => {
        const searchQuery = searchParams.get("search");

        if (searchQuery) {
            handleSearch(searchQuery);
        }
    }, [searchParams, handleSearch]);

    return (

        <div className="w-full overflow-x-hidden">

            <SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch} />
            {
                loading && (
                    <div className="flex justify-center py-12">
                        <p className="text-sm text-zinc-500">
                            Searching repositories...
                        </p>
                    </div>
                )
            }
            {
                error && (
                    <div className="mx-6 mt-8 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-4 text-center">
                        <p className="text-sm text-red-400">
                            Something went wrong while searching repositories.
                        </p>

                        <p className="mt-1 text-xs text-zinc-500">
                            Please try again in a moment.
                        </p>
                    </div>
                )
            }

            {
                hasSearched && !loading && !error && repositories.length === 0 && (
                    <div className="mt-16 text-center">
                        <p className="font-medium text-white">
                            No repositories found
                        </p>

                        <p className="mt-2 text-sm text-zinc-500">
                            Try searching for another technology or project.
                        </p>
                    </div>
                )
            }

            {hasSearched && !loading && !error && repositories.length > 0 && (
                <div className="px-6 pt-8 sm:px-6">
                    <p className="text-sm text-zinc-500">
                        Results for{" "}
                        <span className="text-zinc-300">
                            "{query}"
                        </span>
                    </p>

                    <p className="mt-1 text-xs text-zinc-600">
                        {repositories.length} repositories found
                    </p>
                </div>
            )}

            <div className="px-6 md:px-10 lg:px-16">
                <div className="grid gap-6 px-4 py-6 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
                    {repositories.map((repository) => (
                        <RepositoryCard
                            key={repository.id}
                            repository={repository}
                            graphData={graphData}
                        />
                    ))}
                </div>
            </div>

            {repositories.length > 0 && (
                <div className="mt-12 w-full px-6 mb-4">

                    <div className="mb-5">
                        <h2 className="text-lg font-medium text-white">
                            Repository Network
                        </h2>

                        <p className="mt-1 text-sm text-zinc-500">
                            {graphData.nodes.length} repositories · {graphData.edges.length} connections
                        </p>

                        <p className="mt-1 text-sm text-zinc-500">
                            Explore relationships between discovered repositories.
                        </p>

                        <p className="mt-2 text-xs text-zinc-600">
                            Click a repository to explore its connections.
                        </p>
                    </div>

                    <Graph graphData={graphData} />

                </div>
            )}

        </div>


    )
}
export default Explore;