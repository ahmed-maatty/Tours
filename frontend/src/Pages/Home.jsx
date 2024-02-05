import React, { useEffect } from 'react'
import "../styles/Home.css"
import {Col ,Row , Container} from "reactstrap"
import heroImage from "../assets/images/hero-img01.jpg"
import heroImage2 from "../assets/images/hero-img02.jpg"
import heroVid from "../assets/images/hero-video (1).mp4"
import WorldImage from "../assets/images/world.png"
import experienceimg from "../assets/images/experience.png"
import Subtitle from '../shared/Subtitle'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../service/ServiceList'
import FeatureTourList from '../Components/featured/FeatureTourList'
import GalleryImagesMasnory from '../Components/gallery-images/galleryImages'
import Testimonials from '../Components/testimonials/Testimonials'
import NewsLetter from '../shared/NewsLetter'

function Home() {
  
  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);

  return (
    <>
              {/* ============ Hero Section ============ */}
      <section>
        <Container>
          <Row>
            <Col lg = "6" >
                <div className="hero-content">

                  <div className="hero-subtitle d-flex align-items-center">
                    <Subtitle subtitle = {'Know Before You Go'} />
                    <img src={WorldImage} alt="WorldImage" />
                  </div>

                  <h1>
                    Travelling opens the door to creating 
                    <span className='highlight'> memorise </span>
                  </h1>

                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Inventore alias cum amet optio earum eveniet velit placeat 
                    at quas dolor praesentium officia rem repellendus labore 
                    illum accusantium quasi, aliquam quod!
                  </p>
                  
                </div>
            </Col>
            <Col lg = '2'>
              <div className="hero-box-img">
                <video src={heroVid} controls/>
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero-box-img mt-4">
                <img src={heroImage} alt="" />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero-box-img mt-5">
                <img src={heroImage2} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row className='align-items-center'>
            <Col lg="3">
              <h5 className="service-subtitle">what we are ?</h5>
                <h2 className="service-title">we offer our best service</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
                    {/* ============ features Section ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className='mt-5'>
              <Subtitle subtitle={'Explore'}/>
              <h2 className="feature-tour-title">our feature tours</h2>
            </Col>
            <FeatureTourList />
          </Row>
        </Container>
      </section>
                          {/* ============ Experience Section ============ */}
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
                          {/* ============ Gallery Section ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={'gallery'}/>
              <h2 className='gallery-title'>visit our customer tour gallery</h2>
            </Col>
            <Col lg="12">
              <GalleryImagesMasnory />
            </Col>
          </Row>
        </Container>
      </section>
                          {/* ============ testimonials Section ============ */}
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

export default Home