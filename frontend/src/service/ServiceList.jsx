import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from "../assets/images/weather (1).png";
import guidimg from "../assets/images/guide.png";
import customization from "../assets/images/customization.png";

const serviceData = [
    {
        imgUrl : weatherImg,
        title : "calculate wheather" ,
        desc : "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    },
    {
        imgUrl : guidimg,
        title : "best tour guid" ,
        desc : "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    },
    {
        imgUrl : customization,
        title : "customization" ,
        desc : "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    },
]

function ServiceList() {
    return (
        <>
            {
                serviceData.map((item,index)=>(
                    <Col lg="3" key={index} className='d-inline-block'>
                        <ServiceCard item={item}/>
                    </Col>
                ))
            }
            
        </>
    )
}

export default ServiceList