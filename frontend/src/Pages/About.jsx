import React, { useEffect } from 'react'
import "../styles/Home.css"
import {Col ,Row , Container} from "reactstrap"
import Testimonials from '../Components/testimonials/Testimonials'
import NewsLetter from '../shared/NewsLetter'
import Subtitle from '../shared/Subtitle'
import experienceimg from "../assets/images/experience.png"
import aboutImg from "../assets/images/tour-img03.jpg"

const About = () => {
    
    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);
    return (
        <>
            <section>
                <Container>
                        <Subtitle subtitle={'about us'} />
                    <Row>
                        <Col lg="6">
                            <h2 className='about-title'>How did we become <br /> where we are today</h2>
                            <p className='about-desc'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus cumque dolorum non iure? Rem, soluta? Consequatur, quasi magnam? Placeat optio fugit expedita amet accusamus provident adipisci natus nemo sed nesciunt.
                                Maxime ex in at, neque soluta ab ipsa illum aliquid architecto expedita sed. Accusantium ipsum quis ipsa doloremque molestias eius, excepturi vitae ullam obcaecati, nemo eos nulla hic mollitia ea!
                                Voluptas assumenda perspiciatis, incidunt ex, tenetur minima at accusantium facilis et eum quia maxime deserunt fuga. Nostrum, alias. Voluptatibus necessitatibus id excepturi voluptatum natus, esse molestias quibusdam veniam minus vel.
                                Fugit quaerat excepturi fuga eveniet corrupti minus autem ipsum deserunt eligendi ex molestias ipsa soluta ad totam quis dolorum alias pariatur ipsam at deleniti vitae delectus, accusamus necessitatibus tempora? Odit!
                            </p>
                        </Col>
                        <Col lg="6">
                            <div className="about-img">
                                <img src={aboutImg} alt="aboutImg" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col lg="6">
                        <Subtitle subtitle={'experience'}/>
                        <h2 className='experience-title'> with our all experience <br /> we will serve you </h2>
                        <p className='experience-desc'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
                            Inventore alias cum amet optio earum eveniet              
                        </p>
                        <div className='d-flex justify-content-start align-items-center gap-4'>
                            <span className="experience-box d-block mt-3 ms-2">
                            <span className='counter-box'>12k+</span>
                            <h6 className='mt-3'>successful trip</h6>
                            </span>
                            <span className="experience-box d-block mt-3 ms-3">
                            <span className='counter-box'>2k+</span>
                            <h6 className='mt-3'>regular clients</h6>
                            </span>
                            <span className="experience-box d-block mt-3 ms-3">
                            <span className='counter-box'>15</span>
                            <h6 className='mt-3'>years experience</h6>
                            </span>
                        </div>
                        </Col>
                        <Col lg="6">
                        <div className="experience-img">
                            <img src={experienceimg} alt="experience-img" />
                        </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                        <Subtitle subtitle={'testimonials'} />
                        <h2 className="testimonials-title">what is our fans say about us</h2>
                        </Col>
                        <Col lg="12">
                        <Testimonials />
                        </Col>
                    </Row>
                </Container>
            </section>
            <NewsLetter />
        </>
    )
}

export default About