import React, { useEffect, useState } from 'react'
import "../styles/ToursDetails.css"
import avatar from "../assets/images/avatar.jpg"
import Booking from '../Components/booking/Booking';
import NewsLetter from '../shared/NewsLetter';
import { Container , Row , Col , Form , ListGroup } from "reactstrap";
import { useNavigate, useParams } from 'react-router-dom';
import {Oval} from 'react-loader-spinner';
import {useDispatch, useSelector} from "react-redux";
import { createReviewFunc, getSpecificTourFunc } from '../Redux/apiCalls/tripApiCall.js';
import { toast } from 'react-toastify';
import { deleteTourFunc } from '../Redux/apiCalls/adminApiCall.js';



function TourDetails() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(()=>{
      window.scrollTo(0,0);
      dispatch(getSpecificTourFunc(id));
    },[id]);

  const {singleTour , loading} = useSelector(state => state.tour);
  const {user} = useSelector(state => state.auth)
  const optionsDate = {day : 'numeric' , month : 'long' ,year : 'numeric' };
  const [rating , setRating] = useState(0) ;
  const [reviewText , setReviewText] = useState('') ;
  const submitHandler = (e) => {
    e.preventDefault();
    if(!user) return toast.error("Please, Sign In" ,{position : "top-center"});
    if(!reviewText) return toast.error("Please, Write A Review" ,{position : "top-center"});
    if(!rating) return toast.error("Please, Rate The Tour" ,{position : "top-center"});
    dispatch(createReviewFunc(id,{rating , reviewText}));
  };

  const deleteTourHandler = (e) => {
    e.preventDefault();
    dispatch(deleteTourFunc(id));
  }

  return (
    <>
      <section>
        <Container>
          {
              singleTour ?
              (
                  <Row>
                        <Col lg="8">
                          <div className="tour-content">
                            <img src={singleTour.photo.url} alt="" />
                            <div className="tour-info mt-4">
                              <h2>{singleTour.title}</h2>
                              <div className="d-flex align-items-center gap-4 mb-4 address">
                                <span>
                                  <i className="ri-map-pin-line"></i> {singleTour.address}
                                </span>
                              </div>
                              <div className="d-flex align-items-center gap-4 mb-4 info">
                                <span>
                                  <i className="ri-map-pin-line"></i> {singleTour.city}
                                </span>
                                <span>
                                  <i className="ri-money-dollar-circle-line"></i> 99 / per person
                                </span>
                                <span>
                                <i className="ri-map-pin-time-line"></i> {singleTour.distance} k/m
                                </span>
                                <span>
                                  <i className="ri-group-line"></i> {singleTour.maxGroupSize} people
                                </span> 
                              </div>
                              <div className="tour-content-desc">
                                <h5 className='mb-4'>description</h5>
                                <span>this is the description</span>
                              </div>
                              {
                                user && user.role === "admin" && 
                                  (
                                    <div className='d-flex justify-content-center mt-5 '>
                                      <button
                                      type='submit'
                                        className='text-capitalize btn delete-tour-btn'
                                        onClick={deleteTourHandler}
                                      >
                                        Delete the tour
                                      </button>
                                    </div>
                                  )
                              }
                            </div>
                          </div>
                          {/* ============ reviews Section ============ */}
                          <div className="reviews mt-4">
                            <h4>reviews ({singleTour.reviews?.length} reviews)</h4>
                            <Form onSubmit={submitHandler}>
                              <div className="d-flex align-items-center gap-4 rating-group">
                                <span onClick={()=>setRating(1)}>
                                  1 <i className="ri-star-fill star"></i>
                                </span>
                                <span onClick={()=>setRating(2)}>
                                  2 <i className="ri-star-fill star"></i>
                                </span>
                                <span onClick={()=>setRating(3)}>
                                  3 <i className="ri-star-fill star"></i>
                                </span>
                                <span onClick={()=>setRating(4)}>
                                  4 <i className="ri-star-fill star"></i>
                                </span>
                                <span onClick={()=>setRating(5)}>
                                  5 <i className="ri-star-fill star"></i>
                                </span>
                              </div>
                              <div className="review-input mt-4 d-flex justify-content-between align-items-center">
                                <input 
                                  type="text"
                                  placeholder='share your thoughts'
                                  value={reviewText}
                                  onChange={(e)=>setReviewText(e.target.value)}
                                  required
                                  />
                                <button
                                  type='submit'
                                  className='btn primary__btn text-white'
                                  onClick={submitHandler}
                                > Submit </button>
                              </div>
                            </Form>
                            <ListGroup className='mt-4 px-4'>
                              {
                                singleTour.reviews?.map((review ,index) => (
                                  <div className="review-item d-flex align-items-center" key={index}>
                                    <img src={avatar} alt="avatar" className='mx-3' />
                                    <div className="w-100">
                                      <h5>{review?.username}</h5>
                                      <p className='d-flex justify-content-between align-items-center'>
                                        <span>
                                          {
                                            new Date().toLocaleDateString('en-US',optionsDate)
                                          }
                                        </span>
                                        <span>{review?.rating} <i className="ri-star-fill star"></i></span>
                                      </p>
                                      <h6>{review?.reviewText}</h6>
                                    </div>
                                  </div>
                                ))
                              }
                            </ListGroup>
                          </div>
                        </Col>
                        <Col lg="4">
                          <Booking tour = {singleTour} />
                        </Col>
                  </Row>
                )
              :
                loading &&
                (
                  <div className='d-flex align-items-center justify-content-center my-5'>
                      <Oval color="#ff7e01" secondaryColor="#faa935"/>
                  </div>
                )
          }
        </Container>
      </section>
      <NewsLetter />
    </>
  )
}

export default TourDetails