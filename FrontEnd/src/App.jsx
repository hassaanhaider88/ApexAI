import { BrowserRouter, Routes, Route } from "react-router-dom";
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
function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <SocialSidebar />
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
    </BrowserRouter>
  );
}

export default App;
