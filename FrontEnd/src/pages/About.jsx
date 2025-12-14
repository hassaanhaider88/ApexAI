export default function About() {
  return (
    <>
      {/* TAIBA-STYLE ABOUT SECTION - EXACT SAME DESIGN */}
      {/* ====================  ABOUT SECTION (Home pe) ==================== */}
      <section
        // id="about-section"
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
    </>
  );
}
