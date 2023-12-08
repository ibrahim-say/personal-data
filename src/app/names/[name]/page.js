


import getData from "@/app/apis/api";
import Link from "next/link";


export default async function getPersonalData2(props){
  let data=  await getData(props.params.name)
  
    return (
        <>
        <Link href="/"> 
        <h3 className="btn btn-primary ms-5 mt-2">Home</h3>
        </Link>
         <div className="w-50 m-auto mt-3 text-bg-dark text-center py-3">
        <h3>{data[0].name}</h3>
        <h3>{data[0].age}</h3>
        <h3>{data[0].gender}</h3>
        <h3>{data[0].country}</h3>
     </div>
        </>
    
    )
} 