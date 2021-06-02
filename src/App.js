import React from 'react'
import Cards from "./components/Cards";
import Cards2 from "./components/Cards2";
import Cards3 from "./components/Cards3";
import getContentCards1 from "./assets/getContentCards1";
import getContentCards2 from "./assets/getContentCards2";
import "./global.css"

export default function App() {
    const data = getContentCards1();
    const data1 = getContentCards2();

  //  const card = data[0];
    return (
        <>
            {data.map((card)=>{
                return <Cards data={card}/>
            })}
            {data1.map((card)=>{
                return <Cards2 data1={card}/>
            })}
            <Cards3/>
        </>
    )
}
