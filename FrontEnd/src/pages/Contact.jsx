import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import BackendURI from "../utils/BackEndURI";

export default function ContactPage() {
  const navigate = useNavigate();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const res = await fetch(`${BackendURI}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        name: formData.name,
        subject: formData.subject,
        phone: formData.phone,
        message: formData.message,
      }),
    });
    const data = await res.json();
    if (data.success) {
      toast.success("Message Sent Successfully");
      navigate("/");
    } else {
      toast.error(data.message);
    }
  };

  return (
    <>
      {/* Purple Wave Header */}
      <div className="bg-gradient-to-br from-purple-900 to-purple-800 text-white py-24 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 320" className="w-full">
            <path
              fill="#f3f4f6"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl text-yellow-400 font-extrabold">
            CONTACT <span className="text-white">US</span>
          </h1>
        </div>
      </div>

      {/* Main Contact Section */}
      <section className="py-20 bg-gray-50 -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Cartoon + Text */}
            <div className="text-center lg:text-left">
              <img
                src="https://i.imgur.com/5vN8kLm.png"
                alt="APEX Assistant"
                className="w-80 md:w-96 mx-auto drop-shadow-2xl"
              />
              <h2 className="text-5xl md:text-6xl font-extrabold mt-10">
                GET IN <span className="text-yellow-500">TOUCH</span>
              </h2>
              <p className="text-2xl mt-6 text-purple-900 font-bold">
                Any Questions? Feel Free To Ask
              </p>
              <div className="mt-8">
                <a
                  href="https://wa.me/92300123456"
                  className="inline-block bg-purple-800 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-purple-900 transform hover:scale-105 transition shadow-xl"
                >
                  <i className="fab fa-whatsapp mr-3"></i>
                  Chat on WhatsApp
                </a>
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
                    className="w-full px-6 py-5 rounded-xl bg-gray-100 focus:bg-white focus:outline-none focus:ring-4 focus:ring-yellow-300 transition text-lg"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-5 rounded-xl bg-gray-100 focus:bg-white focus:outline-none focus:ring-4 focus:ring-yellow-300 transition text-lg"
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
                    className="w-full px-6 py-5 rounded-xl bg-gray-100 focus:bg-white focus:outline-none focus:ring-4 focus:ring-yellow-300 transition text-lg"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-5 rounded-xl bg-gray-100 focus:bg-white focus:outline-none focus:ring-4 focus:ring-yellow-300 transition text-lg"
                  />
                </div>

                <textarea
                  name="message"
                  rows="6"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-5 rounded-xl bg-gray-100 focus:bg-white focus:outline-none focus:ring-4 focus:ring-yellow-300 transition text-lg resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-purple-900 py-6 rounded-full text-2xl font-extrabold hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-2xl flex items-center justify-center gap-4"
                >
                  SEND MESSAGE
                  <i className="fas fa-arrow-right text-3xl"></i>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Floating WhatsApp */}
        <a
          href="https://wa.me/92300123456"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-4xl hover:scale-110 transition z-50 animate-bounce"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </section>
    </>
  );
}
