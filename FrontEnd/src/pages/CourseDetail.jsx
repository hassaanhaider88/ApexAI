import { useLocation, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useCourseStore from "../store/useCourseStore";

export default function CourseDetail() {
  const { courseId } = useParams(); // URL se course name milega
  const Location = useLocation();
  const [activeTab, setActiveTab] = useState("overview");
  const { AllCourses } = useCourseStore();
  const [SingleCourse, setSingleCourse] = useState(null);

  useEffect(() => {
    const course = AllCourses.find((c) => c._id === courseId);
    setSingleCourse(course);
    console.log(course);
  }, [Location, AllCourses]);

  // Course data – baad mein backend se bhi la sakte ho
  // const courses = {
  //   "web-development": {
  //     title: "Web Development (MERN Stack)",
  //     duration: "6 Months",
  //     fee: "PKR 35,000",
  //     timing: "Evening 6:00 PM - 8:00 PM",
  //     instructor: "Sir Bilal Ahmed",
  //     students: "1500+",
  //     rating: "4.9",
  //     color: "from-purple-600 to-pink-600",
  //     icon: "fa-laptop-code",
  //     overview:
  //       "Complete MERN Stack (MongoDB, Express, React, Node.js) seekho. Live projects + 100% Job Guarantee.",
  //     modules: [
  //       "HTML/CSS",
  //       "JavaScript",
  //       "React.js",
  //       "Node.js",
  //       "MongoDB",
  //       "Portfolio Website",
  //       "E-commerce Project",
  //     ],
  //     benefits: [
  //       "100% Job Placement",
  //       "Live Projects",
  //       "Certificate",
  //       "Freelancing Training",
  //       "Lifetime Support",
  //     ],
  //   },
  //   "graphic-design": {
  //     title: "Graphic Design Professional",
  //     duration: "4 Months",
  //     fee: "PKR 28,000",
  //     timing: "Morning 10:00 AM - 12:00 PM",
  //     instructor: "Sir Hamza Ali",
  //     students: "1200+",
  //     rating: "4.8",
  //     color: "from-orange-500 to-yellow-500",
  //     icon: "fa-palette",
  //     overview:
  //       "Photoshop, Illustrator, Canva, Logo Design, Social Media Posts – sab kuch professional level pe.",
  //     modules: [
  //       "Photoshop",
  //       "Illustrator",
  //       "Canva Pro",
  //       "Logo Design",
  //       "Banner & Poster",
  //       "Social Media Kit",
  //     ],
  //     benefits: [
  //       "Portfolio Building",
  //       "Fiverr/Upwork Ready",
  //       "Certificate",
  //       "Job Support",
  //     ],
  //   },
  //   "digital-marketing": {
  //     title: "Digital Marketing Mastery",
  //     duration: "3 Months",
  //     fee: "PKR 25,000",
  //     timing: "Weekend Batch",
  //     instructor: "Sir Usman Khan",
  //     students: "1800+",
  //     rating: "4.9",
  //     color: "from-blue-600 to-cyan-500",
  //     icon: "fa-bullhorn",
  //     overview:
  //       "Facebook Ads, Instagram Marketing, SEO, Google Ads – business ya freelancing dono ke liye perfect.",
  //     modules: [
  //       "Facebook Ads",
  //       "Instagram Growth",
  //       "SEO",
  //       "Google Ads",
  //       "Email Marketing",
  //       "Analytics",
  //     ],
  //     benefits: [
  //       "Live Campaigns",
  //       "Certificate",
  //       "Freelancing Profile",
  //       "Agency Ready",
  //     ],
  //   },
  //   "flutter-development": {
  //     title: "Flutter App Development",
  //     duration: "5 Months",
  //     fee: "PKR 40,000",
  //     timing: "Evening 7:00 PM - 9:00 PM",
  //     instructor: "Sir Ahmed Raza",
  //     students: "900+",
  //     rating: "5.0",
  //     color: "from-green-500 to-teal-600",
  //     icon: "fa-mobile-alt",
  //     overview:
  //       "Android + iOS dono ke liye ek hi code se app banao. Play Store pe live apps!",
  //     modules: [
  //       "Dart Language",
  //       "Flutter Widgets",
  //       "Firebase",
  //       "State Management",
  //       "API Integration",
  //       "Live App on Play Store",
  //     ],
  //     benefits: [
  //       "2 Live Apps",
  //       "Play Store Publishing",
  //       "Job Ready",
  //       "Certificate",
  //     ],
  //   },
  //   "freelancing-mastery": {
  //     title: "Freelancing Mastery (Upwork + Fiverr)",
  //     duration: "2 Months",
  //     fee: "PKR 18,000",
  //     timing: "Weekend Only",
  //     instructor: "Sir Ali Raza",
  //     students: "2500+",
  //     rating: "4.9",
  //     color: "from-yellow-500 to-orange-600",
  //     icon: "fa-dollar-sign",
  //     overview:
  //       "Profile banane se first order tak – sab kuch step by step. 30 din mein earning shuru!",
  //     modules: [
  //       "Profile Optimization",
  //       "Gig Creation",
  //       "Client Communication",
  //       "Winning Proposals",
  //       "Payment Methods",
  //     ],
  //     benefits: [
  //       "First Order Guarantee",
  //       "Lifetime Support",
  //       "Winning Templates",
  //       "Certificate",
  //     ],
  //   },
  // };

  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          background:
            "linear-gradient(90deg,rgba(255, 255, 255, 1) 3%, rgba(252, 129, 0, 1) 41%, rgba(125, 211, 252, 1) 69%, rgba(255, 180, 0, 1) 95%)",
        }}
        className={`bg-gradient-to-br  text-black py-20`}
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              {SingleCourse?.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-lg">
              <span>
                <i className="fas fa-clock mr-2"></i>
                {SingleCourse?.duration}
              </span>
              <span>
                <i className="fas fa-calendar mr-2"></i>
                {SingleCourse?.timing}
              </span>
              <span>
                <i className="fas fa-user-tie mr-2"></i>
                {SingleCourse?.instructor}
              </span>
            </div>
            <div className="mt-8 flex gap-6">
              <a
                href="tel:03000123456"
                className="bg-white text-purple-800 px-10 py-5 rounded-full text-2xl font-bold hover:bg-gray-100 shadow-xl flex items-center gap-3"
              >
                <i className="fas fa-phone"></i> Enroll Now
              </a>
              <a
                href="https://wa.me/923000123456"
                className="bg-green-500 px-10 py-5 rounded-full text-2xl font-bold flex items-center gap-3"
              >
                <i className="fab fa-whatsapp"></i> WhatsApp
              </a>
            </div>
          </div>
          <div className="text-center">
            <div
              style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
              className={`w-full h-full overflow-hidden`}
            >
              <img
                src={SingleCourse?.image}
                alt={SingleCourse?.title}
                className="w-full opacity-90 h-full bg-cover bg-clip-content overflow-hidden"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 border-b-2 border-gray-300 mb-10">
            {["overview", "modules", "benefits"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 px-8 text-xl font-bold capitalize transition ${
                  activeTab === tab
                    ? "text-purple-800 border-b-4 border-purple-800"
                    : "text-gray-600"
                }`}
              >
                {tab === "overview"
                  ? "Course Overview"
                  : tab === "modules"
                  ? "What You'll Learn"
                  : "Benefits"}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-10">
            {activeTab === "overview" && (
              <div className="space-y-6 text-lg text-gray-700">
                <p>{SingleCourse?.overview}</p>
                <div className="grid md:grid-cols-3 gap-8 mt-10">
                  <div className="text-center bg-purple-50 p-8 rounded-2xl">
                    <h3 className="text-5xl font-bold text-purple-800">
                      {SingleCourse?.students}+
                    </h3>
                    <p className="text-xl mt-2">Students Trained</p>
                  </div>
                  <div className="text-center bg-yellow-50 p-8 rounded-2xl">
                    <h3 className="text-5xl font-bold text-yellow-600">
                      {SingleCourse?.rating}/5.0
                    </h3>
                    <p className="text-xl mt-2">Student Rating</p>
                  </div>
                  <div className="text-center bg-green-50 p-8 rounded-2xl">
                    <h3 className="text-5xl font-bold text-green-600">100%</h3>
                    <p className="text-xl mt-2">Job Placement</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "modules" && (
              <div className="grid md:grid-cols-2 gap-6">
                {SingleCourse?.modules.map((module, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-gray-50 p-6 rounded-xl"
                  >
                    <i className="fas fa-check-circle text-green-500 text-2xl"></i>
                    <span className="text-lg font-medium">{module}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "benefits" && (
              <div className="grid md:grid-cols-2 gap-6">
                {SingleCourse?.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-purple-50 p-6 rounded-xl"
                  >
                    <i className="fas fa-star text-yellow-500 text-2xl"></i>
                    <span className="text-lg font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-extrabold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-2xl mb-10">Seats are limited – Enroll today!</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/registration"
              className="bg-yellow-400 text-purple-900 px-12 py-6 rounded-full text-3xl font-extrabold hover:bg-yellow-300 shadow-2xl"
            >
              Register Now
            </Link>
            <a
              href="tel:03000123456"
              className="bg-transparent border-4 border-white px-12 py-6 rounded-full text-3xl font-bold hover:bg-white hover:text-purple-900"
            >
              Call: 0300-0123456
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
