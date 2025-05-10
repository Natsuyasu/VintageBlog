import React from "react";
import SideBarButton from "./SideBarButton";

function SideBar({ onSelect }) {
  return (
    <>
      <div className="max-w-64 bg-amber-50 rounded-xl shadow-lg mr-14 inset-shadow-sm inset-shadow-lime-100">
        <div className="text-center">我是侧边栏</div>
        <div className="flex flex-col">
          <SideBarButton onClick={() => onSelect("welcome")}>
            关于我
          </SideBarButton>
          <SideBarButton onClick={() => onSelect("ocArticle")}>
            我的OC
          </SideBarButton>
          <SideBarButton onClick={() => onSelect("contact")}>
            联系方式
          </SideBarButton>
        </div>
      </div>
    </>
  );
}

export default SideBar;
