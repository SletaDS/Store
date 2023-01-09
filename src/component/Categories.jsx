import React, {useRef, useState } from "react";
import { useDispatch,useSelector} from "react-redux";
import {categoriescclean,categoriesearch,moneyfilter} from '../redux/Slice'
import MultiRangeSlider from "./MultiRangeSlider"
function Categories() {
  let [x,setx]=useState(0)
  let [markfirst, setmarkfirst] = useState(false);
  let [marksecond, setmarksecond] = useState(false)
  let [markthird, setmarkthird] = useState(false)
  let dispatch=useDispatch()
  let ref=useRef([])
  let [checkboxi,setcheckboxi]=useState(false)
  function checkbox(e,[x,y]) {
    if(e.target.checked){
  dispatch(categoriesearch([x,y]))}else{dispatch(categoriescclean([x,y]))}
   }
 function cleancheck(e,[x,y]){
  if(e.target.checked){
    dispatch(categoriesearch([x,y]))}else{
      dispatch(categoriescclean([x,y]))
      ref.current.map((item)=>item.checked=false)}
 }
 function debounce(fn,ms){

  let timeout
  return function(){
    const fnCall=()=>{fn.apply(this,arguments) }
    clearTimeout(timeout)
    timeout=setTimeout(fnCall,ms)
  }
   }

  return (
    <section >
      <div>
        <h1 className="text-xl flex bold ">
          <button
            onClick={() => {
              setmarkfirst(!markfirst);
            }}
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
                d={
                  markfirst
                    ? "M8.25 4.5l7.5 7.5-7.5 7.5"
                    : "M19.5 8.25l-7.5 7.5-7.5-7.5"
                }
              />
            </svg>
          </button>
          Виробник
        </h1>
        <div className="ml-3 flex-col mt-2 "  hidden={markfirst}>
         <p><label><input  onClick={(e)=>checkbox(e,['name','Samsung'])} type="checkbox" ref={(el=>ref.current[0]=el)} className="mr-2 w-4 h-4" />Samsung </label></p>
         <p><label><input  onClick={(e)=>checkbox(e,['name','Apple'])} type="checkbox" ref={(el=>ref.current[1]=el)}  className="mr-2 w-4 h-4" />Apple </label></p>
         <p><label><input  onClick={(e)=>checkbox(e,['name','Xiaomi'])} type="checkbox" ref={(el=>ref.current[2]=el)} className="mr-2 w-4 h-4" />Xiaomi </label></p>
         <p><label><input  onClick={(e)=>checkbox(e,['name','Motorola'])} type="checkbox" ref={(el=>ref.current[3]=el)}  className="mr-2 w-4 h-4" />Motorola </label></p>
        </div>
      </div>
      <div >
      <MultiRangeSlider
      min={1000}
      max={100000}
     onChange={x>=2?debounce(({ min, max }) =>dispatch(moneyfilter([min,max])),1000):()=>setx(prev=>prev+1) }
    /></div>
      <div>
        <h1 className="text-xl flex bold ">
          <button
            onClick={() => {
              setmarksecond(!marksecond);
            }}
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
                d={
                  marksecond
                    ? "M8.25 4.5l7.5 7.5-7.5 7.5"
                    : "M19.5 8.25l-7.5 7.5-7.5-7.5"
                }
              />
            </svg>
          </button>
          процессор
        </h1>
        <div className="ml-3 flex-col mt-2 " hidden={marksecond}>
         <p><label><input onClick={(e)=>cleancheck(e,['processor','MediaTek'])} type="checkbox"  className="mr-2 w-4 h-4" />Mediatek</label></p>
         <p><label><input onClick={(e)=>cleancheck(e,['processor','Qualcomm'])} type="checkbox" className="mr-2 w-4 h-4" />Qualcomm</label></p>
         <p><label><input onClick={(e)=>cleancheck(e,['processor','Bionic'])} type="checkbox" className="mr-2 w-4 h-4" />Bionic</label></p> 
         <p><label><input onClick={(e)=>cleancheck(e,['processor','Exynos'])} type="checkbox" className="mr-2 w-4 h-4" />Exynos</label></p>  
        </div>
      </div>
      <div>
        <h1 className="text-xl flex bold ">
          <button
            onClick={() => {
              setmarkthird(!markthird);
            }}
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
                d={
                  markthird
                    ? "M8.25 4.5l7.5 7.5-7.5 7.5"
                    : "M19.5 8.25l-7.5 7.5-7.5-7.5"
                }
              />
            </svg>
          </button>
          Акуумулятор
        </h1>
        <div className="ml-3 flex-col mt-2 " hidden={markthird}>
         <p><label><input onClick={(e)=>cleancheck(e,['battery','3'])} type="checkbox" className="mr-2 w-4 h-4" />3000-3999 мАч</label></p>
         <p><label><input onClick={(e)=>cleancheck(e,['battery','4'])} type="checkbox"  className="mr-2 w-4 h-4" />4000-4999 мАч</label></p>
         <p><label><input onClick={(e)=>cleancheck(e,['battery','5'])} type="checkbox"  className="mr-2 w-4 h-4" />5000-5999 мАч</label></p>
        </div>
      </div>
      <div>
        <h1 className="text-xl flex bold ">
          <button
            onClick={() => {
              setcheckboxi(!checkboxi);
            }}
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
                d={
                  checkboxi
                    ? "M8.25 4.5l7.5 7.5-7.5 7.5"
                    : "M19.5 8.25l-7.5 7.5-7.5-7.5"
                }
              />
            </svg>
          </button>
          оперативная память
        </h1>
        <div className="ml-3 flex-col mt-2 " hidden={checkboxi}>
         <p><label><input onClick={(e)=>cleancheck(e,['operationmemory','8'])} type="checkbox"  className="mr-2 w-4 h-4" />8gb</label></p>
         <p><label><input onClick={(e)=>cleancheck(e,['operationmemory','6'])} type="checkbox" className="mr-2 w-4 h-4" />6gb</label></p>
         <p><label><input onClick={(e)=>cleancheck(e,['operationmemory','4'])} type="checkbox" className="mr-2 w-4 h-4" />4gb</label></p> 
        
        </div>
      </div>
    </section>
  );
}
export default Categories;