import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom"
import "../styles/Dashbord.css"
import { useDispatch, useSelector } from 'react-redux';
import { createTourFunc, deleteUserFunc, getAllBooksFunc, getAllUsersFunc, updateUserFunc } from '../Redux/apiCalls/adminApiCall';
import {
        Button,
        Modal,
        ModalHeader,
        ModalBody,
        ModalFooter,
        Input,
        Form,
        Container,
        Row,
        Col
    } from 'reactstrap';
import { toast } from 'react-toastify';






function Dashboard() {
    const dispatch = useDispatch() ;
    const navigate = useNavigate()
    const {user} = useSelector(state => state.auth);
    const [book , setBook] = useState(true);
    const [users , setUsers] = useState(false);
    const [tours, setTours] = useState(false);
    const [file , setfile] = useState(null);
    const [title , setTitle] = useState('');
    const [city , setCity] = useState('');
    const [address , setAddress] = useState('');
    const [desc , setDesc] = useState('');
    const [distance , setDistance] = useState(0);
    const [price , setPrice] = useState(0);
    const [maxGroupSize , setMaxGroupSize] = useState(0);

    const openBook = (e) => {
        setBook(true);
        setUsers(false);
        setTours(false);
    }

    const openUsers = (e) => {
        setUsers(true);
        setBook(false);
        setTours(false);
    }

    const openTours = (e) => {
        setTours(true);
        setBook(false);
        setUsers(false);
    }

    const {books} = useSelector(state => state.admin);
    const myUsers = useSelector(state => state.admin.users);

    useEffect(()=>{
        dispatch(getAllBooksFunc());
        dispatch(getAllUsersFunc());
        window.scrollTo(0,0);
    },[])


    const deleteUserHandler = (id) => {
        dispatch(deleteUserFunc(id))
    }

    const [modal, setModal] = useState(false);
    const [unmountOnClose, setUnmountOnClose] = useState(true);
    const [role , setRole] = useState('');
    const [userId , setUserId] = useState('')

    const toggle = (userUpdatedId) => {
        setUserId(userUpdatedId);
        setModal(!modal);
    };
    const updateUserRoleHandler = () => {
        dispatch(updateUserFunc(userId , {role}))
        setModal(!modal);
    }

    const createTourHandler = (e) => {
        e.preventDefault();
        if(file === null) return toast.error("Please, Upload Tour Photo");
        if(!title) return toast.error("Please, Enter Tour Title");
        if(!city) return toast.error("Please, Enter Tour City");
        if(!address) return toast.error("Please, Enter Tour Address");
        if(!desc) return toast.error("Please, Enter Tour Description");
        if(!maxGroupSize) return toast.error("Please, Enter Tour Max Group Size");
        if(!distance) return toast.error("Please, Enter Tour Distance");
        if(!price) return toast.error("Please, Enter Tour Price");

        const formData = new FormData();
        formData.append("image" , file);
        formData.append("title" , title);
        formData.append("city" , city);
        formData.append("address" , address);
        formData.append("desc" , desc);
        formData.append("maxGroupSize" , maxGroupSize);
        formData.append("distance" , distance);
        formData.append("price" , price);
        dispatch(createTourFunc(formData));
        navigate("/")
    }


    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col lg='3'>
                            <div className='dashboard-nav py-3 px-2'>
                                <div className='admin-details pb-3'>
                                    <span className='d-block dashboard-photo text-center'>
                                        <img src={user.data.photo.url} alt="" />
                                    </span>
                                    <span className='d-block my-3'>
                                        <p className='text-center' style={{color:'#afafaf'}}>{user.role}</p>
                                    </span>
                                    <span className='d-block my-3'>
                                        <h5 className='text-center'>{user.data.username}</h5>
                                    </span>
                                </div>
                                <div>
                                    <button
                                        className= {
                                            book ? 
                                                'd-block text-center fs-5 text-capitalize my-3 py-2 btn w-100 active'
                                            : 
                                                'd-block text-center fs-5 text-capitalize my-3 py-2 btn w-100'
                                        }
                                        onClick={openBook}
                                    > books </button>
                                    <button
                                        className={
                                            users ? 
                                                'd-block text-center fs-5 text-capitalize my-3 py-2 btn w-100 active'
                                            : 
                                                'd-block text-center fs-5 text-capitalize my-3 py-2 btn w-100'
                                        }
                                        onClick={openUsers}
                                    > users </button>
                                    <button
                                        className={
                                            tours ?
                                                'd-block text-center fs-5 text-capitalize my-3 py-2 btn w-100 active'
                                            :
                                                'd-block text-center fs-5 text-capitalize my-3 py-2 btn w-100'
                                        }
                                        onClick={openTours}
                                    > tours </button>
                                </div>
                            </div>
                        </Col>
                        {
                            book && 
                            (
                                <Col lg='9'>
                                    <div className='book-container'>
                                        {
                                            books?.map((book , index) => (
                                                <div key={index} className='book-details-container text-capitalize'>
                                                    <span className="d-block">
                                                        <p className='my-1'>visitor email :</p>
                                                        {book.userEmail}
                                                    </span>
                                                    <span className="d-block">
                                                        <p className='my-1'>tour name :</p>
                                                        {book.tourName}
                                                    </span>
                                                    <span className="d-block">
                                                        <p className='my-1'>visitor name :</p>
                                                        {book.fullname}
                                                    </span>
                                                    <span className="d-block">
                                                        <p className='my-1'>phone number :</p>
                                                        {book.phone}
                                                    </span>
                                                    <span className="d-block">
                                                        <p className='my-1'>guest number :</p>
                                                        {book.guestSize}
                                                    </span>
                                                    <span className="d-block">
                                                        <p className='my-1'>Book Date :</p>
                                                        { new Date(book.bookAt).toDateString() }
                                                    </span>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </Col>
                            )
                        }
                        {
                            users && 
                            (
                                <Col lg='9' >
                                    <div className="users-container">
                                        {
                                            myUsers.map((user , index) => (
                                                <div className='users-details ' key={index}>
                                                    <span className='d-block email'>{user.email}</span>
                                                    <span className='d-block name'>{user.username}</span>
                                                    <span className='d-block role'>{user.role}</span>
                                                    <span className='d-block icons'>
                                                        <button
                                                            onClick={() => toggle(user._id)}
                                                            className='editUserIcon btn'
                                                        ><i className="ri-edit-line"></i></button>
                                                        <button
                                                            onClick={() => deleteUserHandler(user._id)}
                                                            className='deleteUserIcon btn'
                                                        ><i className="ri-delete-bin-line"></i></button>
                                                    </span>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div>
                                        <Form inline onSubmit={(e) => e.preventDefault()}>
                                        </Form>
                                        <Modal isOpen={modal} toggle={toggle}>
                                            <ModalHeader toggle={toggle} className='text-capitalize'>edit user role</ModalHeader>
                                            <ModalBody>
                                            <Input
                                                type="text"
                                                placeholder="You Want This Account Admin Or User"
                                                value={role}
                                                onChange={(e) => setRole(e.target.value)}
                                            />
                                            </ModalBody>
                                            <ModalFooter>
                                            <Button className='modal-accept' color="primary" onClick={()=> updateUserRoleHandler()}>
                                                Update
                                            </Button>{' '}
                                            <Button color="secondary" onClick={toggle}>
                                                Cancel
                                            </Button>
                                            </ModalFooter>
                                        </Modal>
                                    </div>
                                </Col>
                            )
                        }
                        {
                            tours && 
                            (
                                <Col lg='9'>
                                    <form action="" className='create-tour-form d-flex align-items-center flex-column gap-4 justify-content-center'>
                                        <div className="profile-image-wrapper mb-3">
                                            <img 
                                                src={ file ? URL.createObjectURL(file) : '' }
                                                alt=""
                                                className="profile-image" 
                                            />
                                            <form >
                                                <abbr title="choose profile photo" className='text-center'>
                                                    <label
                                                        className='icon-upload'
                                                    >
                                                        upload Photo
                                                    </label>
                                                </abbr>
                                                <input 
                                                    type="file" 
                                                    name="file" 
                                                    id="file" 
                                                    style={{display:'none'}}
                                                    onChange={(e)=> setfile(e.target.files[0])}
                                                />
                                                <label className='upload-profile-photo-btn'  htmlFor="file">
                                                    <i className="ri-upload-line fs-6"></i>
                                                </label>
                                            </form>
                                        </div>
                                        <div className='text-capitalize d-flex align-items-center gap-4 justify-content-center w-100 input-dashboard-container'>
                                            <span className="d-block w-50">
                                                <label htmlFor="" className='d-block my-3 text-center fs-5'>tour Tilte </label>
                                                <input 
                                                    type="text"
                                                    className='dashboard-input'
                                                    placeholder='Tour Title'
                                                    value={title}
                                                    onChange={(e) => setTitle(e.target.value)}
                                                />
                                            </span>
                                            <span className="d-block w-50">
                                                <label htmlFor="" className='d-block my-3 text-center fs-5'>city name</label>
                                                <input 
                                                    type="text"
                                                    className='dashboard-input'
                                                    placeholder='City Name'
                                                    value={city}
                                                    onChange={ (e) => setCity(e.target.value)}
                                                />
                                            </span>
                                        </div>
                                        <div className='text-capitalize d-flex align-items-center gap-4 justify-content-center w-100 input-dashboard-container'>
                                            <span className="d-block w-50">
                                                <label htmlFor="" className='d-block my-3 text-center fs-5'>address</label>
                                                <input 
                                                    type="text"
                                                    className='dashboard-input'
                                                    placeholder='Adress'
                                                    value={address}
                                                    onChange={(e)=> setAddress(e.target.value)}
                                                />
                                            </span>
                                            <span className="d-block w-50">
                                                <label htmlFor="" className='d-block my-3 text-center fs-5'>tour price</label>
                                                <input 
                                                    type="number"
                                                    className='dashboard-input'
                                                    placeholder='Tour Address'
                                                    value={price}
                                                    onChange={(e)=>setPrice(e.target.value)}
                                                />
                                            </span>
                                        </div>
                                        <div className='text-capitalize d-flex align-items-center gap-4 justify-content-around w-100 input-dashboard-container'>
                                            <span className="d-block w-50">
                                                <label htmlFor="" className='d-block my-3 text-center fs-5'>group size</label>
                                                <input 
                                                    type="number"
                                                    className='dashboard-input'
                                                    placeholder='Group Size'
                                                    value={maxGroupSize}
                                                    onChange={(e)=>setMaxGroupSize(e.target.value)}
                                                />
                                            </span>
                                            <span className="d-block w-50">
                                                <label htmlFor="" className='d-block my-3 text-center fs-5'>distance</label>
                                                <input 
                                                    type="text"
                                                    className='dashboard-input'
                                                    placeholder='Distance'
                                                    value={distance}
                                                    onChange={ (e) => setDistance(e.target.value)}
                                                />
                                            </span>
                                        </div>
                                        <div className='text-capitalize d-flex align-items-center gap-4 justify-content-center w-100 input-dashboard-container'>
                                            <span className="d-block w-50">
                                                <label htmlFor="" className='d-block my-3 text-center fs-5'>tour description </label>
                                                <textarea
                                                    className='dashboard-input desc-text-area'
                                                    placeholder='Tour Description'
                                                    value={desc}
                                                    onChange={ (e)=> setDesc(e.target.value)}
                                                />
                                            </span>
                                        </div>
                                        <button className='btn create-tour-btn' onClick={createTourHandler}>
                                            create tour
                                        </button>
                                    </form>
                                </Col>
                            )
                        }
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Dashboard