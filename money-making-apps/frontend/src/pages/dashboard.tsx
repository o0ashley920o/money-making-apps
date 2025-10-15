import React from 'react';
import Analytics from '../components/Analytics';
import AppListing from '../components/AppListing';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <Analytics />
            <AppListing />
        </div>
    );
};

export default Dashboard;