/**
 * modificare il type perche possa contenere un movie di Tmdb Api corretto
 * implementare la fetch
 */



import { OPTS } from "../modules/module";




export const getMoviesTrending=async()=>{
    const response = await fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US", OPTS);

    const data = await response.json();

    console.log(data.results);
    return data.results;
}