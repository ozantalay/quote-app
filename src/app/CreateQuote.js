'use client'
import { useState,useEffect } from "react"

const CreateQuote = () => {
    const [quote,setQuote]=useState([])
    const [quotes,setQuotes]=useState("")
    useEffect(()=>{
        fetch('https://type.fit/api/quotes')
        .then((response)=>response.json())
        .then((data)=>{
            setQuotes(data)
        setQuote(data?.[Math.floor(Math.random()*data.length)])
    }).catch((error)=>console.log("veri çekilemedi",error))
},[])
console.log(quote);

 const getNewQuote=()=>{
    if(quotes?.length > 0) {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(randomQuote);
      }
 }
  return (
    <div>
    <div className="content">
         <p>{quote?.text} - {quote?.author || "Unknown"}</p>

    </div>
         <button onClick={getNewQuote}>New Quote</button>
         
    </div>
  )
}
export default CreateQuote