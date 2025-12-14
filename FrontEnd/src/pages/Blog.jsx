import { Link } from "react-router-dom";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Best Digital Marketing Institute in Multan 2025",
      excerpt:
        "Do you want to learn digital marketing with real-time expert instructors and search for a top Digital Marketing Institute in [...]",
      image: "https://i.imgur.com/kP9mXvR.jpg",
      date: "October 9, 2024",
      author: "APEX AI IT Institute",
    },
    {
      id: 2,
      title: "Top Graphic Design Institute in Chiniot",
      excerpt:
        "Are you looking for the Best Graphic Design Institute in which you can learn all the latest tools and well known name [...]",
      image: "https://i.imgur.com/5vN8kLm.jpg",
      date: "September 6, 2024",
      author: "APEX AI IT Institute",
    },
    {
      id: 3,
      title: "How to Earn Money Online in Pakistan 2025",
      excerpt:
        "Complete guide for beginners: Freelancing, YouTube, Blogging aur E-commerce se ghar baithe 50k–3 lac/month kaise kamayein...",
      image: "https://i.imgur.com/9j3kLmN.jpg",
      date: "November 15, 2024",
      author: "APEX AI IT Institute",
    },
    {
      id: 4,
      title: "MERN Stack Web Development Course – Complete Roadmap",
      excerpt:
        "Zero se hero tak ka safar: MongoDB, Express, React, Node.js — live projects ke saath...",
      image: "https://i.imgur.com/8mN5vRt.jpg",
      date: "December 1, 2024",
      author: "APEX AI IT Institute",
    },
  ];

  return (
    <>
      {/* Purple Wave Header */}
      <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white py-32 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 320" className="w-full">
            <path
              fill="#f9fafb"
              fillOpacity="1"
              d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,170.7C672,149,768,139,864,144C960,149,1056,171,1152,181.3C1248,192,1344,192,1392,192L1440,192L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-extrabold">BLOG</h1>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                data-aos="fade-up"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-extrabold text-purple-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Read More Button */}
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-block bg-yellow-500 text-purple-900 px-8 py-3 rounded-full font-extrabold hover:bg-yellow-400 transform hover:scale-105 transition-all shadow-lg"
                  >
                    Read More →
                  </Link>

                  {/* Author & Date */}
                  <div className="flex items-center justify-between mt-8 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <i className="fas fa-user-circle text-purple-600"></i>
                      <span className="font-semibold">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="fas fa-calendar-alt text-purple-600"></i>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button (Optional) */}
          <div className="text-center mt-16">
            <button className="bg-purple-800 text-white px-12 py-5 rounded-full text-xl font-extrabold hover:bg-purple-900 transform hover:scale-105 transition-all shadow-xl">
              LOAD MORE POSTS
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
