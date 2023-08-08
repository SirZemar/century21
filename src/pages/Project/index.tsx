import React from "react";
import { HeroImage, ProjectContainer } from "./Project.styles";
import { useParams } from "react-router-dom";

const Project: React.FC = () => {
  const { projectId } = useParams();

  return (
    <ProjectContainer>
      <HeroImage />
    </ProjectContainer>
  );
};

export default Project;
