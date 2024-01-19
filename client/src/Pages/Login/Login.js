import React, { useState } from 'react'
import Layout from '../../Component/Layout/Layout'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {



  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [auth, setAuth] = useState("")

   const navigate = useNavigate()

  const handleSubmit  = async (e) => {

     e.preventDefault()

   try {
     const res = await axios.post('/api/v1/auth/login', { email, password  })
     

     if(  res && res.data.success){
       toast.success(res.data.message )
       setAuth({
        ...auth,
        user: res.data.user,
        token : res.data.token
       })
       localStorage.setItem("auth", JSON.stringify(res.data))
       navigate("/")
     }
     else {
       toast.error(res.data.message)
     }

   }
   

   
   catch (error) {

     console.log(error)
     toast.error("Something went wrong")
     
   }

  }







  return (


    <Layout>  
    <div className='register'>
      
    <Form  onSubmit={handleSubmit}>
    <h1>Login</h1>




     <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Control type="email" placeholder="Enter email"
                 onChange={(e) => setEmail(e.target.value)}
       value={email}
       />
       <Form.Text className="text-muted">
         We'll never share your email with anyone else.
       </Form.Text>
     </Form.Group>


     <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Control type="password" 
               value={password}
               onChange={(e) => setPassword(e.target.value)}
       placeholder="Password" />
     </Form.Group>


    

     

 

    
     <p>Not a member yet  ?<Link to="/register"> Register </Link></p>
     <Form.Group className="mb-3" controlId="formBasicCheckbox">
       <Form.Check type="checkbox" label="Check me out" />
     </Form.Group>
     <Button variant="primary" type="submit">
       Submit
     </Button>
   </Form>


    </div>
</Layout>
  )
}

export default Login