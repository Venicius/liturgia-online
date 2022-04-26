import { Container } from '@chakra-ui/react'
import Navbar from './Navbar'
export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <Container as="main" mt="20" maxW={'5xl'}>
                {children}
            </Container>

        </>
    )
}