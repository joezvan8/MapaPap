import useFetch from '@hooks/useFetch';
import styles from './ReturnBar.module.css';
import {useContext} from "react";
import {UrlContext} from "@utils/builder.ts";


export default function ReturnBar() {
    const { url } = useContext(UrlContext)

    const [data] = useFetch(url) ?? ""

    return (
        <div className={styles.returnBar}>{[JSON.stringify(data), url]}</div>
    );
}