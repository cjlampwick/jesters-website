import React from "react";
import ReactDOM  from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import App from "./App";
import News from "./components/Pages/News";
import Login from "./components/Pages/Login";
import Us from "./components/Pages/Us";
import University from "./components/Pages/University";
import Coworking from "./components/Pages/Coworking";
import NotFound from "./components/Pages/NotFound";
// import Schedule from "./components/Pages/Coworking/:Agendar";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      
        <Route path="/" element={<App />} />
        <Route path="/news" element={<News />} />
        <Route path="/us" element={<Us />} />
        <Route path="/login" element={<Login />} />
        <Route path="/university" element={<University />} />
        <Route path="/coworking" element={<Coworking />} />
        <Route path="/*" element={<NotFound />} />
        {/* <Route path="/coworking/:agendar" component={<Schedule />} /> */}
      
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
