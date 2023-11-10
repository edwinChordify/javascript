import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Wishlist from './Wishlist';
import { MyContexts } from './Mycontext';


function Product() {
    const { values, setValues } = useContext(MyContexts);
    const [items, setitems] = useState(["watermelon", "lemon", "apple"])
    function addTo(item) {
        setValues([...values, item]);
       
        console.log(values);
    }
    return (
        <div>
            <h1>this is product page</h1>
            <div>
                {items.map((item, index) => (
                    <span key={index}>
                        <p>{item}</p>
                        <button onClick={() => addTo(item)}>add to wishlist</button>
                    </span>
                ))}
            </div><br />

            <div>
                <Link to={'wishlist'}>
                    <button>Wishlist</button>
                </Link>
            </div>
        </div >
    );
}

export default Product;
