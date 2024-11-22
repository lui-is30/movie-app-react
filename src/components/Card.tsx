import { MovieCardProps } from "../types/movieTypes";
import { PersonCardProps } from "../types/personTypes";
import { TvCardProps } from "../types/tvTypes";
import "../style/CardStyle.css";
import {Box, Button, Card,Image } from "@chakra-ui/react";
import {DialogActionTrigger,DialogBody,DialogCloseTrigger,DialogContent,DialogFooter,DialogHeader,DialogRoot,DialogTitle,DialogTrigger,} from "@chakra-ui/react";




export const Card1=({props}:MovieCardProps|PersonCardProps|TvCardProps)=>{
    let titleProps!:string;
    let pathProps!:string;
    let description!:string;
    //<img src={`https://image.tmdb.org/t/p/w500${pathProps}`}/>

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
            <DialogRoot size="full" motionPreset="slide-in-bottom">
                <DialogTrigger asChild>
                    <Button variant="outline" size="sm">Open Dialog</Button>
                </DialogTrigger>
              
                <DialogContent bgSize="cover" zIndex="overlay" position="fixed" w="100%" h="100%" top="0" left="0" bg="gray">
                    <DialogHeader>
                        <DialogTitle>{titleProps}</DialogTitle>
                    </DialogHeader>
                    <DialogBody>
                        {description}
                    </DialogBody>
                    <DialogFooter>
                        <DialogActionTrigger asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogActionTrigger>
                        <Button>Save</Button>
                    </DialogFooter>
                    <DialogCloseTrigger />
                </DialogContent>

            </DialogRoot>
            
        </Card.Root>
        </>
    );
}