import React from "react";
import emailjs from "emailjs-com";
import "./Email.css";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();
    alert("Your message send. Thank you 👍");

    emailjs
      .sendForm(
        "service_k4c5zjk",
        "template_nobzyp8",
        e.target,
        "user_m3kwBZBQKUj0lJiOhs8fa"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="getintouch ">
      <div className="contact-me">
        <h1>GET IN TOUCH</h1>
        <p>Urgench, Uzbekistan</p>
        <p>Orzu street, 44</p>
        <p>+998 94 3127774</p>
        <div className="links">
          <a href="https://t.me/MERN_programmer">
            <i className="fab fa-telegram fa-2x"></i>
          </a>
          <a href="https://www.linkedin.com/in/jahongir-xoʻjamuratov-a242a9203">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://github.com/jahongir7">
            <i className="fab fa-github fa-2x"></i>
          </a>
        </div>
      </div>
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <input type="text" name="user_name" placeholder="Name" />
        <input type="email" name="user_email" placeholder="Email" />
        <textarea name="message" placeholder="Message" />
        <div className="submit-wrap">
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
}
