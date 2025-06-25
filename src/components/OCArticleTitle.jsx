import React, { useState } from "react";
import Renou1 from "./articles/Renou1.jsx";

function OCArticleTitle() {
  const [titleSelected, setTitleSelected] = useState("00");
  function titleChangeHandler(event) {
    setTitleSelected(event.target.value);
  }
  const articles = [
    { id: "01", title: "魔法人偶·第一章", content: <Renou1 /> },
    { id: "02", title: "关于我", content: "我是一个前端开发者。" },
    { id: "03", title: "React 学习指南", content: "多写多练多思考。" },
  ];
  if (titleSelected == "00") {
    return (
      <div class="text-left">
        <p>这里是我的OC文章存放地。</p>
        <p>
          乱七八糟的什么都有，目前也没有什么明确的主线剧情。在不同世界观和背景下的故事就请当作同人和paro来欣赏吧w
        </p>
        <p>如果喜欢的话欢迎点个赞~</p>
        <div>
          <ul>
            {articles.map((article) => (
              // <li key={article.id} onClick={setTitleSelected(article.id)}>
              <li
                key={article.id}
                value={article.id}
                onClick={titleChangeHandler}
              >
                {article.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div class="text-left">
        <h2 className="text-2xl font-bold mb-4">
          {articles[titleSelected - 1].title}
        </h2>
        <p>{articles[titleSelected - 1].content}</p>
        <button onClick={() => setTitleSelected("00")}>返回</button>
      </div>
    );
  }
}

export default OCArticleTitle;
