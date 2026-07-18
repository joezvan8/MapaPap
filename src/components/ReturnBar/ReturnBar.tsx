import useFetch from '@hooks/useFetch';
import styles from './ReturnBar.module.css';
import {newUrl} from "@components/SearchBar/SearchBar.tsx";
import urlBuilder from '@utils/builder.ts';
import {useContext} from "react";
import {InputContext} from "@utils/InputContext.ts";


const searchURL = new URL('https://nominatim.openstreetmap.org/search?q=bakery+in+may+pen+jamaica&format=jsonv2&limit=5')

export default function ReturnBar() {
    const { input } = useContext(InputContext)

    const [data] = useFetch(newUrl)

    return (
        <div className={styles.returnBar}>{JSON.stringify(data)}</div>
    );
}