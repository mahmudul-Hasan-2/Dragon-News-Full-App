import RightSide from "@/Components/HomePage/RightSide";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 container mx-auto mt-10 gap-5 px-2">
      <div className="col-span-1 lg:col-span-8 order-2 lg:order-1">{children}</div>
      <div className="col-span-1 lg:col-span-4 order-1 lg:order-2">
        <RightSide></RightSide>
      </div>
    </div>
  );
};

export default layout;
