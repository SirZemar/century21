import React from "react";
import { heightNoNavbar } from "../../utils.styles";

const Blueprints: React.FC = () => {
  const srcBlueprints = `https://drive.google.com/file/d/1_XjH4C4RysYmFfvkAW1cNi3Ba8uQTTAj/preview`;
  return (
    <div
      style={{
        display: "block",
        height: heightNoNavbar("100vh"),
        width: "100vw",
      }}
    >
      <iframe src={srcBlueprints} height="100%" width="100%"></iframe>
    </div>
  );
};

export default Blueprints;
