import { Box, Button, Flex, Image } from "@chakra-ui/react";

type Props = {
    image: string;
    closeModal: () => void;
}

export const Modal = ({image, closeModal}: Props) => {
    return(
        <>
        {/* Função onclick adicionada tanto no flex que contém a imagem quanto no botão para fechar o modal.*/}
            <Flex onClick={closeModal} pos='fixed' left='0' top='0' right='0' bottom='0' justify='center' align='center' bg='#80808099  '  >
                <Image src={`/assets/${image}`} alt={image} maxW="100%" maxH="100%" objectFit="contain" />
            </Flex>  

            <Box  pos='fixed' top='5' right='5' w='10'   >
                <Button cursor='pointer' onClick={closeModal} colorScheme='whiteAlpha' variant='outline'>
                    X
                </Button>
            </Box>
        </>
    )
}