import React from 'react'
import { Container , Row} from "reactstrap";

const NotFound = () => {
    return (
        <>
            <section>
                <Container>
                    <Row>
                            <h1 
                                className='text-center text-capitalize'
                            >
                                this page
                                <span 
                                    className='d-block mt-3'
                                    style={{color:'#ff7e01'}}
                                >Not Found 404</span>
                            </h1>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default NotFound