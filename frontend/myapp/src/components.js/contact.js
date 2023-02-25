import React from "react";
import App from "../App";

function Contact() {
  const sendEmail = (e) => {
    console.log("submitted ", e);
  };

  return (
    <App>
      <div id="contact section">
        <h2>Contact us</h2>
        <form onSubmit={sendEmail}>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name"></input>
          <br></br>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email"></input>
          <br />
          <br />
          <label for="message">Message:</label>
          <textarea id="message" name="message"></textarea>
          <br />
          <br />
          <button type="submit" value="Submit">
            Submit
          </button>
        </form>
      </div>
    </App>
  );
}

export default Contact;
