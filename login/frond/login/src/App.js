import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Register from './Register';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Register></Register>} />
        <Route path='/login' element={<Login></Login>} />


      </Routes>
    </div>
  );
}

export default App;
