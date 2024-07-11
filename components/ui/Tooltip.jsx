import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  return (
    <div className="group relative flex items-center">
      {children}

      <span className="absolute bottom-20 left-10 scale-0 transition-all rounded-lg group-hover:scale-100 mb-2 w-64 bg-gray-900 text-white text-sm p-2 shadow-lg">
        {text}
      </span>
    </div>
  );
};

export default Tooltip;
