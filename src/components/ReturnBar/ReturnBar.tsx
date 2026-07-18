import useFetch from '@hooks/useFetch';
import styles from './ReturnBar.module.css';
import {newUrl} from "@components/SearchBar/SearchBar.tsx";

export default function ReturnBar() {


    const [data] = useFetch(newUrl)

    return (
        <div className={styles.returnBar}>{JSON.stringify(data)}</div>
    );
}