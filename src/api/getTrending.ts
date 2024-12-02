import { OPTS } from "../modules/module"

export const getTrendingMovie=async()=>{
    return await fetchAll("movie");
}

export const getTrendingPeople=async()=>{
    return await fetchAll("person");
}

export const getTrendingTv=async()=>{
    return await fetchAll("tv");
}

const fetchAll=async(text:string)=>{
    const response=await fetch(`https://api.themoviedb.org/3/trending/${text}/day?language=en-US`,OPTS);
    const data=await response.json();
    return data.results;
}