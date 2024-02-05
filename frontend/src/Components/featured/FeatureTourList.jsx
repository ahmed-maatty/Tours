import React, { useEffect } from 'react';
import CardTours from '../../shared/CardTours';
import { Col } from 'reactstrap';
import {Oval} from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { getAllToursFunc } from '../../Redux/apiCalls/tripApiCall.js';

const FeatureTourList = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllToursFunc())
    },[])
    const {tours , loading} = useSelector( state => state.tour);
    
    return (
        <>
            {
                loading && (
                    <div className='d-flex align-items-center justify-content-center'>
                        <Oval color="#ff7e01" secondaryColor="#faa935"/>
                    </div>
                )
            }
            {
                tours?.map(item => (
                    <Col lg="3" key={item._id} className='mb-4'>
                        <CardTours item = {item} />
                    </Col>
                ))
            }
            
        </>
    )
}

export default FeatureTourList