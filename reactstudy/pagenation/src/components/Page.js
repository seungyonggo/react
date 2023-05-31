import React from "react";
import Main from "./Main";
import "./style.css";

const Page = () => {
  const items = [
    "룰",
    "루",
    "랄",
    "라",
    "성",
    "공",
    "했",
    "다",
    "1",
    "2",
    "3",
    "4",
  ];
  const itemsPerPage = 4;

  return (
    <div>
      <h1>My App</h1>
      <div className="item-container">
        <Main items={items} itemsPerPage={itemsPerPage} />
      </div>
    </div>
  );
};

export default Page;
