import {createContext} from "react";

export default function urlBuilder(header: string, query: string, format: string):string {
    const baseUrl = new URL(header);
    const addressDetails = "1";

    baseUrl.searchParams.append('q', query);
    baseUrl.searchParams.append('format', format);
    baseUrl.searchParams.append('addressdetails', addressDetails);

    return(baseUrl.toString());
}

export interface UrlContextType {
    url: string;
    setUrl: (value: string) => void;
}

export const UrlContext = createContext<UrlContextType>({
    url: '',
    setUrl: () => {},
});