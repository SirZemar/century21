import React from "react";
import { ProjectsContainer } from "./Projects.styles";
import { useParams } from "react-router-dom";

const Projects: React.FC = () => {
  const { projectId } = useParams();
  return (
    <ProjectsContainer>
      <div>Hello from project number {projectId}</div>
    </ProjectsContainer>
  );
};

export default Projects;
