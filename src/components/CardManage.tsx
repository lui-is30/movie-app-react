import { useEffect, useState } from "react"
import { MovieType } from "../types/movieTypes"
import { TvTypes } from "../types/tvTypes"
import { PersonType } from "../types/personTypes"
import { getMoviesTrending } from "../api/movies"
import { getTrendingTv } from "../api/tv"
import { getTrendingPeople } from "../api/person"
import { Card } from "./Card"
import "../style/cardManageStyle.css"

export const CardManage=()=>{


    const [movie,setMovie]=useState<MovieType[]>([]);
    const [tv,setTv]=useState<TvTypes[]>([]);
    const [person,setPerson]=useState<PersonType[]>([]);

    useEffect(()=>{
        const fetchMovie=async()=>{
            const movies= await getMoviesTrending();
            setMovie(movies);
        }

        const fetchTv=async()=>{
            const tv= await getTrendingTv();
            setTv(tv);
        }

        const fetchPerson=async()=>{
            const person= await getTrendingPeople();
            setPerson(person);
        }

        fetchMovie();
        fetchTv();
        fetchPerson();
    },[])

    let newMovie=movie.slice(0,3);
    let newTv=tv.slice(0,3);
    let newPerson=person.slice(0,3);

    return(
        <>
        <h2>Trending Movie</h2>
        <div className="movies">
        {
            newMovie.map((movie)=>{
                return <Card key={movie.id} props={movie}/>
            })
        }
        </div>

        <h2>Trending Series Tv</h2>
       <div className="series">
        {
            newTv.map((tv)=>{
                return <Card key={tv.id} props={tv}/>
            })
        }

        </div>
 
        <h2>Trending Actors</h2>
        <div className="actors">
        {
            newPerson.map((person)=>{
                return <Card key={person.id} props={person}/>
            })
        }
        </div>
        </>
    )
}