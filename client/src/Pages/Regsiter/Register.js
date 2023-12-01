import React, { useState } from 'react'
import Layout from '../../Component/Layout/Layout';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import e from 'cors';

const Register = () => {
 
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [phone, setPhone] = useState("")
   const [address, setAddress] = useState("")



   const handleSubmit  = (e) => {

      e.preventDefault()

console.log(name,email , password, phone, address)

   }





    return (
  <Layout>


     <div className='register'>

     <Form  onSubmit={handleSubmit}>
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
        <Form.Control type="password" 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" 
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="address" />
      </Form.Group>



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