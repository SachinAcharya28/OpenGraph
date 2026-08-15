import { areRelated } from "./repositoryRelations";

export const createGraphData = (repositories, centerRepositoryId = null) => {
    const nodes = repositories.map((repo) => ({
        id: String(repo.id),
        label: repo.name,
        isCenter: String(repo.id) === String(centerRepositoryId),
    }));

    const edges = [];

    for (let i = 0; i < repositories.length; i++) {
        for (let j = i + 1; j < repositories.length; j++) {
            if (areRelated(repositories[i], repositories[j])) {
                edges.push({
                    source: String(repositories[i].id),
                    target: String(repositories[j].id),
                });
            }
        }
    }

    return {
        nodes,
        edges,
    };
};