import style from './AccountBtn.module.css';

export default function AccountBtn(){

    function navigate(){

    }

    return (
        <button className={style.acctBtn} onClick={navigate}></button>
    );
}