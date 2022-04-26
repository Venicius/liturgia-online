import { Link, SimpleGrid } from "@chakra-ui/react"
import NextLink from 'next/link'
import Card from '../components/Card'

export default function CardSection({ cards }) {
    return (
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
            {cards.map((card) => (
                <NextLink href={card.link} passHref key={card.link}>
                    <Link _hover={'none'}>
                        <Card title={card.title} desc={card.desc} hour={card.hour} image={card.image}></Card>
                    </Link>
                </NextLink>
            ))
            }
        </SimpleGrid>
    )
}



