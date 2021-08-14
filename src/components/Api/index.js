import axios from "axios"



 export const getData = async ()=>{
    const {data}= await axios.get("https://www.breakingbadapi.com/api/characters")

    return data;
}
export const getDetails = async (id)=>{
    const {data}= await axios.get(`https://www.breakingbadapi.com/api/characters/${id}`)

    return data;
}
export const getQuotes = async (id)=>{
    const {data}= await axios.get(`https://www.breakingbadapi.com/api/quotes/${id}`)

    return data;
}

