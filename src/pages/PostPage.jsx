import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

const PostPage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // React Router hook for navigation

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axiosInstance.get("/instructor/post/list");
        if (response.data.success) {
          setCourses(response.data.data);
        } else {
          setError("Failed to fetch courses");
        }
      } catch (err) {
        setError(err.response?.data?.message || "An error occurred while fetching courses.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);



  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">Loading courses...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Course List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300 cursor-pointer"
            onClick={() => navigate(`/post/${course.id}`)}
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800">{course.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{course.description}</p>
              <p className="text-sm text-gray-700 mt-2">
                <strong>Instrument:</strong> {course.instrument?.name}
              </p>
              <p className="text-sm text-gray-700 mt-2">
                <strong>Duration:</strong> {course.duration} minutes
              </p>
              <p className="text-sm text-gray-700 mt-2">
                <strong>Price:</strong> ${course.price}
              </p>
              <button
                className="mt-4 w-full px-4 py-2 text-white bg-[#B63FA1] rounded-md hover:bg-[#80246f]"
              >
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
