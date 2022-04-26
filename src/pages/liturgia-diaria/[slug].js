import { Divider, Heading, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import useSWR from 'swr'
import Layout from '../../components/Layout'
const fetcher = (url) => fetch(url).then((res) => res.json())
const Laudes = () => {
    const router = useRouter()
    const slug = router.query.slug
    const { data, error } = useSWR(() => 'http://localhost:1337/api/diarias?filters[data][$eq]=' + slug.toString(), fetcher)

    if (error) return <div>Falha ao carregar...</div>
    if (!router.isFallback && data == undefined) return <div>Carregando...</div>

    const dataFormatada = new Date(slug)
    dataFormatada.setDate(dataFormatada.getDate() + 1)

    return (
        <>
            <Layout>
                <Heading textAlign={'center'}>Liturgia do dia {dataFormatada.toLocaleDateString()}</Heading>
                <Text fontSize={'2xl'} mt='10'>
                    {data.data.length != 0 ? <ReactMarkdown>{data.data[0].attributes.conteudo}</ReactMarkdown> : "Não disponível"}
                </Text>
                <Divider ></Divider>
                <br></br>
                <br></br>
            </Layout>
        </>
    )
}

export default Laudes
