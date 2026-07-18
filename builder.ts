export default function baseUrl(header: string, query: string, format: string):void {
    const urlStarter = new URL(header);
    const addressDetails = "1";
    const urlformat = format;
    const input = query;
    urlStarter.searchParams.append('q', input);
    urlStarter.searchParams.append('format', urlformat);
    urlStarter.searchParams.append('addressdetails', addressDetails);

    console.log(urlStarter.toString());
}
