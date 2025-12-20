// import { Link } from "react-router-dom";

// export default function Courses() {
//   const courses = [
//     {
//       title: "AI + GRAPHIC DESIGNING IN 02 MONTHS",
//       subtitle: "Master Adobe Photoshop, Illustrator, Figma And Canva",
//       points: [
//         "Create Stunning Visuals And Professional Designs",
//         "Practical Assignments And Creative Projects",
//       ],
//       tools: ["Ai", "Ps", "Figma", "Canva"],
//       btnText: "READ MORE ABOUT GRAPHIC DESIGNING COURSE",
//       link: "/courses/graphic-design",
//       gradient: "from-purple-900 to-pink-900",
//     },
//     {
//       title: "FULL STACK DEVELOPMENT (AI POWERED)",
//       subtitle:
//         "Comprehensive Curriculum: Covers JavaScript, TypeScript, Tailwind CSS, Next.js, PostgreSQL, Drizzle ORM, AI Website With OpenAI API",
//       points: [
//         "Hands-On Learning: Practical Projects, Including Small Web Applications, AI Projects",
//         "Modern Practices: Focus On Client-Side And Server-Side Rendering, Headless CMS",
//         "Responsive Design: Create Mobile-Friendly Designs Using Tailwind CSS",
//         "Advanced JavaScript And TypeScript: Detailed Instruction On Key Concepts",
//         "Deployment And Optimization: Guidance On Cloud Deployment, Performance Optimization",
//       ],
//       tools: ["TS", "Next.js", "PostgreSQL", "OpenAI"],
//       btnText: "READ MORE ABOUT FULL STACK DEVELOPMENT COURSE",
//       link: "/courses/full-stack-development",
//       gradient: "from-purple-800 to-indigo-900",
//     },
//     {
//       title: "WEB DEVELOPMENT (AI POWERED) [CMS]",
//       subtitle: "HTML & CSS: From Basic Tags To Advanced Techniques",
//       points: [
//         "Bootstrap: Learn How To Create Professional, Responsive Websites With Bootstrap's Powerful Components",
//         "WordPress: Master The World's Most Popular CMS, Including Theme Customization, Plugins",
//         "E-Commerce & SEO: Build And Manage Online Stores With WooCommerce, And Optimize Your Site For Search Engines",
//       ],
//       tools: ["HTML", "CSS", "Bootstrap", "WordPress"],
//       btnText: "READ MORE ABOUT WEB DESIGNING COURSE",
//       link: "/courses/web-development-cms",
//       gradient: "from-indigo-900 to-purple-900",
//     },
//     {
//       title: "SEARCH ENGINE OPTIMIZATION (AI POWERED)",
//       subtitle: "Master The Art Of Search Engine Optimization",
//       points: [
//         "Learn The Latest SEO Techniques And Tools",
//         "Increase Website Traffic And Visibility",
//       ],
//       tools: ["Google", "Analytics", "Search Console"],
//       btnText: "READ MORE ABOUT SEO COURSE",
//       link: "/courses/seo",
//       gradient: "from-pink-900 to-purple-900",
//     },
//   ];

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="bg-gradient-to-b from-purple-950 to-purple-900 text-white py-20 relative overflow-hidden">
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <div className="absolute bottom-0 left-0 right-0">
//           <svg viewBox="0 0 1440 320" className="w-full">
//             <path
//               fill="#f3f4f6"
//               fillOpacity="1"
//               d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L0,320Z"
//             ></path>
//           </svg>
//         </div>
//         <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
//           <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
//             <span className="text-yellow-400">COURSES</span> WE OFFER
//           </h1>
//           <p className="text-2xl font-bold urdu text-yellow-300">
//             آپکا ہنر، آپکا مستقبل
//           </p>
//         </div>
//       </section>

//       {/* Courses Cards */}
//       <section className="py-20 bg-gray-100">
//         <div className="max-w-7xl mx-auto px-6 space-y-20">
//           {courses.map((course, index) => (
//             <div
//               key={index}
//               className={`bg-gradient-to-r ${
//                 course.gradient
//               } rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row items-center text-white ${
//                 index % 2 === 1 ? "md:flex-row-reverse" : ""
//               }`}
//             >
//               {/* Left Content */}
//               <div className="p-10 md:p-16 md:w-3/5">
//                 <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-yellow-400">
//                   {course.title}
//                 </h2>
//                 <p className="text-lg mb-8 opacity-90">{course.subtitle}</p>

//                 <ul className="space-y-4 mb-10">
//                   {course.points.map((point, i) => (
//                     <li key={i} className="flex items-start gap-3 text-lg">
//                       <span className="text-yellow-400 mt-1">✓</span>
//                       <span>{point}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 {/* Tools Icons */}
//                 <div className="flex gap-4 mb-8">
//                   {course.tools.map((tool, i) => (
//                     <div
//                       key={i}
//                       className="bg-white/20 backdrop-blur px-4 py-2 rounded-lg text-sm font-bold"
//                     >
//                       {tool}
//                     </div>
//                   ))}
//                 </div>

//                 <Link
//                   to={course.link}
//                   className="inline-block bg-yellow-400 text-purple-900 px-8 py-4 rounded-full font-extrabold text-lg hover:bg-yellow-300 transition transform hover:scale-105 shadow-xl"
//                 >
//                   {course.btnText} →
//                 </Link>
//               </div>

//               {/* Right Image */}
//               <div className="md:w-2/5 p-10">
//                 <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
//                   <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center">
//                     <span className="text-6xl opacity-20">
//                       {course.title.includes("GRAPHIC") && "Art"}
//                       {course.title.includes("FULL STACK") && "Code"}
//                       {course.title.includes("WEB") && "Website"}
//                       {course.title.includes("SEO") && "SEO"}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900 text-white text-center">
//         <div className="max-w-4xl mx-auto px-6">
//           <h2 className="text-5xl font-extrabold mb-6">
//             Ready to Transform Your Future?
//           </h2>
//           <p className="text-2xl mb-10">
//             Limited Seats • New Batch Starting Soon!
//           </p>
//           <div className="flex flex-col sm:flex-row gap-6 justify-center">
//             <a
//               href="tel:03000123456"
//               className="bg-yellow-400 text-purple-900 px-12 py-6 rounded-full text-3xl font-extrabold hover:bg-yellow-300"
//             >
//               Call Now: 0300-0123456
//             </a>
//             <a
//               href="https://wa.me/923000123456"
//               className="bg-green-500 px-12 py-6 rounded-full text-3xl font-extrabold flex items-center justify-center gap-3"
//             >
//               WhatsApp Chat
//             </a>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import { Link } from "react-router-dom";
import { BsShieldFillCheck } from "react-icons/bs";
import useCourseStore from "../store/useCourseStore";

export default function Courses() {
  const { AllCourses } = useCourseStore();

  return (
    <>
      {/* HERO WITH TAIBA-STYLE WAVE ANIMATION */}
      <section className="relative bg-gradient-to-b from-purple-950 to-purple-900 text-white overflow-hidden">
        {/* Animated Wave Background */}
        <div className="absolute inset-0">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 560"
            preserveAspectRatio="none"
          >
            <path fill="#ffffff" fillOpacity="1">
              <animate
                attributeName="d"
                values="
                  M0,160 C360,300 1080,50 1440,160 L1440,320 L0,320 Z;
                  M0,100 C400,280 1040,80 1440,140 L1440,320 L0,320 Z;
                  M0,160 C360,300 1080,50 1440,160 L1440,320 L0,320 Z
                "
                dur="18s"
                repeatCount="indefinite"
              />
            </path>
            <path
              fill="#6366f1"
              fillOpacity="1.15"
              d="M0,100 C320,300 1120,0 1440,150 L1440,560 L0,560 Z"
            >
              <animate
                attributeName="d"
                values="
                M0,100 C320,300 1120,0 1440,150 L1440,560 L0,560 Z;
                M0,200 C400,50 1040,400 1440,100 L1440,560 L0,560 Z;
                M0,100 C320,300 1120,0 1440,150 L1440,560 L0,560 Z"
                dur="20s"
                repeatCount="indefinite"
              />
            </path>
            <path
              fill="#a855f7"
              fillOpacity="1.15"
              d="M0,200 C280,50 1160,350 1440,180 L1440,560 L0,560 Z"
            >
              <animate
                attributeName="d"
                values="
                M0,200 C280,50 1160,350 1440,180 L1440,560 L0,560 Z;
                M0,300 C360,100 1080,400 1440,250 L1440,560 L0,560 Z;
                M0,200 C280,50 1160,350 1440,180 L1440,560 L0,560 Z"
                dur="25s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
          <h1 className="text-6xl font-extrabold mb-6">
            <span className="text-yellow-400">COURSES</span> WE OFFER
          </h1>
          <p className="text-3xl font-bold text-yellow-300 urdu">
            آپکا ہنر، آپکا مستقبل
          </p>
        </div>
      </section>

      {/* Courses Cards */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {AllCourses?.map((course, i) => (
            <div
              key={i}
              className={`bg-gradient-to-r from-purple-900 to-pink-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row items-center text-white ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="p-10 md:p-16 md:w-3/5">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-yellow-400">
                  {course.title}
                </h2>
                <ul className="space-y-4 mb-8">
                  {course.benefits.map((benefit, i) => {
                    return (
                      <li className="flex items-center gap-3 text-lg">
                        <BsShieldFillCheck size={23} color="#FACC15" />{" "}
                        {benefit}
                      </li>
                    );
                  })}
                </ul>
                <h1 className="inline text-3xl font-semibold mb-10">
                  you Learn
                </h1>
                <div className="flex flex-wrap mt-5 gap-4 mb-8">
                  {course.modules.map((module, i) => (
                    <span
                      key={i}
                      className="bg-white/20 backdrop-blur px-4 py-2 rounded-lg text-sm font-bold"
                    >
                      {module}
                    </span>
                  ))}
                </div>
                <Link
                  to={course.link}
                  className="inline-block bg-yellow-400 text-purple-900 px-8 py-4 rounded-full font-extrabold text-lg hover:bg-yellow-300 transition transform hover:scale-105 shadow-xl"
                >
                  READ MORE →
                </Link>
              </div>
              <div className="md:w-2/5 p-10">
                <div
                  style={{ borderRadius: "42% 58% 29% 71% / 47% 29% 71% 53% " }}
                  className="bg-white/10 backdrop-blur rounded-2xl overflow-hidden"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full bg-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900 text-white text-center">
        <h2 className="text-5xl font-extrabold mb-6">
          Ready to Start Your Journey?
        </h2>
        <a
          href="/registration"
          className="bg-yellow-400 text-purple-900 px-6 py-3 rounded-full text-xl font-extrabold hover:bg-yellow-300 shadow-2xl inline-block transform hover:scale-110 transition"
        >
          ENROLL NOW
        </a>
      </section>
    </>
  );
}

// import { Link } from "react-router-dom";

// export default function Courses() {
//   return (
//     <>
//       {/* HERO SECTION */}
//       <section className="relative bg-gradient-to-b from-purple-950 to-purple-900 text-white overflow-hidden">
//         <div className="max-w-7xl mx-auto px-6 py-32 text-center relative z-10">
//           <h1 className="text-6xl md:text-3xl font-extrabold mb-6">
//             <span className="text-yellow-400">COURSES</span> WE OFFER
//           </h1>
//           {/* <p className="text-3xl font-bold text-yellow-300 urdu">
//             آپکا ہنر، آپکا مستقبل
//           </p> */}
//         </div>

//         {/* WHITE → GREY → PURPLE BOTTOM WAVE ANIMATION */}
//         <div className="absolute bottom-0 left-0 right-0">
//           <svg viewBox="0 0 1440 320" className="w-full">
//             {/* Layer 1 - White Wave */}
//             <path fill="#ffffff" fillOpacity="1.5">
//               <animate
//                 attributeName="d"
//                 values="
//                   M0,160 C360,300 1080,50 1440,160 L1440,320 L0,320 Z;
//                   M0,100 C400,280 1040,80 1440,140 L1440,320 L0,320 Z;
//                   M0,160 C360,300 1080,50 1440,160 L1440,320 L0,320 Z
//                 "
//                 dur="18s"
//                 repeatCount="indefinite"
//               />
//             </path>

//             {/* Layer 2 - Light Grey Wave (thoda upar) */}
//             <path fill="#f3f4f6" fillOpacity="1.5">
//               <animate
//                 attributeName="d"
//                 values="
//                   M0,200 C320,50 1120,350 1440,180 L1440,320 L0,320 Z;
//                   M0,140 C380,320 1060,60 1440,200 L1440,320 L0,320 Z;
//                   M0,200 C320,50 1120,350 1440,180 L1440,320 L0,320 Z
//                 "
//                 dur="22s"
//                 repeatCount="indefinite"
//               />
//             </path>

//             {/* Layer 3 - Purple Wave (sabse neeche, soft) */}
//             <path fill="#6b21a8" fillOpacity="1.5">
//               <animate
//                 attributeName="d"
//                 values="
//                   M0,250 C400,80 1040,400 1440,220 L1440,320 L0,320 Z;
//                   M0,180 C340,380 1100,100 1440,260 L1440,320 L0,320 Z;
//                   M0,250 C400,80 1040,400 1440,220 L1440,320 L0,320 Z
//                 "
//                 dur="25s"
//                 repeatCount="indefinite"
//               />
//             </path>
//           </svg>
//         </div>
//       </section>

//       {/* Courses Cards Section - Starts with clean white background */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-6 space-y-20">
//           {/* Your course cards here (same as before) */}
//           <div className="bg-gradient-to-r from-purple-800 to-pink-800 rounded-3xl p-12 text-white text-center">
//             <h2 className="text-4xl font-bold text-yellow-400">
//               WEB DEVELOPMENT
//             </h2>
//             <p className="text-xl mt-4">
//               MERN Stack • React • Node.js • Live Projects
//             </p>
//             <Link
//               to="/courses/web-development"
//               className="inline-block mt-8 bg-yellow-400 text-purple-900 px-10 py-5 rounded-full font-bold text-xl hover:bg-yellow-300"
//             >
//               READ MORE
//             </Link>
//           </div>
//           {/* Baaki courses yahan add kar do */}
//         </div>
//       </section>
//     </>
//   );
// }
