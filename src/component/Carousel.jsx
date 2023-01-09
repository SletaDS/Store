import React, { cloneElement, useState, Children, useEffect } from "react";
const PAGE_WIDTH = 500;
function Carousel(children) {
  const [offset, setOffset] = useState(0);
  let [ofsset2, setofsset2] = useState(0);

  const handleLeftArrowClick = (width, set) => {
    set((currentOffset) => {
      const newOffset = currentOffset + width;
      return Math.min(newOffset, 0);
    });
  };
  const handleRightArrowClick = (width, set) => {
    set((currentOffset) => {
      const newOffset = currentOffset - width;

      const maxOffset = -(width * (children.children.length - 1));
      return Math.max(newOffset, maxOffset);
    });
  };
  return (
    <div className="flex flex-row h-[260px] md:h-[500px]">
      <button
        onClick={() => handleLeftArrowClick(140, setofsset2)}
        className="ml-9 hidden xl:flex mt-14 absolute"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </button>
      <div className="h-[427px] truncate mt-[79px]  ">
        {" "}
        <div
          className="transition-all ml-2 hidden xl:flex duration-1000  flex-col"
          style={{ transform: `translateY(${ofsset2}px)` }}
        >
          {children.children.map((item, i) => (
            <img
              key={i}
              onClick={() => {
                setOffset(-i * 500);
              }}
              src={item}
              className="w-20 mt-6 active:border  active:border-blue-200 rounded-lg py-2"
            />
          ))}
        </div>
      </div>
      <button
        onClick={() => handleRightArrowClick(140, setofsset2)}
        className="absolute hidden xl:flex ml-9 mt-[500px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      <button
        className="self-center xl:ml-11 border py-5 rounded-lg pr-2 pl-1 bg-zinc-300"
        onClick={() => handleLeftArrowClick(window.innerWidth>=760?500:260, setOffset)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <div className=" truncate md:mt-16 w-[260px] md:w-[500px] w-full flex justify-start">
        <div
          className=" flex-row transition-all duration-1000 w-20 mt-6 flex "
          style={{
            transform: `translateX(${offset}px)`,
          }}
        >
          {children.children.map((item, i) => (
            <img
              src={item}
              key={i}
             className="h-full  md:min-w-[500px] md:max-w-[500px] max-w-[260px] min-w-[260px]"
            />
          ))}
        </div>
      </div>
      <button
        className="self-center border py-5 rounded-lg pl-2 pr-1 bg-zinc-300"
        onClick={() => handleRightArrowClick(window.innerWidth>=760?500:260, setOffset)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}
export default Carousel;
