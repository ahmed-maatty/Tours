import React, { useState } from 'react'
import "./Booking.css"
import {ListGroup , ListGroupItem , Form , FormGroup , Button} from "reactstrap"
import { useNavigate } from 'react-router-dom'
import {toast} from "react-toastify"
import { useDispatch, useSelector } from 'react-redux'
import { createBookFunc } from '../../Redux/apiCalls/tripApiCall'

const Booking = ({tour}) => {

    const dispatch = useDispatch();

    const {price , reviews , title } = tour;
    const {user} = useSelector(state => state.auth);

    const [book , setBook] = useState({
        userEmail :  user ?  user.data.email : "",
        tourName :title,
        fullname : "",
        phone : "",
        guestSize : 1,
        bookAt : ""
    });

    const setBookData = (key , value) =>{
        setBook((prev) => ({
            ...prev,
            [key] : value
        }))
    }

    const navigate = useNavigate();

    const serviceFee = 10 ;
    const totalAmount = parseInt( Number(price) * Number(book.guestSize) + Number(serviceFee));

    const submitHandler = (e) => {
        e.preventDefault();
        if(!user) return toast.error("Please, Sign In" , {position :'top-center'});
        if(book.fullname === "")return toast.error("Please, Enter Your Full Name" , {position :'top-center'});
        if(book.phone === "")return toast.error("Please, Enter Your Phone Number" , {position :'top-center'});
        if(book.bookAt === "")return toast.error("Please, Enter Visit Date" , {position :'top-center'});
        dispatch(createBookFunc(book));
        navigate('/thank-you');
    }

    return (
        <div className='booking'>
            <div className="booking-top d-flex align-items-center justify-content-between mb-3">
                <span className='price-span'>${price} <span> / per Person</span></span>
                <span>{reviews?.length} reviews</span>
            </div>
                <h5 className='mb-3'>information</h5>
            <Form className='booking-form' onSubmit={submitHandler}>
                <FormGroup>
                    <input 
                        type="text" 
                        className='full-name'
                        placeholder='Full Name'
                        value={book.fullname}
                        onChange={ (e) => setBookData('fullname' , e.target.value)}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <input 
                        type="number" 
                        className='phone'
                        placeholder='Phone'
                        value={book.phone}
                        onChange={ (e) => setBookData('phone' , e.target.value)}
                        required
                    />
                </FormGroup>
                <FormGroup className='d-flex align-items-center justify-content-evenly'>
                    <input 
                        type="date" 
                        className='date'
                        value={book.bookAt}
                        onChange={(e) => setBookData('bookAt' , e.target.value)}
                        required
                    />
                    <input 
                    type="number" 
                    className='guest'
                    placeholder='Guest'
                    value={book.guestSize}
                    onChange={(e) => setBookData('guestSize' , e.target.value)}
                    required
                />
                </FormGroup>
            </Form>
            <div>
                <ListGroup className='mt-3 booking-list'>
                    <ListGroupItem className='list-item d-flex align-items-center justify-content-between'>
                        <span className='d-block'> ${price} <i className="ri-close-line"></i> per person </span>
                        <span className='d-block span-list mt-2'>${price} </span>
                    </ListGroupItem>
                    <ListGroupItem className='list-item d-flex align-items-center justify-content-between'>
                        <span className='d-block'> service changee</span>
                        <span className='d-block span-list mt-2'>${serviceFee}</span>
                    </ListGroupItem>
                    <ListGroupItem className='list-item d-flex align-items-center justify-content-between'>
                        <span className='d-block'>total</span>
                        <span className='d-block span-list mt-2'>${totalAmount}</span>
                    </ListGroupItem>
                </ListGroup>
                <Button className='btn primary__btn mt-3 w-100 list-btn' onClick={submitHandler} >Book Now</Button>
            </div>
        </div>
    )
}

export default Booking
