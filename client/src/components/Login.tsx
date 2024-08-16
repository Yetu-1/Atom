import { FormEvent, useRef } from "react";
import { Button, Container, Form, FormGroup, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css"

export function Login() {

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        let user = {email: emailRef.current!.value , password: passwordRef.current!.value};
        console.log(user);

        fetch('http://localhost:5138/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
          }).then(response => {
            if(response.status === 200){
                console.log(response);
                navigate("/");
            }else{
                console.log(response);
                alert("Email Already Exists!");
                navigate("/register");
            }}
          ) 
    }

    return(
        <Container className="Form my-5">
            <Stack gap={5}>
                <div className="Logo">
                    <Link to="/" className="link">
                        <h1>Atom</h1> 
                    </Link>
                </div>

                <div>
                    <div id="link-login">
                        <h1>Sign Up</h1>
                        <p>Don't have an account? <Link to="/register" className="link"><span>Sign up</span></Link></p>
                    </div>
                
                    <Form onSubmit={handleSubmit}>
                        <Stack gap={4}>
                            <FormGroup controlId="title">
                                <Form.Label>Email</Form.Label>
                                <Form.Control ref={emailRef} required />
                            </FormGroup>

                            <FormGroup controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control ref={passwordRef} required type="password" autoComplete="username" />
                            </FormGroup>

                            <Button type="submit" variant="primary">Sign in</Button>
                        </Stack>
                    </Form> 
                </div>
                
            </Stack>
              
        </Container>
    );
}