import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/Homepage/homepage"
import EventPage from "../components/Eventpage/eventpage";
import EventForm from "../components/Eventpage/createEvent";
import UpdateEventPage from "../components/Eventpage/updateEvent";
import Login from "../components/Homepage/auth/login";
import Registration from "../components/Homepage/auth/register";
// import UserLogin from "../components/user/login";
// import UserRegister from "../components/user/register";

export default function MyRoutes(){
    return(
    <Routes>
        <Route path = "/" element = {<HomePage/>}/>
        <Route path = "/create" element = {<EventForm/>}/>
        <Route path = "/update/:eventId" element = {<UpdateEventPage/>}/>
        <Route path = "/event/:eventId" element = {<EventPage/>}/>
        {/* <Route path = "/login" element = {<Login/>}/>
        <Route path = "/register" element = {<Registration/>}/> */}
        {/* <Route path = "/login" element = {<UserLogin/>}/>
        <Route path = "/register" element = {<UserRegister/>}/> */}
    </Routes>
    );
}