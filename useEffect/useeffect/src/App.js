import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [counter, setcounter] = useState(0)
  const [name, setname] = useState("EDWIN")



  const increment = () => {
    setcounter(counter + 1)
    console.log(counter);

  }

  const changeName = () => {
    setname(name + "n")
    console.log(name);
  }
  useEffect(() => {
    console.log("useEffect loaded");
    

  })



  return (
    <div>

      <h1>UseEffect Practise </h1>
      <button onClick={increment}>+</button>
      {counter} <br />
      <button onClick={changeName}>change name</button><br />
      {name}

    </div>
  );
}

export default App;
