/* Imports */
import '@stylesheets/App.css'
import { HashRouter, Routes, Route } from 'react-router';
import Home from '@pages/home.tsx' 
import Account from '@pages/account'
import Settings from '@pages/settings'

/* Exports routing functionality as part of app */
export default function App(){
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/account' element={<Account/>}/>
                <Route path='/settings' element={<Settings/>}/>
            </Routes>
        </HashRouter>
    )
    
}