import React from "react";
import { heightNoNavbar } from "../../utils.styles";
import { BluePrints } from "../../documents";

const Blueprints: React.FC = () => {
  return (
    <div
      style={{
        display: "block",
        height: heightNoNavbar("100vh"),
        width: "100vw",
      }}
    >
      <iframe src={BluePrints} width="100%" height="100%"></iframe>
      {/* <iframe
        src="https://publuu.com/flip-book/212947/510774/page/1?embed"
        width="100%"
        height="100%"
        allow="clipboard-write"
        className="publuuflip"
      ></iframe> */}
    </div>
  );
};

export default Blueprints;
