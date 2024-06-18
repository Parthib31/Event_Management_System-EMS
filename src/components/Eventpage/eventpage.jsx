// import React, { useState } from 'react';
// import { useParams, useLocation, useNavigate} from 'react-router-dom';
// import { eventList, updateEventList, registeredEvents, updateRegisteredEvents } from '../../utils/eventdatabase';

// const EventPage = (props) => {
//   const { eventId } = useParams();
//   const numId = Number(eventId);
//   const navigate = useNavigate();
//   // const location = useLocation();

//   // const { state } = props.location;
//   // const  addRegisteredEvent  = location.state.addRegisteredEvent;

//   // Retrieve the function based on the key
//   // const addRegisteredEvent = location.state && location.state[addRegisteredEventKey];

//   // Find the event with the matching ID
//   const event = eventList.find(eventItem => eventItem.id === numId);

//   // State for registration form fields
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     contactNumber: ''
//     // Add more fields as needed (e.g., address, college name, etc.)
//   });

//   // Handle form field changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle registration submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const regEvent = {
//       id: event.id, // Use the same ID as the event being registered for
//       heading: event.heading, // Use the same heading as the event being registered for
//       description: event.description,
//       location : event.location,
//       date : event.date,
//     };
//     // Call the addRegisteredEvent function passed through URL parameters with the registered event data
//     registeredEvents.push(regEvent);
//     updateRegisteredEvents(registeredEvents);
//     console.log(registeredEvents);

//     const updatedEventList = eventList.filter((ev) => ev.id !== numId);
//     console.log(updatedEventList);
//     // Update the eventList
//     updateEventList(updatedEventList);
//     // Redirect back to homepage after registration
//     navigate('/');
//   };

//   if (!event) {
//     return <div>Event not found</div>;
//   }

//   return (
//     <div>
//       <h2>{event.heading}</h2>
//       <p>{event.description}</p>

//       {/* Registration form */}
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input type="text" name="name" value={formData.name} onChange={handleChange} />
//         </label>
//         <label>
//           Email:
//           <input type="email" name="email" value={formData.email} onChange={handleChange} />
//         </label>
//         <label>
//           Contact Number:
//           <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
//         </label>
//         {/* Add more form fields here as needed */}
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default EventPage;

// // import React, { useState } from 'react';
// // import { useParams, useLocation, useNavigate } from 'react-router-dom';

// // const EventPage = () => {
// //   const { eventId } = useParams();
// //   const numId = Number(eventId);
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   // Retrieve the addRegisteredEvent function from the URL parameters
// //   const addRegisteredEvent = JSON.parse(decodeURIComponent(new URLSearchParams(location.search).get('addRegisteredEvent')));

// //   // State for registration form fields
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     contactNumber: ''
// //     // Add more fields as needed (e.g., address, college name, etc.)
// //   });

// //   // Handle form field changes
// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   // Handle registration submission
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Create a new event object with registration data
// //     const registeredEvent = {
// //       id: numId,
// //       // Add additional fields as needed (e.g., name, email, contactNumber)
// //       ...formData // Add form data to the registered event
// //     };
// //     // Call the addRegisteredEvent function with the registered event data
// //     addRegisteredEvent(registeredEvent);
// //     // Redirect back to homepage after registration
// //     navigate('/');
// //   };

// //   return (
// //     <div>
// //       <h2>Event Details</h2>
// //       {/* Add event details here */}
// //       <form onSubmit={handleSubmit}>
// //         <label>
// //           Name:
// //           <input type="text" name="name" value={formData.name} onChange={handleChange} />
// //         </label>
// //         <label>
// //           Email:
// //           <input type="email" name="email" value={formData.email} onChange={handleChange} />
// //         </label>
// //         <label>
// //           Contact Number:
// //           <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
// //         </label>
// //         {/* Add more form fields here as needed */}
// //         <button type="submit">Register</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default EventPage;

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  eventList,
  updateEventList,
  registeredEvents,
  updateRegisteredEvents,
} from "../../utils/eventdatabase";
import "../styles/eventpage.css";

const EventPage = () => {
  const { eventId } = useParams();
  const numId = Number(eventId);
  const navigate = useNavigate();

  const event = eventList.find((eventItem) => eventItem.id === numId);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    address: "",
    collegeName: "",
    enrollmentNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const regEvent = {
      id: event.id,
      heading: event.heading,
      description: event.description,
      location: event.location,
      startDate: event.startDate,
      endDate : event.endDate,
      ...formData,
    };
    registeredEvents.push(regEvent);
    updateRegisteredEvents(registeredEvents);

    const updatedEventList = eventList.filter((ev) => ev.id !== numId);
    updateEventList(updatedEventList);
    alert("Registered Successfully!!");

    navigate("/");
  };

  if (!event) {
    return <div className="event-details">Event not found</div>;
  }

  return (
    <div className="registration">
      <div className="event-details">
        <h2>{event.heading}</h2>
        <p>{event.description}</p>
      </div>

      <form onSubmit={handleSubmit} className="registration-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input-field"
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
            required
          />
        </label>
        <label>
          Contact Number:
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className="input-field"
            required
          />
        </label>
        <label>
          Address:
          <input
            type="tel"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="input-field"
            required
          />
        </label>
        <label>
          College Name:
          <input
            type="tel"
            name="collegeName"
            value={formData.collegeName}
            onChange={handleChange}
            className="input-field"
            required
          />
        </label>
        <label>
          Enrollment Number:
          <input
            type="tel"
            name="enrollmentNumber"
            value={formData.enrollmentNumber}
            onChange={handleChange}
            className="input-field"
            required
          />
        </label>
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default EventPage;
