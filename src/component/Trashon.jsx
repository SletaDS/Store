import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteelement, addmoney, deletemoney } from "../redux/SliceTrash";
import { fullclean } from "../redux/Slice";
import { changehidden } from "../redux/SliceTrash";
import "../App.css";
import { NavLink } from "react-router-dom";

function Trashfon({ children }) {
  let trash = useSelector((state) => state.trash);
  let dispatch = useDispatch();
  let [element, setelement] = useState([
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ]);
  function elem2(item, e) {
    setelement((prev) =>
      prev.map((val, i) => {
        prev[item + 1] = e;
        return val;
      })
    );
  }

  return (
    <>
      {trash.hidden ? (
        <div>
          <div className="transition-all duration-1000 md:w-[650px] flex-col h-full w-full  flex justify-between md:h-[400px] rounded-lg  absolute z-50 margen bg-white">
            <h1 className="text-2xl my-6 ml-4">Корзина</h1>
            <div className="md:h-[320px] h-full flex flex-col justify-start  overflow-y-auto">
              {trash.trash.map((item,i) => (
                <div key={i} className=" flex w-full self-end border-b h-[80px]">
                  <button
                    onClick={() => {
                      dispatch(deletemoney((+item.price.replace(/\s/g, "")*(element[item.id]-1)).toString()))
                      dispatch(deleteelement(item))
                      elem2(item.id - 1, 1);
                    }}
                    className="self-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-gray-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <img src={item.img[0]} className="w-[80px] h-[60px] m-3" />

                  <div className="flex flex-col md:flex-row w-full md:justify-between">
                    <h1 className="mt-2 md:self-center  text-sm">{item.name}</h1>
                    <div className="flex flex-row w-full justify-between h-full md:justify-end">
                    <div className="self-center md:mt-2 md:mr-[30%]">
                      <button
                        onClick={
                          element[item.id] > 1
                            ? () => {
                                elem2(item.id - 1, element[item.id] - 1);
                                dispatch(deletemoney(item.price));
                              }
                            : null
                        }
                      >
                        -
                      </button>
                      <input
                      onChange={e=>e.target.value=element[item.id]}
                        value={element[item.id]}
                        className="w-10 text-center border h-7 mx-2"
                      />
                      <button
                        onClick={
                          element[item.id] < 20
                            ? () => {
                                elem2(item.id - 1, element[item.id] + 1);
                                dispatch(addmoney(item.price));
                              }
                            : null
                        }
                      >
                        +
                      </button>
                    </div>
                    <span className=" md:mt-9 md:mr-7 m-2 self-end md:self-start">
                      {+item.price.replace(/\s/g, "") * element[item.id]}$
                    </span></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full rounded-lg border bg-white flex  h-auto">
              <div className="flex justify-between  my-5 w-full">
                <span
                  onClick={() => {
                    dispatch(changehidden(false));
                    dispatch(fullclean());
                  }}
                  className="cursor-pointer  self-center text-blue-600 ml-4"
                >
                  продолжить выбор товара
                </span>
                <span className="text-gray-900 text-lg self-center m-2">
                  Итого:{trash.money}$
                </span>

                <NavLink to={"/order"}>
                  <button
                    onClick={() => dispatch(changehidden(false))}
                    className="border px-4 mb-2 rounded-lg h-12 self-center"
                  >
                    Перейти к оформлению
                  </button>
                </NavLink>
              </div>
            </div>
          </div>

          <div className="w-full h-full  childwrapper">
            <div
              onClick={() => {
                dispatch(changehidden(false));
                dispatch(fullclean());
              }}
              className="w-full h-full modal-wrapper"
            >
              {children}
            </div>
          </div>
        </div>
      ) : (
        <div>{children}</div>
      )}
    </>
  );
}
export default Trashfon;
