import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { eventList } from '../../utils/eventdatabase';
import { updateEventList } from '../../utils/eventdatabase';
import "../styles/updateEvent.css"

const UpdateEventPage = () => {
  let { eventId } = useParams();
  eventId = Number(eventId);
  const navigate = useNavigate();
  console.log(eventId);

  const [event, setEvent] = useState(null);

  // Fetch the event details based on the event ID
  useEffect(() => {
    const fetchEvent = () => {
      const foundEvent = eventList.find(event => event.id === eventId);
      setEvent(foundEvent);
    };

    fetchEvent();
  }, [eventId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const handleSubmit = () => {
    // Update the event details in the event list
    const indexToUpdate = eventList.findIndex(item => item.id === eventId);
    if (indexToUpdate !== -1) {
      // Create a copy of the event list
      let updatedEventList = [...eventList];
      // Update the event at the found index
      updatedEventList[indexToUpdate] = event;
      // Update the event list in the eventList.js file
      updateEventList(updatedEventList);
      // Now, log the updated event list to verify if it has been updated
      console.log('Updated event list:', updatedEventList);
      // Redirect back to the homepage after updating

      alert("Event Updated Successfully!!");
      navigate('/');
    } else {
      console.error('Event not found in the event list');
    }
  };

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    // <div>
    //   <h2>Update Event</h2>
    //   <form onSubmit={handleSubmit}>
    //     {/* Render the event form with prefilled data */}
    //     {/* For example, assuming event has properties like title, description, date, location, etc. */}
    //     <label>Title:</label>
    //     <input type="text" name="title" value={event.title} />
    //     <label>Description:</label>
    //     <textarea name="description" value={event.description} />
    //     {/* Add more form fields as needed */}
    //     <button type="submit">Update Event</button>
    //   </form>
    // </div>

    <div className='modal'>
    <div className='overlay'></div>
    <div className='modal-content'>
      <h2 className='h2'>Update Event</h2>
      <form className='update-event' onSubmit={handleSubmit}>
        <div>
          <label>Event Name:</label>
          <input type="text" name="heading" value={event.heading} onChange={handleChange} className="input-field" required />
        </div>
        <div>
          <label>Start Date:</label>
          <input type="text" name="startDate" value={event.startDate} onChange={handleChange} className="input-field" required />
        </div>
        <div>
          <label>End Date:</label>
          <input type="text" name="endDate" value={event.endDate} onChange={handleChange} className="input-field" required />
        </div>
        <div>
          <label>Venue:</label>
          <input type="text" name="location" value={event.location} onChange={handleChange} className="input-field" required />
        </div>
        <div>
          <label>Event Description:</label>
          <textarea name="description" value={event.description} onChange={handleChange} className="input-field" required />
        </div>
        <button className='sub-button' type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
};

export default UpdateEventPage;
