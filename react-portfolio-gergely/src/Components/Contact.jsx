import React from "react";
import inbox from "./Pictures/undraw_mobile_inbox_re_ciwq.svg";

function Contact() {
  return (
    <section className="banner contact" id="contact">
      <div className="contact-left">
        <img className="inbox-svg" src={inbox} alt="inbox" />
      </div>
      <div className="contact-right">
        <h1>Get In Touch</h1>
        <div className="contact-right-name">
          <div>First Name</div>
          <div>Last Name</div>
        </div>
        <div className="contact-right-email-phone">
          <div>Email Address</div>
          <div>Phone No.</div>
        </div>
        <div className="contact-right-message">
          <div>Message</div>
        </div>
        <div className="contact-right-send">Send</div>
      </div>
    </section>
  );
}

export default Contact;
