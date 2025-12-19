import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import FAQsData from "../Data/FAQs";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yeh link WhatsApp pe message kholega
    const text = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/923083535162?text=${text}`, "_blank");
    // Optional: Form reset
    setFormData({ name: "", email: "", subject: "", phone: "", message: "" });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          loop={true}
          speed={1000}
          className="h-full"
          // 🔥 Left/Right click controls + pagination bhi working
          onClick={(swiper, event) => {
            const clickX = event.clientX;
            const windowWidth = window.innerWidth;

            if (clickX < windowWidth / 2) {
              swiper.slidePrev();
            } else {
              swiper.slideNext();
            }
          }}
        >
          {/* ========== SLIDE 1 ========== */}
          <SwiperSlide>
            <div className="absolute inset-0">
              <img
                src="/hero1.jpg"
                alt="Student Success"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
            </div>
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-6 md:px-12 text-white">
                <div className="max-w-3xl">
                  <h1 className="text-5xl md:text-7xl font-extrabold leading-tight animate-fade-in">
                    SHAPE YOUR FUTURE WITH <br />
                    <span className="text-yellow-400">
                      APEX AI IT INSTITUTE
                    </span>
                  </h1>
                  <p className="text-2xl md:text-3xl mt-6 font-bold text-yellow-300 urdu">
                    آپکا ہنر، آپکا مستقبل
                  </p>
                  <p className="text-lg md:text-xl mt-6 opacity-90 leading-relaxed">
                    Pakistan ka No.1 IT Institute — 5000+ students ab 1-5
                    lac/month kama rahe hain!
                  </p>
                  <div className="flex flex-wrap gap-6 mt-10">
                    <a
                      href="/registration"
                      className="bg-yellow-400 text-purple-900 px-10 py-6 rounded-full text-2xl md:text-3xl font-extrabold shadow-2xl hover:bg-white transform hover:scale-110 transition-all duration-300 flex items-center gap-4"
                    >
                      <i className="fas fa-graduation-cap"></i>
                      ENROLL NOW
                    </a>
                    <a
                      href="https://wa.me/923083535162"
                      className="bg-green-500 text-white px-10 py-6 rounded-full text-2xl md:text-3xl font-extrabold shadow-2xl hover:bg-green-600 transform hover:scale-110 transition-all duration-300 flex items-center gap-4"
                    >
                      <i className="fab fa-whatsapp text-4xl"></i>
                      WhatsApp Chat
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* ========== SLIDE 2 ========== */}
          <SwiperSlide>
            <div className="absolute inset-0">
              <img
                src="/hero2.jpg"
                alt="Web Development"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black via-black/70 to-transparent"></div>
            </div>
            <div className="relative h-full flex items-center justify-end">
              <div className="max-w-7xl mx-auto px-6 md:px-12 text-white text-right">
                <div className="max-w-3xl ml-auto">
                  <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                    Learn <span className="text-cyan-400">Web Development</span>{" "}
                    <br />
                    Earn <span className="text-green-400">$1000+/month</span>
                  </h1>
                  <p className="text-xl md:text-2xl mt-6 opacity-90">
                    MERN Stack • React • Node.js • Live Projects
                  </p>
                  <div className="flex flex-wrap justify-end gap-6 mt-10">
                    <a
                      href="/registration"
                      className="bg-cyan-500 text-white px-10 py-6 rounded-full text-2xl md:text-3xl font-extrabold shadow-2xl hover:bg-white hover:text-cyan-600 transform hover:scale-110 transition-all"
                    >
                      START LEARNING →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* ========== SLIDE 3 ========== */}
          <SwiperSlide>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900">
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <img
                src="/hero3.jpg"
                alt="Freelancing"
                className="w-full h-full object-cover mix-blend-overlay"
              />
            </div>
            <div className="relative h-full flex items-center justify-center text-center">
              <div className="max-w-5xl mx-auto px-6">
                <h1 className="text-5xl md:text-8xl font-extrabold text-yellow-400">
                  BECOME A FREELANCER
                </h1>
                <p className="text-3xl md:text-5xl mt-6 text-white font-bold">
                  Ghar Baithe $500–$3000/Month Kamayein
                </p>
                <p className="text-xl md:text-2xl mt-8 text-gray-200">
                  Upwork • Fiverr • 100% Job Guarantee Training
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
                  <a
                    href="/registration"
                    className="bg-yellow-400 text-purple-900 px-16 py-7 rounded-full text-3xl md:text-4xl font-extrabold shadow-2xl hover:bg-white transform hover:scale-110 transition-all"
                  >
                    JOIN NOW & START EARNING
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Optional: Custom Pagination Bullets Style */}
        <style jsx>{`
          .swiper-pagination-bullet {
            background: white;
            opacity: 0.5;
            width: 12px;
            height: 12px;
          }
          .swiper-pagination-bullet-active {
            background: #ffb400;
            opacity: 1;
            transform: scale(1.4);
          }
        `}</style>
      </section>
      {/* <section className="bg-gradient-to-br from-purple-950 via-purple-900 to-pink-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          Left Side - Text + Icons + Buttons
          <div data-aos="fade-up">
            <h1 className="text-5xl md:text-4xl text-[#FFB400] font-extrabold leading-tight">
              SHAPE YOUR FUTURE
              <br />
              <span className="text-white">WITH NO.1 IT INSTITUTE</span> IN
              CHINIOT
            </h1>
            <h2 className="text-4xl md:text-3xl font-semibold mt-6">
              Learn in-demand digital skills at{" "}
              <span className="text-[#FFB400]">APEX AI IT Institute</span>
            </h2>
            <p className="text-2xl mt-6 font-bold text-yellow-300 urdu">
              آپکا ہنر، آپکا مستقبل
            </p>

            <p
              className="text-lg mt-6 opacity-90"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              APEX AI IT Institute, the best IT Institute in Chiniot, offers
              AI-empowered training programs in Web Design & Development,
              Programming & Tech, Graphic Design, Digital Marketing, Office
              Management, and Freelancing. Master the skills for a bright
              future.
            </p>

            ICONS ROW — Bilkul trteeb se premium feel
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
              {[
                { icon: "fa-laptop-code", label: "Web Dev" },
                { icon: "fa-palette", label: "Graphic Design" },
                { icon: "fa-bullhorn", label: "Digital Marketing" },
                { icon: "fa-file-excel", label: "Office Management" },
                { icon: "fa-image", label: "Photoshop" },
                { icon: "fa-draw-polygon", label: "Illustrator" },
                { icon: "fa-dollar-sign", label: "Freelancing" },
                { icon: "fa-brain", label: "AI Powered" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="text-center group"
                  data-aos="fade-up"
                  data-aos-delay={200 + i * 100}
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center text-3xl sm:text-4xl group-hover:bg-yellow-400 group-hover:text-purple-900 transition-all duration-500 shadow-xl group-hover:scale-110">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <p className="mt-3 text-sm sm:text-base font-semibold opacity-90 group-hover:text-yellow-300 transition">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            Buttons
            <div className="flex flex-wrap gap-6 mt-12">
              <a
                href="tel:03000123456"
                className="bg-yellow-400 text-white px-6 py-6 rounded-md text-2xl font-semibold hover:bg-white hover:text-yellow-400 shadow-xl flex items-center gap-3 transform transition"
              >
                <i className="fas fa-phone-volume text-3xl"></i>
                ENROLL NOW
              </a>
            </div>
          </div>

          Right Side - Hero Image
          <div data-aos="fade-left" data-aos-delay="300">
            <img
              src="/hero-student.png"
              alt="Student Learning"
              className="rounded-3xl shadow-2xl hover:shadow-purple-500/50 transition-shadow w-full"
            />
          </div>
        </div>
      </section> */}
      {/* Course Catalog */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-5xl font-extrabold text-yellow-400 mb-6">
            OUR <span className="text-black">PROFESSION COURSE</span> CATALOG
          </h2>
          <p className="text-xl text-gray-700 mb-16 max-w-3xl mx-auto">
            Get job ready with our comprehensive training programs.
          </p>

          {/* PREMIUM COURSE SLIDER */}
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            className="pb-16"
          >
            {[
              {
                name: "Programming & Tech",
                duration: "3-6 Months",
                color: "from-purple-600 to-pink-600",
                icon: "fa-laptop-code",
              },
              {
                name: "Web Development",
                duration: "4 Months",
                color: "from-blue-600 to-cyan-600",
                icon: "fa-code",
              },
              {
                name: "Graphic Designing",
                duration: "2 Months",
                color: "from-pink-600 to-rose-600",
                icon: "fa-palette",
              },
              {
                name: "Freelancing Mastery",
                duration: "2 Months",
                color: "from-yellow-500 to-orange-600",
                icon: "fa-dollar-sign",
              },
              {
                name: "Digital Marketing",
                duration: "3 Months",
                color: "from-green-600 to-teal-600",
                icon: "fa-bullhorn",
              },
              {
                name: "Flutter Development",
                duration: "4 Months",
                color: "from-indigo-600 to-purple-600",
                icon: "fa-mobile-alt",
              },
              {
                name: "Adobe Photoshop",
                duration: "2 Months",
                color: "from-pink-700 to-purple-700",
                icon: "fa-image",
              },
              {
                name: "Office Management",
                duration: "2 Months",
                color: "from-gray-600 to-slate-700",
                icon: "fa-file-excel",
              },
              {
                name: "AI & Automation",
                duration: "3 Months",
                color: "from-purple-700 to-indigo-700",
                icon: "fa-brain",
              },
            ].map((course, i) => (
              <SwiperSlide key={i}>
                <div
                  className={`bg-gradient-to-br ${course.color} text-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 hover:-translate-y-4 transition-all duration-500 cursor-pointer h-full flex flex-col justify-between`}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  {/* Icon */}
                  <div className="w-24 h-24 mx-auto mb-6 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-5xl shadow-xl">
                    <i className={`fas ${course.icon}`}></i>
                  </div>

                  {/* Course Name */}
                  <h3 className="text-2xl font-extrabold mb-3">
                    {course.name}
                  </h3>

                  {/* Duration */}
                  <p className="text-lg opacity-90 mb-6">
                    Duration:{" "}
                    <span className="font-bold">{course.duration}</span>
                  </p>

                  {/* Button */}
                  <Link
                    to="/courses"
                    className="block mt-auto bg-white/20 backdrop-blur hover:bg-white hover:text-purple-900 py-4 rounded-full font-extrabold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl"
                  >
                    READ MORE →
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2
            className="text-6xl md:text-5xl font-extrabold text-yellow-400 mb-4"
            data-aos="fade-up"
          >
            OUR <span className="text-black">PROFESSION COURSE</span> CATALOG
          </h2>
          <p
            className="text-xl text-gray-700 mb-12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Get job ready with our comprehensive training programs.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "Programming & Tech",
                duration: "3-6 Months",
                color: "bg-gradient-to-br from-purple-500 to-pink-500",
              },
              {
                name: "Web Development",
                duration: "4 Months",
                color: "bg-gradient-to-br from-blue-500 to-cyan-500",
              },
              {
                name: "Graphic Designing",
                duration: "2 Months",
                color: "bg-gradient-to-br from-pink-500 to-rose-500",
              },
              {
                name: "Freelancing",
                duration: "2 Months",
                color: "bg-gradient-to-br from-yellow-500 to-orange-500",
              },
            ].map((course, i) => (
              <div
                key={i}
                className={`${course.color} text-white rounded-3xl p-8 shadow-2xl transform hover:scale-105 hover:-translate-y-4 transition-all duration-500`}
                data-aos="fade-up"
                data-aos-delay={i * 200}
              >
                <div className="bg-white/20 backdrop-blur rounded-2xl w-32 h-32 mx-auto mb-6 flex items-center justify-center text-6xl"></div>
                <h3 className="text-2xl font-bold">{course.name}</h3>
                <p className="text-lg mt-2 opacity-90">
                  Duration: {course.duration}
                </p>
                <Link
                  to="/courses"
                  className="block mt-6 font-bold hover:underline"
                >
                  READ MORE →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <div className="bg-[#1E0040] text-white py-3 font-semibold overflow-hidden select-none">
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
                <span className="mx-10 text-lg uppercase">
                  Web Design and Development
                </span>
                <span className="text-2xl text-yellow-300">.</span>
                <span className="mx-10 text-lg uppercase">
                  Graphic Designing
                </span>
                <span className="text-2xl text-yellow-300">.</span>
                <span className="mx-10 text-lg uppercase">Freelancing</span>
                <span className="text-2xl text-yellow-300">.</span>
                <span className="mx-10 text-lg uppercase">
                  Digital Marketing
                </span>
                <span className="text-2xl text-yellow-300">.</span>
                <span className="mx-10 text-lg uppercase">
                  Office Managment
                </span>
                <span className="text-2xl text-yellow-300">.</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ====================  ABOUT SECTION (Home pe) ==================== */}
      <section
        id="about-section"
        className="py-16 md:py-28 bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 text-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            {/* LEFT - TEXT */}
            <div className="space-y-6 order-2 md:order-1">
              <p className="text-[#FFB400] font-bold text-sm md:text-lg flex items-center gap-3">
                <span className="w-7 h-7 bg-yellow-500 rounded-full flex-shrink-0"></span>
                Who We Are: Pioneers in IT Skills
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                ABOUT{" "}
                <span className="text-white block mt-2">APEX AI INSTITUTE</span>
              </h1>

              <div className="text-base md:text-lg leading-relaxed space-y-4 text-gray-200">
                <p>
                  <strong>APEX Ai IT Institute</strong>, one of the best IT
                  institutes in Pakistan, offers Certified AI-empowered Digital
                  Skills programs and training.
                </p>
                <p>
                  We started our journey in <strong>2018</strong> as a software
                  agency named{" "}
                  <span className="text-[#FFB400] underline">
                    APEX Creations
                  </span>
                  , providing Web Design & Development, Digital Marketing,
                  Graphic Designing, and Tech services.
                </p>
                <p>
                  Word of mouth became our biggest strength. Clients who trusted
                  us brought more opportunities. We created internships and
                  trained hundreds of students who are now successful
                  freelancers, job holders, and business owners.
                </p>
                <p className="text-lg md:text-xl font-bold text-yellow-300">
                  Today, we are on a mission to empower thousands more with
                  real-world skills and lifetime support.
                </p>
              </div>
            </div>

            {/* RIGHT - STATS + IMAGE */}
            <div className="space-y-10 order-1 md:order-2">
              {/* Stats Grid - Mobile pe 1 column, Desktop pe 2 */}
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 md:gap-8 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
                    263
                  </div>
                  <p className="mt-2 text-sm md:text-base text-gray-300">
                    Students successfully completed courses
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white">
                    80%
                  </div>
                  <p className="mt-2 text-sm md:text-base text-gray-300">
                    Repeat enrollment – students returning
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white">
                    86
                  </div>
                  <p className="mt-2 text-sm md:text-base text-gray-300">
                    Students got paying clients during training
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white">
                    200+
                  </div>
                  <p className="mt-2 text-sm md:text-base text-gray-300">
                    Active APEX AI Community
                  </p>
                </div>
              </div>

              {/* Enroll Button */}
              <div className="text-center">
                <a
                  href="/registration"
                  className="inline-block bg-[#FFB400] hover:bg-white text-purple-900 font-extrabold px-10 py-5 rounded-full text-lg md:text-2xl transform hover:scale-105 transition shadow-xl"
                >
                  ENROLL NOW →
                </a>
              </div>

              {/* Cartoon Student - Mobile pe top, Desktop pe right */}
              <div className="flex justify-center md:justify-end -mt-10 md:mt-0">
                <img
                  src="/Images/Muslim graduation-bro.png"
                  alt="Graduate Student"
                  className="w-64 sm:w-72 md:w-80 lg:w-96 drop-shadow-2xl hover:scale-105 transition-transform"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ, Certificate, CTA – Same with AOS */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2
            className="text-5xl font-extrabold text-center text-purple-900 mb-16"
            data-aos="zoom-in"
          >
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <div className="space-y-8">
            {FAQsData.map((item, index) => (
              <details
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden group transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <summary className="px-8 py-6 text-xl font-bold text-purple-800 cursor-pointer flex justify-between items-center hover:bg-purple-50 transition-all">
                  <span className="pr-4">{item.question}</span>
                  <span className="text-3xl text-yellow-500 group-open:rotate-45 transition-transform duration-300">
                    +
                  </span>
                </summary>

                <div className="px-8 pb-8 pt-2 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {item.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2
            className="text-5xl font-extrabold text-center text-purple-900 mb-12"
            data-aos="zoom-in"
          >
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="space-y-6">
            {[
              "How much course duration will be?",
              "Can I get internship opportunities during my course?",
              "Is there any installment plan available?",
              "After completion of the course can I get a certificate?",
              "Are there weekend classes available?",
              "Is there any refund policy available?",
              "Are there any assignments during the course for practicing?",
              "Is there any mentorship support available?",
            ].map((q, i) => (
              <details
                key={i}
                className="bg-white rounded-2xl shadow-lg p-6"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <summary className="text-xl font-bold text-purple-800 flex justify-between items-center cursor-pointer">
                  {q}
                  <span className="text-3xl text-yellow-500">+</span>
                </summary>
                <p className="mt-4 text-gray-700">
                  Yes, bilkul available hai! Call karo details ke liye.
                </p>
              </details>
            ))}
          </div>
        </div>
      </section> */}
      {/* OUR Main Goal */}
      <section className="py-24 bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT - TEXT */}
          <div className="space-y-5">
            <p className="text-[#FFB400] font-bold text-lg flex items-center gap-3">
              <span className="w-8 h-8 bg-yellow-500 rounded-full"></span>
              Why This Matters to Us
            </p>

            <h1 className="text-6xl text-[#FFB400] md:text-6xl font-extrabold leading-tight">
              OUR <span className="text-white">MAIN</span> GOAL
            </h1>

            <div className=" leading-relaxed space-y-4 text-gray-200">
              <p>
                Our primary focus is to teach you modern technical skills that
                will help you build a successful career in making money online.
              </p>
              <p>
                In today’s competitive world, having the right skills can open
                up many career opportunities. The internet has made it easier
                than ever to find jobs, start businesses, and freelance.
              </p>
              <p>
                No matter where you are now, change is possible. Learning new
                skills can transform your life. Let us help you take advantage
                of these opportunities.
              </p>
            </div>
            <div className="text-center">
              <a
                href="/registration"
                className="inline-block bg-yellow-500 hover:bg-blue-950 px-6 py-4 rounded-md text-xl  shadow-2xl transform hover:scale-110 transition"
              >
                Join Us and Start Building Your Career Today! →
              </a>
            </div>
          </div>

          {/* RIGHT - STATS + ILLUSTRATION */}
          <div className="space-y-12"></div>
        </div>
      </section>

      {/* OURTESTIMINIAL */}

      <section
        id="testimonial-section"
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-5xl md:text-7xl font-extrabold text-purple-900 mb-6">
            What Our <span className="text-yellow-500">Students Say</span>
          </h2>
          <p className="text-xl text-gray-700 mb-16 max-w-3xl mx-auto">
            More than 2000 students joined APEX AI IT Institute and changed
            their lives. You can be the next success story!
          </p>

          {/* Swiper Slider Testimonials */}
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            className="pb-12"
          >
            {[
              {
                name: "Ayesha Khan",
                course: "Graphic Design (Photoshop + Illustrator)",
                text: "Sir ne zero se hero banaya! Aaj main full-time freelancer hun aur mahine ka 80,000+ kama rahi hun. Best decision of my life!",
                rating: 5,
                img: "https://i.imgur.com/5V0K8eF.png",
              },
              {
                name: "Muhammad Ahmed",
                course: "MERN Stack Web Development",
                text: "6 mahine pehle coding nahi aati thi, aaj Dubai ki company mein job kar raha hun 2.5 lac PKR salary pe. APEX ne sapne sach kar diye!",
                rating: 5,
                img: "https://i.imgur.com/9j3kLmN.png",
              },
              {
                name: "Saba Riaz",
                course: "Digital Marketing + Freelancing",
                text: "Ghar baithe Upwork pe clients mil gaye. Sir ka practical method itna zabardast tha ke pehle hi project se $800 earn kar liye!",
                rating: 5,
                img: "https://i.imgur.com/3xL8pQw.png",
              },
              {
                name: "Ali Raza",
                course: "Flutter Mobile App Development",
                text: "Course khatam hone se pehle hi 2 apps Play Store pe upload kar diye. Aaj mera khud ka startup chal raha hai. Thanks APEX!",
                rating: 5,
                img: "https://i.imgur.com/8mN5vRt.png",
              },
              {
                name: "Fatima Noor",
                course: "Office Management + MS Office",
                text: "Sir ne resume banana, interview dena sab sikhaya. Aaj multinational company mein Admin Officer hun 70k salary pe!",
                rating: 5,
                img: "https://i.imgur.com/7pQ2wXs.png",
              },
              {
                name: "Hassan Butt",
                course: "Freelancing Mastery",
                text: "Fiverr pe 5-star profile bana diya sir ne. Ab mahine ka 1.5 lac+ earn kar raha hun ghar baithe. Best investment ever!",
                rating: 5,
                img: "https://i.imgur.com/4rT9vKp.png",
              },
            ].map((t, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-purple-300 transition-all duration-500 border border-gray-100 h-full flex flex-col justify-between">
                  {/* Stars */}
                  <div className="flex justify-center mb-4">
                    {[...Array(t.rating)].map((_, si) => (
                      <i
                        key={si}
                        className="fas fa-star text-yellow-500 text-2xl"
                      ></i>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 text-lg italic leading-relaxed flex-1">
                    "{t.text}"
                  </p>

                  {/* Student Info */}
                  <div className="mt-8 flex items-center gap-4">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-yellow-400 shadow-lg"
                    />
                    <div className="text-left">
                      <h4 className="font-extrabold text-purple-900 text-xl">
                        {t.name}
                      </h4>
                      <p className="text-sm text-gray-600">{t.course}</p>
                    </div>
                  </div>

                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 text-yellow-400 opacity-20 text-9xl">
                    <i className="fas fa-quote-right"></i>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Trust Badge */}
          <div className="mt-16 bg-gradient-to-r from-purple-900 to-pink-900 rounded-3xl p-10 text-center text-white shadow-2xl">
            <h3 className="text-4xl md:text-5xl font-extrabold">
              2000+ Students Already Transformed Their Lives
            </h3>
            <p className="text-2xl mt-4">It's Your Turn Now!</p>
            <a
              href="/registration"
              className="inline-block mt-8 bg-yellow-400 text-purple-900 px-12 py-6 rounded-full text-3xl font-extrabold hover:bg-white transform hover:scale-110 transition-all shadow-2xl"
            >
              ENROLL NOW & Change Your Life
            </a>
          </div>
        </div>
      </section>

      {/* Become Instructor or Student */}

      <section className="py-20 bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 text-white relative overflow-hidden">
        {/* Top Wave */}
        <div className="absolute top-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 200"
            className="w-full h-32 md:h-48 fill-purple-800 opacity-50"
          >
            <path d="M0,100 C360,0 1080,200 1440,100 L1440,0 L0,0 Z"></path>
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          {/* Heading */}
          <div className="mb-16">
            <p className="text-yellow-400 text-sm md:text-base font-semibold tracking-widest uppercase">
              Begin Your Journey
            </p>
            <h2 className="text-4xl md:text-6xl font-extrabold mt-2">
              START LEARNING WITH US TODAY
            </h2>
            <p className="text-lg md:text-xl mt-4 text-gray-300 max-w-4xl mx-auto">
              Join us to learn practical skills for your career. Take the first
              step to a better future with APEX AI IT Institute.
            </p>
          </div>

          {/* 4 Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
            {[
              {
                icon: "🧑‍🏫",
                title: "LEARN FROM PRACTICAL TRAINERS",
                desc: "Get guidance from industry professionals to master your skills.",
              },
              {
                icon: "📚",
                title: "MANY COURSES",
                desc: "Choose from a variety of courses to meet your career needs.",
              },
              {
                icon: "💼",
                title: "INTERNSHIP OPPORTUNITY",
                desc: "Gain real-world experience with our internship programs.",
              },
              {
                icon: "🚀",
                title: "START YOUR CAREER",
                desc: "Gain the skills and knowledge you need to begin a successful career.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="text-6xl md:text-7xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Become Instructor + Student Cards */}
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Become an Instructor */}
            <div
              className="bg-white text-gray-800 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="w-full md:w-auto">
                <img
                  src="/Images/teacher-3679814_1280.jpg"
                  alt="Instructor"
                  className="w-full h-64 md:h-full object-cover rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none"
                />
              </div>
              <div className="flex flex-col md:flex-row items-center">
                <div className="p-8 md:p-10 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-purple-900 mb-4">
                    BECOME AN INSTRUCTOR
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Are you passionately about teaching? Join us to inspire,
                    educate, and train the next generation of professionals.
                    Share your knowledge and make a difference.
                  </p>
                  <a
                    href="https://wa.me/923083535162"
                    className="inline-block bg-yellow-500 text-white px-8 py-4 rounded-full font-extrabold text-lg hover:bg-purple-950 transform hover:scale-110 transition-all shadow-lg"
                  >
                    APPLY NOW →
                  </a>
                </div>
              </div>
            </div>

            {/* Become a Student */}
            <div
              className="bg-white text-gray-800 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="w-full md:w-auto">
                <img
                  src="/Images/graduation-4502796_1280.jpg"
                  alt="Student"
                  className="w-full h-64 md:h-full object-cover rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none"
                />
              </div>
              <div className="flex flex-col md:flex-row items-center">
                <div className="p-8 md:p-10 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-purple-900 mb-4">
                    BECOME A STUDENT
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Join us for in-person classes and start your journey to gain
                    new skills today. Transform your future with practical,
                    job-ready training.
                  </p>
                  <a
                    href="/registration"
                    className="inline-block bg-yellow-500 text-purple-900 px-8 py-4 rounded-full font-extrabold text-lg hover:bg-yellow-400 transform hover:scale-110 transition-all shadow-lg"
                  >
                    APPLY NOW →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact us section */}

      <section className="py-20 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-5xl md:text-6xl font-extrabold text-yellow-500 mb-16">
            FEEL FREE <span className="text-black">TO CONTACT</span> US
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Contact Info */}
            <div className="space-y-12">
              {/* Address */}
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-3xl text-white shadow-xl">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    ADDRESS
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    New Shah Shams Colony Main Blvd
                    <br />
                    Near Nadra Office, Multan.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-3xl text-white shadow-xl">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    CONTACT
                  </h3>
                  <p className="text-gray-600">
                    Call/WhatsApp:{" "}
                    <a
                      href="tel:+923083535162"
                      className="font-bold text-purple-700"
                    >
                      +923083535162
                    </a>
                    <br />
                    Email:{" "}
                    <a
                      href="mailto:info@apexai.pk"
                      className="font-bold text-purple-700"
                    >
                      info@apexai.pk
                    </a>
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-3xl text-white shadow-xl">
                  <i className="fas fa-clock"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    HOURS OF OPERATION
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Monday - Thursday: 9:00 AM to 6:00 PM
                    <br />
                    Saturday - Sunday: 9:00 AM to 6:00 PM
                    <br />
                    <span className="text-red-600 font-bold">
                      Friday Closed
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-yellow-500 focus:outline-none transition"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-yellow-500 focus:outline-none transition"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-yellow-500 focus:outline-none transition"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-yellow-500 focus:outline-none transition"
                  />
                </div>

                <textarea
                  name="message"
                  rows="6"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-yellow-500 focus:outline-none transition resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-white py-5 rounded-full text-2xl font-extrabold hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center gap-3"
                >
                  SEND MESSAGE
                  <i className="fas fa-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-orange-600 text-purple-900 text-center">
        <h2 className="text-6xl font-extrabold mb-6" data-aos="fade-up">
          TAKE THE NEXT STEP TO SECURE YOUR SPOT
        </h2>
        <a
          href="/registration"
          className="inline-block bg-white px-20 py-10 rounded-full text-5xl font-extrabold hover:bg-gray-100 shadow-2xl transform hover:scale-110 transition"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          ENROLL NOW
        </a>
      </section>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/+923083535162"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-3xl hover:scale-110 transition z-50"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
}

// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <>
//       {/* Hero Section - Shape Your Future */}
//       <section className="bg-gradient-to-br from-purple-950 via-purple-900 to-pink-900 text-white py-20 relative overflow-hidden">
//         <div className="absolute inset-0 bg-black opacity-40"></div>
//         <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
//               SHAPE YOUR FUTURE WITH <br />
//               <span className="text-[#FFB400]">NO.1 IT INSTITUTE</span> IN
//               CHINIOT
//             </h1>
//             <p className="text-2xl mt-6 font-bold text-yellow-300 urdu">
//               آپکا ہنر، آپکا مستقبل
//             </p>
//             <p className="text-lg mt-6 opacity-90">
//               Learn In-Demand Digital Skills at APEX AI IT Institute – Web
//               Development, Graphic Design, Digital Marketing, Freelancing &
//               More. 100% Job Placement Guarantee!
//             </p>

//             <div className="flex flex-wrap gap-4 mt-8">
//               <a
//                 href="tel:03000123456"
//                 className="bg-yellow-400 text-purple-900 px-10 py-5 rounded-full text-2xl font-extrabold hover:bg-yellow-300 shadow-xl flex items-center gap-3"
//               >
//                 ENROLL NOW
//               </a>
//               <a
//                 href="https://wa.me/923000123456"
//                 className="bg-green-500 px-10 py-5 rounded-full text-2xl font-extrabold flex items-center gap-3"
//               >
//                 WhatsApp Chat
//               </a>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-3 gap-8 mt-12">
//               <div className="text-center bg-white/10 backdrop-blur rounded-2xl p-6">
//                 <h3 className="text-4xl font-bold text-yellow-400">22+</h3>
//                 <p className="text-lg">In-Demand Courses</p>
//               </div>
//               <div className="text-center bg-white/10 backdrop-blur rounded-2xl p-6">
//                 <h3 className="text-4xl font-bold text-yellow-400">16+</h3>
//                 <p className="text-lg">Leading Professions</p>
//               </div>
//               <div className="text-center bg-white/10 backdrop-blur rounded-2xl p-6">
//                 <h3 className="text-4xl font-bold text-yellow-400">Fastest</h3>
//                 <p className="text-lg">Growing Community</p>
//               </div>
//             </div>
//           </div>
//           <div className="hidden md:block">
//             <img
//               src="/hero-student.png"
//               alt="Student Learning"
//               className="rounded-3xl shadow-2xl"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Our Profession Course Catalog */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-5xl font-extrabold text-purple-900 mb-4">
//             OUR PROFESSION COURSE CATALOG
//           </h2>
//           <p className="text-xl text-gray-700 mb-12">
//             Get your job ready with our comprehensive training and internship
//             programs.
//           </p>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {[
//               {
//                 name: "Programming & Tech",
//                 duration: "3-6 Months",
//                 color: "bg-purple-100",
//               },
//               {
//                 name: "Web Development",
//                 duration: "4 Months",
//                 color: "bg-blue-100",
//               },
//               {
//                 name: "Graphic Designing",
//                 duration: "2 Months",
//                 color: "bg-pink-100",
//               },
//               {
//                 name: "Freelancing",
//                 duration: "2 Months",
//                 color: "bg-yellow-100",
//               },
//             ].map((course) => (
//               <div
//                 key={course.name}
//                 className={`${course.color} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition`}
//               >
//                 <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 mx-auto mb-6"></div>
//                 <h3 className="text-2xl font-bold text-purple-900">
//                   {course.name}
//                 </h3>
//                 <p className="text-lg text-gray-700 mt-2">
//                   Duration: {course.duration}
//                 </p>
//                 <Link
//                   to="/courses"
//                   className="block mt-6 text-purple-800 font-bold hover:text-yellow-600"
//                 >
//                   READ MORE →
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900 text-white">
//         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <h2 className="text-5xl font-extrabold text-yellow-400 mb-8">
//               ABOUT APEX AI INSTITUTE
//             </h2>
//             <p className="text-lg leading-relaxed mb-6">
//               APEX AI Institute, one of the best IT Institute in Chiniot, offers
//               AI-empowered training programs in Web Design & Development,
//               Programming & Tech, Graphic Design, Digital Marketing, and
//               Freelancing.
//             </p>
//             <p className="text-lg leading-relaxed">
//               We provide high-quality work from the start and over time. Word of
//               mouth strategies through our students remain the best marketing
//               tool. Clients who trusted us, got others to trust us. Our success
//               milestones during this time, we noticed the value of offering
//               packs. We created internship opportunities and trained students in
//               various skills to develop successful career for themselves.
//             </p>
//             <div className="grid grid-cols-2 gap-8 mt-12">
//               <div className="text-center">
//                 <h3 className="text-6xl font-bold text-yellow-400">10</h3>
//                 <p className="text-2xl">Years of Excellence</p>
//               </div>
//               <div className="text-center">
//                 <h3 className="text-6xl font-bold text-yellow-400">100%</h3>
//                 <p className="text-2xl">Job Placement</p>
//               </div>
//             </div>
//           </div>
//           <div className="text-center">
//             <img
//               src="/about-institute.jpg"
//               alt="APEX Institute"
//               className="rounded-3xl shadow-2xl"
//             />
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-20 bg-gray-100">
//         <div className="max-w-4xl mx-auto px-6">
//           <h2 className="text-5xl font-extrabold text-center text-purple-900 mb-12">
//             FREQUENTLY ASKED QUESTIONS
//           </h2>
//           <div className="space-y-6">
//             {[
//               "How much course duration will be?",
//               "Can I get Internship opportunities during my course?",
//               "Is there any installment plan available?",
//               "After completion of the course can I get a certificate?",
//               "Are there weekend classes available?",
//               "Is there any refund policy available?",
//             ].map((q, i) => (
//               <details
//                 key={i}
//                 className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer"
//               >
//                 <summary className="text-xl font-bold text-purple-800 flex justify-between items-center">
//                   {q}
//                   <span className="text-3xl text-yellow-500">+</span>
//                 </summary>
//                 <p className="mt-4 text-gray-700">
//                   Yes, we offer flexible options. Contact us for details.
//                 </p>
//               </details>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Certificate Section */}
//       <section className="py-20 bg-gradient-to-b from-purple-900 to-purple-950 text-white text-center">
//         <h2 className="text-5xl font-extrabold mb-8">COMPLETION CERTIFICATE</h2>
//         <p className="text-2xl mb-12 max-w-4xl mx-auto">
//           When you finish your course and project, you will get a certificate.
//           This shows you have learned new skills. You can use this certificate
//           to get jobs or attract clients.
//         </p>
//         <div className="bg-white/10 backdrop-blur rounded-3xl p-12 max-w-5xl mx-auto">
//           <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96"></div>
//           <p className="text-3xl font-bold text-yellow-400 mt-8">
//             You are now a graduate!
//           </p>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-20 bg-gradient-to-r from-yellow-500 to-orange-600 text-purple-900 text-center">
//         <h2 className="text-3xl font-extrabold mb-6">
//           TAKE THE NEXT STEP TO SECURE YOUR SPOT IN OUR EXCLUSIVE PROGRAMS
//         </h2>
//         <p className="text-3xl mb-10">
//           Don't Miss This Opportunity To Master In-Demand Skills!
//         </p>
//         <a
//           href="tel:03000123456"
//           className="bg-white text-purple-900 px-16 py-8 rounded-full text-4xl font-extrabold hover:bg-gray-100 shadow-2xl inline-block"
//         >
//           ENROLL NOW →
//         </a>
//       </section>
//     </>
//   );
// }

// export default function Home() {
//   return (
//     <div className="">
//       {/* Hero Section */}
//       <section
//         id="first-section"
//         // bg-gradient-to-b
//         // from-purple-950
//         // to-purple-900
//         className="bg-gradient-to-r from-[#1D0041] to-[#4D204A] text-white py-16 md:py-24 overflow-hidden"
//       >
//         <div className="max-w-5xl mx-auto px-6">
//           <div className="grid md:grid-cols-2 gap-10 items-center">
//             {/* Left Side – Text + Buttons */}
//             <div className="order-1 md:order-2 text-center md:text-left space-y-6">
//               <h1 className="text-2xl md:text-6xl leading-tight">
//                 Welcome to <br />
//                 <span className="text-yellow-400 text-5xl md:text-7xl">
//                   APEX <br /> AI Institute
//                 </span>
//               </h1>
//               <p className="text-lg md:text-xl leading-relaxed text-gray-200">
//                 APEX Institute, the best IT Institute in Chiniot, offers
//                 AI-empowered training programs in Web Design & Development,
//                 Programming & Tech, Graphic Design, Digital Marketing, and
//                 Freelancing. Master the skills for a bright future. Master
//                 in-demand IT skills with 100% Job Placement .
//               </p>
//               <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
//                 <a
//                   href="/registration"
//                   className="bg-yellow-400 text-purple-900 px-10 py-5 rounded-full text-xl md:text-2xl font-bold hover:bg-yellow-300 shadow-xl transition transform hover:scale-105"
//                 >
//                   ENROLL NOW
//                 </a>
//               </div>
//             </div>

//             {/* Right Side – Image */}
//             <div className="order-2 md:order-1">
//               <img
//                 src="/Images/firstImage.jpg"
//                 alt="APEX-IT Institute Students Learning"
//                 className="w-full max-w-lg mx-auto h-[400px] rounded-2xl shadow-2xl transform transition duration-500"
//               />
//               {/* Agar image nahi hai to placeholder use karo */}
//               {/* <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center text-gray-500">
//                 <p className="text-2xl">
//                   <img src="/Images/firstImage.jpg" alt="" />
//                 </p>
//               </div> */}
//             </div>
//           </div>
//         </div>

//         {/* <div className="max-w-7xl mx-auto px-6 text-center">
//           <h1 className="text-5xl md:text-7xl font-bold mb-6">
//             Welcome to{" "}
//             <span className="text-yellow-400">APEX-IT Institute</span>
//           </h1>
//           <h2>Learn in-demand digital skills at APEX IT Institute</h2>
//           <p className="text-2xl mb-8 urdu text-yellow-300">
//             آپکا ہنر ، آپکا مستقبل
//           </p>
//           <p className="text-xl mb-10">
//             APEX Institute, the best IT Institute in Chiniot, offers
//             AI-empowered training programs in Web Design & Development,
//             Programming & Tech, Graphic Design, Digital Marketing, and
//             Freelancing. Master the skills for a bright future. Master in-demand
//             IT skills with 100% Job Placement
//           </p>
//           <div className="flex flex-wrap justify-center gap-6">
//             <a
//               href="tel:03360200088"
//               className="bg-white text-purple-800 px-10 py-5 rounded-full text-2xl font-bold hover:bg-gray-100 flex items-center gap-3"
//             >
//               <i className="fab fa-whatsapp text-green-500"></i>
//               Call Now: 0300-01234567
//             </a>
//             <a
//               href="/registration"
//               className="bg-yellow-400 text-purple-900 px-10 py-5 rounded-full text-2xl font-bold hover:bg-yellow-300"
//             >
//               ENROLL NOW
//             </a>
//           </div>
//         </div> */}
//       </section>

//       {/* Quick Form */}
//       <section className="py-16 bg-gray-100 m-20">
//         <div className="max-w-4xl mx-auto px-6 bg-white rounded-2xl shadow-2xl p-10 -mt-20 relative z-10">
//           <h2 className="text-4xl font-bold text-center mb-8 text-purple-800">
//             Get Free Counseling
//           </h2>
//           <form className="grid md:grid-cols-2 gap-6">
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="p-4 border-2 rounded-lg"
//               required
//             />
//             <input
//               type="tel"
//               placeholder="Phone Number"
//               className="p-4 border-2 rounded-lg"
//               required
//             />
//             <select className="p-4 border-2 rounded-lg md:col-span-2">
//               <option>Select Course</option>
//               <option>Web Development</option>
//               <option>Graphic Design</option>
//               <option>Digital Marketing</option>
//               <option>Flutter Development</option>
//             </select>
//             <button
//               type="submit"
//               className="md:col-span-2 bg-orange-500 text-white py-5 text-xl font-bold rounded-lg hover:bg-orange-600"
//             >
//               Submit & Get Call in 5 Minutes
//             </button>
//           </form>
//         </div>
//       </section>
//     </div>
//   );
// }
