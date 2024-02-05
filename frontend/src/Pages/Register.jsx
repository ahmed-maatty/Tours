import React, { useState , useEffect} from 'react'
import '../styles/Login.css';
import loginImg from "../assets/images/login.png";
import userIcon from "../assets/images/user.png";
import { Form , FormGroup , Container , Row , Col, Button } from "reactstrap";
import { useDispatch, useSelector } from 'react-redux';
import {Link , useNavigate} from "react-router-dom";
import { registerFunc } from '../Redux/apiCalls/authApiCall';
import { toast } from 'react-toastify';


function Register() {

  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [credintials , setCredintials] = useState({
    fname:"",
    lname:"",
    email:"",
    password:""
  })

  const handleChange = (e) => {
    setCredintials( prev => ({...prev , [e.target.id] : e.target.value}) )
  }

  const {success , message} = useSelector(state => state.auth.register);

  const submitHandler = async (e) => {
    e.preventDefault();
    if(credintials.fname === "") return toast.error("Enter Your First Name");
    if(credintials.lname === "") return toast.error("Enter Your Last Name");
    if(credintials.email === "") return toast.error("Enter Your Email");
    if(credintials.password === "") return toast.error("Enter Your password");
    dispatch(registerFunc(credintials));
    navigate('/login')
  }

  return (
    <section className='register'>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className=' register-container d-flex justify-content-center align-items-center'>
              <div className='loginImg'>
                <img src={loginImg} alt="loginImg" />
              </div>
              <div className="login-field register-field">
                <div className='user-icon-login-field'>
                  <img src={userIcon} alt="userIcon" />
                </div>
                <h2>register</h2>
                <Form onSubmit={submitHandler}>
                  <FormGroup className='d-flex justify-content-center mt-3'>
                      <input 
                        type="text"
                        id='fname'
                        placeholder='Enter Your Firstname'
                        onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup className='d-flex justify-content-center mt-3'>
                      <input 
                        type="text"
                        id='lname'
                        placeholder='Enter Your Lastname'
                        onChange={handleChange}
                    />
                  </FormGroup>
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
                  <Button type='submit' className='btn auth__btn login-btn mb-4'>Create</Button>
                </Form>
                <p className='register-new-account'>already have an account ? <br/> <Link to={'/login'}> login now </Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Register