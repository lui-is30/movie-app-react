import { OPTS } from "../modules/module";

export const getMoviesDetails=async(movie_id:number)=>{
    return await fetchDetail("movie",movie_id);
}

export const getTvDetail=async(tv_id:number)=>{
    return await fetchDetail("tv",tv_id);
}

export const getPersonDetail=async(person_id:number)=>{
    return await fetchDetail("person",person_id);
}


const fetchDetail=async(text:string,prop_id:number)=>{
    const response=await fetch(`https://api.themoviedb.org/3/${text}/${prop_id}?language=en-US`,OPTS);
    const data=await response.json();
    return data;
}