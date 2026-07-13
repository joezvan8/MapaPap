import SearchBar from "@components/SearchBar/SearchBar.tsx";
import AccountBtn from "@components/AccountBtn/AccountBtn.tsx";
import SettingsBtn from "@components/SettingsBtn/SettingsBtn.tsx";
import '@stylesheets/App.css'
import { Link } from "react-router";

export default function Home(){
    return <>
        <div id="intro-txt">Let's find some eats!</div>

        <div id="search-bar-thingy"><SearchBar></SearchBar></div>

        <div id="return-bar">Returned stuff go here</div> {/* Temporary text to show where returned stuff would go*/}     

        <div id="nav-tools">
            <div className="nav-items">
                <Link to="/account"><AccountBtn></AccountBtn></Link>
                <p>User <br/> Account</p>
            </div>

            <div className="nav-items">
                <Link to="/settings"><SettingsBtn></SettingsBtn></Link>
                <p>Settings</p>
            </div>
        </div>

    </>;
    
}