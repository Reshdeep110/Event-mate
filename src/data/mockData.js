const getFutureDate = (daysAhead, hour = 9, minute = 0) => {
  const date = new Date();
  date.setDate(date.getDate() + daysAhead);
  date.setHours(hour, minute, 0, 0);
  return date.toISOString();
};


export const mockEvents = [
  // ------------------- Chennai Events -------------------
  {
    id: 1,
    title: "Chennai Tech Summit 2025",
    date: getFutureDate(10, 9, 0),
    time: "9:00 AM",
    endTime: "6:00 PM",
    location: "Chennai Trade Centre, Nandanam",
    city: "Chennai",
    description: "Largest technology conference in Tamil Nadu featuring AI, Cloud, and IoT.",
    longDescription: "Join us for the premier technology event in South India. Featuring keynote speakers from global tech companies, hands-on workshops, and networking opportunities with industry leaders.",
    image: "https://picsum.photos/600/400?tech",
    price: 600,
    category: "Technology",
    organizer: "Tamil Nadu IT Association",
    capacity: 1200,
    booked: 450
  },
  {
    id: 2,
    title: "Marina Beach Marathon",
     date: getFutureDate(15, 5, 30),
    time: "5:30 AM",
    endTime: "10:00 AM",
    location: "Marina Beach, Chennai",
    city: "Chennai",
    description: "Annual marathon along the beautiful Marina Beach shoreline.",
    image: "https://picsum.photos/600/400?marathon",
    price: 0,
    category: "Sports",
    organizer: "Chennai Runners Club",
    capacity: 5000,
    booked: 2500
  },
  {
    id: 3,
    title: "Classical Music Festival",
    date: getFutureDate(20, 18, 30),
    time: "6:30 PM",
    endTime: "10:00 PM",
    location: "Music Academy, Chennai",
    city: "Chennai",
    description: "Annual classical music festival featuring renowned artists.",
    image: "https://picsum.photos/600/400?music",
    price: 800,
    category: "Music",
    organizer: "Chennai Cultural Trust",
    capacity: 500,
    booked: 300
  },

  // ------------------- Bengaluru Events -------------------
  {
    id: 4,
    title: "Web3 & Blockchain Expo",
    date: getFutureDate(22, 9, 0),
    time: "9:00 AM",
    endTime: "6:00 PM",
    location: "Bangalore International Exhibition Centre",
    city: "Bengaluru",
    description: "Biggest blockchain and Web3 conference in India.",
    image: "https://picsum.photos/600/400?blockchain",
    price: 500,
    category: "Technology",
    organizer: "Blockchain Association",
    capacity: 800,
    booked: 200
  },
  {
    id: 5,
    title: "Bangalore Startup Fest",
   date: getFutureDate(25, 10, 0),
    time: "10:00 AM",
    endTime: "6:00 PM",
    location: "Infosys Campus, Bengaluru",
    city: "Bengaluru",
    description: "Showcasing top Indian startups.",
    image: "https://picsum.photos/600/400?startup",
    price: 250,
    category: "Business",
    organizer: "NASSCOM",
    capacity: 1200,
    booked: 700
  },

  // ------------------- Hyderabad Events -------------------
  {
    id: 6,
    title: "Hyderabad Tech Conference",
     date: getFutureDate(28, 14, 0),
    time: "10:00 AM",
    endTime: "5:00 PM",
    location: "HITEC City, Hyderabad",
    city: "Hyderabad",
    description: "Annual technology conference for IT professionals.",
    image: "https://picsum.photos/600/400?conference",
    price: 400,
    category: "Technology",
    organizer: "Hyderabad IT Association",
    capacity: 600,
    booked: 250
  },

  // ------------------- Mumbai Events -------------------
  {
    id: 7,
    title: "Startup India Innovation",
  date: getFutureDate(30, 11, 0),
    time: "9:30 AM",
    endTime: "6:00 PM",
    location: "Mumbai Convention Centre",
    city: "Mumbai",
    description: "Annual startup conference featuring pitch sessions and investor meetings.",
    image: "https://picsum.photos/600/400?innovation",
    price: 300,
    category: "Business",
    organizer: "Startup India",
    capacity: 500,
    booked: 150
  },

  // ------------------- New Delhi Events -------------------
  {
    id: 8,
    title: "AI Summit 2025",
   date: getFutureDate(33, 17, 0),
    time: "10:00 AM",
    endTime: "5:00 PM",
    location: "Pragati Maidan, New Delhi",
    city: "New Delhi",
    description: "Join global leaders and innovators in AI trends & solutions.",
    image: "https://picsum.photos/600/400?ai",
    price: 0,
    category: "Technology",
    organizer: "Tech World India",
    capacity: 1000,
    booked: 350
  },

  {
    id: 9,
    title: "Chennai Food Carnival",
    date: getFutureDate(35, 9, 0),
    time: "11:00 AM",
    endTime: "9:00 PM",
    location: "Island Grounds, Chennai",
    city: "Chennai",
    description: "Taste authentic South Indian and global cuisines.",
    image: "https://picsum.photos/600/400?food",
    price: 150,
    category: "Food",
    organizer: "Foodies Club Chennai",
    capacity: 2000,
    booked: 850
  },
  {
    id: 10,
    title: "Delhi Literature Festival",
   date: getFutureDate(38, 12, 0),
    time: "9:00 AM",
    endTime: "8:00 PM",
    location: "India Habitat Centre, New Delhi",
    city: "New Delhi",
    description: "Meet authors, poets, and thinkers.",
    image: "https://picsum.photos/600/400?literature",
    price: 150,
    category: "Literature",
    organizer: "Delhi Lit Society",
    capacity: 1000,
    booked: 600
  },

   {
    id: 11,
    title: "Namma Bengaluru Marathon",
     date: getFutureDate(40, 10, 0),
    time: "6:00 AM",
    endTime: "12:00 PM",
    location: "Cubbon Park, Bengaluru",
    city: "Bengaluru",
    description: "Annual marathon event in Bengaluru.",
    image: "https://picsum.photos/600/400?random=11",
    price: 0,
    category: "Sports",
    organizer: "Bangalore Runners Club",
    capacity: 6000,
    booked: 3500
  },
  {
    id: 12,
    title: "Bengaluru Music Fiesta",
      date: getFutureDate(43, 9, 0),
    time: "7:00 PM",
    endTime: "11:00 PM",
    location: "Chowdiah Memorial Hall, Bengaluru",
    city: "Bengaluru",
    description: "Fusion of classical and modern music performances.",
    image: "https://picsum.photos/600/400?random=12",
    price: 350,
    category: "Music",
    organizer: "Bangalore Cultural Trust",
    capacity: 1000,
    booked: 600
  },
  {
    id: 13,
    title: "Bangalore Food Street Festival",
   date: getFutureDate(45, 6, 0),
    time: "12:00 PM",
    endTime: "10:00 PM",
    location: "VV Puram, Bengaluru",
    city: "Bengaluru",
    description: "Taste 200+ authentic street foods from Karnataka.",
    image: "https://picsum.photos/600/400?random=13",
    price: 100,
    category: "Food",
    organizer: "Food Lovers Bangalore",
    capacity: 3000,
    booked: 2000
  },
  {
    id: 14,
    title: "Bangalore Literature Conclave",
  date: getFutureDate(48, 18, 0),
    time: "9:00 AM",
    endTime: "6:00 PM",
    location: "Bangalore Palace Grounds",
    city: "Bengaluru",
    description: "Conference for readers and writers across India.",
    image: "https://picsum.photos/600/400?random=14",
    price: 200,
    category: "Literature",
    organizer: "LitFest Bangalore",
    capacity: 1500,
    booked: 900
  },
  {
    id: 15,
    title: "Bangalore Auto Show",
   date: getFutureDate(50, 10, 0),
    time: "10:00 AM",
    endTime: "7:00 PM",
    location: "Whitefield Convention Centre",
    city: "Bengaluru",
    description: "Exhibition of cars, bikes, and EVs.",
    image: "https://picsum.photos/600/400?random=15",
    price: 250,
    category: "Expo",
    organizer: "Auto World Bangalore",
    capacity: 4000,
    booked: 2500
  },
  {
    id: 16,
    title: "Bangalore Film Festival",
        date: getFutureDate(52, 14, 0),
    time: "6:00 PM",
    endTime: "11:00 PM",
    location: "PVR Orion Mall, Bengaluru",
    city: "Bengaluru",
    description: "A week of Indian and international film screenings.",
    image: "https://picsum.photos/600/400?random=16",
    price: 300,
    category: "Film",
    organizer: "Bengaluru Film Society",
    capacity: 1200,
    booked: 800
  },

  // ------------------- Hyderabad Events (8 events) -------------------
  {
    id: 17,
    title: "Hyderabad Tech Conference",
       date: getFutureDate(55, 9, 0),
    time: "10:00 AM",
    endTime: "5:00 PM",
    location: "HITEC City, Hyderabad",
    city: "Hyderabad",
    description: "Annual technology conference for IT professionals.",
    image: "https://picsum.photos/600/400?random=17",
    price: 400,
    category: "Technology",
    organizer: "Hyderabad IT Association",
    capacity: 600,
    booked: 250
  },
  {
    id: 18,
    title: "Hyderabad Food Carnival",
   date: getFutureDate(58, 11, 0),
    time: "11:00 AM",
    endTime: "10:00 PM",
    location: "Necklace Road, Hyderabad",
    city: "Hyderabad",
    description: "A treat of Hyderabadi biryani and global cuisines.",
    image: "https://picsum.photos/600/400?random=18",
    price: 200,
    category: "Food",
    organizer: "Hyderabad Foodies Club",
    capacity: 2000,
    booked: 1200
  },
  {
    id: 19,
    title: "Hyderabad Literature Festival",
  date: getFutureDate(60, 19, 0),
    time: "9:00 AM",
    endTime: "6:00 PM",
    location: "Public Gardens, Hyderabad",
    city: "Hyderabad",
    description: "Celebrating books and authors worldwide.",
    image: "https://picsum.photos/600/400?random=19",
    price: 100,
    category: "Literature",
    organizer: "Lit Fest Hyderabad",
    capacity: 1000,
    booked: 600
  },
  {
    id: 20,
    title: "Hyderabad International Film Festival",
    date: getFutureDate(63, 15, 0),
    time: "6:00 PM",
    endTime: "11:00 PM",
    location: "Prasad's IMAX, Hyderabad",
    city: "Hyderabad",
    description: "Showcasing films from 40+ countries.",
    image: "https://picsum.photos/600/400?random=20",
    price: 250,
    category: "Film",
    organizer: "Hyderabad Film Society",
    capacity: 1200,
    booked: 700
  },
  {
    id: 21,
    title: "Charminar Marathon",
     date: getFutureDate(65, 18, 0),
    time: "6:00 AM",
    endTime: "12:00 PM",
    location: "Charminar, Hyderabad",
    city: "Hyderabad",
    description: "Run through the heritage streets of Hyderabad.",
    image: "https://picsum.photos/600/400?random=21",
    price: 0,
    category: "Sports",
    organizer: "Hyderabad Runners Club",
    capacity: 7000,
    booked: 4000
  },
  {
    id: 22,
    title: "Hyderabad Auto Expo",
     date: getFutureDate(68, 7, 0),
    time: "10:00 AM",
    endTime: "7:00 PM",
    location: "Hitex Exhibition Centre",
    city: "Hyderabad",
    description: "Showcasing the latest in cars and EVs.",
    image: "https://picsum.photos/600/400?random=22",
    price: 300,
    category: "Expo",
    organizer: "Auto India Hyderabad",
    capacity: 4000,
    booked: 2200
  },
  {
    id: 23,
    title: "Hyderabad Startup Meet",
    date: getFutureDate(70, 17, 0),
    time: "10:00 AM",
    endTime: "6:00 PM",
    location: "T-Hub, Hyderabad",
    city: "Hyderabad",
    description: "Pitch sessions, investor meets, and networking.",
    image: "https://picsum.photos/600/400?random=23",
    price: 0,
    category: "Business",
    organizer: "Startup Hyderabad",
    capacity: 800,
    booked: 500
  },
  {
    id: 24,
    title: "Hyderabad Music Fest",
   date: getFutureDate(73, 10, 0),
    time: "7:00 PM",
    endTime: "11:00 PM",
    location: "Lal Bahadur Stadium, Hyderabad",
    city: "Hyderabad",
    description: "Live performances from top Indian singers.",
    image: "https://picsum.photos/600/400?random=24",
    price: 400,
    category: "Music",
    organizer: "Hyderabad Cultural Trust",
    capacity: 5000,
    booked: 3000
  },

  // ------------------- Mumbai Events (8 events) -------------------
  {
    id: 25,
    title: "Startup India Innovation",
    date: getFutureDate(75, 16, 0),
    time: "9:30 AM",
    endTime: "6:00 PM",
    location: "Mumbai Convention Centre",
    city: "Mumbai",
    description: "Annual startup conference featuring pitch sessions and investor meetings.",
    image: "https://picsum.photos/600/400?random=25",
    price: 300,
    category: "Business",
    organizer: "Startup India",
    capacity: 500,
    booked: 150
  },
  {
    id: 26,
    title: "Mumbai Film Festival",
     date: getFutureDate(78, 14, 0),
    time: "5:00 PM",
    endTime: "11:00 PM",
    location: "PVR Cinemas, Mumbai",
    city: "Mumbai",
    description: "Showcasing global and Bollywood films.",
    image: "https://picsum.photos/600/400?random=26",
    price: 500,
    category: "Film",
    organizer: "MAMI",
    capacity: 2000,
    booked: 1200
  },
  {
    id: 27,
    title: "Mumbai Marathon",
      date: getFutureDate(80, 9, 0),
    time: "6:00 AM",
    endTime: "12:00 PM",
    location: "Marine Drive, Mumbai",
    city: "Mumbai",
    description: "India's most famous marathon.",
    image: "https://picsum.photos/600/400?random=27",
    price: 0,
    category: "Sports",
    organizer: "Mumbai Runners Club",
    capacity: 8000,
    booked: 5000
  },
  {
    id: 28,
    title: "Mumbai Music Carnival",
       date: getFutureDate(83, 7, 0),
    time: "6:00 PM",
    endTime: "11:00 PM",
    location: "NSCI Dome, Mumbai",
    city: "Mumbai",
    description: "Bollywood and Indie music live shows.",
    image: "https://picsum.photos/600/400?random=28",
    price: 600,
    category: "Music",
    organizer: "Mumbai Music Society",
    capacity: 4000,
    booked: 2800
  },
  {
    id: 29,
    title: "Mumbai Auto Show",
    date:  getFutureDate(85, 11, 0),
    time: "10:00 AM",
    endTime: "6:00 PM",
    location: "Bombay Exhibition Centre",
    city: "Mumbai",
    description: "EVs, luxury cars, and superbikes showcase.",
    image: "https://picsum.photos/600/400?random=29",
    price: 400,
    category: "Expo",
    organizer: "Auto World Mumbai",
    capacity: 3500,
    booked: 2100
  },
  {
    id: 30,
    title: "Mumbai Literature Carnival",
date: getFutureDate(88, 9, 0),

    time: "9:00 AM",
    endTime: "8:00 PM",
    location: "Nehru Centre, Mumbai",
    city: "Mumbai",
    description: "Literature, writers, and poets gathering.",
    image: "https://picsum.photos/600/400?random=30",
    price: 200,
    category: "Literature",
    organizer: "Literary Mumbai",
    capacity: 1000,
    booked: 600
  },
  {
    id: 31,
      date: getFutureDate(90, 18, 0),
    title: "Mumbai Food Carnival",
    date: "2025-12-02T12:00:00",
    time: "12:00 PM",
    endTime: "9:00 PM",
    location: "Jio World Drive, Mumbai",
    city: "Mumbai",
    description: "Food stalls, cooking shows, and celebrity chefs.",
    image: "https://picsum.photos/600/400?random=31",
    price: 150,
    category: "Food",
    organizer: "Mumbai Foodies",
    capacity: 3000,
    booked: 1900
  }
];

export const userProfile = {
  id: 1,
  name: "Reshma M",
  email: "reshma@example.com",
  phone: "+91-9876543212",
  role: "Participant",
  joinedDate: new Date().toISOString().split('T')[0],
  location: "Chennai"
};

// Utility function to format dates
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Utility function to format time
export const formatTime = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
};

// Utility function to get relative time
export const getRelativeTime = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(date - now);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Tomorrow';
  if (diffDays < 7) return `In ${diffDays} days`;
  if (diffDays < 30) return `In ${Math.ceil(diffDays / 7)} weeks`;
  return `In ${Math.ceil(diffDays / 30)} months`;
};