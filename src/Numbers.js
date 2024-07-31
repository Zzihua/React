import React, {useState} from 'react';


export default function Numbers(){
    const [number,setNumber]=useState(10);
    return(
        <div className='App'>
            <button onClick={()=>{
                setNumber(number+1);
            }}>加1</button>
            <p>{number}</p>
            <button onClick={()=>{
                setNumber(number-1);
            }}>減1</button>
            
        </div>
    );
}



export function NumbersWithLimitByHTML(){
    const [number,setNumber]=useState(10);
    return(
        <div className='App'>
            {(number< 15) && (<button onClick={()=>{
                setNumber(number+1);
            }}>加1</button>)}
            <p>{number}</p>
            {(number> 0) && (<button onClick={()=>{
                setNumber(number-1);
            }}>減1</button>)}
            
        </div>
    );
}


export function NumbersWithLimitByCSS(){
    const [number,setNumber]=useState(10);
    return(
        <div className='App'>
            <button 
                style={{visibility:number>=15 && 'hidden'}}
                onClick={()=>{setNumber(number+1);}}>加1</button>
            <p>{number}</p>
            <button 
                style={{visibility:number<=0 && 'hidden'}}
                onClick={()=>{setNumber(number-1);}}>減1</button>
            
        </div>
    );
}
