"use client"
import { useRouter } from 'next/navigation';
import Form from 'react-bootstrap/Form';

export default function Home() {
  let router =useRouter()
  function getPersonalData(e){
    e.preventDefault()
    let name = document.getElementsByClassName("name")[0].value
    router.push(`/names/${name}`)
  }
  return (
    
    <Form className='w-50 text-center m-auto' onSubmit={getPersonalData}>
    <Form.Group className="mb-3" controlId="formGroupEmail">
      <Form.Label className="text-center">Get your personal data</Form.Label>
      <Form.Control type="text" placeholder="Enter your name..." className='name'/>
      <Form.Control type="submit" value="send" className='w-25 m-auto mt-3 btn btn-primary' />
    </Form.Group>
  </Form>
   
 
  
 
  )
}

