import React, { useState } from "react";
import thinker from "./Pictures/undraw_code_thinking_re_gka2.svg";
import { AnimatePresence, motion } from "framer-motion";
import Project from "./Project";

function Projects({ setLocation }) {
  //setting up states for the tab operators
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = ["tab1", "tab2", "tab3"];

  const animateTab = {
    inactive: {
      clipPath: "circle(0% at 50% 50%)",
      transition: { duration: 0.5 },
    },
    active: {
      clipPath: "circle(70.7% at 50% 50%)",
      transition: { duration: 0.5 },
    },
  };

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
        {tabs.map((tab) => {
          return (
            <motion.div
              className="tab"
              key={tab}
              initial={false}
              animate={activeTab === tab ? "active" : "inactive"}
              onClick={() => {
                setActiveTab(tab);
              }}
            >
              {tab}
              <motion.div
                className="tab-background"
                variants={animateTab}
              ></motion.div>
            </motion.div>
          );
        })}
      </div>
      <AnimatePresence>
        {activeTab === "tab1" && (
          <motion.div
            className="projects-grig tab-1"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1, display: "grid" }}
          >
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeTab === "tab2" && (
          <motion.div
            className="projects-grig tab-2"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1, display: "grid" }}
          >
            <div className="thinker">
              <img className="thinker-svg" src={thinker} alt="thinker" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A
              voluptatibus blanditiis nihil non, iste ipsam perferendis debitis
              nulla! Quam, autem.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {activeTab === "tab3" && (
        <motion.div
          className="projects-grig tab-3"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1, display: "grid" }}
        >
          <div className="thinker">
            <img className="thinker-svg" src={thinker} alt="thinker" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
            veritatis.
          </p>
        </motion.div>
      )}
    </section>
  );
}

export default Projects;
