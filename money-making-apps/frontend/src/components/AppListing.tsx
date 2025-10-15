import React from 'react';

interface Opportunity {
  id: number;
  title: string;
  description: string;
  link: string;
  earningEvidence: string;
}

interface AppListingProps {
  opportunities: Opportunity[];
}

const AppListing: React.FC<AppListingProps> = ({ opportunities }) => {
  return (
    <div className="app-listing">
      <h2>Money-Making Opportunities</h2>
      <ul>
        {opportunities.map((opportunity) => (
          <li key={opportunity.id}>
            <h3>{opportunity.title}</h3>
            <p>{opportunity.description}</p>
            <a href={opportunity.link} target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
            <p>Earning Evidence: {opportunity.earningEvidence}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppListing;