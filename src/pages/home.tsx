import  SearchBar from "@components/SearchBar/SearchBar.tsx";
import AccountBtn from "@components/AccountBtn/AccountBtn.tsx";
import SettingsBtn from "@components/SettingsBtn/SettingsBtn.tsx";
import '@stylesheets/App.css'
import { Link } from "react-router";
import useFetch from '../hooks/useFetch.js'


const searchURL = new URL('https://nominatim.openstreetmap.org/search?q=bakery+in+may+pen+jamaica&format=jsonv2&limit=5')

export default function Home(){
    const [data] = useFetch(searchURL);
    return<>
        <div id="intro-txt">Let's find some eats!</div>

        <div id="search-bar-thingy"><SearchBar></SearchBar></div>

        <div id="return-bar">Returned stuff go here {JSON.stringify(data)}</div> {/* Temporary text to show where returned stuff would go*/}

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