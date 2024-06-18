import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar"; // Assuming Navbar component is created separately
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth/AuthContext";
// import beings from "./myImage.jpg"
import {
  registeredEvents,
  updateRegisteredEvents,
  eventList,
  updateEventList,
} from "../../utils/eventdatabase";
import "../styles/homepage.css";

const HomePage = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const updatedEventList = eventList.filter((event) => event.id !== id);
    updateEventList(updatedEventList);
    navigate("/");
  };

  const handleUnregister = (id) => {
    const ind = registeredEvents.findIndex((event) => event.id === id);
    const newEvent = {
      id: registeredEvents[ind].id,
      heading: registeredEvents[ind].heading,
      description: registeredEvents[ind].description,
      location: registeredEvents[ind].location,
      startDate: registeredEvents[ind].startDate,
      endDate: registeredEvents[ind].endDate,
    };
    const upRegList = registeredEvents.filter((event) => event.id !== id);
    updateRegisteredEvents(upRegList);

    eventList.push(newEvent);
    updateEventList(eventList);
    alert("Event unregistered Successfully!!");
    navigate("/");
  };

  return (
    <div>
      <Navbar />
      <div className="hero-section">
        <h1>Welcome to BE College EMS Portal!!</h1>
        {/* <img
          src={beings}
          alt="Background"
          className="background-image"
        /> */}
        
      </div>
      <div className="events-section">
        <div className="events-container">
          {currentUser && currentUser.role === "admin" && (
            <div className="create-event-section">
              <h2>Hello Admin, Want to create a event! Click Below</h2>
              <Link to="/create" className="create-event-link">
                Create Event
              </Link>
            </div>
          )}
          <h2 className="events-heading">Current Events</h2>
          {eventList.map((event) => (
            <div key={event.id} className="event-card">
              <h3 className="h3">{event.heading}</h3>
              <h4 className="h4">Venue: {event.location}</h4>
              <div className="venue-date">
                <h4>Start Date: {event.startDate}</h4>
                <h4>End Date: {event.endDate}</h4>
              </div>
              <p>{event.description}</p>
              {currentUser && currentUser.role === "student" && (
                <Link to={`/event/${event.id}`} className="regbutton">
                  Register
                </Link>
              )}
              {currentUser && currentUser.role === "admin" && (
                <div className="update-delete">
                  <Link to={`/update/${event.id}`} className="updateButton">
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(event.id)}
                    className="delButton"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div>
          {currentUser && currentUser.role === "student" && (
            <div className="events-container">
              <h2 className="events-heading">Registered Events</h2>

              {registeredEvents.length > 0 ? (
                registeredEvents.map((event) => (
                  <div key={event.id} className="event-card">
                    <h3 className="h3">{event.heading}</h3>
                    <h4 className="h4">Venue: {event.location}</h4>
                    <div className="venue-date">
                      <h4>Start Date: {event.startDate}</h4>
                      <h4>End Date: {event.endDate}</h4>
                    </div>
                    <p>{event.description}</p>
                    <button
                      onClick={() => handleUnregister(event.id)}
                      className="unregisterButton"
                    >
                      Unregister
                    </button>
                  </div>
                ))
              ) : (
                <p>No registered events yet</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
