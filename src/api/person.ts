import { OPTS } from "../modules/module"
import { ResponseTrendingPeople } from "../types/responseTyper";

export const getTrendingPeople=async()=>{
    const response=await fetch("https://api.themoviedb.org/3/trending/person/day?language=en-US",OPTS);
    const data:ResponseTrendingPeople=await response.json();
    return data.results;
}