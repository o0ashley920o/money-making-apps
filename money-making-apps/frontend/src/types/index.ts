export interface User {
    id: string;
    username: string;
    email: string;
    completedOffers: string[];
    favorites: string[];
}

export interface Opportunity {
    id: string;
    title: string;
    description: string;
    category: string;
    earningEvidence: string;
    referralLink: string;
    tips: string[];
}

export interface Recommendation {
    id: string;
    userId: string;
    opportunityId: string;
    message: string;
}

export interface Analytics {
    totalOpportunities: number;
    completedOffers: number;
    earnings: number;
    favoritesCount: number;
}