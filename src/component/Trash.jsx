import React, { useState } from "react";
import { deleteelement, changehidden } from "../redux/SliceTrash";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
function Trash() {
  let [hiddensecond, sethiddensecond] = useState(true);
  let trasharr = useSelector((state) => state.trash);
  let dispatch = useDispatch();

  return (
    <>

      <button
        onClick={() => dispatch(changehidden(true))}
        onMouseEnter={() => sethiddensecond(false)}
        onMouseLeave={() => sethiddensecond(true)}
        className="md:w-40  w-28 h-10 pt-1.5 mb-2 mx-[5%]  md:h-14 md:pt-4 self-center rounded-lg flex justify-center align-middle border"
      >
        Корзина
      </button>
      <div

              onMouseEnter = {() =>  sethiddensecond(false)}
              onMouseLeave={() => sethiddensecond(true)}
              hidden={hiddensecond}
      ><div className=" flex-col w-[460px] hidden md:flex border shadow-xl right-[-1px] mr-16  h-auto bg-white absolute">
        <h1 className="text-xl p-2 pl-6 w-full  ">Корзина</h1>
        {trasharr.trash.length === 0 ? (
          "Пока в вашей Корзине ничего нету"
        ) : (
          <div>
            <div className="max-h-[320px]  overflow">
              {trasharr.trash.map((item,i) => (
                <div key={i} className="flex border-b mr-4">
                  <img src={item.img[0]} className="w-[100px] h-[80px] m-3" />
                  <div className=" flex w-full flex-col ">
                    <div className="flex justify-between">
                      <h1 className="text-sm mt-2">{item.name}</h1>
                      <button
                        onClick={() => dispatch(deleteelement(item))}
                        className="self-end"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 mt-1 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                    <span className="font-bold mt-9 self-end ">
                      {item.price}$
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full border bg-white flex justify-between h-[80px]">
              <div className="flex flex-col">
                <span className="text-gray-900 text-sm m-2">
                  Итого,без доставки
                </span>

                <span className="font-bold  mt-2 ml-4">{trasharr.money}$</span>
              </div>
              <button
                onClick={() => dispatch(changehidden(true))}
                className="border px-4 mb-2 rounded-lg h-12 self-center"
              >
                Перейти к оформлению
              </button>
            </div>
          </div>
        )}
      </div></div>
    </>
  );
}

export default Trash;
