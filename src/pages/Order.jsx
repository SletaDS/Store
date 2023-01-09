import React, {useState} from "react";
import MaskedInput from "react-text-mask";
import { NavLink} from "react-router-dom";
import { useSelector} from "react-redux";
import "../App.css";
function Order() {
    const trash = useSelector((state) => state.trash);
  const [emailinput,setemailinput]=useState(null)
  const [nameinput,setnameinput]=useState(null)
  const [numberinput,setnumberinput]=useState(null)
  const [citysinput,setcitysinput]=useState(null)
  return (
    <>
      <header className="w-full h-20 border">
        <NavLink to={"/"}>
          <button className="w-40 h-14 pt-3 m-2 rounded-lg flex justify-center border">
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
      </header>
      <form id={'formOrder'} className="xl:w-[1200px] w-full h-auto mx-auto mt-5 justify-between shadow-md flex flex-col-reverse  md:flex-row border-white">
        <div className="flex flex-col">
          <h1 className="text-2xl m-6">Оформление заказа</h1>
          <h1 className="text-xl mx-6">Контактна информация</h1>
          <span className="flex w-full md:w-[520px] justify-between">
            <p className="mt-7 mb-4  mx-3  md:mx-10 font-semibold text-sm">Имя</p>
            <input onChange={(e)=>setnameinput(e.target.value)}
              placeholder="Введите имя"
              className="w-[230px] md:w-[280px] focus:outline-none focus:border-b-blue-500 self-center border-[1.8px] border-t-white border-x-white border-b-gray-200 h-7"
            />
          </span>
          <span className="flex w-full md:w-[520px] justify-between">
            <p className="my-4  mx-3  md:mx-10 font-semibold text-sm">Номер телефона</p>
            <MaskedInput onChange={(e)=>setnumberinput(e.target.value)}
              mask={[
                "+",
                3,
                8,
                0,
                "(",
                /\d/,
                /\d/,
                /\d/,
                ")",
                " ",
                /\d/,
                /\d/,
                /\d/,
                "-",
                /\d/,
                /\d/,
                /\d/,
                /\d/,
              ]}
              className="w-[230px] md:w-[280px] focus:outline-none focus:border-b-blue-500 self-center border-[1.8px] border-t-white border-x-white border-b-gray-200 h-7 "
              placeholder="Hомер телефона"
              guide={true}
            />
          </span>
          <span className="flex w-full md:w-[520px] justify-between">
            <p className="my-4  mx-3  md:mx-10 font-semibold text-sm">
              Електронная почта
            </p>
            <input
                onChange={(e)=>setemailinput(e.target.value)}
              type={"email"}
              pattern=".+@gmail\.com"
              placeholder="Введите e-mail"
              className="w-[230px] md:w-[280px] peer-invalid:bg-black focus:outline-none invalid:focus:border-b-red-500 focus:border-b-blue-500 self-center border-[1.8px] border-t-white border-x-white border-b-gray-200 h-7"
            />
          </span>
          <span className="flex w-full md:w-[520px] justify-between">
            <p className="my-4 mx-3 md:mx-10 font-semibold text-sm">Город</p>
            <div >
              <input
                  onChange={(e)=>setcitysinput(e.target.value)}
                list="country"
                name="country"
                placeholder="Введите ваш город"
                className="w-[230px] md:w-[280px] mt-2 focus:outline-none focus:border-b-blue-500 self-center border-[1.8px] border-t-white border-x-white border-b-gray-200 h-7"
              />
              <datalist id="country">
                <option value="Киев" />
                <option value="Запорожье" />
                <option value="Днепр" />
                <option value="Львов" />
                <option value="Харков" />
                <option value="Белгород" />
              </datalist>
            </div>
          </span>

          <div value={' заказать'} onClick={()=>console.log(citysinput,nameinput,numberinput)} className="w-40 h-5 m-20 bg-slate-100 px-12 py-3 pb-9  rounded-3xl">
          Заказать
          </div>
        </div>
        <div>
          {" "}
          <div className=" flex-col flex justify-between shadow1 md:m-8 md:w-[450px] h-[300px] z-50 bg-white">
            <h1 className="text-2xl mt-3 ml-4">Корзина</h1>
            <div className="max-h-[320px]   overflow">
              {trash.trash.map((item,i) => (
                <div key={i} className=" flex  border-b h-[100px] mr-4">
                  <img src={item.img[0]} className="w-[80px] h-[60px] m-3" />

                  <div className="flex w-full justify-between">
                    <h1 className="mt-2 self-center text-md">{item.name}</h1>
                    <div className="self-center"></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full  border bg-white flex h-[80px]">
              <div className="flex justify-between  my-5 w-full">
                <span className=" text-lg self-center m-2 font-medium text-gray-600">
                  Итого:
                </span>
                <span className=" text-lg self-center m-2 font-medium text-gray-600">
                  {trash.money}$
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Order;
