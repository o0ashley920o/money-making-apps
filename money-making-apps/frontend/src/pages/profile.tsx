import React from 'react';
import { useEffect, useState } from 'react';

const Profile: React.FC = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('/api/user/profile'); // Adjust the API endpoint as necessary
                const data = await response.json();
                setUserData(data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!userData) {
        return <div>No user data available.</div>;
    }

    return (
        <div>
            <h1>User Profile</h1>
            <h2>{userData.name}</h2>
            <p>Email: {userData.email}</p>
            <h3>Completed Offers</h3>
            <ul>
                {userData.completedOffers.map((offer: string, index: number) => (
                    <li key={index}>{offer}</li>
                ))}
            </ul>
            <h3>Favorites</h3>
            <ul>
                {userData.favorites.map((favorite: string, index: number) => (
                    <li key={index}>{favorite}</li>
                ))}
            </ul>
        </div>
    );
};

export default Profile;