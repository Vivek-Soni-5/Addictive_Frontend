import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Admin.css'; // CSS file for styling

const AdminPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get(`${process.env.BACKEND_URL}/api/auth/admin/users`);
                setUsers(res.data);
            } catch (err) {
                console.error('Error fetching users', err);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="admin-container">
            <h2>Admin Page</h2>
            {users.map(user => (
                <div key={user._id} className="user-section">
                    <h3 className="user-name">{user.firstName} {user.lastName}</h3>
                    <div className="videos-container">
                        {user.videos.map(video => (
                            <div key={video._id} className="video-card">
                                <h4 className="video-title">{video.title}</h4>
                                <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">Watch Video</a>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AdminPage;
