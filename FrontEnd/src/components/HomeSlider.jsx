import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    image:
      "https://i.pinimg.com/originals/7e/50/2c/7e502cef624bd996aa648babd95ef68a.jpg",
    align: "left",
    title: "APEX AI IT INSTITUTE",
  },
  {
    id: 2,
    image:
      "https://i.pinimg.com/originals/b4/f3/37/b4f33726fec60de995173ac1f8b7fccd.jpg",
    align: "right",
    title: "WEB DEVELOPMENT",
  },
  {
    id: 3,
    image:
      "https://i.pinimg.com/originals/ed/e0/b1/ede0b119e3663782d2ce2705bca1e7aa.jpg",
    align: "center",
    title: "FREELANCING",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 2000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);

  return (
    <section
      className="relative min-h-screen w-full  overflow-hidden"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute  inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100 z-10" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            className="w-full h-screen bg-cover object-cover"
            alt=""
          />
          <div className="absolute inset-0 bg-black/60" />

          <div
            className={`relative h-full flex items-center ${
              slide.align === "right"
                ? "justify-end text-right"
                : slide.align === "center"
                ? "justify-center text-center"
                : "justify-start"
            }`}
          >
            <div className="max-w-5xl px-8 text-white">
              <h1 className="text-6xl md:text-8xl font-extrabold text-yellow-400">
                {slide.title}
              </h1>
              <Link
                to="/registration"
                className="inline-block mt-10 bg-yellow-400 text-purple-900 px-10 py-6 rounded-full text-2xl font-extrabold hover:scale-110 transition"
              >
                ENROLL NOW
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Click navigation */}
      <div
        className="absolute inset-0 z-20"
        onClick={(e) =>
          e.clientX < window.innerWidth / 2
            ? setIndex((i) => (i - 1 + slides.length) % slides.length)
            : setIndex((i) => (i + 1) % slides.length)
        }
      />

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? "bg-yellow-400 scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
