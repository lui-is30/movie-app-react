import { OPTS } from "../modules/module"


export const getTrendingTv=async()=>{
    const response=await fetch("https://api.themoviedb.org/3/trending/tv/day?language=en-US",OPTS);
    const data=await response.json();
    return data.results;
}

export const getTvDetail=async(tv_id:number)=>{
    const response= await fetch(`https://api.themoviedb.org/3/tv/${tv_id}?language=en-US`,OPTS);
    const data = await response.json();
    return data;
}