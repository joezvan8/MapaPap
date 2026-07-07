import { Button } from "@mui/material";
import styles from './AccountBtn.module.css';

export default function AccountBtn(){

    function navigate(){

    }

    return (
        <Button className={styles.acctbtn} onClick={navigate}></Button>
    );
}