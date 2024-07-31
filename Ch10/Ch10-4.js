import './App.css';
import React, { useState } from 'react';
import { useEffect } from 'react';

function MyComponent(){
    console.log('creaating function component');

    const[count1,setCount1] = useState(0);
    const[count2,setCount2] = useState(0);

    useEffect(()=>{
        console.log('useEffect1 excuted');
    },[count1]);

    useEffect(()=>{
        console.log('useEffect2 excuted');
    },[count2]);

    const addCount = (()=>{
        console.log('button1 be clicked.');
        setCount1(count1 + 1);
    });

    const addCount2 = (()=>{
        console.log('button2 be clicked.');
        setCount2(count1 + 2);
    });

    return(
        <>
            {console.log('rendering')}
            <h1>count1: {count1}</h1>
            <h1>count2: {count2}</h1>
            <button onClick={addCount}>addCount1</button>
            <button onClick={addCount2}>addCount2</button>
        </>
    );
}
    function App(){
        return(
            <div className='A'>
                <MyComponent/>
            </div>
        );
    }


export default App;