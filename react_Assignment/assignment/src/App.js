import logo from './logo.svg';
import './App.css';
import Product from './Product';
import Wishlist from './Wishlist';

import { Routes, Route } from 'react-router-dom';
import Mycontext from './Mycontext';


function App() {


  return (



    <Mycontext>
      <Routes>

        <Route exact path="/" element={<Product></Product>} />
        <Route exact path="wishlist" element={<Wishlist></Wishlist>} />
        <Route exact path="product" element={<Product></Product>} />


      </Routes>

    </Mycontext>




  );
}

export default App;
