import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load posts");
        setLoading(false);
      });
      const token = localStorage.getItem("token");
      if (token) {
        navigate("/accuel");
      }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
        <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">MY BLOG</h1>
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="bg-white text-indigo-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-white text-indigo-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Latest Posts
        </h2>

        {loading && <p className="text-center text-gray-500">Loading...</p>}

        {error && <p className="text-center text-red-500">{error}</p>}

        <div className="grid gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {post.title}
              </h3>

              <p className="text-gray-600">{post.body}</p>
            </div>
          ))}
        </div>

        {!loading && posts.length === 0 && (
          <p className="text-center text-gray-500">No posts found</p>
        )}
      </div>
    </div>
  );
}

export default Home;
