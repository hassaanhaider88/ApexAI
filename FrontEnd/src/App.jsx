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
import BlogsPage from "./pages/Blogs";
import UpdateCourse from "./pages/UpdateCourse";
import { useEffect, useState } from "react";
import { GetAllCoursesFromBE } from "./store/useCourseStore";
import useCourseStore from "./store/useCourseStore";
import AddCourse from "./pages/AddCourse";
import SingleStudent from "./pages/SingleStudent";
import Login from "./pages/Login";
import FourZFour from "./pages/FourZFour";
import SingleBlog from "./pages/SingleBlog";

function App() {
  const Location = useLocation();
  const { setAllCourses, AllCourses } = useCourseStore();
  const [IsShowSideBar, setIsShowSideBar] = useState(true);
  useEffect(() => {
    if (Location.pathname == "/") {
      setIsShowSideBar(true);
    } else {
      setIsShowSideBar(false);
    }
  }, [Location]);
  useEffect(() => {
    FetchCourseData();
  }, []);

  const FetchCourseData = async () => {
    const data = await GetAllCoursesFromBE();
    if (!data) return;
    setAllCourses(data);
  };

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
          <Route path="/blog" element={<BlogsPage />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/courses/:courseId" element={<CourseDetail />} />
          <Route path="/update-course" element={<UpdateCourse />} />
          <Route path="/add-course" element={<AddCourse />} />

          <Route path="/students/:id" element={<SingleStudent />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<FourZFour />} />
          
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
