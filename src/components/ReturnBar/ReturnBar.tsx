import useFetch from '@hooks/useFetch';
import styles from './ReturnBar.module.css';
import {useContext} from "react";
import {UrlContext} from "@utils/builder.ts";
import {CircularProgress} from "@mui/material";


export default function ReturnBar() {
    const { url } = useContext(UrlContext)

    const [data, loading] = useFetch(url)

    return (
        <div className={styles.returnBar}>
                {
                    loading ?
                        <div className={styles.returnLoader}> <Loading /></div>   :
                        [JSON.stringify(data), url]
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