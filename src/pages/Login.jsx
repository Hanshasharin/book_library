import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

const Login = () => {

    const navigate = useNavigate()
const [data,setData] = useState({
        email:"",
        password:"",
        
    })

     const loginHandler=(event)=>{
        event.preventDefault()
        axios.post('https://book-library-be-z5om.onrender.com/user/login',{
            
            email:data.email,
            password:data.password
        }).then (res=>{
            localStorage.setItem("access_token",res.data.token)

            navigate("/")

console.log(res.data);
        })
        .catch(err=>{
            console.log(err);
            
            // alert(err.response.message);
            
            
        })

    }

     const changeHandler =(event)=>{
        const name = event.target.name
        const value = event.target.value
        const tempData = {...data}
        tempData[name]= value
        setData(tempData)
    }

  return (
//     <div>
//       <form onSubmit={loginHandler}>
//         <input type="email" placeholder='email Id' name='email' value={data.email} onChange={changeHandler} />
//         <input type="password" placeholder='password' name='password' value={data.password} onChange={changeHandler}/>
//         <input type="submit" value="login" />
// <p>create account <Link to = "/Register">Register</Link></p>
//       </form>
//     </div>



 <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Row>
        <Col>
          <Card className="p-4 shadow">
            <Card.Body>
              <Card.Title className="text-center mb-4">Login</Card.Title>
              <Form onSubmit={loginHandler}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={data.email}
                    onChange={changeHandler}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={data.password}
                    onChange={changeHandler}
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Login
                </Button>
              </Form>

              <div className="text-center mt-3">
                <p>
                  Don't have an account? <Link to="/Register">Register</Link>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Login
