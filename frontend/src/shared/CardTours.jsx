import React from 'react'
import "./card-tour.css"
import { Card , CardBody } from 'reactstrap';
import {Link} from "react-router-dom" ;


const CardTours = ({item}) => {
    const { 
            _id ,
            title ,
            city ,
            price ,
            distance ,
            maxGroupSize ,
            desc ,
            reviews ,
            avgRating ,
            photo ,
            featured

        } = item ;
    return (
        <div className='tour-card'>
            <Card >
                <div className="tour-img">
                    <img src={photo.url} alt="tour-img" />
                    {featured && <span>Features </span>}
                </div>
                <CardBody>
                    <div className="card-top d-flex align-items-center justify-content-between">
                        <span className="tour-location d-flex align-items-center gap-1">
                            <i className="ri-map-pin-line"></i> {city}
                        </span>
                        <span className="tour-rating d-flex align-items-center gap-1">
                            <i className="ri-star-fill"></i> {avgRating}{" "}
                            <span>({reviews.length})</span>
                        </span>
                    </div>
                    <h5 className='tour-title'> <Link to={`/tours/${_id}`} > {title} </Link> </h5>
                    <div className="card-bottom d-flex align-items-center justify-content-between mt-3">
                        <h5>${price}  <span>/ per person </span> </h5>
                        <button className='btn booking__btn'>
                            <Link to={`/tours/${_id}`}> book now </Link>
                        </button>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default CardTours