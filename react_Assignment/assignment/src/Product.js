import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Wishlist from './Wishlist';
import { MyContexts } from './Mycontext';


function Product() {
    const { items, setItems } = useContext(MyContexts);
    const [values, setValues] = useState(["WATERMELON", "APPLE", "lemon", "ginger"])



    function addTo(item) {
        const storedItems = JSON.parse(localStorage.getItem('items')) || [];

        console.log(item);
        const updatedItems = [...storedItems, item];

        localStorage.setItem('items', JSON.stringify(updatedItems));
        setItems(updatedItems)
    }



    return (
        <div>


            <h1>this is product page</h1>
            <div>
                {values.map((item, index) => (
                    <span key={index}>
                        <p>{item}</p>
                        <button onClick={() => addTo(item)}>add to wishlist</button>
                    </span>
                ))}
            </div>

            <div>
                <Link to={'wishlist'}>
                    <button>Wishlist</button>
                </Link>
            </div>
        </div >
    );
}

export default Product;
