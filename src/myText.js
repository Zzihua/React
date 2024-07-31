import React, { useContext } from "react";
import { AppContext,ColorContext } from "./App";


export function MyText(){
    const color = useContext(ColorContext);
    const username = useContext(AppContext);

    return (<h1 style={{color:color}}>{username}</h1>);

}