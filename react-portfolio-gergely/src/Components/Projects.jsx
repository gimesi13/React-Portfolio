import React, { useState } from "react";
import thinker from "./Pictures/undraw_code_thinking_re_gka2.svg";
import { motion } from "framer-motion";
import Project from "./Project";

function Projects({ setLocation }) {
  //setting up states for the tab operators
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <section className="banner projects">
      <div className="navlink" id="projects" />

      <h1>Projects</h1>
      <p>
        Building real, functioning applications plays a major role in my
        learning process. Some I made to help small Businesses, some just for
        fun. Check them out:
      </p>
      <div className="tabs">
        <div
          onClick={() => {
            setActiveTab("tab1");
          }}
        >
          tab1
        </div>
        <div
          onClick={() => {
            setActiveTab("tab2");
          }}
        >
          tab2
        </div>
        <div
          onClick={() => {
            setActiveTab("tab3");
          }}
        >
          tab3
        </div>
      </div>
      {activeTab === "tab1" && (
        <div className="projects-grig tab-1">
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      )}

      {activeTab === "tab2" && (
        <div className="projects-grig tab-2">
          <div className="thinker">
            <img className="thinker-svg" src={thinker} alt="thinker" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            voluptatibus blanditiis nihil non, iste ipsam perferendis debitis
            nulla! Quam, autem.
          </p>
        </div>
      )}

      {activeTab === "tab3" && (
        <div className="projects-grig tab-3">
          <div className="thinker">
            <img className="thinker-svg" src={thinker} alt="thinker" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
            veritatis.
          </p>
        </div>
      )}
    </section>
  );
}

export default Projects;
