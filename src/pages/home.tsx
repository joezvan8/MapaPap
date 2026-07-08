import SearchBar from "@components/SearchBar.tsx";
import AccountBtn from "@components/AccountBtn/AccountBtn.tsx";
import '@stylesheets/App.css'
import { Link } from "react-router";

export default function Home(){
    return <>
        <SearchBar></SearchBar>
        <div id="return-bar">Returned stuff go here</div> {/* Temporary text to show where returned stuff would go*/}     
        <Link to="/account"><AccountBtn></AccountBtn></Link>
        <Link to="/settings">Settings (Placeholder)</Link>
    </>;
    
}