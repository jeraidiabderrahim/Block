import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Accuel() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
        <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">MY BLOG</h1>
          <div className="flex items-center gap-4">
            <Link
              to="/createpost"
              className="bg-white text-indigo-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              creer un post
            </Link>
            <Link
              to="/logout"
              className="bg-white text-indigo-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Logout
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
