import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import Carousel from "../component/Carousel";
import {useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import Trash from "../component/Trash";
import {addelement, changehidden} from "../redux/SliceTrash";
function Page() {
  let store = useSelector((state) => state.main.shop);
  const dispatch = useDispatch();
  let params = useParams().id;
  const trash = useSelector((state) => state.trash);
  let item = store.phone[params - 1];
  function space(i) {
    const splitMessage = i.split(" ");
    const wordsNumber = splitMessage.length;
    if (wordsNumber == 2) {
      let name = item.name.replace(/\w+[.!?]?$/, "").trim();
      name = name.replace(/\w+[.!?]?$/, "");
      for (let x of store.phone) {
        if (x.name === name + i) {
          return x.id;
        }
      }
    }
    if (wordsNumber == 1) {
      let name = item.name.replace(/\w+[.!?]?$/, "").trim();
      for (let x of store.phone) {
        if (x.name === name + i) {
          return x.id;
        }
      }
    }
    return;
  }
  if (store.status) {
    return (
      <>
        <header className="flex justify-between w-full h-20 border shadow-lg ">
          <NavLink to={"/"}>
            <button className="w-40 h-14 pt-3 m-2 rounded-lg self-start flex justify-center border">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 mr-2 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              Каталог
            </button>
          </NavLink>
          <div className="m-4">
          <Trash /></div>
        </header>
        <section className=" xl:ml-40 xl:mr-40 mt-14 h-full flex flex-col">
          <div className="w-full flex flex-col md:flex-row justify-center md:justify-between">
            <div>
              <h1 className="text-1xl md:text-3xl ml-5   ">{item.name}</h1>
              <div className="flex justify-center">
                <Carousel>{item.img}</Carousel>
              </div>
            </div>

            <div className="w-full md:w-[55%] flex flex-col border shadow-xl mb-2 mt-[30px] md:mt-[130px]">
              <span className="pl-4 h-20 shadow-lg flex border-b justify-between">
                <span>
                  <h1 className="text-lg font-semibold"> цвета:</h1>
                  <div className="flex">
                    {Object.entries(item.color).map(([i, color]) => (
                      <div key={i}>
                        <NavLink to={`/phone/${space(i)}`}>
                          <button
                            className="p-3 w-3 hover:border-gray-500  border-2 rounded-3xl"
                            style={{ background: color }}
                          ></button>
                        </NavLink>
                      </div>
                    ))}
                  </div>
                </span>
                <span className=" mr-[40%] mt-1 w-[20%]  border-l-2 pl-6">
                  <h1 className="text-lg font-semibold"> Память:</h1>
                  <div className="flex">
                    <button className="border hover:border-blue-500 border-gray-500 hover:text-blue-500 text-gray-500 h-8 px-2 rounded-md">
                      128Gb
                    </button>
                    <button className="border border-gray-500 hover:border-blue-500 text-gray-500 hover:text-blue-500 h-8 px-2 rounded-md ml-2">
                      256Gb
                    </button>
                  </div>
                </span>
              </span>

              <span className="flex mt-10 md:mt-[190px] xl:mt-[220px] flex md:flex-col xl:justify-end justify-end xl:flex-row xl:ml-[15%] ">
                <p className="text-4xl text-gray-500  flex-nowrap flex self-end ">
                  {item.price}$
                </p>
                { trash.check[+params-1]? <button onClick={(e) => {
                      e.preventDefault();
                      dispatch(addelement(item));
                      dispatch(changehidden(true));
                    }} className="shadow-lg md:mb-4 xl:mb-0 md:mx-0 mx-4 xl:mx-4 active:shadow-none w-[40%] self-end  justify-center  flex border px-[12%] 2xl:px-[17%] py-4 rounded-lg text-2xl">
                      Купить
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
                            d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button> :
                    <button onClick={(e) => {
                      e.preventDefault();
                    }}
                            className="shadow-lg m-4 active:shadow-none  flex border px-[12%] 2xl:px-[17%] py-4 rounded-lg text-2xl">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 self-center h-6"
                      >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>}
              </span>
            </div>
          </div>
          <div className=" border shadow-2xl  border-grey-500 py-10 px-5 mt-10 ">
            <p className="text-lg text-slate-900 mb-10">
              Основные характеристики
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <span>
                <p className="text-lg text-slate-500">Диагональ</p>
                <p className="text-lg">{item.diagonal}</p>
              </span>
              <span>
                {" "}
                <p className="text-lg text-slate-500">Тип экрана</p>
                <p className="text-lg">{item.typescreen}</p>
              </span>
              <span>
                <p className="text-lg text-slate-500">Камера</p>
                <p className="text-lg">{item.camera}</p>
              </span>
              <span>
                <p className="text-lg text-slate-500">Процессор</p>
                <p className="text-lg">{item.processor}</p>
              </span>
              <span>
                <p className="text-lg text-slate-500">Батарея</p>
                <p className="text-lg">{item.battery}</p>
              </span>
              <span>
                <p className="text-lg text-slate-500">внутреняя память</p>
                <p className="text-lg">{item.inmemory}gb</p>
              </span>
              <span>
                <p className="text-lg text-slate-500">оперативная память</p>
                <p className="text-lg">{item.operationmemory}gb</p>
              </span>
              <span>
                <p className="text-lg text-slate-500">качество видео</p>
                <p className="text-lg">{item.video}</p>
              </span>
              <span>
                <p className="text-lg text-slate-500">частота процессора</p>
                <p className="text-lg">{item.chastotaproc}ggc</p>
              </span>
              <span>
                <p className="text-lg text-slate-500">количество цветов</p>
                <p className="text-lg">{item.numberofcolor}million</p>
              </span>
              <span>
                <p className="text-lg text-slate-500">густота пикселей</p>
                <p className="text-lg">{item.pixel}</p>
              </span>
              <span>
                <p className="text-lg text-slate-500">разрешение</p>
                <p className="text-lg">{item.screen}</p>
              </span>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Page;
