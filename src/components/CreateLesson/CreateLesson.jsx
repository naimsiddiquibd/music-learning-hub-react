import { useState } from "react";
import axiosInstance from "../../utils/axiosInstance";

const CreateCourse = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [instrument, setInstrument] = useState("");
    const [duration, setDuration] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(null); // New state for the image file
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const instrumentMapping = {
        Guitar: 1,
        Piano: 2,
        Drums: 3,
    };

    const handleCreateCourse = async (e) => {
        e.preventDefault();

        if (!title || !description || !instrument || !duration || !price || !image) {
            setError("All fields are required, including an image");
            return;
        }

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("instrument_id", instrumentMapping[instrument]);
        formData.append("duration", parseInt(duration));
        formData.append("price", parseFloat(price));
        formData.append("image", image); // Append the raw image file

        try {
            const response = await axiosInstance.post("/post/submit", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            if (response.status === 201) {
                setSuccess("Course created successfully!");
                setTitle("");
                setDescription("");
                setInstrument("");
                setDuration("");
                setPrice("");
                setImage(null); // Reset the image field
            } else {
                setError("Something went wrong. Please try again.");
            }
        } catch (err) {
            setError(err.response?.data?.message || "An error occurred while creating the course.");
        }
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]); // Store the raw file
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md p-6 shadow-md rounded-lg">
                <h2 className="text-2xl font-bold text-center text-gray-100 mb-6">Create Course</h2>
                <form onSubmit={handleCreateCourse} className="space-y-4">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-400">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            placeholder="Enter course title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B63FA1] focus:border-[#B63FA1]"
                        />
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-400">
                            Description
                        </label>
                        <textarea
                            id="description"
                            placeholder="Enter course description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B63FA1] focus:border-[#B63FA1]"
                        />
                    </div>
                    <div>
                        <label htmlFor="instrument" className="block text-sm font-medium text-gray-400">
                            Instrument
                        </label>
                        <select
                            id="instrument"
                            value={instrument}
                            onChange={(e) => setInstrument(e.target.value)}
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B63FA1] focus:border-[#B63FA1]"
                        >
                            <option value="">Select an instrument</option>
                            <option value="Guitar">Guitar</option>
                            <option value="Piano">Piano</option>
                            <option value="Drums">Drums</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="duration" className="block text-sm font-medium text-gray-400">
                            Duration (minutes)
                        </label>
                        <input
                            type="number"
                            id="duration"
                            placeholder="Enter duration in minutes"
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B63FA1] focus:border-[#B63FA1]"
                        />
                    </div>
                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-400">
                            Price (USD)
                        </label>
                        <input
                            type="number"
                            id="price"
                            placeholder="Enter course price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B63FA1] focus:border-[#B63FA1]"
                        />
                    </div>
                    <div>
                        <label htmlFor="image" className="block text-sm font-medium text-gray-400">
                            Image
                        </label>
                        <input
                            type="file"
                            id="image"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B63FA1] focus:border-[#B63FA1]"
                        />
                    </div>
                    {error && <p className="text-sm text-red-500">{error}</p>}
                    {success && <p className="text-sm text-green-500">{success}</p>}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-[#B63FA1] rounded-md hover:bg-[#80246f] focus:outline-none focus:ring-2 focus:ring-[#B63FA1] focus:ring-offset-2"
                    >
                        Create Course
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateCourse;
