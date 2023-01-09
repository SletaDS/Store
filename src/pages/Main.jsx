import React from "react";
import "../App.css";
import { addelement, changehidden } from "../redux/SliceTrash";
import Categories from "../component/Categories";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import MyLoader from "../component/Myloader";
function Main() {
  const dispatch = useDispatch();
  const trash = useSelector((state) => state.trash);
  let Mainstate = useSelector((state) => state.main.shop);
  let Searchstate = useSelector((state) => state.main.find);
  let categoriesstate = useSelector((state) => state.main.categories);
  let moneystate = useSelector((state) => state.main.money);
  if (Searchstate.phone.length === 0) {
    if (moneystate.phone.length > 0) {
      Mainstate = moneystate;
    }
    if (categoriesstate.phone.length > 0) {
      Mainstate = categoriesstate;
    }
  } else {
    Mainstate = Searchstate;
  }

  return (
    <section className=" w-full md:mt-10 justify-center flex">
      <div className="w-full flex">
        <div className="md:flex hidden md:flex-col ml-16 flex-row w-auto">
          <Categories />
        </div>
        {categoriesstate.error ? (
          <div className="w-full md:ml-10">
            <div className="w-full transition-all flex duration-1000 flex-col md:flex-row md:flex-wrap">
              {Mainstate.status ? (
                Mainstate.phone.map((item, i) => (
                  <NavLink key={i} to={"/phone/" + item.id}>
                    <div className="md:w-[230px] shadow1 border transition-all duration-500 w-full sm:max-w-[760px] bg-white md:mx-1  lg:mx-1 md:mt-2 md:h-[360px] h-[180px] flex flex-row  md:flex-col">
                      <img
                        src={item.img[0]}
                        alt="#"
                        className=" self-center w-[180px] md:w-[220px] md:h-[250px]  h-[136px] md:mb-10 md:mt-7 "
                      />
                      <div className="border-t-1 flex flex-col w-full justify-between mt-1">
                        <h1 className="self-start mt-3 md:ml-4 md:mt-0 text-md ">
                          {item.name}
                        </h1>
                        <div className="flex flex-row w-full  align-bottom self-end justify-between">
                        <p className="font-semi-bold w-[100px] mt-4 text-xl md:self-center  m-3">
                          {item.price}$
                        </p>
                        {trash.check[i] ? (
                            <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  dispatch(addelement(item));
                                  dispatch(changehidden(true));

                                }}
                                className="m-3 shadow1 border w-14 rounded-lg flex justify-center h-10"
                            >
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
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                            </button>
                        ) : (
                            <button
                                onClick={(e) => {
                                  e.preventDefault();
                                }}
                                className="m-3 shadow1 border w-14 rounded-lg flex justify-center h-10"
                            >
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
                            </button>
                        )}</div>
                      </div>
                    </div>
                  </NavLink>
                ))
              ) : (
                [1,2,3,4,5,1,2,8].map((item,i)=><div key={i}  className="md:w-[230px] shadow1 transition-all duration-500 w-full bg-white md:mx-1  lg:mx-1 md:mt-2 md:h-[360px] h-[180px] flex flex-row md:flex-col">
                  <MyLoader />
             
                </div>)
              )}
            </div>
          </div>
        ) : (
          <h1 className=" text-4xl text-slate-500">
            Упс по вашеу запросу ничего не найдено
          </h1>
        )}
      </div>
    </section>
  );
}
export default Main;
