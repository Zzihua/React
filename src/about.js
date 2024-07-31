import React from "react";
import { Link,Outlet }from 'react-router-dom'

export function About(){
    return(

        <div>
            <h1>About</h1>
            <nav>
                <li><Link to='service'>Service</Link></li>
                <li><Link to='history'>History</Link></li>
                <li><Link to='location'>Location</Link></li>
            </nav>
            <Outlet />
        </div>
    )
}