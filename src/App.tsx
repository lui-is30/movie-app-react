

import { useEffect, useState } from 'react';
import { getMovies, getMoviesTrending } from './api/movies';
import './App.css'
import { MovieCard } from './components/MovieCard'
import { MovieType } from './types/movieTypes';
function App() {

  /*let movies:MovieType[]=[];

  const movieMock=async()=>{
    movies=await getMoviesTrending();
  }
  //const movieMock=getMovies();
  movieMock();*/

  const [movies,setMovies]=useState<MovieType[]>([]);

  useEffect(()=>{
    const fetchMovie=async()=>{
      const movies=await getMoviesTrending();
      setMovies(movies);
    }
    fetchMovie();
  },[]);
  
  return (
    <div>
      <h1>Questo è il componente React che rappresenta l'intera applicazione</h1>
      <h2>ciao</h2>
      {movies.map((movie)=>{
          return <MovieCard key={movie.id} movie={movie}/>}
      )}
    </div>
  )
}

export default App
