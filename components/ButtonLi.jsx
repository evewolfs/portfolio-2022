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
        <div className=" flex cursor-pointer align-middle bg-white rounded-3xl px-4 shadow">
          <MdWorkOutline size={12} className="mt-2.5" />{" "}
          <div className="text-xs font-bold p-2">LINKEDIN</div>
        </div>
      </a>
    </div>
  );
};

export default ButtonLi;
