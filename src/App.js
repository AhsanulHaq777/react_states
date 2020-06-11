import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counting from './Counter.js'

function App() {
  
  let [count,setCount] = useState(0);
  let [isMorning, setMorning] = useState(true);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <div className={`Box ${isMorning ? 'Day' : 'Night'}`}>

          <h3>It is {isMorning ? 'Morning' : 'Night'}</h3>

          <Counting countvalue={count}/>
          <button onClick={()=> setCount(count + 1)}>Click to count</button>

          <button onClick={()=>setMorning(!isMorning)}>Update Day</button>
        </div>
          <br/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
