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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdFC4yhhHvTvKhb31ZijXttTVQAcmhPONgzg&s",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDLzOwAYYV8sB26bBlVQziAVemqJFI-Fk9Gw&s",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkJms7kbaBSUS6zuUCGzIhLeihlV4q8Qu8Zg&s",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzolXiD2EA6kJqdILcmDYDsPeKjH6pyOrqPg&s",
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
    image: "https://ts-production.imgix.net/images/mobile-cover-uploaded/0b92a0f4-1f6d-47e3-ab8f-408f3b301911.jpg?auto=compress,format&w=375&h=200",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyXSBDPshdwWn41myWisO83oFmqzkPHta_Tg&s",
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
    image: "https://media.istockphoto.com/id/1152019414/photo/colleagues-applauding-businesswoman-in-meeting.jpg?s=612x612&w=0&k=20&c=cEHdUalroWYyplVk63Z2DXpVWW3sLauuG0TRtCG6am0=",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgYHO0XJRzbMdYdO0KFIa0cqVN5NldOUPYgw&s",
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
    image: "https://utsav.gov.in/public/uploads/event_picture_image/event_1009/16624795931410459363.jpg",
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
    image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201802/Lit_fest.jpeg?size=690:388",
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
    image: "https://bengaluru10k.com/wp-content/uploads/2023/05/about-1-1.jpg",
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
    image: "https://static.toiimg.com/thumb/msid-116251341,imgsize-43440,width-400,resizemode-4/116251341.jpg",
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
    image: "https://www.gokitetours.com/wp-content/uploads/2024/09/The-6-Places-to-enjoy-best-street-foods-in-Bangalore.webp",
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
    image: "https://bangaloreliteraturefestival.org/wp-content/uploads/featured-home-4-3-01.jpg",
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
    image: "https://cdn.shopify.com/s/files/1/0562/4011/1678/files/Auto_expo_14.jpg?v=1715065189",
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
    image: "https://www.hindustantimes.com/ht-img/img/2024/04/16/550x309/Packed-venues-at-the-BIFF-reaffirmed-the-power-of-_1713282477859.jpg",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5wJ7Z01TtBUQw2gjMdDz0uWbH9jdzbqed9WXlT7Mhjjra8iVvHyhfOz5_lHokoZdGhOI&usqp=CAU",
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
    image: "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2018/05/31164033/Telangana-Food-Festival.jpg",
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
    image: "https://mediaindia.eu/wp-content/uploads/2018/01/Hyderabad-Literature-Festival.jpg",
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
    image: "https://filmfreeway-production-storage-01-connector.filmfreeway.com/festivals/logos/000/056/505/large/logo.jpg?1597396461",
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
    image: "https://i.pinimg.com/474x/c0/8a/10/c08a102b1f78281da46fedb8e04e8d68.jpg",
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
    image: "https://m.economictimes.com/thumb/msid-117321134,width-1200,height-1200,resizemode-4,imgsize-45472/bharat-mobility-global-expo-2025.jpg",
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
    image: "https://images.yourstory.com/cs/2/1a70b4f0170611edbdd8b5d28d859895/Bigcompaniesareincreasinglyacquiringstartupsbecausetheyrealizescalingnewbrandsorganicallyistime-intensive3-1735025092289.png?mode=crop&crop=faces&ar=2%3A1&format=auto&w=1920&q=75",
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
    image: "https://mediaindia.eu/wp-content/uploads/2025/02/evening.jpg",
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
    image: "https://images.unsplash.com/photo-1643299397136-a6cf89431e19?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    image: "https://nfdcindia.com/nfdcapi/api/gallery/1739440012639_3098721.jpg",
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
    image: "https://images.moneycontrol.com/static-mcnews/2023/01/NN_8764-770x433.jpg?impolicy=website&width=770&height=431",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQojQsUgakZCMWG8lRWu04YE9qVOIVkLsdmbA&s",
    price: 600,
    category: "Music",
    organizer: "Mumbai Music Society",
    capacity: 4000,
    booked: 2800
  },
  {
    id: 29,
    title: "Mumbai Auto Show",
    date: getFutureDate(85, 11, 0),
    time: "10:00 AM",
    endTime: "6:00 PM",
    location: "Bombay Exhibition Centre",
    city: "Mumbai",
    description: "EVs, luxury cars, and superbikes showcase.",
    image: "https://img.autocarindia.com/ExtraImages/20190208070918_2019-Parx-show-1.jpg?w=700&c=1",
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
    image: "https://avidlearning.in/uploads/events/97C0006A-4E79-4500-8C42-48E1421FE161.jpg",
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
    image: "https://moodiedavittreport.com/wp-content/uploads/2023/07/CSMIAs-Mumbai-Street-Food-Festival-02-1-scaled-1.jpg",
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