import React from "react";
import { useState } from "react";
import OCArticleTitle from "./OCArticleTitle";

const articles = [
  { id: "01", title: "欢迎页", content: "欢迎来到我的博客！" },
  { id: "02", title: "关于我", content: "我是一个前端开发者。" },
  { id: "03", title: "React 学习指南", content: "多写多练多思考。" },
];

function MainWindow({ selected }) {
  const contentMap = {
    welcome: "欢迎来到我的博客！",
    ocArticle: <OCArticleTitle />,
    contact: "abababa",
  };
  return (
    <>
      <div className="col-span-3 row-span-2 bg-amber-50 rounded-xl shadow-lg inset-shadow-sm inset-shadow-lime-400">
        <p className="m-8">{contentMap[selected]}</p>
      </div>
    </>
  );
}

export default MainWindow;
