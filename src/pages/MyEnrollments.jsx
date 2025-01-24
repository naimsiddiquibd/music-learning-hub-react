import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";

const MyEnrollments = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    const fetchEnrollments = async () => {
      try {
        const response = await axiosInstance.get("/enrollments");
        setCourses(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch enrollment details.");
      } finally {
        setLoading(false);
      }
    };

    fetchEnrollments();
  }, []);

  const handleChangeStatus = async (enrollmentId, newStatus) => {
    setUpdating(true);
    try {
      const response = await axiosInstance.patch(`/enroll/status/${enrollmentId}`, {
        status: newStatus,
      });
console.log("hhhhh:", response);
      // Directly update the UI with the new status (optimistic update)
      setCourses((prevCourses) =>
        prevCourses.map((course) => ({
          ...course,
          enrollment: course.enrollment.map((enroll) =>
            enroll.id === enrollmentId ? { ...enroll, status: newStatus } : enroll
          ),
        }))
      );
      
      // Optionally show a success message if needed
      alert("Status updated successfully!");

    } catch (err) {
      console.error("Error updating status:", err.response?.data?.message || err.message);
      alert("Failed to update status. Please try again.");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">Loading enrollments...</p>
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
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Courses and Enrolled Students
      </h2>
      {courses.map((course) => (
        <div
          key={course.id}
          className="bg-white shadow-md rounded-lg p-6 mb-6"
        >
          <h3 className="text-2xl font-bold text-gray-800">{course.title}</h3>
          <p className="text-sm text-gray-600 mt-2">{course.description}</p>
          <p className="text-sm text-gray-700 mt-2">
            <strong>Duration:</strong> {course.duration} minutes
          </p>
          <p className="text-sm text-gray-700 mt-2">
            <strong>Price:</strong> ${course.price}
          </p>

          <div className="mt-4">
            <h4 className="text-lg font-semibold text-gray-800">Enrolled Students:</h4>
            {course.enrollment.length > 0 ? (
              <ul className="mt-2 space-y-2">
                {course.enrollment.map((enroll) => (
                  <li
                    key={enroll.id}
                    className="border p-3 rounded-md bg-gray-50 shadow-sm"
                  >
                    <p>
                      <strong>Name:</strong> {enroll.student.name}
                    </p>
                    <p>
                      <strong>Email:</strong> {enroll.student.email}
                    </p>
                    <p>
                      <strong>Enrollment Status:</strong> {enroll.status}
                    </p>
                    <div className="mt-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Change Status:
                      </label>
                      <select
                        className="border border-gray-300 rounded-md p-2"
                        value={enroll.status}
                        onChange={(e) =>
                          handleChangeStatus(enroll.id, e.target.value)
                        }
                        disabled={updating}
                      >
                        <option value="pending">Pending</option>
                        <option value="active">Active</option>
                        <option value="completed">Completed</option>
                        <option value="canceled">Canceled</option>
                      </select>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 mt-2">No students enrolled.</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyEnrollments;
