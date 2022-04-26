export default function dateISOformated() {
    var date = new Date();
    return date.toISOString().substring(0, 10);
}