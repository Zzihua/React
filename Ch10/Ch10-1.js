import './App.css';
import React, { useState } from 'react';
import { useEffect } from 'react';

function MyComponent(){
    console.log('creaating function component');
    
    useEffect(()=>{
        console.log('useEffect excuted');
    
    });


    return(
        <>
            {console.log('rendering')}
            <h1>Hello Effect</h1>
        </>
    );
}

function App(){
    return(
        <div className='App'>
            <MyComponent/>
        </div>
    )
}

export default App;