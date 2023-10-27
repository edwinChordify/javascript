import logo from './logo.svg';
import './App.css';
import Reduxtest from './Reduxtest';
import { BrowserRouter as Router, Switch, Route, Redirect, Routes } from 'react-router-dom'
import About from './About';



const App = () => {

  return (
    <div>
      <Routes>

        <Route exact path="/" element={<Reduxtest></Reduxtest>} />
        <Route exact path="about" element={<About></About>} />


      </Routes>

    </div>

  )
}

export default App;
