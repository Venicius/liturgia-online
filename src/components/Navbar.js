import { Box, Flex, Link, Text, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
export default function Navbar() {
    return (
        <Box>
            <Flex
                bg={'primary.100'}
                color={'black'}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                <NextLink href='/' passHref>
                    <Flex flex={{ base: 1 }} justify={{ base: 'center', }} >
                        <Link _hover={'none'}>
                            <Text
                                textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                                fontFamily={'heading'}
                                color={'black'}
                                fontSize={'xl'}
                                fontWeight='semibold'
                                _hover={{ color: 'secondary.200' }}
                            >
                                Liturgia Online
                            </Text>
                        </Link>
                    </Flex>
                </NextLink>
            </Flex >
        </Box >
    );
}