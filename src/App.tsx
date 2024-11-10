

import { useEffect, useState } from 'react';
import { getMoviesTrending } from './api/movies';
import './App.css'
import { MovieCard } from './components/MovieCard'
import { MovieType } from './types/movieTypes';
import { TvCard } from './components/TvCard';
import { TvTypes } from './types/tvTypes';
import { getTrendingTv } from './api/tv';
import { PersonType } from './types/personTypes';
import { getTrendingPeople } from './api/person';
import { Person } from './components/Person';
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

  const [tv,setTv]=useState<TvTypes[]>([]);

  useEffect(()=>{
    const fetchTv=async()=>{
      const tvSeries=await getTrendingTv();
      setTv(tvSeries);
    }
    fetchTv();
  },[])

  const [person,setPerosn]=useState<PersonType[]>([]);

  useEffect(()=>{
    const fetchPerson=async()=>{
      const person=await getTrendingPeople();
      setPerosn(person);
    }
    fetchPerson();
  })
  
  const firstFourMovie=movies.slice(0,4);
  const firstFourTv=tv.slice(0,4);
  const firstFourPerson=person.slice(0,4);

  return (
    <div>
      <h1>Trending Movies</h1>
      <div className="box">
      {firstFourMovie.map((movie)=>{
          return <MovieCard key={movie.id} movie={movie}/>
        }
      )}
      </div>

      <h1>Trending Series Tv</h1>
      <div className='box2'>
      {firstFourTv.map((tv)=>{
        return <TvCard key={tv.id} tv={tv}/>
      })
      }
      </div>

      <div className='box3'>
        {firstFourPerson.map((person)=>{
          return <Person key={person.id} person={person}/>
        })}
      </div>

    </div>
  )
}

export default App
