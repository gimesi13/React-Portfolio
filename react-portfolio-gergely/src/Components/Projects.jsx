import React, { useState } from "react";
import thinker from "./Pictures/undraw_code_thinking_re_gka2.svg";
import { AnimatePresence, motion } from "framer-motion";
import Project from "./Project";
import dailyImg from "./Pictures/daily-quotes-image.PNG";
import todoImg from "./Pictures/react-todo-image.PNG";
import framerImg from "./Pictures/framer-motion-image.PNG";
import tailwindImg from "./Pictures/tailwind-image.PNG";
import ghmJsImg from "./Pictures/ghm-js-image.PNG";

const projects = {
  project1: {
    name: "Daily Quotes",
    description:
      "React App that can generate random wisdoms fetched from an API; stores information about them in a searchable library and in local storage",
    tech: "RESTful API, React, CSS ",
    link: "https://630f24bd5d2985782545567d--brilliant-semolina-fe6b3a.netlify.app/",
    thumbnail: dailyImg,
    github:
      "https://github.com/gimesi13/Learning-React/tree/main/wishes-project",
  },
  project2: {
    name: "React Todo",
    description: "Todo List with local storage built with React",
    tech: " React, CSS ",
    link: "https://630f46dba4f93a128ec222d8--whimsical-cascaron-343463.netlify.app/",
    thumbnail: todoImg,
    github: "https://github.com/gimesi13/Learning-React/tree/main/react-todo",
  },
  project3: {
    name: "Framer Motion",
    description: "Some basic Framer Motion animations in a simle project",
    tech: " React, CSS, Framer Motion ",
    link: "https://630f4991a273c6006e1ffa19--neon-dusk-d9a33c.netlify.app/",
    thumbnail: framerImg,
    github:
      "https://github.com/gimesi13/Framer-Motion-React/tree/master/framer-motion/framer-motion-2/framer-animations-2",
  },
  project4: {
    name: "Tailwind CSS",
    description: "Homepage built with Tailwind and React",
    tech: " React, Tailwind.css, Typed",
    link: "https://630f4e1ef2160c0058fda2cf--magical-kangaroo-e27e00.netlify.app/",
    thumbnail: tailwindImg,
    github:
      "https://github.com/gimesi13/Learning-React/tree/main/learning-tailwind-css",
  },
  project5: {
    name: "Hostel Website Vanilla Javascript",
    description: "One page website for a ski-hostel",
    tech: "Javascript, Jquery, HTML, CSS",
    link: "https://630f4fcb1146540082c5b2bf--transcendent-kringle-11b49f.netlify.app/",
    thumbnail: ghmJsImg,
    github: "https://github.com/gimesi13/GuestHouse-Mitterbach--Vanilla-JS-",
  },
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
          <Project project={projects.project2} />
          <Project project={projects.project3} />
          <Project project={projects.project4} />
          <Project project={projects.project5} />
          {/*
          <Project project={projects.project6} /> */}
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
          <p>More projects coming soon... 😊</p>
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
        <p>No more projects to show...</p>
      </motion.div>
      {/* </motion.div> */}
    </section>
  );
}

export default Projects;
