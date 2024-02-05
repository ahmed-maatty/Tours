import React , {useState} from 'react'
import "./search-bar.css"
import {Col,Form,FormGroup} from "reactstrap";
import { toast } from 'react-toastify';
import {useDispatch} from "react-redux" ;
import { getTourBySearchFunc } from '../Redux/apiCalls/tripApiCall';



function SearchBar() {
    const [city , setCity] = useState('') ;
    const [distance , setDistance] = useState(0);
    const [maxGroupSize , setMaxGroupSize] = useState(0);
    const dispatch = useDispatch();

    const searchhandler = () => {
        if( city === '' || distance === 0 || maxGroupSize === 0 ) return toast.error("All fields is Required",{position:'top-center'});
        dispatch(getTourBySearchFunc(city , distance ,maxGroupSize));
    }

    return (
        <div className="search-bar">
            <Col lg="12">
                <Form className='d-flex align-items-center gap-4'>
                    <FormGroup className='d-flex gap-3 form-group form-group-fast'>
                        <span><i className="ri-map-pin-line"></i></span>
                        <div>
                            <h6>location</h6>
                            <input
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                type="text" 
                                placeholder='Where Are You going?'
                            />
                        </div>
                    </FormGroup>
                    <FormGroup className='d-flex gap-3 form-group form-group-fast'>
                        <span><i className="ri-map-pin-time-line"></i></span>
                        <div>
                            <h6>distance</h6>
                            <input
                                value={distance}
                                onChange={(e) => setDistance(e.target.value)}
                                type="number" 
                                placeholder='Distance k/m'
                            />
                        </div>
                    </FormGroup>
                    <FormGroup className='d-flex gap-3 form-group form-group-last'>
                        <span><i className="ri-group-line"></i></span>
                        <div>
                            <h6>Max people</h6>
                            <input
                                value={maxGroupSize}
                                onChange={(e) => setMaxGroupSize(e.target.value)}
                                type="number" 
                                placeholder='0'
                            />
                        </div>
                    </FormGroup>
                    <span className='search-icon' type = 'submit' onClick={searchhandler}>
                        <i className="ri-search-line"></i>
                    </span>
                </Form>
            </Col>
        </div>
        
    )
}

export default SearchBar