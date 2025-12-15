import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SocialSidebar from "./components/SocialSidebar";
import Footer from "./components/Footer";
import CourseDetail from "./pages/CourseDetail";
import Courses from "./pages/Courses";
import Admin from "./pages/Admin";
import Registration from "./pages/Registration";
import About from "./pages/About";
import ContactPage from "./pages/Contact";
import BlogPage from "./pages/Blog";
import { useEffect, useState } from "react";
function App() {
  const Location = useLocation();
  const [IsShowSideBar, setIsShowSideBar] = useState(true);
  useEffect(() => {
    if (Location.pathname == "/") {
      setIsShowSideBar(true);
    } else {
      setIsShowSideBar(false);
    }
  }, [Location]);
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <SocialSidebar IsShow={IsShowSideBar} />
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/courses/:courseName" element={<CourseDetail />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
