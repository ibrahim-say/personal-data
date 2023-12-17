
import axios from "axios";


export default async function getData(name){
  let res= await axios({
    method:"GET",
    url:`https://server-six-mauve.vercel.app/name`,
    params:{
      name:name
    },
headers:{
"Cache-Control": "min-age=3600"
} 
  })
  return res.data
} 