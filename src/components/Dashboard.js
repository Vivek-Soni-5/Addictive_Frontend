import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard.css";

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [title, setTitle] = useState("");
    const [videoUrl, setVideoUrl] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const res = await axios.get(
                    `${process.env.REACT_APP_BACKEND_URL}/api/auth/dashboard`
                );
                setUser(res.data);
            } catch (err) {
                console.error("Error fetching user data", err);
            }
        };

        fetchUserData();
    }, []);

    const handleUpload = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                `${process.env.REACT_APP_BACKEND_URL}/api/auth/upload`,
                {
                    title,
                    videoUrl,
                }
            );
            setSuccess("Video uploaded successfully");
            setUser((prevState) => ({
                ...prevState,
                videos: [...prevState.videos, res.data],
            }));
            setTitle("");
            setVideoUrl("");
        } catch (err) {
            console.log("error uploading video: ", err);
            setError("Failed to upload video");
        }
    };

    if (!user) return <p>Loading...</p>;

    return (
        <div className="dashboard-container">
            <h2>Dashboard</h2>
            <p>
                <strong>Username:</strong> {user.firstName}
            </p>
            <p>
                <strong>Email:</strong> {user.email}
            </p>

            <h3>Your Videos</h3>
            {user.videos && user.videos.length > 0 ? (
                <ul>
                    {user.videos.map((video) => (
                        <li key={video._id}>
                            <p>
                                <strong>Title:</strong> {video.title}
                            </p>
                            <p>
                                <strong>URL:</strong>{" "}
                                <a
                                    href={video.videoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {video.videoUrl}
                                </a>
                            </p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No videos uploaded yet.</p>
            )}

            <h3>Upload a New Video</h3>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
            <form onSubmit={handleUpload}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="videoUrl">Video URL</label>
                    <input
                        type="text"
                        name="videoUrl"
                        value={videoUrl}
                        onChange={(e) => setVideoUrl(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Upload</button>
            </form>
        </div>
    );
};

export default Dashboard;
