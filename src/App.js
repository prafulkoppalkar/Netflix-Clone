import "./styles/App.css";
import "./styles/index.css";
import Navbar from "./Components/Navbar";
import { useEffect, useRef,useState } from "react";
import LoginPage from "./Components/LoginPage";
import MainConatiner from "./Components/MainContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let rowRefs = {
    mainRef: useRef(null),
    trendingRef: useRef(null),
    topRatedRef: useRef(null),
    originalsRef: useRef(null),
    comedyRef: useRef(null),
    horrorRef: useRef(null),
    documentariesRef: useRef(null),
    romanceRef: useRef(null),
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(()=>{
    window.location.pathname.includes('/loggedIn') ? setIsLoggedIn(true) : setIsLoggedIn(false)
  },[])
  return (
    <div className={`App ${isLoggedIn?"loginPage":""}`} ref={rowRefs.mainRef}>
      <Navbar rowRefs={rowRefs} isLoggedIn={isLoggedIn}/>
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage setIsLoggedIn={setIsLoggedIn}/>} />
                <Route path="/loggedIn" element={<MainConatiner rowRefs={rowRefs}/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
