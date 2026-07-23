/* Import styles from css and account icon from Material UI */

import styles from './AccountBtn.module.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

/* Export functionality to App.tsx */
export default function AccountBtn(){

    return (
        <AccountCircleIcon className={styles.acctBtn}></AccountCircleIcon>
    );
}