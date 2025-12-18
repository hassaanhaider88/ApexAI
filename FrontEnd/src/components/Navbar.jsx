import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import useCourseStore from "../store/useCourseStore";

export default function Navbar() {
  const Location = useLocation();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [IsShowTopBanner, setIsShowTopBanner] = useState(true);
  const [IsAdminLogin, setIsAdminLogin] = useState(false);
  const [IsUserLogin, setIsUserLogin] = useState(false);
  const location = useLocation();
  const { AllCourses } = useCourseStore();

  useEffect(() => {
    if (
      Location.pathname == "/admin" ||
      Location.pathname == "/add-course" ||
      Location.pathname == "/students"
    ) {
      setIsShowTopBanner(false);
    } else {
      setIsShowTopBanner(true);
    }
  }, [Location]);

  useEffect(() => {
    const getAdmin = localStorage.getItem("adminInfo");
    if (getAdmin) {
      setIsAdminLogin(true);
      setIsUserLogin(false);
    } else {
      const user = localStorage.getItem("userinfo");
      if (user) {
        setIsAdminLogin(false);
        setIsUserLogin(true);
      } else {
        setIsAdminLogin(false);
        setIsUserLogin(false);
      }
    }
  }, [Location]);

  console.log(IsAdminLogin, IsUserLogin);
  const isActive = (path) => {
    if (path.startsWith("#")) {
      return location.hash === path;
    }
    return location.pathname === path || location.pathname.startsWith(path);
  };

  const handleClick = (e, path) => {
    if (path.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setMobileMenu(false); // Close menu after click
      }
    }
  };

  return (
    <>
      {/* Top Banner */}
      <div
        className={` ${
          IsShowTopBanner ? "block" : "hidden"
        } bg-[#1E0040] text-white py-3 font-semibold overflow-hidden select-none`}
      >
        <div className="inline-flex whitespace-nowrap">
          <div
            className="flex items-center animate-marquee-infinite"
            onMouseEnter={(e) =>
              (e.currentTarget.style.animationPlayState = "paused")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.animationPlayState = "running")
            }
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center">
                <span className="mx-10 text-2xl uppercase">
                  Admissions are open for the fresh batch. let’s grow together
                </span>
                <span className="mx-8 text-yellow-300">•</span>
                <span className="mx-10 urdu text-2xl font-bold">
                  آپکا ہنر , آپکا مستقبل
                </span>
                <span className="mx-16 text-yellow-300">|</span>
                <span className="mx-10 text-2xl uppercase">
                  Admissions are open for the fresh batch. let’s grow together
                </span>
                <span className="mx-8 text-yellow-300">•</span>
                <span className="mx-10 urdu text-2xl font-bold">
                  آپکا ہنر , آپکا مستقبل
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white  top-0 z-50 shadow-lg">
        {/* Logo + Contact */}
        <div className="max-w-full md:max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-4 justify-between h-20 md:h-24">
            {/* Logo + APEX + AI IT Institute */}
            <div className="flex items-center pt-2">
              <Link to="/" className="flex items-center gap-3 sm:gap-4">
                <img
                  src="/ApsxLogo2.svg"
                  alt="APEX"
                  className="h-16 w-16 sm:h-18 sm:w-18 md:h-20 md:w-20 lg:h-22 lg:w-22 object-contain"
                />
                <div className="leading-tight w-96">
                  <h1 className="text-7xl sm:text-7xl md:text-7xl lg:text-5xl font-extrabold tracking-tight">
                    <span className="text-black">APEX</span>
                    <span className="text-sky-300"> Ai</span>
                  </h1>
                  <p className="text-black font-semibold text-xs sm:text-sm md:text-base lg:text-lg pt-2 -mt-1 sm:-mt-2 tracking-wider opacity-90">
                    IT Institute
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Desktop Contact */}
          <div className="hidden lg:flex items-center gap-10 text-gray-700">
            <div className="flex items-center gap-3">
              <i className="fab fa-whatsapp text-yellow-500 text-2xl"></i>
              <div>
                <p className="text-xs opacity-80">Call Anytime</p>
                <p className="font-normal text-xs">+92-308-3535162</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <i className="fas fa-envelope text-yellow-500"></i>
              <p>info@apexinstitute.pk</p>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(true)}
            className="lg:hidden text-3xl text-purple-900"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <div className="max-w-7xl mx-auto -mt-4 h-6">
            <div className="bg-white rounded-md shadow-2xl border border-gray-300 ">
              <div className="px-10 shadow-3xl flex justify-between items-center">
                <div className="flex items-center gap-10 text-gray-700 font-semibold">
                  {[
                    { name: "HOME", path: "/" },
                    {
                      name: IsAdminLogin
                        ? "Admin"
                        : IsUserLogin
                        ? "Me"
                        : "REGISTRATIONS",
                      path: IsAdminLogin
                        ? "/admin"
                        : IsUserLogin
                        ? `/students/${localStorage.getItem("userinfo")}`
                        : "/registration",
                    },
                    { name: "ABOUT US", path: "/about" },
                    { name: "BLOG", path: "/blog" },
                    { name: "TESTIMONIAL", path: "/testimonial-section" },
                    { name: "CONTACT US", path: "/contact" },
                  ].map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={(e) => handleClick(e, item.path)}
                      className={`relative transition-all duration-300 ${
                        isActive(item.path)
                          ? "text-yellow-500 font-extrabold text-lg"
                          : "hover:text-yellow-400"
                      }`}
                    >
                      {item.name}
                      {isActive(item.path) && (
                        <span className="absolute -bottom-3 left-0 right-0 h-1 bg-yellow-500 rounded-full shadow-lg animate-pulse"></span>
                      )}
                    </Link>
                  ))}

                  {/* COURSES Dropdown */}
                  <div className="relative group">
                    <Link
                      to="/courses"
                      className={`flex items-center gap-2 transition-all font-semibold ${
                        isActive("/courses")
                          ? "text-yellow-500 font-extrabold text-lg"
                          : "hover:text-yellow-400"
                      }`}
                    >
                      COURSES
                      <i className="fas fa-chevron-down text-xs transition-transform group-hover:rotate-180"></i>
                    </Link>
                    {isActive("/courses") && (
                      <span className="absolute -bottom-3 left-0 right-0 h-1 bg-yellow-500 rounded-full shadow-lg animate-pulse"></span>
                    )}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 opacity-0 invisible scale-95 group-hover:opacity-100 group-hover:visible group-hover:scale-100 transition-all duration-500 z-50">
                      <div className="p-6 space-y-3">
                        {AllCourses?.map((c) => (
                          <Link
                            key={c}
                            to={`/courses/${c._id}`}
                            className="block p-4 rounded-xl hover:bg-purple-50 font-semibold"
                          >
                            {c.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  to="/registration"
                  className="bg-[#FFB400] text-white px-10 py-5 rounded-full font-extrabold shadow-xl hover:bg-[#291260] scale-75 transform hover:scale-90 transition-all flex items-center gap-3"
                >
                  <i className="fas fa-phone-volume"></i>
                  ENROLL NOW
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu - LEFT SIDE SLIDE IN */}
        <div
          className={`fixed inset-0 z-50 transform transition-transform duration-500 ${
            mobileMenu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden`}
        >
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setMobileMenu(false)}
          ></div>
          <div className="fixed left-0 top-0 h-full w-80 bg-gradient-to-b from-purple-900 to-purple-950 text-white shadow-2xl">
            <div className="p-6 flex justify-between items-center border-b border-purple-800">
              <h2 className="text-2xl font-extrabold">MENU</h2>
              <button onClick={() => setMobileMenu(false)} className="text-3xl">
                <i className="fas fa-times"></i>
              </button>
            </div>

            <div className="p-6 space-y-6 text-lg font-semibold">
              <Link
                to="/"
                onClick={() => setMobileMenu(false)}
                className={`block py-3 ${
                  isActive("/") ? "text-yellow-400" : "hover:text-yellow-300"
                }`}
              >
                HOME
              </Link>
              <Link
                to="/courses"
                onClick={() => setMobileMenu(false)}
                className={`block py-3 ${
                  isActive("/courses")
                    ? "text-yellow-400"
                    : "hover:text-yellow-300"
                }`}
              >
                COURSES
              </Link>
              {IsAdminLogin ? (
                <Link
                  to="/admin"
                  onClick={() => setMobileMenu(false)}
                  className={`block py-3 ${
                    isActive("/registration")
                      ? "text-yellow-400"
                      : "hover:text-yellow-300"
                  }`}
                >
                  Admin
                </Link>
              ) : IsUserLogin ? (
                <Link
                  to={`/students/${localStorage.getItem("userinfo")}`}
                  onClick={() => setMobileMenu(false)}
                  className={`block py-3 ${
                    isActive("/registration")
                      ? "text-yellow-400"
                      : "hover:text-yellow-300"
                  }`}
                >
                  Me
                </Link>
              ) : (
                <Link
                  to="/registration"
                  onClick={() => setMobileMenu(false)}
                  className={`block py-3 ${
                    isActive("/registration")
                      ? "text-yellow-400"
                      : "hover:text-yellow-300"
                  }`}
                >
                  REGISTRATIONS
                </Link>
              )}

              <Link
                to="/about-section"
                onClick={(e) => {
                  handleClick(e, "#about-section");
                  setMobileMenu(false);
                }}
                className={`block py-3 ${
                  isActive("#about-section")
                    ? "text-yellow-400"
                    : "hover:text-yellow-300"
                }`}
              >
                ABOUT US
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenu(false)}
                className={`block py-3 ${
                  isActive("/contact")
                    ? "text-yellow-400"
                    : "hover:text-yellow-300"
                }`}
              >
                CONTACT US
              </Link>
            </div>

            <div className="absolute bottom-10 left-6 right-6">
              <Link
                to="/registration"
                className="block text-center bg-yellow-500 text-purple-900 py-4 px-2 rounded-full font-extrabold text-lg shadow-xl hover:bg-yellow-400 transform hover:scale-95 transition"
              >
                ENROLL NOW
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
