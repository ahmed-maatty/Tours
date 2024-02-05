import React from 'react';
import "./Footer.css";
import {Link} from "react-router-dom";
import { Container , Row , Col , ListGroup , ListGroupItem } from "reactstrap";
import logoImg from "../../assets/images/logo.png";


function Footer() {
    
    const quick_links = [
        {
            path : "/home",
            display : "Home"
        },
        {
            path : "/about",
            display : "About"
        },
        {
            path : "/tours",
            display : "Tours"
        },
    ]

    const quick_links2 = [
        {
            path : "/gallery",
            display : "Gallery"
        },
        {
            path : "/login",
            display : "Login"
        },
        {
            path : "/register",
            display : "Register"
        },
    ]

    const year = new Date().getFullYear()

    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg="3">
                        <div className="footer-logo">
                            <img src={logoImg} alt="logo" />
                        </div>
                        <p className='footer-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, maxime.</p>
                        <div className='social-footer'>
                            <span className='m-2'><i className="ri-youtube-line"></i></span>
                            <span className='m-2'><i className="ri-github-fill"></i></span>
                            <span className='m-2'><i className="ri-facebook-circle-fill"></i></span>
                            <span className='m-2'><i className="ri-instagram-line"></i></span>
                        </div>
                    </Col>
                    <Col lg="3">
                        <h6 className='footer-link-title'>dicover</h6>
                        <ListGroup className='footer-list'>
                            {
                                quick_links.map((item , index)=>(
                                    <ListGroupItem key={index}>
                                        <Link to={item.path}>{item.display}</Link>
                                    </ListGroupItem>
                                ))
                            }
                        </ListGroup>
                    </Col>
                    <Col lg="3">
                        <h6 className='footer-link-title'>quick links</h6>
                        <ListGroup className='footer-list'>
                            {
                                quick_links2.map((item , index)=>(
                                    <ListGroupItem key={index}>
                                        <Link to={item.path}>{item.display}</Link>
                                    </ListGroupItem>
                                ))
                            }
                        </ListGroup>
                    </Col>
                    <Col lg="3">
                        <h6 className='footer-link-title'> contact </h6>
                        <div className='footer-contact'>
                            <span className='d-block mb-3'>
                                <span className='span-icon'><i className="ri-map-pin-line"></i> address : </span>
                                <span className='span-text'>Cairo Egypt</span>
                            </span>
                            <span className='d-block mb-3'>
                                <span className='span-icon'><i className="ri-mail-line"></i> email : </span>
                                <span className='span-text'>example@example.com</span>
                            </span>
                            <span className='d-block mb-3'>
                                <span className='span-icon'><i className="ri-phone-fill"></i> phone : </span>
                                <span className='span-text'>010********</span>
                            </span>
                        </div>
                    </Col>
                    <Col lg="12">
                        <p className='copy-write'> copyright {year}, coded by ahmed M3atty</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer