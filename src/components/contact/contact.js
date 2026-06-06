import React, { useRef } from "react";
import "./contact.css";
import cont from "../../assets/contact.jpg";
import emailjs from "@emailjs/browser";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pb8vrij",
        "template_9sp3x6l",
        form.current,
        "nGCue3ReGkGvcqaAH"
      )
      .then(
        () => {
          alert("Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error);
          alert("Failed to send message");
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <h2 className="contact-title">
          Contact Me
        </h2>

        <div className="contact-content">

          {/* Left Side */}
          <div className="contact-image">
            <img src={cont} alt="Contact" />
          </div>

          {/* Right Side */}
          <div className="contact-form-container">

            <h3>Let's Work Together 🚀</h3>

            <p>
              Have a project in mind or want to discuss an opportunity?
              Feel free to reach out.
            </p>

            <form
              ref={form}
              className="contact-form"
              onSubmit={sendEmail}
            >

              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
              />

              <input
                type="text"
                name="title"
                placeholder="Subject"
                required
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                required
              ></textarea>
                            <button type="submit">
                Send Message
              </button>

            </form>

            <div className="social-icons">

                <a
                  href=" https://share.google/N0XIwYQU4IIj5n7EY"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/pankaj4186"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>

                <a href="pankajme07@gmail.com">
                  <FaEnvelope />
                </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;