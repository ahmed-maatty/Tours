import React, { useState ,useEffect } from 'react'
import '../styles/Login.css';
import {Link , useNavigate} from "react-router-dom";
import { Form , FormGroup , Container , Row , Col, Button } from "reactstrap";
import { loginFunc } from '../Redux/apiCalls/authApiCall';
import {useDispatch} from "react-redux";
import loginImg from "../assets/images/login.png";
import userIcon from "../assets/images/user.png";

const Login = () => {
  const [credintials , setCredintials] = useState({
    email : undefined ,
    password : undefined
  });

  const dispatch = useDispatch() ;
  const navigate = useNavigate() ;

  const handleChange = (e) => {
    setCredintials( prev => ({...prev , [e.target.id] : e.target.value}) )
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(loginFunc(credintials));
    navigate("/")
  }

  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);


  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className=' login-container d-flex justify-content-center align-items-center'>
              <div className='loginImg'>
                <img src={loginImg} alt="loginImg" />
              </div>
              <div className="login-field">
                <div className='user-icon-login-field'>
                  <img src={userIcon} alt="userIcon" />
                </div>
                <h2>login</h2>
                <Form onSubmit={submitHandler}>
                  <FormGroup className='d-flex justify-content-center mt-3'>
                    <input 
                      type="email"
                      id='email'
                      placeholder='Enter Your Email'
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup className='d-flex justify-content-center mt-3'>
                    <input 
                      type="password"
                      id='password'
                      placeholder='Enter Your Password'
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button type='submit' className='btn auth__btn login-btn mb-4'>Login</Button>
                </Form>
                <p className='register-new-account'>don't have an account ? <br/> <Link to={'/register'}> Register Now </Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Login