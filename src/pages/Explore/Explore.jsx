import { useState } from "react";
import { searchRepositories } from "../../services/githubApi";
import SearchBar from "../../components/explore/SearchBar";
import RepositoryCard from "../../components/explore/RepositoryCard";

const Explore=()=>{
    const [query,setQuery]=useState("");
    const [repositories,setRepositories]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);
    const [hasSearched,setHasSearched]=useState(false);

    const handleSearch=async()=>{

        if(!query.trim()){
            return;
        }
        
        setLoading(true);
        setError(null);
        setHasSearched(true);

        try{
            const data=await searchRepositories(query);
           
            setRepositories(data);
        }
        catch(error){
            setError(error);

        }
        finally{
            setLoading(false);
        }


    }


    return (
        <>
            
             
           <SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch}/>
                {
                    loading &&(<p className="mt-8 text-center text-zinc-400 text-sm">Loading.....</p>

                )}

                {
                    error && (<p className="mt-8 text-center text-red-700 text-sm">Something went wrong while searching repository</p>

                )}

                {
                    hasSearched && !loading && !error && repositories.length===0 &&(
                        <div className="mt-16 text-center">
                            <p className="text-white text-center font-medium">No repositories found</p>

                              <p className="mt-2 text-sm text-zinc-500">Try searching for another technology or project.</p>
                        </div>
                )}

           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-6">
                
                    {repositories.map((repository) => (
                                <RepositoryCard key={repository.id} repository={repository}/>
                    ))}
            </div>
          

        </>
    )
}
export default Explore;