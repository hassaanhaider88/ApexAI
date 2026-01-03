import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    image: "https://i.pinimg.com/videos/thumbnails/originals/e4/db/f9/e4dbf9ce785f57566e7aab511fc783fa.0000000.jpg",
    title: "APEX AI IT INSTITUTE",
    subtitle: "Learn future-ready skills with real projects",
  },
  {
    id: 2,
    image: "https://i.pinimg.com/originals/c8/cd/90/c8cd9002a6edbf84f1e42a182eb00797.jpg",
    title: "WEB DEVELOPMENT",
    subtitle: "From fundamentals to production-level apps",
  },
  {
    id: 3,
    image: "https://i.pinimg.com/originals/e8/4f/bb/e84fbb9ceb0d14aa859581f7d1a9e1a0.jpg",
    title: "FREELANCING",
    subtitle: "Build skills that convert into real income",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            i === index ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105"
          }`}
        >
          {/* Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/65" />

          {/* Content */}
          <div className="relative z-20 flex h-full items-center">
            <div className="max-w-6xl px-6 md:px-12">
              <h1 className="text-4xl md:text-7xl font-extrabold text-yellow-400 leading-tight">
                {slide.title}
              </h1>

              <p className="mt-6 max-w-xl text-lg md:text-xl text-gray-200">
                {slide.subtitle}
              </p>

              <Link
                to="/registration"
                className="inline-block mt-10 rounded-full bg-yellow-400 px-10 py-4 text-lg font-bold text-purple-900 transition hover:scale-105"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full transition ${
              i === index ? "bg-yellow-400 scale-125" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
