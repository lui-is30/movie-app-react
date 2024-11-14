import { OPTS } from "../modules/module"


export const getTrendingPeople=async()=>{
    const response=await fetch("https://api.themoviedb.org/3/trending/person/day?language=en-US",OPTS);
    const data=await response.json();
    return data.results;
}