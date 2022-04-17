import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const [agree, setAgree] = useState(false);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );
    let errorMessage;
    let from = location.state?.from?.pathname || "/";
    if (error) {
        errorMessage = <div>
            <p>Error: {error.message}</p>
        </div>
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // console.log(email, password);
        signInWithEmailAndPassword(email, password);

    }
    const ResetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }
    if (user) {
        navigate(from, { replace: true });
    }
    const navigateRegister = () => {
        navigate(`/register`);
    }
    return (
        <div>
            <h2 className='text-primary text-center'>Please Login</h2>
            <Form onSubmit={handleFormSubmit} className='container w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check className={agree ? 'text-primary' : 'text-danger'} onClick={() => setAgree(!agree)} type="checkbox" label="Accept terms and conditions?" />
                </Form.Group>
                <Button disabled={!agree} variant="primary" type="submit">
                    Login
                </Button>
                <p className='my-2'>New to Thor-GYM? <Link className='text-primary text-decoration-none' to="/register" onClick={navigateRegister}>Please Register...</Link></p>

                <p className='my-2'>Forget your Password? <Button variant="link" className='text-primary text-decoration-none' onClick={ResetPassword}>Reset Password... </Button></p>
                <p className='text-danger'>{errorMessage}</p>
                <SocialLogin></SocialLogin>
            </Form>
        </div>
    );
};

export default Login;