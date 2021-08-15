import React,{useState,useEffect} from 'react'
import {useParams,Link} from  "react-router-dom"
import { getDetails } from '../components/Api'
import { getQuotes } from '../components/Api'
import "./Details.css"
const Details = () => {
    const{id} =  useParams()


const[details,setDetails] = useState([

{}])
const [ quotes,setQuotes] = useState([{}])


useEffect(()=>{

getDetails(id)
  .then((data)=>{
      setDetails(data)
      console.log(data)
  })
  getQuotes(id)
     .then((data)=>{
         setQuotes(data)
         console.log(data)
     })

},[id])




const mapped = details.map(outerObj => outerObj.appearance);
const occupations = details.map(outerObj => outerObj.occupation);
console.log(mapped);

    return (
        <div className="div">
          
<div>

    <Link to={"/"}><i class="fas fa-arrow-left"></i></Link>
    

<div className="container">
           <div className="card">
               <img src={details[0].img} alt="" />
               <div className="info">
               <h3> Name: {details[0].name}</h3>
               <h4>DOB: {details[0].birthday}</h4>
               <h5>Occupation: {occupations}</h5>
               <h5>Nickname: {details[0].nickname}</h5>
               <h5>Status: {details[0].status}</h5>
               <h5>Appearance: {mapped}</h5>
               <h3 className="quotes"><i class="fas fa-quote-left"></i> {quotes[0].quote} <i class="fas fa-quote-right"></i>   </h3>
               </div>
           </div>
           
           </div>
           </div>
           </div>     
    )
}

export default Details
