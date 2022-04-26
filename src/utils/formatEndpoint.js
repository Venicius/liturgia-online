export default function formatEndpoint(slug, endpoint) {
    return `${process.env.NEXT_PUBLIC_API_URL}` + '/api/' + endpoint + '?filters[data][$eq]=' + slug.toString()
}