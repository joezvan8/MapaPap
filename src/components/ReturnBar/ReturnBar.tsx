import useFetch from '@hooks/useFetch';
import styles from './ReturnBar.module.css';
import {useContext} from "react";
import {UrlContext} from "@utils/builder.ts";
import {CircularProgress} from "@mui/material";
import type {Place} from "@utils/types.ts"


export default function ReturnBar() {
    const { url } = useContext(UrlContext)

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

function Loading() {
    return <CircularProgress
        size="150px"
        color="secondary"

        aria-label="Loading..."
    />

}