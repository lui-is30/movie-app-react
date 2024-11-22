import { useEffect, useState } from "react"
import { MovieType } from "../types/movieTypes"
import { TvTypes } from "../types/tvTypes"
import { PersonType } from "../types/personTypes"
import { getMoviesTrending } from "../api/movies"
import { getTrendingTv } from "../api/tv"
import { getTrendingPeople } from "../api/person"
import { Card1 } from "./Card"
import "../style/cardManageStyle.css"
import { Box, SimpleGrid, Text } from "@chakra-ui/react"

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
        <Box>
        <Text textAlign="center" textStyle="5xl">Trending Movie</Text>
        <SimpleGrid columns={3} gap="10px" mt="5px" ml="30px">
        {
            newMovie.map((movie)=>{
                return <Card1 key={movie.id} props={movie}/>
            })
        }
    
        </SimpleGrid>
        </Box>

        <Box>
        <Text textAlign="center" textStyle="5xl">Trending Series Tv</Text>
        <SimpleGrid columns={3} gap="10px" mt="5px" ml="30px">
        {
            newTv.map((tv)=>{
                return <Card1 key={tv.id} props={tv}/>
            })
        }

        </SimpleGrid>
        </Box>

        <Box>
        <Text textAlign="center" textStyle="5xl">Trending Actors</Text>
        <SimpleGrid columns={3} gap="10px" mt="5px" ml="30px">
        {
            newPerson.map((person)=>{
                return <Card1 key={person.id} props={person}/>
            })
        }
        </SimpleGrid>
        </Box>
        </>
    )
}