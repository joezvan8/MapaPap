/* Imports */
import useFetch from '@hooks/useFetch';
import styles from './ReturnBar.module.css';
import {useContext, useState, useEffect} from "react";
import {UrlContext} from "@utils/builder.ts";
import {CircularProgress} from "@mui/material";
import type {Place, SearchResultRow} from "@utils/types.ts"

/* Export return bar functionality to App.tsx */
export default function ReturnBar() {
    const { url } = useContext(UrlContext) /* creates URL variable using URL context */

    const [data, loading] = useFetch<Place[]>(url)
    const [backendData, setBackendData] = useState<SearchResultRow[]|undefined>()

    async function getBackend(): Promise<SearchResultRow[]> {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/db/supabase`, {
            method: 'GET',
            cache: 'no-store'
        });
        return await res.json()
    }

    async function saveBackend(location: string){
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/db/supabase`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({location})
        });
        return await res.json()
    }

    const [refreshKey, setRefreshKey] = useState(0)

    // Edit to useEffect to ignore previous requests updating state
    useEffect(() => {
        let ignore = false;

        getBackend().then(result => {
            if (!ignore) setBackendData(result);
            });
        return () => { ignore = true; }
    }, [refreshKey])

    // Edit to useEffect to guard against overlapping save/refresh cycles
    useEffect(() => {

        let ignore = false;
        if (!data || data.length === 0) return;

        Promise.all(data?.slice(0, 5).map(place => saveBackend(place.display_name)) ?? [])
            .then(() => {
                if (!ignore) setRefreshKey(prev => prev + 1)
                });
        return () => { ignore = true }
    }, [data])


    return (
        <div className={styles.returnBar}>
                {
                    loading ?
                        <div className={styles.returnLoader}> <Loading /></div> :
                        <>
                            {/* Displays the first 5 search results */}
                            {data?.slice(0, 5).map(place => (
                                <div key={place.place_id}>
                                    {place.display_name}</div>))}

                            {/* Returns the results stored in backend */}
                            {backendData?.map((item) => (
                                <div key={item.id}>{item.location}</div>))}
                        </>
                }
        </div>
    );
}

/* Loading function to be used as part of the loading screen */
function Loading() {
    return <CircularProgress
        size="150px"
        color="secondary"

        aria-label="Loading..."
    />

}