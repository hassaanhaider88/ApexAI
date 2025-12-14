// export default function Footer() {
//   return (
//     <footer className="bg-purple-900 text-white py-12">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         <h2 className="text-4xl font-bold mb-4">
//           Taiba Institute of Technology
//         </h2>
//         <p className="text-xl mb-6">Best IT Training Institute in Pakistan</p>
//         <p>© 2025 Taiba Institute. All Rights Reserved.</p>
//       </div>
//     </footer>
//   );
// }

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-purple-950 to-purple-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1 – Logo + Description */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img src="/ApsxLogo2.svg" alt="APEX IT" className="h-16" />
            <h1 className="text-3xl font-bold">
              <span className="text-white">APEX </span>
              <span className="text-xl">AI IT Institute</span>
            </h1>
          </div>
          <p className="text-gray-300 leading-relaxed max-w-xs">
            Beyond Traditional Teachers. We're Practical Instructors. Learn By
            Doing, Project By Project, And Master Technical Skills.
          </p>
        </div>

        {/* Column 2 – Useful Links */}
        <div>
          <h3 className="text-xl font-bold text-yellow-400 mb-4 border-b-4 border-yellow-400 inline-block">
            USEFUL LINKS
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <a href="/blog" className="hover:text-yellow-400 transition">
                Blog
              </a>
            </li>
            <li>
              <a href="/courses" className="hover:text-yellow-400 transition">
                Courses
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a
                href="#testimonial-section"
                className="hover:text-yellow-400 transition"
              >
                Testimonial
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 – Our Institute */}
        <div>
          <h3 className="text-xl font-bold text-yellow-400 mb-4 border-b-4 border-yellow-400 inline-block">
            OUR INSTITUTE
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <a href="/contact" className="hover:text-yellow-400 transition">
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="/registration"
                className="hover:text-yellow-400 transition"
              >
                Registrations
              </a>
            </li>
            <li>
              <a
                href="/registration"
                className="hover:text-yellow-400 transition"
              >
                Become A Student
              </a>
            </li>
            <li>
              <a
                href="/become-instructor"
                className="hover:text-yellow-400 transition"
              >
                Become An Instructor
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 – Follow Us + Social Icons */}
        <div>
          <h3 className="text-xl font-bold text-yellow-400 mb-4 border-b-4 border-yellow-400 inline-block">
            FOLLOW US
          </h3>
          <p className="text-gray-300 mb-6">
            Let's Connect And Learn Together. Follow Us On Social Media.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-purple-900 transition"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-purple-900 transition"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-purple-900 transition"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-purple-900 transition"
            >
              <i className="fab fa-tiktok"></i>
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-purple-900 transition"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar – Contact + Copyright */}
      <div className="bg-purple-950 border-t border-purple-800 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm md:text-base">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 text-gray-300">
            <div className="flex items-center gap-3">
              <i className="fas fa-phone-alt text-yellow-400"></i>
              <span>0336-0200088</span>
            </div>
            <div className="flex items-center gap-3">
              <i className="fas fa-envelope text-yellow-400"></i>
              <span>info@apexit.pk</span>
            </div>
            <div className="flex items-center gap-3 max-w-md">
              <i className="fas fa-map-marker-alt text-yellow-400"></i>
              <span>
                New Shah Shams Colony Main Blvd Near Nadra Office, Chiniot.
              </span>
            </div>
          </div>

          <div className="text-gray-400 text-center md:text-right">
            <p>© 2025 APEX Ai IT Institute. All Rights Reserved.</p>
            <div className="flex gap-4 justify-center md:justify-end mt-2">
              <a href="#" className="hover:text-yellow-400 transition">
                Term Of Service
              </a>
              <span>|</span>
              <a href="#" className="hover:text-yellow-400 transition">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      {/* <a
        href="https://wa.me/923360200088"
        target="_blank"
        className="fixed bottom-6 left-6 bg-green-500 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-3xl z-50 hover:bg-green-600 transition transform hover:scale-110"
      >
        <i className="fab fa-whatsapp"></i>
      </a> */}
    </footer>
  );
}
