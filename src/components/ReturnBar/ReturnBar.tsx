import useFetch from '@hooks/useFetch';
import styles from './ReturnBar.module.css';
import baseUrl from 'parser.ts';


const searchURL = new URL('https://nominatim.openstreetmap.org/search?q=bakery+in+may+pen+jamaica&format=jsonv2&limit=5')

export default function ReturnBar() {


    const [data] = useFetch(searchURL)

    return (
        <div className={styles.returnBar}>{JSON.stringify(data)}</div>
    );
}