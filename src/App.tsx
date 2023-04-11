import { useState,useEffect } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


interface  IQuotes {
  quotes: Array<IQ>
  total: number
 
}
type IQ = {
  id:number,
  quote:string,
  author:string,
  

}


 
function App() {
 
  const [data,setData] =  useState< IQ[]>([])
  const  [allData,setAllData]= useState<IQuotes[] | any >()
  const [page,setPage]=useState<number>(1)
  console.log(typeof allData)
  let arr = [...Array(30/5).keys()]
  useEffect(()=>{
   settingData();
  },[page])
const fetchData = async ():Promise< IQuotes>=>{
 const response = await fetch("https://dummyjson.com/quotes/")
 return response.json();
}
const settingData = async ()=>{
  const post:IQuotes =  await fetchData();
  console.log(post.quotes);
  console.log(post);
  setAllData(post.total);
   setData(post.quotes);
}


  return (
  <div className='App'>
   
 Quotes 

  {data.slice(page*5-5,page*5).map((quote)=>{
   return <p key={quote.id}>{quote.id} :{quote.quote} ~ {quote.author} </p>
  })}

<div>
<span className='page' onClick={()=> {return setPage(page>1?page-1:page)}}>prev</span>
    {arr.map((num:number,index:number)=>{
       
   return <> 
   
    <span className='page' onClick={()=> {return setPage(index+1)}}> {num+1}</span>
      </>

      })
    }
    <span className='page' onClick={()=> {return setPage(page<6?page+1:page)}}>next</span> 
   </div>
  </div>
  )
}

export default App
