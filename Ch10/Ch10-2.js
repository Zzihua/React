import './App.css';
import React, { useState } from 'react';
import { useEffect } from 'react';

function MyComponent(){
    console.log('creaating function component');
    const[count1,setCount] = useState(0);

    useEffect(()=>{
        console.log('useEffect excuted');
        setCount(count1 + 1);
    
    });

    const addCount = (()=>{
        console.log('button1 be clicked.')
    
    });


    return(
        <>
            {console.log('rendering')}
            <h1>count1: {count1}</h1>
            <button onClick={addCount}>addCount1</button>
        </>
    );
}

function App(){
    return(
        <div className='A'>
            <MyComponent/>
        </div>
    )
}

export default App;