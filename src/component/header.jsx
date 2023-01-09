
import React, { useEffect,useRef,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search} from '../redux/Slice'
import Categories from "./Categories";

import Trash from "./Trash";
function Header(){
 
    let dispatch=useDispatch()
    let [hidden,sethidden]=useState(true)
     let ref=useRef()
     function debounce(fn,ms){
       let timeout
       return function(){
         const fnCall=()=>{fn.apply(this,arguments) }
         clearTimeout(timeout)
         timeout=setTimeout(fnCall,ms)
       }
        
     }
   
return( <div><header className="w-full bg-white h-20 md:h-[100px] flex justify-between border-b-1 shadow-md ">

<div className="self-end align-middle flex justify-between md:justify-center w-full ">
  <div onClick={()=>sethidden(!hidden)} className="border ml-[20px]  md:hidden  rounded-lg p-2 h-11">
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
        d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
      />
    </svg>
  </div>
  <input placeholder={'Search'} className="border md:ml-0 h-10 md:w-[500px] w-[180px]  p-2 mb-6  rounded-lg" ref={ref} onChange={debounce(()=>dispatch(search(ref.current.value)),800)}></input>

</div>
        <div className="m-4">
        <Trash/></div>
</header>
<section className="border w-[70%] md:hidden absolute h-auto rounded-2xl p-2 bg-white z-40" hidden={hidden}>
<Categories/>

</section></div>
)
}
export default Header