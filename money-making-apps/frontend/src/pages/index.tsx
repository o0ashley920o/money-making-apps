import React from 'react';
import Navbar from '../components/Navbar';
import AppListing from '../components/AppListing';

const HomePage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <h1>Welcome to the Money-Making Apps Database!</h1>
            <p>Discover various opportunities to earn money online.</p>
            <AppListing />
        </div>
    );
};

export default HomePage;