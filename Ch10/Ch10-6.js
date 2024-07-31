import './App.css';
import React, { useState } from 'react';
import { useMemo } from 'react';

function MyComponent(){

    const[state,setState] = useState(0);
    const[state2,setState2] = useState(0);
    const memoizedValue = useMemo(()=>{
        return Math.random();
    },[state]);

    return(
        <>
            {console.log('rendering')}
            <h1>Value = {memoizedValue}</h1>
            <button onClick={()=>{setState(state+1)}}>Chang state</button>
            <button onClick={()=>{setState2(state2+1)}}>Don't Chang state</button>
        </>
    );
}
    function App(){
        return(
            <div className='APP'>
                <MyComponent/>
            </div>
        );
    }

export default App;