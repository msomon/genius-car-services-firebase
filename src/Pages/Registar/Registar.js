import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import CommonLogin from '../Login/CommonLogin/CommonLogin';


const Registar = () => {
  const emailRef = useRef('')
  const passwordRef = useRef('')
const navigate= useNavigate();
const [
  createUserWithEmailAndPassword,
  error,user
] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true });
const [updateProfile,updateError]= useUpdateProfile(auth)
 const [agree,setAgree]=useState();

const handleSubmit = async(event)=>{
event.preventDefault();
const name =event.target.name.value ;
const email =event.target.email.value;
const password = event.target.password.value;

 await createUserWithEmailAndPassword(email, password)
 await updateProfile ({displayName:name})
 alert('update profile ')
  navigate('/login')

}


const navigateRegistar=()=>{
navigate('/login')
}
  return (
    <div className='container w-50 mx-auto mt-3'>
      <h1 className='text-primary text-center'> Please Registar </h1>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" name='name' placeholder=" Your name" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} name='email' type="email" placeholder="Enter email" required />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passwordRef} type="password" name='password' placeholder="Password" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check className={agree ? "ps-2 text-primary": "ps-2 text-danger"} onClick={()=>setAgree(!agree)} type="checkbox" label="Accept Genius Car Terms and conditions" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Registar
  </Button>
</Form>
     <p>Already have An Account ? <Link to='/login' className='text-danger text-decoration-none' onClick={navigateRegistar}>Please Login </Link></p>
     
 <CommonLogin></CommonLogin>
    </div>
  );
};

export default Registar;