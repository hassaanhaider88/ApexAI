import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
// Direct init kar do — useEffect ki zarurat hi nahi!
AOS.init({
  duration: 1200,
  easing: "ease-out-cubic",
  once: true,
  offset: 100,
});

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    <ToastContainer />
  </BrowserRouter>
);
