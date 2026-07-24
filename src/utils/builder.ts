/* Import context creation hook */
import {createContext} from "react";

/* URL building function */
export default function urlBuilder(header: string, query: string, format: string):string {
    const baseUrl = new URL(header);
    const addressDetails = "1";

    baseUrl.searchParams.append('q', query);
    baseUrl.searchParams.append('format', format);
    baseUrl.searchParams.append('addressdetails', addressDetails);

    return(baseUrl.toString());
}

/* Defines a type for the URL context */
interface UrlContextType {
    url: string;
    setUrl: (value: string) => void;
}

/* Creates and exports the URL context */
export const UrlContext = createContext<UrlContextType>({
    url: '',
    setUrl: () => {},
});