import React, { useState } from "react";
import thinker from "./Pictures/undraw_code_thinking_re_gka2.svg";
import { AnimatePresence, motion } from "framer-motion";
import Project from "./Project";
import dailyImg from "./Pictures/daily-quotes-image.PNG";

const projects = {
  project1: {
    name: "Daily Quotes",
    description:
      "react-app that can generate random wisdoms fetched from an API; stores information about them in a searchable library and in local storage",
    tech: "RESTful API, React, CSS ",
    link: "https://630f24bd5d2985782545567d--brilliant-semolina-fe6b3a.netlify.app/",
    thumbnail: dailyImg,
  },
  project2: { name: "React Todo", description: "todo list", tech: "React" },
};
function Projects() {
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

  const animateGrid = {
    hidden: { x: "100%", display: "none" },
    show: { x: 0, display: "grid" },
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
      {/* <motion.div className="projects-grids-container"> */}
      <AnimatePresence>
        <motion.div
          className="projects-grig tab-1"
          variants={animateGrid}
          initial={false}
          animate={activeTab === "tab1" ? "show" : "hidden"}
        >
          <Project project={projects.project1} />
          <Project project={{ projects }} />
          <Project project={{ projects }} />
          <Project project={{ projects }} />
          <Project project={{ projects }} />
          <Project project={{ projects }} />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          className="projects-grig tab-2"
          variants={animateGrid}
          initial={false}
          animate={activeTab === "tab2" ? "show" : "hidden"}
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
      </AnimatePresence>

      <motion.div
        className="projects-grig tab-3"
        variants={animateGrid}
        initial={false}
        animate={activeTab === "tab3" ? "show" : "hidden"}
      >
        <div className="thinker">
          <img className="thinker-svg" src={thinker} alt="thinker" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
          veritatis.
        </p>
      </motion.div>
      {/* </motion.div> */}
    </section>
  );
}

export default Projects;
