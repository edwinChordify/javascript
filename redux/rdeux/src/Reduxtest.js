import React from 'react'
import { incNumber, decNumber } from './actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Reduxtest() {
    const myState = useSelector((state) => state.changeTheNumber)
    const dispatch = useDispatch()
  return (
    <div>
        <div>
      <h1>this is home page</h1>
      <button onClick={() => dispatch(incNumber())}>increment</button>
      <input  type="text" value={myState} disabled />
      <button onClick={() => dispatch(decNumber())}>decrement</button>
    </div>
    <div>
        <Link to={'about'}><button>click to navigate</button></Link>
    </div>

    </div>
  )
}

export default Reduxtest