import React from "react";
import { SlBubble } from "react-icons/sl";

const ButtonContact = () => {
  return (
    <div className="button-box">
      <a href="mailto:info@evewolfs.net">
      <div className="button-header">
          <SlBubble size={20} className="m-2 items-center"/>{" "}
        
        </div>
      </a>
    </div>
  );
};

export default ButtonContact;
