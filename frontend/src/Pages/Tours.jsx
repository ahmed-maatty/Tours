import React, { useEffect, useState } from 'react'
import "../styles/Tours.css"
import CommonSection from '../shared/CommonSection'
import {Container,Row,Col} from "reactstrap"
import SearchBar from "../shared/SearchBar";
import CardTours from "../shared/CardTours";
import NewsLetter from "../shared/NewsLetter"
import {useSelector , useDispatch} from "react-redux" 
import {Oval} from 'react-loader-spinner';
import { getAllToursFunc, getToursCountFunc } from '../Redux/apiCalls/tripApiCall';



function Tours() {
  const [pageCount , setPageCount] = useState(0);
  const [page , setPage] = useState(0);

  const dispatch = useDispatch();
  const {tours , loading , toursCount , searchedTour} = useSelector(state => state.tour);
  
  useEffect(()=>{
    const pages = Math.ceil( toursCount / 8 );
    setPageCount(pages);
    window.scrollTo(0,0);
    dispatch(getAllToursFunc(page));
    dispatch(getToursCountFunc());
  },[page , toursCount]);




  return (
    <>
      <CommonSection title={'all tours'} />
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <SearchBar />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            {
              loading && (
                <div className='d-flex align-items-center justify-content-center'>
                    {<Oval color="#ff7e01" secondaryColor="#faa935"/>}
                </div>
              )
            }
            {
              searchedTour ?
                (
                  searchedTour?.map((tour,index) => (
                    <Col lg='3' key={index} className='mb-5'>
                      <CardTours item = {tour} />
                    </Col>
                  ))
                )
              :
                (
                  tours?.map((tour,index) => (
                    <Col lg='3' key={index} className='mb-5'>
                      <CardTours item = {tour} />
                    </Col>
                  ))
                )
            }
          <Col lg="12">
            <div className="pagination d-flex justify-content-center align-items-center mt-4 gap-3">
              {
                [...Array(pageCount).keys()].map((num)=>(
                  <span key = {num} onClick = { () => setPage(num) } 
                    className={page === num ? "active-page" : ''}
                  >
                    {num + 1}
                  </span>
                ))
              }
            </div>
          </Col>
          </Row>
        </Container>
      </section>
      <NewsLetter />
    </>
  )
}

export default Tours