import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";


const CourseDetail = () => {
  const { id } = useParams(); // Get the post ID from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostDetail = async () => {
      try {
        const response = await axiosInstance.get(`/post/${id}`);
        setPost(response.data); // Store the fetched post data
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchPostDetail();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="post-detail-container">
      <h1>{post?.data?.title || "Post Title"}</h1>
      <img
        src={post?.data?.image}
        alt={post?.data?.title || "Post Image"}
        className="post-image"
      />
      <p>{post?.data?.description}</p>
      <p><strong>Price:</strong> ${post?.data?.price}</p>
      <p><strong>Duration:</strong> {post?.data?.duration} minutes</p>
      <p><strong>Instrument:</strong> {post?.data?.instrument?.name}</p>
      <p><strong>Created At:</strong> {new Date(post?.data?.created_at).toLocaleDateString()}</p>
    </div>
  );
};

export default CourseDetail;
