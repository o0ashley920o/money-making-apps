import React from 'react';

const Analytics: React.FC = () => {
    // Sample data for demonstration purposes
    const analyticsData = {
        totalEarnings: 1200,
        completedOffers: 45,
        activeRecommendations: 10,
    };

    return (
        <div className="analytics">
            <h2>User Analytics</h2>
            <div className="analytics-metrics">
                <div className="metric">
                    <h3>Total Earnings</h3>
                    <p>${analyticsData.totalEarnings}</p>
                </div>
                <div className="metric">
                    <h3>Completed Offers</h3>
                    <p>{analyticsData.completedOffers}</p>
                </div>
                <div className="metric">
                    <h3>Active Recommendations</h3>
                    <p>{analyticsData.activeRecommendations}</p>
                </div>
            </div>
        </div>
    );
};

export default Analytics;