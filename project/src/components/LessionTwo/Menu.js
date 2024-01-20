import { useState } from "react";

const MenuItem = ({ data }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <a key={data.id} className="w-[136px] relative h-[36px] items-center justify-center inline-flex rounded-lg border border-black-200 ml-4" id="menu">
      {
        activeMenu && (
          <span className="text-[10px] text-[black] font-[500] absolute top-[-8px] left-4 bg-white slide-in-from-bottom ">SORT BY</span>
        )
      }
      <button
        onClick={() => setActiveMenu(!activeMenu)}
        className="text-[14px] flex text-[#787885] ">
        {data.name}
        <svg className="ml-2 mt-[10px]" xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 10 5" fill="none">
          <path d="M0 0L5 5L10 0L0 0Z" fill="#787885" />
        </svg>
      </button>
      {activeMenu && (
        <ul className={`box-shadow absolute flex flex-col justify-center items-center  top-9 left-0 w-full h-[100px] bg-[#EDEDF0]`}>
          <li>Menu 1</li>
          <li>Menu 2</li>
          <li>Menu 3</li>
        </ul>
      )}
    </a>
  );
};
export default MenuItem; 