import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [data, setdata]=useState([{click:false, id: 1},{click:false, id: 2},
    {click:false, id: 3},{click:false, id: 4},{click:false, id: 5},
    {click:false, id: 6},{click:false, id: 7},{click:false, id: 8},{click:false, id: 9}])
    const [newset, setnewset]=useState([])
   

    useEffect(()=>
  {

    if(newset.length==9)
    {
      let i=0;
      setInterval(()=>
    {
      if(i<9)
      {
        let dd=newset[i];
        dd.click=false
        setnewset((prevstate)=>[...prevstate, dd]
      )
        i++;

      }

    }, 1000)
    }
    
  },[newset])
  

    const setclickHandler=(id)=>
    {
     id.click=true;
      setnewset((prevstate)=> [...prevstate, id]
    );
  
    }

return <>


<div style={{display:"grid", justifyContent:"center", gridTemplateColumns:"1fr 1fr 1fr" , gridTemplateRows:" 30px 30px 30px", gap:"50px"}}>
{data.map(item=>
{
  return (  <div style={{width:"40px", height:"40px", backgroundColor: item.click?"green":"yellow"}} key={item.id} onClick={()=>setclickHandler(item)} ></div>)
})}
</div>
</>














}

export default App;
