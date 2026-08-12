export const searchRepositories=async(query)=>{
    const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}`;
    const response=await fetch(url);
    if(!response.ok){
        throw new Error("Failed to fetch repositories");
    }
    const data =await response.json();
    return data.items;
}