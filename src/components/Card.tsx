import { MovieCardProps } from "../types/movieTypes";
import { PersonCardProps } from "../types/personTypes";
import { TvCardProps } from "../types/tvTypes";
import "../style/CardStyle.css";
import {Button, Card,Image,useDisclosure } from "@chakra-ui/react";
import { MovieDetail } from "./MovieDetail";


export const Card1=({props}:MovieCardProps|PersonCardProps|TvCardProps)=>{
    let titleProps!:string;
    let pathProps!:string;
    let description!:string;
    
    const {open,onOpen,onClose}=useDisclosure();

    switch(props.media_type){
        case "movie":
            if("title" in props){
                titleProps=props.title;
                pathProps=props.poster_path;
                description=props.overview;
            }
            break;
        case "tv":
            if("name" in props && "poster_path" in props){
                titleProps=props.name;
                pathProps=props.poster_path;
                description=props.overview;
            }
            break;
        case "person":
            if("name" in props && "profile_path" in props){
                titleProps=props.name;
                pathProps=props.profile_path;
            }
            break;
    }

    return(
        <>
        <Card.Root overflow="hidden" bg="black" maxW="sm">
            <Image fit="contain" marginTop="5px" rounded="md" h="400px" src={`https://image.tmdb.org/t/p/w500${pathProps}`}></Image>
            <Card.Body gap="2">
            <Card.Title textAlign="center" color="white">{titleProps}</Card.Title>
            <Card.Description color="white" truncate>{description}</Card.Description>
            </Card.Body>
            <Button variant={"outline"} onClick={onOpen}>Dettaglio</Button>
            <MovieDetail isOpen={open} onClose={onClose} prop={props} />
        </Card.Root>
        </>
    );
}