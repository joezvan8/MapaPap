export default function urlBuilder(header: string, query: string, format: string):string {
    const baseUrl = new URL(header);
    const addressDetails = "1";
    const urlformat = format;
    const input = query;
    baseUrl.searchParams.append('q', input);
    baseUrl.searchParams.append('format', urlformat);
    baseUrl.searchParams.append('addressdetails', addressDetails);

    return(baseUrl.toString());
}
