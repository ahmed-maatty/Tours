import React,{useState} from 'react';
import {Col , Row , Container} from "reactstrap";
import CommonSection from '../shared/CommonSection';
import {useLocation} from "react-router-dom";
import CardTours from '../shared/CardTours';
import NewsLetter from "../shared/NewsLetter"

function SearchResultlist() {
  const location = useLocation();
  const [data] = useState(location.state);
  console.log(data)

  return (
    <>
      <CommonSection title={'Tours Search Result'} />
      <section>
        <Container>
          <Row>
            {
              data.length === 0 ? 
              <h4 className='text-center'>not Found !</h4> :
              data.map(tour => (
                <Col lg='3' key={tour._id}>
                  <CardTours item={tour}/>
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>
      <NewsLetter />
    </>
  )
}

export default SearchResultlist;