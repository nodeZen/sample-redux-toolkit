import React from 'react';
import {useSelector} from 'react-redux';
import './counter-value.css';
const CounterValue = ()=>{
    const value = useSelector((state)=>state.counter.value);

    return(<div className="my-5">
        <h1>{value}</h1>
    </div>)
}

export default CounterValue;