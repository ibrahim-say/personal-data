
import axios from "axios";


export default async function getData(name){
  let res= await axios({
    method:"GET",
    url:`http://localhost:3001/name`,
    params:{
      name:name
    },
headers:{
"Cache-Control": "min-age=3600"
} 
  })
  return res.data
} 