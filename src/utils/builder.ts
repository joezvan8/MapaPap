export default function urlBuilder(header: string, query: string, format: string):string {
    const baseUrl = new URL(header);
    const addressDetails = "1";

    baseUrl.searchParams.append('q', query);
    baseUrl.searchParams.append('format', format);
    baseUrl.searchParams.append('addressdetails', addressDetails);

    return(baseUrl.toString());
}
