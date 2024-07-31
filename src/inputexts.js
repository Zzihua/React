import React, {useState} from 'react';
// import Gallery from './Gallery.js';
// function Compon(props){
//     return(
        
//             <li>{props.id} __ {props.name}</li>
//     );
// }

// const compons = Array.from({length:4});
// var id=['A1','B2','C3','D4'];
// var name=['小明','小華','小李','小張'];

export default function InputTxets(){
    const [text,setText]=useState('nothing');
    return(
        <div className='App'>
            <input type="text" onChange={(e)=>{
                setText(e.target.value);
            }}/>
            
            <p>{text}</p>
        </div>
    );
}

