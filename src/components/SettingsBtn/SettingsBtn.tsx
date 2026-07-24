/* Import styles from css and settings icon from Material UI */
import styles from './SettingsBtn.module.css';
import SettingsIcon from '@mui/icons-material/Settings';

/* Export functionality to App.tsx */
export default function SettingsBtn(){

    return (
        <SettingsIcon className={styles.settBtn}></SettingsIcon>
    );
}