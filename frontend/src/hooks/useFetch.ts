/* Import react hook functionality */
import { useState, useEffect } from "react";


const useFetch = <T>(url: URL | string): [ T | undefined, boolean] => {
    const [loading, setLoading] = useState<boolean>(true)
    const [data, setData] = useState<T | undefined>();

    useEffect(() => {
        let ignore = false;
            /* Fetches data from Nominatim API */
            const fetchData = async () => {
                setLoading(true)
                /* Tries to see if response is given in json format */
                try {
                    /* Fetches data from url */
                    const response = await fetch(url);
                    if (!response.ok) throw new Error(`Response status: ${response.status}`)
                    const result = await response.json();

                    if (!ignore){
                        setData(result);
                        setLoading(false);
                    }
                    setTimeout(() => {
                    }, 1000)

                } catch (error) {
                    console.error(error)
                    if (!ignore) setLoading(false);
                }

            };
        void fetchData();

        return () => { ignore = true; };
        }, [url]
    )
    return [data, loading];
};

/* Exports useFetch to search/return bar components */
export default useFetch;



