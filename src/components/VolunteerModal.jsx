import React, { useState } from 'react';

const VolunteerModal = ({ isOpen, onClose, formData, onSubmit }) => {
  const [suggestion, setSuggestion] = useState('');

  const handleRequest = () => {
    // Prepare data to submit
    const requestData = {
      ...formData,
      volunteerName: formData.volunteerName,
      volunteerEmail: formData.volunteerEmail,
      suggestion,
      status: 'requested'
    };

    // Call the onSubmit function passed from the parent component
    onSubmit(requestData);
  };

  return (
    <div className={`modal ${isOpen ? 'open' : 'closed'}`}>
      <div className="modal-content">
        <h2>Be a Volunteer</h2>
        {/* Display read-only data from formData */}
        <p>Thumbnail: {formData.thumbnail}</p>
        <p>Post Title: {formData.title}</p>
        <p>Description: {formData.description}</p>
        <p>Category: {formData.category}</p>
        <p>Location: {formData.location}</p>
        <p>No. of Volunteers Needed: {formData.volunteersNeeded}</p>
        <p>Deadline: {formData.deadline}</p>
        <p>Organizer Name: {formData.organizer.name}</p>
        <p>Organizer Email: {formData.organizer.email}</p>
        <p>Volunteer Name (Read-only): {formData.volunteerName}</p>
        <p>Volunteer Email (Read-only): {formData.volunteerEmail}</p>
        
        {/* Editable Suggestion */}
        <textarea
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
          placeholder="Enter your suggestion"
        ></textarea>
        
        {/* Request Button */}
        <button onClick={handleRequest}>Request</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default VolunteerModal;
