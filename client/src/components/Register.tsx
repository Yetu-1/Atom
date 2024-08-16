import { FormEvent, useRef } from "react";
import { Button, Container, Form, FormGroup, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidV4 } from "uuid"
import "./Register.css"

export function Register() {

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordRef2 = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        let user_id =  uuidV4();
        let password1 = passwordRef.current!.value;
        let password2 = passwordRef2.current!.value;

        if(password1 === password2){
            let user = {username: emailRef.current!.value , password: passwordRef.current!.value, user_id: user_id};
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
        }else {
            alert("Password Mismatch!");
        }
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
                        <h1>Get Started</h1>
                        <p>Already have an account? <Link to="/login" className="link"><span>Sign in</span></Link></p>
                    </div>
                
                    <Form onSubmit={handleSubmit}>
                        <Stack gap={4}>
                            <FormGroup controlId="title">
                                <Form.Label>Email</Form.Label>
                                <Form.Control ref={emailRef} required autoComplete="username"/>
                            </FormGroup>

                            <FormGroup controlId="password1">
                                <Form.Label>Password</Form.Label>
                                <Form.Control ref={passwordRef} required type="password" autoComplete="new-password"/>
                            </FormGroup>

                            <FormGroup controlId="password2">
                                <Form.Label>Re-type password</Form.Label>
                                <Form.Control ref={passwordRef2} required type="password" autoComplete="new-password"/>
                            </FormGroup>

                            <Button type="submit" variant="primary">Sign up</Button>
                        </Stack>
                    </Form> 
                </div>
                
            </Stack>
              
        </Container>
    );
}