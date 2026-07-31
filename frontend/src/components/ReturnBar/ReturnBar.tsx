/* Imports */

import useFetch from '@hooks/useFetch';
import styles from './ReturnBar.module.css';
import {useContext} from "react";
import {UrlContext} from "@utils/builder.ts";
import {CircularProgress} from "@mui/material";
import type {Place} from "@utils/types.ts"

/* Export return bar functionality to App.tsx */
export default function ReturnBar() {
    const { url } = useContext(UrlContext) /* creates URL variable using URL context */

    const [data, loading] = useFetch<Place[]>(url)

    return (
        <div className={styles.returnBar}>
                {
                    loading ?
                        <div className={styles.returnLoader}> <Loading /></div> :
                        data?.slice(0, 5).map(place => (
                            <div key={place.place_id}>
                                {place.display_name}</div>
                        ))
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