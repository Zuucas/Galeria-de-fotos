import {Flex, Text, Grid, Center} from "@chakra-ui/react"
import { photoList } from "../data/photoList"
import { PhotoItem } from "../components/photoItem"
import { useState } from "react"
import { Modal } from "../components/Modal"



export const Page = () => {

const [showModal, setShowModal] = useState(false);
const [imageOfModal, setImageOfModal] = useState('');

const openModal = (id: number) => {
    const photo = photoList.find(item => item.id === id)
    if(photo){
        setImageOfModal(photo.url);
        setShowModal(true);
    }
}


const closeModal = () => { setShowModal(false); }

    return(        
            <Flex as='main' bg='#000000' direction='column' minH='100vh' color='white'>

                <Center as='header' my='60px'>                
                    <Text fontSize='30px'>Fotos Fallout</Text>                
                </Center>

                <Grid  templateColumns={{base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)'}} gap={5} as='section' mx='auto'>
                {photoList.map(item =>(
                    <PhotoItem
                        key={item.id}
                        photo={item}
                        clickModal={() => {openModal(item.id)}}/>
                ))}
                </Grid>
                {showModal && <Modal image={imageOfModal} closeModal={closeModal}/> }
                <Center  mt='50px' fontSize='10px'>Developed by Zuucas</Center>
            </Flex>
    )
}