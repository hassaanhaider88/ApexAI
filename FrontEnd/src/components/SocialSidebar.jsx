// // src/components/SocialSidebar.jsx

// export default function SocialSidebar() {
//   return (
//     <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 bg-white p-3 rounded-l-xl shadow-2xl border border-gray-200">
//       <a
//         href="https://facebook.com"
//         target="_blank"
//         className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 hover:text-white transition shadow-lg"
//       >
//         <i className="fab fa-facebook-f text-xl"></i>
//       </a>
//       <a
//         href="https://instagram.com"
//         target="_blank"
//         className="w-12 h-12 bg-white text-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 hover:text-white transition shadow-lg"
//       >
//         <i className="fab fa-instagram text-xl"></i>
//       </a>
//       <a
//         href="https://wa.me/923360200088"
//         target="_blank"
//         className="w-12 h-12 bg-white text-green-500 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition shadow-lg"
//       >
//         <i className="fab fa-whatsapp text-xl"></i>
//       </a>
//       <a
//         href="https://youtube.com"
//         target="_blank"
//         className="w-12 h-12 bg-white text-red-600 rounded-full flex items-center justify-center hover:bg-red-700 hover:text-white transition shadow-lg"
//       >
//         <i className="fab fa-youtube text-xl"></i>
//       </a>
//       <a
//         href="https://linkedin.com"
//         target="_blank"
//         className="w-12 h-12 bg-white text-blue-800 rounded-full flex items-center justify-center hover:bg-blue-900 hover:text-white transition shadow-lg"
//       >
//         <i className="fab fa-linkedin-in text-xl"></i>
//       </a>
//     </div>
//   );
// }

import { useEffect, useState } from "react";

export default function SocialSidebar({ IsShow = true }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const firstSection = document.getElementById("first-section");
    if (!firstSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting); // visible only on first section
      },
      { threshold: 0.1 }
    );

    observer.observe(firstSection);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={` ${IsShow ? "block" : "hidden"} fixed right-0 top-1/2 -translate-y-1/2 z-50 transition-all duration-500 
      ${
        visible 
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }
       flex-col gap-4 bg-blue-950 w-28 h-96 flex justify-center  items-center p-3 rounded-l-xl shadow-2xl`}
    >
      <a
        href="https://facebook.com"
        target="_blank"
        className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 hover:text-white transition shadow-lg"
      >
        <i className="fab fa-facebook-f text-xl"></i>
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        className="w-12 h-12 bg-white text-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 hover:text-white transition shadow-lg"
      >
        <i className="fab fa-instagram text-xl"></i>
      </a>
      <a
        href="https://wa.me/923083535162"
        target="_blank"
        className="w-12 h-12 bg-white text-green-500 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition shadow-lg"
      >
        <i className="fab fa-whatsapp text-xl"></i>
      </a>
      <a
        href="https://youtube.com"
        target="_blank"
        className="w-12 h-12 bg-white text-red-600 rounded-full flex items-center justify-center hover:bg-red-700 hover:text-white transition shadow-lg"
      >
        <i className="fab fa-youtube text-xl"></i>
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        className="w-12 h-12 bg-white text-blue-800 rounded-full flex items-center justify-center hover:bg-blue-900 hover:text-white transition shadow-lg"
      >
        <i className="fab fa-linkedin-in text-xl"></i>
      </a>
    </div>
  );
}
