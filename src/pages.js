import React from 'react';
import { Link } from 'react-router-dom';


export function Home(){
    return(

        <div>
            <h1>Home</h1>
            <Link to='Events'>Events</Link>
        </div>
    )
}


export function Events(){
    return(

        <div>
            <h1>Events</h1>
        </div>
    )
}

export function Products(){
    return(

        <div>
            <h1>Products</h1>
        </div>
    )
}


export function Contact(){
    return(

        <div>
            <h1>Contact</h1>
        </div>
    )
}

export function Services(){
    return(

        <div>
            <h2>Services</h2>
        </div>
    )
}

export function History(){
    return(

        <div>
            <h2>History</h2>
        </div>
    )
}

export function Location(){
    return(

        <div>
            <h2>Location</h2>
        </div>
    )
}