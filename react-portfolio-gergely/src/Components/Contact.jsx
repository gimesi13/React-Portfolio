import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import inbox from "./Pictures/undraw_envelope_re_f5j4.svg";
import { SiMinutemailer } from "react-icons/si";

/* variants */
const animatedElement = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    transition: { type: "spring", bounce: 0.5, duration: 1 },
    opacity: 1,
  },
};

function Contact() {
  /* emailjs code*/
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a0zsakn",
        "template_l8p28wx",
        form.current,
        "g4PHWosCI3QMWwFrf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
      <form ref={form} onSubmit={sendEmail} className="contact-right">
        <h1>Get In Touch</h1>

        <h2>
          {" "}
          <SiMinutemailer /> gergely.gimesi@gmail.com
        </h2>

        <div className="contact-right-name">
          <input type="text" name="fistname" placeholder="First Name" />
          <input type="text" name="lastname" placeholder="Last Name" />
        </div>
        <div className="contact-right-email-phone">
          <input type="email" name="email" placeholder="Email" />
          <input type="tel" name="phone" placeholder="Phone No." />
        </div>
        <div className="contact-right-message">
          <textarea name="message" placeholder="Message" />
        </div>
        <div className="contact-right-send">
          <motion.input
            className="contact-right-send-input"
            type="submit"
            value="Send"
            whileHover={{ x: 10 }}
            whileTap={{ scale: 0.9 }}
          />
        </div>
      </form>
    </section>
  );
}

export default Contact;
