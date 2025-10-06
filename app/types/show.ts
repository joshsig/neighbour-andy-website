export interface Show {
    _id: string;
    _type: 'show';
    title: string;
    venue: string;
    location: {
        city: string;
        state?: string;
        country: string;
    };
    date: string; // ISO datetime string
    doorsOpen?: string; // ISO datetime string
    showStart?: string; // ISO datetime string
    ticketPrice?: {
        advance?: number;
        door?: number;
        currency: string;
    };
    ticketLink?: string;
    venueWebsite?: string;
    description?: string;
    supportingActs?: string[];
    ageRestriction?: 'all-ages' | '18-plus' | '19-plus' | '21-plus';
    venueImage?: {
        _type: 'image';
        asset: {
            _ref: string;
            _type: 'reference';
        };
        alt?: string;
    };
    status: 'upcoming' | 'sold-out' | 'cancelled' | 'postponed' | 'completed';
    featured: boolean;
    slug: {
        current: string;
        _type: 'slug';
    };
}

export interface ShowPreview {
    _id: string;
    title: string;
    venue: string;
    location: {
        city: string;
        state?: string;
        country: string;
    };
    date: string;
    status: Show['status'];
    featured: boolean;
    slug: {
        current: string;
    };
    ticketPrice?: {
        advance?: number;
        door?: number;
        currency: string;
    };
    ageRestriction?: Show['ageRestriction'];
}
