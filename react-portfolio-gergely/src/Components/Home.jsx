import React from "react";
import programmer from "./Pictures/undraw_programming_re_kg9v.svg";

function Home() {
  return (
    <section className="banner" id="home">
      <div className="home-left">
        <div>Welcome to my Portfolio</div>
        <h1>Hi! I'm Gergely!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At laborum
          sit nam labore sapiente commodi pariatur architecto? Explicabo nisi
          ipsam totam? Consectetur aliquam accusamus sit assumenda quia. Eius,
          rerum quo!
        </p>
        <div>Lets Connect ico</div>
      </div>
      <div className="home-right">
        <img className="programmer-svg" src={programmer} alt="programmer" />
      </div>
    </section>
  );
}

export default Home;
