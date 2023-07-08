import React, { useState } from "react";
import "./Contact.css";
import {
  validateEmail,
  validateInput,
  validateName,
} from "../../util/validate";
import { useNotificationContext } from "../../util/customHooks";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { updateNotification } = useNotificationContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    // validating user input
    // Name
    let valResult;
    valResult = validateName(name);
    console.log(valResult);
    if (valResult.ok === "false") return updateNotification(valResult.msg);

    // Email
    valResult = validateEmail(email);
    if (valResult.ok === "false") return updateNotification(valResult.msg);

    // message
    valResult = validateInput(message);
    if (valResult.ok === "false") return updateNotification(valResult.msg);

    // Reset form fields and set submitted state to true
    setName("");
    setEmail("");
    setMessage("");
    setSubmitted(true);
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      {submitted ? (
        <p>Thank you for contacting us! We'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="contactForm">
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
