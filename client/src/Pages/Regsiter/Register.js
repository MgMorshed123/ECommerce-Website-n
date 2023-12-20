import React, { useState } from 'react'
import Layout from '../../Component/Layout/Layout';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import "../../Styles/AuthStyles.css";
const Register = () => {
 
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [phone, setPhone] = useState("")
   const [address, setAddress] = useState("")

 const navigate = useNavigate()

   const handleSubmit  = async (e) => {

   e.preventDefault()
    try {
      const res = await axios.post('/api/v1/auth/register', {name, email, password ,phone, address })  
      if(res.data.success){
        toast.success(res.data.message )
        navigate("/login")
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
          <h1>Register</h1>
     <Form.Group className="mb-3" controlId="formBasicname">
        <Form.Control type="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
        placeholder="Enter Your Name" />
        <Form.Text className="text-muted"> 
        </Form.Text>
      </Form.Group>



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


     

      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="phone" 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="address" 
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="address" />
      </Form.Group>

      <p>Already a member ?<Link to="/login"> Login </Link></p>

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

export default Register