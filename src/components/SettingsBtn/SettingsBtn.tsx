import styles from './SettingsBtn.module.css';
import SettingsIcon from '@mui/icons-material/Settings';


export default function SettingsBtn(){

    return (
        <SettingsIcon className={styles.settBtn}></SettingsIcon>
    );
}