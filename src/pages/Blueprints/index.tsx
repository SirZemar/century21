import React from "react";
import { heightNoNavbar } from "../../utils.styles";
import { useParams } from "react-router-dom";

const Blueprints: React.FC = () => {

  const { blueprintId } = useParams();

  const BASE_URL = `https://drive.google.com/file/d/${blueprintId}`;
  const srcBlueprints = BASE_URL + `/preview`;
  return (
    <div
      style={{
        display: "block",
        height: heightNoNavbar("100vh"),
        width: "100vw",
      }}
    >
      <iframe
        title="Apartments blueprints"
        src={srcBlueprints}
        height="100%"
        width="100%"
      ></iframe>
    </div>
  );
};

export default Blueprints;
