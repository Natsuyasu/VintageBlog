import MainWindow from "./MainWindow";
import SideBar from "./sideBar";
import React, { useState } from "react";

function MainInterface() {
  const [selected, setSelected] = useState("welcome");

  return (
    <>
      <div className="grid grid-cols-4 grid-rows-2 gap-4 my-10">
        <SideBar onSelect={setSelected} />
        <MainWindow selected={selected} />
      </div>
    </>
  );
}

export default MainInterface;
