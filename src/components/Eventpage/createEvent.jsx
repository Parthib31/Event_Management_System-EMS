// EventForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { eventList } from '../../utils/eventdatabase';
import "../styles/createEvent.css";

const EventForm = () => {
  const [formData, setFormData] = useState({
    // heading: '',
    // startDate: '',
    // endDate: '',
    // location: '',
    // description: ''
    heading:'',
    startDate: '',
    endDate:'', 
    location: '',
    description: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      id: eventList.length + 1, // Generate unique ID for the new event
      ...formData
    };
    eventList.push(newEvent);
    alert("Event Created Successfully!!");
    navigate('/'); // Redirect to homepage after adding event
  };

  return (
    <div className='modal'>
    <div className='overlay'></div>
    <div className='modal-content'>
      <h2 className = "h2">Create New Event</h2>
      <form className = "create-event" onSubmit={handleSubmit}>
        <div>
          <label>Event Name:</label>
          <input type="text" name="heading" value={formData.heading} onChange={handleChange} className="input-field" required />
        </div>
        <div>
          <label>Start Date:</label>
          <input type="text" name="startDate" value={formData.startDate} onChange={handleChange} className="input-field" required />
        </div>
        <div>
          <label>End Date:</label>
          <input type="text" name="endDate" value={formData.endDate} onChange={handleChange} className="input-field" required />
        </div>
        <div>
          <label>Venue:</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} className="input-field" required />
        </div>
        <div>
          <label>Event Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} className="input-field" required />
        </div>
        <button className= "sub-button" type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
};

export default EventForm;
