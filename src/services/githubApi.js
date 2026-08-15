export const searchRepositories = async (query) => {
    const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}`;
    const response = await fetch(url);
    if (!response.ok) {
        if (response.status === 403) {
            throw new Error("GitHub API rate limit exceeded");
        }

        throw new Error("Failed to fetch repositories");
    }
    const data = await response.json();
    return data.items;
}

export const getRepositories = async (owner, name) => {
    const response = await fetch(
        `https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(name)}`
    );

    if (!response.ok) {
        if (response.status === 403) {
            throw new Error("GitHub API rate limit exceeded");
        }

        throw new Error("Failed to fetch repository");
    }
    return response.json();

};