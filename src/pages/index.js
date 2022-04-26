import CardSection from '../components/CardSection';
import Layout from '../components/Layout';
import dateISOformated from '../utils/dateISOformated';
export default function Home() {
  return (
    <>
      <Layout>
        <CardSection cards={cards}></CardSection>
      </Layout>
    </>
  )
}


const cards = [
  {
    link: '/breviario',
    title: 'Liturgia das Horas',
    desc: 'Descricao',
    image: '/assets/cruz-cristo.jpg'
  },
  {
    link: '/liturgia-diaria/' + dateISOformated(),
    title: 'Liturgia Diaria',
    desc: 'Descricao',
    image: '/assets/cruz-cristo.jpg'
  }
]

