import React from "react";

const HighlightText = ({text}) => {
  return (
    <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB]  font-bold">
      {" "}
      {text} 
    </span>
  );
};

export default HighlightText;
