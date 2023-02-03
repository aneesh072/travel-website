import React from 'react';
import Address from '../assets/icons/location.png';
import Phone from '../assets/icons/phone.png';
import Email from '../assets/icons/email.png';

const Contact = () => {
  return (
    <div className="contact" id='contact'>
      <h1>Contact Us</h1>

      <div className="contacts">
        <div className="contact-form">
          <form>
            <label>Full Name</label>
            <input type="text" placeholder="Name" />

            <label>Email Address</label>
            <input type="text" placeholder="Email" />

            <label>Subject</label>
            <input type="text" placeholder="Subject" />

            <label>Message</label>
            <textarea placeholder="Message" cols="30" rows="10"></textarea>
            <button>Submit</button>
          </form>
        </div>
        <div className="contact-description">
          <div className="details">
            <div className="address">
              <img src={Address} alt="" />
              <p>Address: George St, Sydney, NSW</p>
            </div>
            <div className="phone">
              <img src={Phone} alt="" />
              <p>04-5555-5555</p>
            </div>
            <div className="email">
              <img src={Email} alt="" />
              <p>info@website.com</p>
            </div>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.8865255785117!2d151.20469631637107!3d-33.86681518065678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae40f34a650b%3A0xa9f854cb1d458b5c!2s333%20George%20St%2C%20Sydney%20NSW%202000!5e0!3m2!1sen!2sau!4v1675385397152!5m2!1sen!2sau"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="map"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
