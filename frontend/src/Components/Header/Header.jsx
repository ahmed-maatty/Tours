import React ,{useRef, useState}from 'react'
import "./Header.css";
import logo from "../../assets/images/logo.png";
import {Button} from 'reactstrap';
import { Link , NavLink ,useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import { logOutFunc } from '../../Redux/apiCalls/authApiCall';

const Nav_links = [
    {
        path : "/home",
        display : "Home"
    },
    {
        path : "/about",
        display : "About"
    },
    {
        path : "/tours",
        display : "Tours"
    },
]

function Header() {
    const {user} = useSelector(state => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch() ;

    const logout = () => {
        dispatch(logOutFunc());
        navigate("/")
    }

    const navigationRef = useRef(null);

    const [showMenu , setShowMenu] = useState(false);

    const showNavigation = () =>{
        navigationRef.current.classList.toggle('active');
        setShowMenu((prev) => !prev);
    }


    return (
        <header className="Header sticky-header">
                    <div className="nav-wrapper d-flex align-items-center justify-content-between">
                                        {/*====== Logo =====*/}
                        <div className="logo">
                            <img src={logo} alt="Logo" />
                        </div>
                                        {/*====== Menu =====*/}
                        <div className="navigation" ref={navigationRef}>
                            <ul className="menu d-flex align-items-center gap-5">
                                {
                                    Nav_links.map((item,index) => (
                                        <li className='menu-li' key={index}>
                                            <NavLink 
                                                to={item.path}
                                                className={classnav => classnav.isActive ? "active__link" : ""}
                                            >
                                                {item.display}
                                            </NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                                        {/*====== Auth-Buttons && mobile-Menu =====*/}
                        <div className="nav-right d-flex align-items-center gap-4">
                            <div className="auth-btns d-flex align-items-center gap-4">

                                {
                                    user ?
                                        <>
                                            <div className="dropdown">
                                                <span className="dropbtn d-flex justify-content-center align-items-center gap-2">
                                                    <h6 className='mb-0 profile-username' >{user.data.fname}</h6>
                                                    <img src={user.data.photo?.url} className='profile-photo' alt="" />
                                                </span>
                                                <div className="dropdown-content">
                                                    <button className='btn' onClick={logout}>Logout</button>
                                                    {
                                                        user.role === "admin" &&
                                                        (
                                                            <Link className='btn' to={'/dashboard'}>dashboard</Link>
                                                        )
                                                    }
                                                </div>
                                                </div>
                                            
                                        </>
                                        :
                                        <>
                                            <Button className='btn secondary__btn'>
                                                <Link to="/login">Login</Link>
                                            </Button>
                                            <Button className='btn primary__btn register-btn'>
                                                <Link to="/register">Register</Link>
                                            </Button>
                                        </>
                                }
                            </div>
                            <span className="mobile-menu" onClick={showNavigation}>
                                {
                                    showMenu ? <i class="ri-close-line"></i> : <i className="ri-menu-line"></i>
                                }
                                
                            </span>
                        </div>
                    </div>
            </header>
    )
}

export default Header