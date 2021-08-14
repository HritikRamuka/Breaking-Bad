import React,{useState,useEffect} from 'react'
import List from "../components/List/List"
import Pagination from "../components/Pagination/Pagination";

import {getData} from "../components/Api/index"

const Home = () => {

    const [chars, setChars] = useState([])
    const [loading,setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [charsPerPage] = useState(10);

    
       // Get current posts
  const indexOfLastChar = currentPage * charsPerPage;
  const indexOfFirstChar = indexOfLastChar - charsPerPage;
  const currentChars = chars.slice(indexOfFirstChar, indexOfLastChar);

  // Change page
  const paginate = (pageNumber)=> setCurrentPage(pageNumber);

    useEffect(()=>{
        setLoading(true)
        getData()    
          .then((data)=>{
            
            setChars(data)
            setLoading(false)
            console.log({data})
          })
      },[])
    return (
        <div>
             <List 
                loading={loading}
                 chars={currentChars}/>
            <Pagination
               charsPerPage={charsPerPage}
                totalChars={chars.length}
                paginate={paginate}
      /> 
        </div>
    )
}

export default Home




  

