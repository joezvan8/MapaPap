/* Imports */
import SearchBar from "@components/SearchBar/SearchBar.tsx";
import AccountBtn from "@components/AccountBtn/AccountBtn.tsx";
import SettingsBtn from "@components/SettingsBtn/SettingsBtn.tsx";
import ReturnBar from "@components/ReturnBar/ReturnBar.tsx";
import '@stylesheets/App.css'
import { Link } from "react-router";
import {UrlContext} from "@utils/builder.ts";
import {useState} from "react";

/* Creates home page */
export default function Home(){
    const [url, setUrl] = useState("");

    return<>
        <div id="intro-txt">Let's find some eats!</div>

        <UrlContext.Provider value={{ url, setUrl }}>
            <div id="search-bar-thingy"><SearchBar></SearchBar></div>
            <div id="return-bar"><ReturnBar></ReturnBar></div>
        </UrlContext.Provider>

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

    </>
}