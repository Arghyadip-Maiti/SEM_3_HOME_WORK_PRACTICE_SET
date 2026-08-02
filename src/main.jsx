import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import Context from './class4/Q2/Context.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Context.Provider value={'Welcome to react'}>
        <App/>
    </Context.Provider>
    </BrowserRouter>

)
