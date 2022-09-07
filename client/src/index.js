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
import Scheduler from "./components/Pages/Scheduler";

// Generic
import Header from "./components/Header";
import Footer from "./components/Footer";
import Spacing from "./components/Spacing";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    {/* Generic */}
    <Header />
    <Spacing />

    {/* Component */}
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/news" element={<News />} />
      <Route path="/us" element={<Us />} />
      <Route path="/login" element={<Login />} />
      <Route path="/university" element={<University />} />
      <Route path="/coworking" element={<Coworking />} />
      <Route path="/coworking/scheduler" element={<Scheduler />} />
    </Routes>

    {/* Footer */}
    <Spacing />
    <Footer />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
