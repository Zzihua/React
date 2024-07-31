import React, {useState} from 'react';
import {FaStar} from 'react-icons/fa';

const craeteArray=(length)=>[...Array(length)];

const Star = ({selected=false , onSelect = f=>f})=>{
    return(
        <FaStar color={selected ? 'blue' : 'gray'} onClick={onSelect}/>
    );
}

export default function StartRating({totalStars = 5}){
    const [selectedStars,setSelectedStars]=useState(3);
    return(
        <div className='App'>
            {craeteArray(totalStars).map((n,i)=>(
                <Star 
                    key={i} 
                    selected={selectedStars>i} 
                    onSelect={()=>setSelectedStars(i+1)}
                />
            ))}
            <p>{selectedStars} of {totalStars} stars</p>
        </div>
    );
}

