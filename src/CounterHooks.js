import React, { useState, useContext } from 'react';
import { ThemeContext } from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

function CounterHooks({ initialCount }) { //Object deconstruction to make our props easy to work with and easy to read
    console.log("Render Counter Hooks");
    const [count, setCount] = useState(initialCount); //When using hook, we cannot not put useState in conditional or loops. 
    const style = useContext(ThemeContext);
    return (
        <>
            <button className={style.theme} onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <span>{count}</span>
            <button className={style.theme} onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        </>
    );
}

export default CounterHooks;