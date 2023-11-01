import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { MyContext, MyContexts } from './Mycontext';


const Wishlist = () => {
    const { items, setItems } = useContext(MyContexts)

    // const [itemsWish, setItemsWish] = useState([]);

    // useEffect(() => {
    //   setItemsWish(JSON.parse(localStorage.getItem("items")) || ["wishlisted items empty"]);
    //}, []);

  






    return (
        <div><h1>Wishlist Component</h1>
            {
                items ?

                    <div>
                        {items.map((item, index) => (
                            <span key={index}>
                                <p>{item}</p>
                            </span>
                        ))}
                    </div> : 'no items in wishlist'
            }






            <div>
                <Link to={'/'}><button>Product</button></Link>
            </div>
        </div>
    )
}



export default Wishlist