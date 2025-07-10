import axios from 'axios'
import React from 'react'
import { useState } from 'react'
// import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

const Register = () => {
const navigate = useNavigate()
    const [data,setData] = useState({
        email:"",
        password:"",
        cpassword:""
    })
    const registerHandler=(event)=>{
        event.preventDefault()
        axios.post('https://book-library-be-z5om.onrender.com/user/register',{
            email:data.email,
            password:data.password
        }).then(res=>{
          alert(res.data.message)
navigate("/login")
        }).catch(err=>{
          alert(err.response.data.message)
          console.log(err);
          
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
//       <form onSubmit={registerHandler}>
//         <Row>
//         <input type="email" placeholder='email Id' name='email' value={data.email} onChange={changeHandler}/>
//         <input type="password" placeholder='password' name='password'value={data.password} onChange={changeHandler}/>
//      <input type="password" placeholder='Confirmpassword' name='cpassword'/>

//         <input type="submit" value="Register" />
// <p>Already Have account <Link to = "/login">login</Link></p>
// </Row>
//       </form>
//     </div>


 <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Row>
        <Col>
          <Card className="p-4 shadow">
            <Card.Body>
              <Card.Title className="text-center mb-4">Register</Card.Title>
              <Form onSubmit={registerHandler}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={data.email}
                    onChange={changeHandler}
                    required
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
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formConfirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    name="cpassword"
                    value={data.cpassword}
                    onChange={changeHandler}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Register
                </Button>
              </Form>

              <div className="text-center mt-3">
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Register
