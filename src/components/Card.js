import {
    Box,
    Center,
    Heading, Stack, Text
} from '@chakra-ui/react';
export default function Card({ title, desc, image }) {

    return (
        <Center py={6}>
            <Box
                maxW={'445px'}
                w={'full'}
                bg={'white'}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}>
                {/* <Box
                    h={'210px'}
                    bg={'gray.100'}
                    mt={-6}
                    mx={-6}
                    mb={6}
                    pos={'relative'}>
                    <Image src={image} alt='Dan Abramov' layout='fill' />
                </Box> */}
                <Stack>
                    <Heading
                        color={'secondary.300'}
                        fontSize={'2xl'}
                        fontFamily={'body'} textAlign='center'>
                        {title}
                    </Heading>
                    <Text color={'gray.500'}>
                        {desc}
                    </Text>
                </Stack>
            </Box>
        </Center>
    );
}