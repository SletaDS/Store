import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import "./App.css";
import { useDispatch} from "react-redux";
import React, {useEffect} from "react";
import { fetchTodos } from "./redux/Slice";
import Trashfon from "./component/Trashon";
import Page from "./pages/Page";
import Header from "./component/header";
import Order from "./pages/Order";
function App() {
  let dispatch = useDispatch();
  function debounce(fn, ms) {
    let timeout;
    return function () {
      const fnCall = () => {
        fn.apply(this, arguments);
      };
      clearTimeout(timeout);
      timeout = setTimeout(fnCall, ms);
    };
  }
  useEffect(() => {
    debounce(dispatch(fetchTodos()), 3000);
  });
  function StartPage() {
    return (
      <div className=" w-full min-h-[1000px] bg-cover flex flex-col ">
        <Header />
        <Main />
      </div>
    );
  }
  return (
    <div >
      <Router>
        <Trashfon>
          {" "}
          <div className="w-full   h-full -z-10">
            <Routes>
              <Route path="/" element={<StartPage />} />
              <Route path="/phone/:id" element={<Page />} />
              <Route path="/order" element={<Order />} />
            </Routes>
          </div>
        </Trashfon>
      </Router>
    </div>
  );
}

export default App;
