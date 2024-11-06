/**
 * modificare il type perche possa contenere un movie di Tmdb Api corretto
 * implementare la fetch
 */

import { MovieType } from "../types/movieTypes"
import { ResponseTrendingType } from "../types/responseTyper";

export const getMovies=()=>{
    const movieMock:MovieType[]=[
        {
          backdrop_path: "/bv9tOAIACAdQioCs80dKytYV3G7.jpg",
      id: 989662,
      title: "A Different Man",
      original_title: "A Different Man",
      overview: "Aspiring actor Edward undergoes a radical medical procedure to drastically transform his appearance. But his new dream face quickly turns into a nightmare, as he loses out on the role he was born to play and becomes obsessed with reclaiming what was lost.",
      poster_path: "/lZZKTEvo92u1J5pm7QoEA5yN3du.jpg",
      media_type: "movie",
      adult: false,
      original_language: "en",
      genre_ids: [
        35,
        18
      ],
      popularity: 31.58,
      release_date: "2024-08-24",
      video: false,
      vote_average: 7.5,
      vote_count: 21
        },
        {
            backdrop_path: "/5OOYy7YpnwWxZAx8enpwRLIIRR8.jpg",
            id: 785542,
            title: "The Outrun",
            original_title: "The Outrun",
            overview: "Rona, fresh out of rehab, returns to the Orkney Islands; a place both wild and beautiful right off the Scottish coast. After more than a decade of living life on the edge in London, where she both found and lost love, Rona – now 29 – attempts to come to terms with her troubled past. As she reconnects with the dramatic landscape where she grew up, memories of her traumatic childhood merge with more recent challenging events that have set her on the path to recovery.",
            poster_path: "/xjdaKVa6cKSFHgUBgSLi6SoUgGa.jpg",
            media_type: "movie",
            adult: false,
            original_language: "en",
            genre_ids: [
              18
            ],
            popularity: 24.412,
            release_date: "2024-09-27",
            video: false,
            vote_average: 6.9,
            vote_count: 34
          },
          {
            backdrop_path: "/uGmYqxh8flqkudioyFtD7IJSHxK.jpg",
            id: 889737,
            title: "Joker: Folie à Deux",
            original_title: "Joker: Folie à Deux",
            overview: "While struggling with his dual identity, Arthur Fleck not only stumbles upon true love, but also finds the music that's always been inside him.",
            poster_path: "/if8QiqCI7WAGImKcJCfzp6VTyKA.jpg",
            media_type: "movie",
            adult: false,
            original_language: "en",
            genre_ids: [
              18,
              80,
              53
            ],
            popularity: 2075.981,
            release_date: "2024-10-01",
            video: false,
            vote_average: 5.7,
            vote_count: 1373
          },
      ]
      return movieMock;
}

const BaseUrl="https://api.themoviedb.org/3/";

const OPTS = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        //Authorization: `Bearer ${process.env.API_KEY}`
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmFiOGM4ODczODNmYjA0ZTY0ZTY5MjgyYjNlMTFhZSIsInN1YiI6IjY1ZTg2YmI0OTYzODY0MDBjOWM4MDQzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gSOmMLo8VrH9c77B5Hr-Okjba5JBvD-DqiMxy_t_02A`
    },
}
export const getMoviesTrending=async()=>{
    const response = await fetch(BaseUrl + "trending/all/day?language=en-US", OPTS);

    const data:ResponseTrendingType = await response.json();

    console.log(data.results);
    return data.results;
}