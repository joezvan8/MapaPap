import { useState, useEffect } from "react";


const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch(url);
                    if (!response.ok) {
                        throw new Error(`Response status: ${response.status}`)
                    }

                    const result = await response.json();
                    setData(result);

                } catch (error) {
                    console.error(error)
                }
            };
        void fetchData();
        }, [url]
    )
    return [data];
};

export default useFetch;



