import React from 'react'
import {Routes , Route , Navigate} from "react-router-dom"
import Home from "../Pages/Home"
import Tours from "../Pages/Tours"
import ToursDetails from "../Pages/TourDetails"
import Login from "../Pages/Login"
import Register from "../Pages/Register"
import SearchResultList from "../Pages/SearchResultlist"
import ThankYou from '../Pages/ThankYou'
import About from '../Pages/About'
import Dashboard from '../Pages/Dashboard'
import { useSelector } from 'react-redux'
import NotFound from '../Pages/NotFound'


const Router = () => {
    const {user} = useSelector(state => state.auth);
    return (
        <Routes>
            <Route path='/' element = { <Navigate to='/home' /> } />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/tours' element={<Tours />} />
            <Route path='/tours/:id' element={<ToursDetails />}/>
            <Route path='/thank-you' element={<ThankYou />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element = {<Register />} />
            <Route path = '/tours/search' element = {<SearchResultList />}/>
            {
                user && user.role === "admin" && 
                (
                    <Route path='/dashboard' element={<Dashboard />} />
                )
            }
            <Route path='/*' element={<NotFound />}/>
        </Routes>
    )
}

export default Router