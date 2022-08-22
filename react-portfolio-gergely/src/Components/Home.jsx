import React from "react";
import { motion } from "framer-motion";
import programmer from "./Pictures/undraw_programming_re_kg9v.svg";
import { BsArrowRightCircle } from "react-icons/bs";

function Home({ setLocation }) {
  return (
    <section className="banner home-section" id="home">
      <div className="home-left">
        <div className="home-left-welcome">Welcome to my Portfolio</div>
        <h1>Hi! I'm Gergely!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At laborum
          sit nam labore sapiente commodi pariatur architecto? Explicabo nisi
          ipsam totam? Consectetur aliquam accusamus sit assumenda quia. Eius,
          rerum quo!
        </p>
        <div className="home-left-connect">
          Lets Connect <BsArrowRightCircle className="right-arrow-svg" />
        </div>
      </div>
      <div className="home-right">
        <img className="programmer-svg" src={programmer} alt="programmer" />
      </div>
    </section>
  );
}

export default Home;
