import { useState } from 'react';
import './App.css';
import { Greet } from "../wailsjs/go/main/App";

import TopNav from './TopNav';
import CardGroup from './CardGroup';

function App() {
    const [resultText, setResultText] = useState("Please enter your name below 👇");
    const [name, setName] = useState('');
    const updateName = (e) => setName(e.target.value);
    const updateResultText = (result) => setResultText(result);

    function greet() {
        Greet(name).then(updateResultText);
    }

    return (
        <div id="App">
            <TopNav />
            <div className='p-5 text-center bg-light'>
                <h1 className='mb-3'>Experience the Power</h1>
                <h4 className='mb-3'>of using React and Go</h4>
                <pre><p className="banner"><img src="https://www.svgrepo.com/show/354259/react.svg" width="40px" />      <img src="https://www.svgrepo.com/show/355038/golang.svg" width="40px" /></p></pre>
            </div>
            <CardGroup />
            <div id="result" className="result">{resultText}</div>
            <div id="input" className="input-box">
                <input id="name" className="input" onChange={updateName} autoComplete="off" name="input" type="text" />
                <button className="btn" style={{ color: "info" }} onClick={greet}>Say Hi</button>
            </div>
        </div>
    )
}

export default App
