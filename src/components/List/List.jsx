import React from "react"
import { CircularProgress } from "@material-ui/core"
import {Link} from "react-router-dom"
import "./List.css"



 const List= ({chars,loading})=>{

 

if(loading){return(<CircularProgress size={100}/>)}
    

  return(
     
    <div className="container">


        {chars.map((char,i)=>(
           <div key={i} className="box">
               
            <Link className="link" to={`/details/${char.char_id}`}><img src={char.img} alt="" /></Link>
           
            <div className="info">
           <Link to={`/details/${char.char_id}`}> <h4>{char.name}</h4></Link>
               
               <h5>DOB:{char.birthday}</h5>
               <h5>Occupation: {char.occupation}</h5>
               <p>Status:{char.status}</p>
           </div>
           </div>
           
        ))}
        
        
    </div>
             
               
             
    )} 
     export default List;


    
 