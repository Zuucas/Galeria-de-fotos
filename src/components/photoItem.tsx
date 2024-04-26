import {GridItem } from "@chakra-ui/react";
import { Photo } from "../types/Photo"


type Props = {
    photo: Photo
    clickModal: () => void;
}

export const PhotoItem = ({photo, clickModal}: Props) =>{


    return (
        <GridItem onClick={clickModal} cursor='pointer' _hover={{ opacity: 0.8 }}>
            <img src={`/assets/${photo.url}`} style={{width:'300px'}}/> 
        </GridItem>
    )
}