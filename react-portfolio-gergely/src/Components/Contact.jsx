import React from "react";
import { motion } from "framer-motion";
import inbox from "./Pictures/undraw_mobile_inbox_re_ciwq.svg";

const animatedElement = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    transition: { type: "spring", bounce: 0.5, duration: 1 },
    opacity: 1,
  },
};

function Contact() {
  return (
    <section className="banner contact">
      <div className="navlink" id="contact" />

      <motion.div
        className="contact-left"
        variants={animatedElement}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.3 }}
      >
        <img className="inbox-svg" src={inbox} alt="inbox" />
      </motion.div>
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
