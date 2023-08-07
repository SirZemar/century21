import React from "react";
import { ProjectContainer } from "./Project.styles";
import { useParams } from "react-router-dom";

const Project: React.FC = () => {
  const { projectId } = useParams();

  return <ProjectContainer>Project number {projectId}</ProjectContainer>;
};

export default Project;
