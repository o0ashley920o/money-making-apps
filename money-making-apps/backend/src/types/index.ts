export interface User {
    id: string;
    username: string;
    email: string;
    passwordHash: string;
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
    createdAt: Date;
    updatedAt: Date;
}

export interface Recommendation {
    id: string;
    userId: string;
    opportunityId: string;
    message: string;
    createdAt: Date;
}

export interface Analytics {
    userId: string;
    totalEarnings: number;
    completedOpportunities: number;
    favoriteOpportunities: number;
    recommendationsSent: number;
}