import React from 'react';
import Slider from "react-slick";
import av1 from "../../assets/images/ava-1.jpg"
import av2 from "../../assets/images/ava-2.jpg"
import av3 from "../../assets/images/ava-3.jpg"
import "../../styles/Home.css"


const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay : true,
        swipeToSlide : true,
        speed: 1000,
        autoplaySpeed : 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive : [
            {
                breakpoint : 992,
                settings : {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: true,
                },
            },
            {
                breakpoint : 576,
                settings : {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }
        ]
    };

    return (
        <Slider {...settings} >
            <div className="testimonials py-4 px-3">
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nobis minima illum quaerat laborum id praesentium alias, impedit
                    perspiciatis aliquam doloribus in sunt tempore nesciunt ullam dolor facere 
                    expedita quam dolore!
                </p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img 
                        src={av1}
                        alt="Customer"
                        className='w-25 h-25 rounded-2'
                    />
                    <div>
                        <h5 className='mb-0 mt-2'>john doe</h5>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
            <div className="testimonials py-4 px-3">
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nobis minima illum quaerat laborum id praesentium alias, impedit
                    perspiciatis aliquam doloribus in sunt tempore nesciunt ullam dolor facere 
                    expedita quam dolore!
                </p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img 
                        src={av2}
                        alt="Customer"
                        className='w-25 h-25 rounded-2'
                    />
                    <div>
                        <h5 className='mb-0 mt-2'>lia franken</h5>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
            <div className="testimonials py-4 px-3">
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nobis minima illum quaerat laborum id praesentium alias, impedit
                    perspiciatis aliquam doloribus in sunt tempore nesciunt ullam dolor facere 
                    expedita quam dolore!
                </p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img 
                        src={av3}
                        alt="Customer"
                        className='w-25 h-25 rounded-2'
                    />
                    <div>
                        <h5 className='mb-0 mt-2'>john doe</h5>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
            <div className="testimonials py-4 px-3">
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nobis minima illum quaerat laborum id praesentium alias, impedit
                    perspiciatis aliquam doloribus in sunt tempore nesciunt ullam dolor facere 
                    expedita quam dolore!
                </p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img 
                        src={av2}
                        alt="Customer"
                        className='w-25 h-25 rounded-2'
                    />
                    <div>
                        <h5 className='mb-0 mt-2'>lia franken</h5>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default Testimonials