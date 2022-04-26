import CardSection from '../../components/CardSection';
import Layout from '../../components/Layout';
export default function Index() {
    return (
        <>
            <Layout>
                <CardSection cards={cards}></CardSection>
            </Layout>
        </>
    )
}

function dateISOformated() {
    var date = new Date();
    return date.toISOString().substring(0, 10);
}

const cards = [
    {
        link: "/breviario/laudes/" + dateISOformated(),
        title: 'Laudes',
        desc: 'Descricao',
        hour: '06h00',
        image: '/assets/cruz-cristo.jpg'
    },
    {
        link: "/breviario/completas/" + dateISOformated(),
        title: 'Completas',
        desc: 'Descricao',
        hour: '21h00',
        image: '/assets/cruz-cristo.jpg'
    },
    {
        link: "/breviario/vesperas/" + dateISOformated(),
        title: 'Vesperas',
        desc: 'Descricao',
        hour: '18h00',
        image: '/assets/cruz-cristo.jpg'
    },

]