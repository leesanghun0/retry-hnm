import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { authenticateAction } from "../redux/actions/authenticateAction";


    const Login =()=>{
      const [id, setId] = useState("")
      const [password, setPassword] = useState("")
        const dispatch = useDispatch()
        const navigate = useNavigate();

        const loginUser = (event)=>{
            event.preventDefault();
            //console.log("로그인됨");
            dispatch(authenticateAction.login(id,password))
            //setAuth(true);
            navigate("/");
        }

    return (<Container>
        <Form onSubmit={(event)=>loginUser(event)}>
           <Form.Group className="mb-3" controlId="formGroupEmail">
             <Form.Label>Email address</Form.Label>
             <Form.Control type="email" placeholder="Enter email" onChange={(event)=>setId(event.target.value)}/>
           </Form.Group>

           <Form.Group className="mb-3" controlId="formGroupPassword">
             <Form.Label>Password</Form.Label>
             <Form.Control type="password" placeholder="Password" onChange={(event)=>setPassword(event.target.value)} />
           </Form.Group>
           <Button variant="danger" type="submit">로그인</Button>
        </Form>
    </Container>)
} 

export default Login;