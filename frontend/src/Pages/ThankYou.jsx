import React from 'react';
import "../styles/Thankyou.css"
import {Col ,Row , Container} from "reactstrap";
import {Link} from "react-router-dom";

const ThankYou = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg="12">
                        <div className='thank-you text-center'>
                            <span className='thank-you-icon'><i className="ri-checkbox-circle-line"></i></span>
                            <h1 className='thank-title mt-4'>thank you</h1>
                            <h4 className='mt-4'>your tour is booked</h4>
                            <button className='btn primary__btn mt-4'>
                                <Link to = '/home' > go to home </Link>
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ThankYou