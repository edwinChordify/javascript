import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { MyContext, MyContexts } from './Mycontext';


const Wishlist = () => {
    const { values, setValues } = useContext(MyContexts)
    console.log(values);
    const val=values


    localStorage.setItem("items", JSON.stringify(val));




    return (
        <div>
            <h1>Wishlist Componnt</h1>
            {values.length > 0 ? (
                <div>
                    {values.map((value, index) => (
                        <span key={index}>
                            <p>{value}</p>
                        </span>
                    ))}
                </div>
            ) : (
                'No items in wishlist'
            )}

            <div>
                <Link to={'/'}><button>Product</button></Link>
            </div>
        </div>

    )
}



export default Wishlist