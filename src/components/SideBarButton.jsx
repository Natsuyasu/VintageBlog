import React from "react";

function SideBarButton({ onClick, children }) {
  return (
    <div
      onClick={onClick}
      className="basis-5/6 h-100 p-2 text-gray-700 rounded-lg hover:bg-gray-100 cursor-pointer"
    >
      <div className="text-2xl text-lime-950 font-bold mr-2">{children}</div>
    </div>
  );
}

export default SideBarButton;
