import React from "react";
import { FiGithub } from "react-icons/fi";

const ButtonGit = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="button-box">
      <a onClick={() => openInNewTab("https://github.com/evewolfs/")}>
        <div className="button-header">
          <FiGithub size={20} className="m-2"/>{" "}
      
        </div>
      </a>
    </div>
  );
};

export default ButtonGit;
