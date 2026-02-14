// Ullasayathra Data & Logic

// --- Destinations Data ---
export const DESTINATIONS = [
    {
        id: 'kashmir',
        name: 'Kashmir',
        lat: 34.0837,
        lng: 74.7973,
        region: 'North',
        tags: ['mountains', 'snow', 'nature'],
        image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 'kerala',
        name: 'Kerala',
        lat: 10.8505,
        lng: 76.2711,
        region: 'South',
        tags: ['sea', 'nature', 'chill'],
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9947?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 'goa',
        name: 'Goa',
        lat: 15.2993,
        lng: 74.1240,
        region: 'West',
        tags: ['sea', 'party', 'chill'],
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 'jaipur',
        name: 'Jaipur',
        lat: 26.9124,
        lng: 75.7873,
        region: 'North',
        tags: ['history', 'culture', 'city'],
        image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 'manali',
        name: 'Manali',
        lat: 32.2396,
        lng: 77.1887,
        region: 'North',
        tags: ['mountains', 'adventure', 'snow'],
        image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 'pondicherry',
        name: 'Pondicherry',
        lat: 11.9416,
        lng: 79.8083,
        region: 'South',
        tags: ['sea', 'culture', 'chill'],
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 'rishikesh',
        name: 'Rishikesh',
        lat: 30.0869,
        lng: 78.2676,
        region: 'North',
        tags: ['mountains', 'spiritual', 'adventure'],
        image: 'https://images.unsplash.com/photo-1588674514336-db15b3c53549?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 'udaipur',
        name: 'Udaipur',
        lat: 24.5854,
        lng: 73.7125,
        region: 'West',
        tags: ['history', 'lakes', 'chill'],
        image: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 'ladakh',
        name: 'Ladakh',
        lat: 34.1526,
        lng: 77.5770,
        region: 'North',
        tags: ['mountains', 'adventure', 'remote'],
        image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 'varanasi',
        name: 'Varanasi',
        lat: 25.3176,
        lng: 82.9739,
        region: 'North',
        tags: ['spiritual', 'culture', 'chaos'],
        image: 'https://images.unsplash.com/photo-1561361513-35e67f84053b?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 'hampi',
        name: 'Hampi',
        lat: 15.3350,
        lng: 76.4600,
        region: 'South',
        tags: ['history', 'ruins', 'backpacking'],
        image: 'https://images.unsplash.com/photo-1600100598079-40d6c5438a0c?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 'darjeeling',
        name: 'Darjeeling',
        lat: 27.0410,
        lng: 88.2663,
        region: 'East',
        tags: ['mountains', 'tea', 'chill'],
        image: 'https://images.unsplash.com/photo-1544836691-036130b1fc36?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 'shillong',
        name: 'Shillong',
        lat: 25.5788,
        lng: 91.8933,
        region: 'East',
        tags: ['mountains', 'music', 'nature'],
        image: 'https://images.unsplash.com/photo-1592345279419-95a107289069?q=80&w=800&auto=format&fit=crop'
    },
];

export const searchPlaces = (query) => {
    if (!query || query.length < 1) return [];
    const lowerQuery = query.toLowerCase();
    return DESTINATIONS.filter(place =>
        place.name.toLowerCase().includes(lowerQuery)
    );
};

export const isValidPlace = (placeName) => {
    return DESTINATIONS.some(place => place.name.toLowerCase() === placeName.toLowerCase());
};

export const getPlaceDetails = (placeName) => {
    return DESTINATIONS.find(place => place.name.toLowerCase() === placeName.toLowerCase());
};


// --- Itinerary Logic ---

const KASHMIR_PLAN = [
    {
        tags: ['mountains', 'default'],
        days: [
            [ // Day 1
                { time: '10:00 AM', activity: 'Arrival in Srinagar & Check-in to Houseboat' },
                { time: '01:00 PM', activity: 'Traditional Kashmiri Lunch' },
                { time: '04:00 PM', activity: 'Shikara Ride on Dal Lake' },
                { time: '07:00 PM', activity: 'Sunset View from Boulevard Road' }
            ],
            [ // Day 2
                { time: '09:00 AM', activity: 'Visit Mughal Gardens (Nishat & Shalimar)' },
                { time: '12:00 PM', activity: 'Lunch at a Local Garden Cafe' },
                { time: '03:00 PM', activity: 'Shankaracharya Temple Visit' },
                { time: '06:00 PM', activity: 'Explore Old City Bridges' }
            ],
            [ // Day 3
                { time: '08:00 AM', activity: 'Day Trip to Gulmarg' },
                { time: '11:00 AM', activity: 'Gondola Ride to Apharwat Peak' },
                { time: '02:00 PM', activity: 'Snow Activities / Skiing' },
                { time: '07:00 PM', activity: 'Return to Srinagar & Dinner' }
            ],
            [ // Day 4
                { time: '08:00 AM', activity: 'Drive to Pahalgam (Valley of Shepherds)' },
                { time: '12:00 PM', activity: 'Visit Betaab Valley' },
                { time: '03:00 PM', activity: 'Horse Riding in Aru Valley' },
                { time: '07:00 PM', activity: 'Riverside Bonfire Dinner' }
            ],
            [ // Day 5
                { time: '09:00 AM', activity: 'Relaxed Morning in Pahalgam' },
                { time: '12:00 PM', activity: 'Drive back to Srinagar via Apple Orchards' },
                { time: '04:00 PM', activity: 'Visit Hazratbal Shrine' },
                { time: '07:00 PM', activity: 'Shopping for Pashminas & Saffron' }
            ],
            [ // Day 6
                { time: '08:00 AM', activity: 'Day Trip to Sonamarg (Meadow of Gold)' },
                { time: '11:00 AM', activity: 'Thajiwas Glacier Trek/Pony Ride' },
                { time: '02:00 PM', activity: 'Picnic by the Sindh River' },
                { time: '06:00 PM', activity: 'Return Drive with Sunset Views' }
            ],
            [ // Day 7
                { time: '09:00 AM', activity: 'Lazy Houseboat Breakfast' },
                { time: '11:00 AM', activity: 'Last Minute Souvenir Shopping' },
                { time: '01:00 PM', activity: 'Farewell Wazwan Feast' },
                { time: '03:00 PM', activity: 'Departure to Airport' }
            ]
        ]
    }
];

const KERALA_PLAN = [
    {
        tags: ['sea', 'nature', 'default'],
        days: [
            [ // Day 1
                { time: '10:00 AM', activity: 'Arrival in Kochi & Hotel Check-in' },
                { time: '01:00 PM', activity: 'Lunch at Fort Kochi' },
                { time: '04:00 PM', activity: 'Chinese Fishing Nets at Sunset' },
                { time: '07:00 PM', activity: 'Kathakali Cultural Performance' }
            ],
            [ // Day 2
                { time: '08:00 AM', activity: 'Drive to Munnar (Tea Gardens)' },
                { time: '12:00 PM', activity: 'Stop at Cheeyappara Waterfalls' },
                { time: '03:00 PM', activity: 'Tea Museum Visit' },
                { time: '07:00 PM', activity: 'Dinner in Misty Munnar' }
            ],
            [ // Day 3
                { time: '09:00 AM', activity: 'Eravikulam National Park Safari' },
                { time: '01:00 PM', activity: 'Lunch overlooking Tea Estates' },
                { time: '04:00 PM', activity: 'Mattupetty Dam Boating' },
                { time: '07:00 PM', activity: 'Ayurvedic Massage Session' }
            ],
            [ // Day 4
                { time: '08:00 AM', activity: 'Drive to Thekkady' },
                { time: '01:00 PM', activity: 'Spice Plantation Tour' },
                { time: '04:00 PM', activity: 'Periyar Lake Boat Safari' },
                { time: '07:00 PM', activity: 'Tribal Dance Show' }
            ],
            [ // Day 5
                { time: '08:00 AM', activity: 'Drive to Alleppey' },
                { time: '12:00 PM', activity: 'Check-in to Luxury Houseboat' },
                { time: '01:00 PM', activity: 'Backwater Cruise & Traditional Lunch' },
                { time: '07:00 PM', activity: 'Candlelight Dinner on Deck' }
            ],
            [ // Day 6
                { time: '09:00 AM', activity: 'Disembark & Drive to Varkala/Marari' },
                { time: '01:00 PM', activity: 'Seafood Lunch by the Beach' },
                { time: '04:00 PM', activity: 'Cliff Top Walk / Beach Swim' },
                { time: '07:00 PM', activity: 'Relaxed Cafe Vibes' }
            ],
            [ // Day 7
                { time: '09:00 AM', activity: 'Morning Yoga by the Sea' },
                { time: '11:00 AM', activity: 'Visit Jatayu Earth Center (Optional)' },
                { time: '02:00 PM', activity: 'Final Kerala Meal' },
                { time: '05:00 PM', activity: 'Departure' }
            ]
        ]
    }
];

const GENERIC_PLAN = [
    [ // Day 1
        { time: '10:00 AM', activity: 'Arrival in {dest} & Settling In' },
        { time: '01:00 PM', activity: 'Welcome Lunch at a Top-Rated Spot' },
        { time: '04:00 PM', activity: 'City Center Orientation Walk' },
        { time: '07:00 PM', activity: 'Dinner at a Local Favorite' }
    ],
    [ // Day 2
        { time: '09:00 AM', activity: '{dest} Major Landmarks Tour' },
        { time: '01:00 PM', activity: 'Street Food Tasting' },
        { time: '04:00 PM', activity: 'Visit Local Museum or Gallery' },
        { time: '08:00 PM', activity: 'Nightlife or Cultural Show' }
    ],
    [ // Day 3
        { time: '08:00 AM', activity: 'Nature Excursion / Day Trip nearby' },
        { time: '01:00 PM', activity: 'Picnic Lunch with a View' },
        { time: '04:00 PM', activity: 'Hike or scenic drive return' },
        { time: '07:00 PM', activity: 'Relaxed Evening at Hotel' }
    ],
    [ // Day 4
        { time: '10:00 AM', activity: 'Hidden Gems of {dest}' },
        { time: '01:00 PM', activity: 'Fusion Cuisine Lunch' },
        { time: '04:00 PM', activity: 'Local Market Shopping Spree' },
        { time: '07:00 PM', activity: 'Live Music Venue Visit' }
    ],
    [ // Day 5
        { time: '09:00 AM', activity: 'Adventure Activity (Zip-line/Rafting) in {dest}' },
        { time: '01:00 PM', activity: 'Hearty Recovery Lunch' },
        { time: '04:00 PM', activity: 'Sunset Viewpoint Visit' },
        { time: '08:00 PM', activity: 'Fine Dining Experience' }
    ],
    [ // Day 6
        { time: '10:00 AM', activity: 'Relaxation & Spa Day' },
        { time: '01:00 PM', activity: 'Light Healthy Lunch' },
        { time: '03:00 PM', activity: 'Photography Walk' },
        { time: '07:00 PM', activity: 'Cooking Class or Food Tour' }
    ],
    [ // Day 7
        { time: '09:00 AM', activity: 'Slow Morning Breakfast' },
        { time: '11:00 AM', activity: 'Pack & Final Souvenirs' },
        { time: '01:00 PM', activity: 'Farewell Lunch' },
        { time: '03:00 PM', activity: 'Departure from {dest}' }
    ]
];

export const generateItinerary = (destinationId, destinationName, vibeTags = [], days = 3) => {
    let selectedPlanDays = null;
    const numDays = Math.max(1, Math.min(7, days)); // Clamp between 1 and 7

    if (destinationId === 'kashmir') {
        selectedPlanDays = KASHMIR_PLAN[0].days;
    } else if (destinationId === 'kerala') {
        selectedPlanDays = KERALA_PLAN[0].days;
    } else {
        selectedPlanDays = GENERIC_PLAN;
    }

    // Slice the days
    const tripDays = selectedPlanDays.slice(0, numDays);

    // Map to final format and inject names
    return tripDays.map((dayActivities, index) => ({
        day: index + 1,
        activities: dayActivities.map(item => ({
            ...item,
            activity: item.activity.replace(/{dest}/g, destinationName)
        }))
    }));
};
