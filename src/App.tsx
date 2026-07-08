import SearchBar from "@components/SearchBar.tsx";
import AccountBtn from "@components/AccountBtn/AccountBtn.tsx";
import '@stylesheets/App.css'

export default function App(){
    return <>
        <SearchBar></SearchBar>
        <div id="return-bar">Returned stuff go here</div> {/* Temporary text to show where returned stuff would go*/}
        <AccountBtn></AccountBtn>
    </>;
    
}