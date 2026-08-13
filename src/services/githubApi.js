export const searchRepositories=async(query)=>{
    const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}`;
    const response=await fetch(url);
    if(!response.ok){
        throw new Error("Failed to fetch repositories");
    }
    const data =await response.json();
    return data.items;
}

export const getRepositories=async(owner,name)=>{
    const response=await fetch(`https://api.github.com/repos/${owner}/${name}`);

    if(!response.ok){
        throw new Error("failed to fetch repository");
    }
    return response.json();

};