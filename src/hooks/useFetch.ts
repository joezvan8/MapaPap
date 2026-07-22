import { useState, useEffect } from "react";


const useFetch = <T>(url: URL | string): [ T | undefined, boolean] => {
    const [loading, setLoading] = useState<boolean>(true)
    const [data, setData] = useState<T | undefined>();

    useEffect(() => {
            const fetchData = async () => {
                setLoading(true)
                try {

                    const response = await fetch(url);
                    if (!response.ok) {
                        throw new Error(`Response status: ${response.status}`)
                    }

                    const result = await response.json();
                    setTimeout(() => {
                        setData(result);
                        setLoading(false)
                    }, 1000)

                } catch (error) {
                    console.error(error)
                    setLoading(false)
                }

            };
        void fetchData();
        }, [url]
    )
    return [data, loading];
};

export default useFetch;



