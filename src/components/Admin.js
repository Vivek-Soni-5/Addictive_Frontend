import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Admin.css'; // CSS file for styling

const AdminPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/admin/users`);
                if (Array.isArray(res.data)) {
                    setUsers(res.data);
                } else {
                    console.error('Unexpected response format:', res.data);
                    setUsers([]); // Fallback to empty array
                }
            } catch (err) {
                console.error('Error fetching users', err);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="admin-container">
            <h2>Admin Page</h2>
            {users.length > 0 ? (
                users.map(user => (
                    <div key={user._id} className="user-section">
                        <h3 className="user-name">{user.firstName} {user.lastName}</h3>
                        <div className="videos-container">
                            {user.videos.length > 0 ? (
                                user.videos.map(video => (
                                    <div key={video._id} className="video-card">
                                        <h4 className="video-title">{video.title}</h4>
                                        <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">Watch Video</a>
                                    </div>
                                ))
                            ) : (
                                <p>No videos found for this user.</p>
                            )}
                        </div>
                    </div>
                ))
            ) : (
                <p>No users found.</p>
            )}
        </div>
    );
};

export default AdminPage;
