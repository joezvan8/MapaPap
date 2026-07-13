import styles from './AccountBtn.module.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function AccountBtn(){

    return (
        <AccountCircleIcon className={styles.acctBtn}></AccountCircleIcon>
    );
}