import React from "react";
import { MdWorkOutline } from "react-icons/md";

const ButtonLi = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="inline-block  my-6">
      <a
        onClick={() =>
          openInNewTab("https://www.linkedin.com/in/%C3%A8ve-wolfs-b517966a/")
        }
      >
        <div className="button-header">
          <MdWorkOutline size={20} className="m-2"/>{" "}
    
        </div>
      </a>
    </div>
  );
};

export default ButtonLi;
