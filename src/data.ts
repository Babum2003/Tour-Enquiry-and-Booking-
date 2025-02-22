import { Destination, Inquiry, Currency, CurrencyInfo } from './types';

export const currencies: Record<Currency, CurrencyInfo> = {
  USD: { symbol: '$', rate: 1 },
  EUR: { symbol: '€', rate: 0.92 },
  GBP: { symbol: '£', rate: 0.79 },
  JPY: { symbol: '¥', rate: 150.45 },
  AUD: { symbol: 'A$', rate: 1.53 }
};

export const destinations: Destination[] = [
  {
    id: '1',
    name: 'Santorini Sunset Experience',
    location: 'Greece',
    description: 'Experience the world-famous sunsets of Santorini while exploring its picturesque villages and volcanic beaches.',
    price: 1899,
    duration: '7 days',
    imageUrl: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=800',
    highlights: ['Sunset in Oia', 'Wine Tasting', 'Volcanic Beach Tour', 'Traditional Greek Cooking Class'],
    transport: [
      { type: 'Ferry', details: 'Inter-island transfers', included: true },
      { type: 'Private Van', details: 'Airport transfers & tours', included: true }
    ],
    instagram: '@santorini_experience'
  },
  {
    id: '2',
    name: 'Kyoto Cultural Journey',
    location: 'Japan',
    description: 'Immerse yourself in the ancient traditions of Kyoto, from tea ceremonies to temple visits.',
    price: 2499,
    duration: '10 days',
    imageUrl: 'https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?auto=format&fit=crop&q=80&w=800',
    highlights: ['Temple Tours', 'Tea Ceremony', 'Bamboo Forest Walk', 'Geisha District Visit'],
    transport: [
      { type: 'Bullet Train', details: 'Tokyo-Kyoto return', included: true },
      { type: 'Public Transport Pass', details: 'Unlimited city travel', included: true }
    ],
    instagram: '@kyoto_journey'
  },
  {
    id: '3',
    name: 'Machu Picchu Adventure',
    location: 'Peru',
    description: 'Trek through the Andes to discover the mystical ancient city of Machu Picchu.',
    price: 2199,
    duration: '8 days',
    imageUrl: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=800',
    highlights: ['Inca Trail Trek', 'Guided Tours', 'Local Cuisine', 'Cultural Experiences'],
    transport: [
      { type: 'Train', details: 'Scenic railway journey', included: true },
      { type: 'Private Bus', details: 'Cusco transfers', included: true }
    ],
    instagram: '@machu_picchu_trek'
  },
  {
    id: '4',
    name: 'Safari Adventure Kenya',
    location: 'Kenya',
    description: 'Experience the ultimate African safari in the Masai Mara National Reserve.',
    price: 3299,
    duration: '9 days',
    imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800',
    highlights: ['Big Five Safari', 'Masai Village Visit', 'Hot Air Balloon Ride', 'Luxury Camp Stay'],
    transport: [
      { type: '4x4 Land Cruiser', details: 'Game drives & transfers', included: true },
      { type: 'Small Aircraft', details: 'Inter-park flights', included: false }
    ],
    instagram: '@kenya_safari'
  },
  {
    id: '5',
    name: 'Northern Lights Iceland',
    location: 'Iceland',
    description: 'Chase the aurora borealis while exploring Iceland\'s stunning landscapes.',
    price: 2899,
    duration: '6 days',
    imageUrl: 'https://images.unsplash.com/photo-1579033461380-adb47c3eb938?auto=format&fit=crop&q=80&w=800',
    highlights: ['Aurora Viewing', 'Blue Lagoon', 'Golden Circle Tour', 'Ice Cave Exploration'],
    transport: [
      { type: 'Super Jeep', details: 'Northern lights tours', included: true },
      { type: 'Minibus', details: 'Daily excursions', included: true }
    ],
    instagram: '@iceland_lights'
  },
  {
    id: '6',
    name: 'Maldives Paradise',
    location: 'Maldives',
    description: 'Luxury overwater villa experience in the crystal-clear waters of the Indian Ocean.',
    price: 4199,
    duration: '7 days',
    imageUrl: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800',
    highlights: ['Overwater Villa', 'Snorkeling', 'Sunset Cruise', 'Spa Treatment'],
    transport: [
      { type: 'Speedboat', details: 'Airport transfers', included: true },
      { type: 'Seaplane', details: 'Resort transfer', included: true }
    ],
    instagram: '@maldives_escape'
  },
  {
    id: '7',
    name: 'Vietnam Heritage Tour',
    location: 'Vietnam',
    description: 'Journey through Vietnam\'s rich cultural heritage and stunning landscapes.',
    price: 1799,
    duration: '12 days',
    imageUrl: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=800',
    highlights: ['Ha Long Bay Cruise', 'Hanoi Old Quarter', 'Hoi An Ancient Town', 'Cu Chi Tunnels'],
    transport: [
      { type: 'Private Car', details: 'City transfers', included: true },
      { type: 'Overnight Train', details: 'Hanoi to Hue', included: true }
    ],
    instagram: '@vietnam_heritage'
  },
  {
    id: '8',
    name: 'Swiss Alps Adventure',
    location: 'Switzerland',
    description: 'Experience the majesty of the Swiss Alps through scenic trains and mountain excursions.',
    price: 3599,
    duration: '8 days',
    imageUrl: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=800',
    highlights: ['Glacier Express', 'Matterhorn View', 'Swiss Chocolate Making', 'Lake Lucerne Cruise'],
    transport: [
      { type: 'Swiss Travel Pass', details: 'All trains & buses', included: true },
      { type: 'Mountain Railways', details: 'Scenic routes', included: true }
    ],
    instagram: '@swiss_adventures'
  },
  {
    id: '9',
    name: 'Australian Outback',
    location: 'Australia',
    description: 'Discover the raw beauty of the Australian Outback and ancient Aboriginal culture.',
    price: 2999,
    duration: '10 days',
    imageUrl: 'https://images.unsplash.com/photo-1529108190281-9d6ebf35a776?auto=format&fit=crop&q=80&w=800',
    highlights: ['Uluru Sunrise', 'Aboriginal Art', 'Kings Canyon Walk', 'Star Gazing'],
    transport: [
      { type: '4WD Vehicle', details: 'Outback exploration', included: true },
      { type: 'Domestic Flights', details: 'Inter-city transfers', included: false }
    ],
    instagram: '@outback_explorer'
  },
  {
    id: '10',
    name: 'Morocco Desert Magic',
    location: 'Morocco',
    description: 'Journey through ancient medinas and sleep under the stars in the Sahara Desert.',
    price: 1999,
    duration: '9 days',
    imageUrl: 'https://images.unsplash.com/photo-1489493887464-892be6d1daae?auto=format&fit=crop&q=80&w=800',
    highlights: ['Sahara Camping', 'Marrakech Medina', 'Atlas Mountains', 'Camel Trek'],
    transport: [
      { type: '4x4 Vehicle', details: 'Desert expedition', included: true },
      { type: 'Private Driver', details: 'City transfers', included: true }
    ],
    instagram: '@morocco_magic'
  }
];

export const inquiries: Inquiry[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john@example.com',
    destination: 'Santorini Sunset Experience',
    travelDate: '2024-07-15',
    groupSize: 2,
    message: 'Interested in the sunset tour package. Are there any special honeymoon arrangements?',
    status: 'new',
    createdAt: '2024-03-20T10:30:00Z',
  },
  {
    id: '2',
    name: 'Emma Wilson',
    email: 'emma@example.com',
    destination: 'Kyoto Cultural Journey',
    travelDate: '2024-09-01',
    groupSize: 4,
    message: 'Would like to know more about the tea ceremony experience.',
    status: 'responded',
    createdAt: '2024-03-19T15:45:00Z',
  },
];