import React from "react";
import ReactDOM from 'react-dom/client';
// import {HelloWorld} from "./HelloWorldApp";
// import {Nombre} from './FirstApp'
// import { PadreApp } from "./PadreApp";
// import {SecondApp} from"./SecondApp"
import { CounterApp } from "./CounterApp";
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWorld/> */}
        {/* <Nombre/> */}
        {/* <PadreApp/> */}
        {/* <SecondApp/> */}
        <CounterApp value = {20}/>
    </React.StrictMode>
)