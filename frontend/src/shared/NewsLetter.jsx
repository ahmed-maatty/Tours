import React from 'react';
import "./newsletter.css";
import {Col ,Row ,Container} from "reactstrap";
import touristImg from "../assets/images/male-tourist.png"


const NewsLetter = () => {
    return (
        <section className='newsLetter'>
            <Container>
                <Row className='align-items-center'>
                    <Col lg="6">
                        <h2 className='newsletter-title'>
                            subscribe now to get useful travelling information
                        </h2>
                        <div className="newsletter-subscribe d-flex align-items-center justify-content-between">
                            <input type="email" placeholder='enter your email' />
                            <button className="newsletter-btn btn">subscribe</button>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,adipisicing elit. Expeditaa,adipisicing elit.</p>
                    </Col>
                    <Col lg="6">
                        <div className="news-letter-img">
                            <img src={touristImg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default NewsLetter