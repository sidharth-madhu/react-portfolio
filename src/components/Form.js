import "./FormStyles.css"
import React from 'react'

function Form() {

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    alert("Form submitted successfully!");
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input type="text" required/>

        <label>Email</label>
        <input type="email" required />

        <label>Subject</label>
        <input type="text" required/>   

        <label>Message</label>
        <textarea rows="6" placeholder="Type your message here" required/>

        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form;
