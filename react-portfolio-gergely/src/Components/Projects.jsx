import React, { useState } from "react";
import thinker from "./Pictures/undraw_code_thinking_re_gka2.svg";

function Projects() {
  //setting up states for the tab operators
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="banner projects">
      <h1>Projects</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quam
        officia voluptas distinctio deleniti sed? Harum voluptates eveniet
        pariatur. Doloribus nesciunt quia in maiores ex?
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
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
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
    </div>
  );
}

export default Projects;
