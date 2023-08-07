import React from "react";
import { ProjectsContainer } from "./Projects.styles";
import { NavLink } from "react-router-dom";

const Projects: React.FC = () => {
  return (
    <ProjectsContainer>
      <div>Hello from projects</div>
      <NavLink to={"./1"}>Project 1</NavLink>
    </ProjectsContainer>
  );
};

export default Projects;
