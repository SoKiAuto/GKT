import classicKutch from '../assets/tours/classic-kutch.jpg';
import rannUtsav from '../assets/tours/rann-utsav.jpg';
import spiritualTour from '../assets/tours/spiritual-tour.jpg';
import heritageCoast from '../assets/tours/heritage-coast.jpg';

const updatedToursData = [
  {
    id: 1,
    title: "Rann Utsav Express",
    duration: "1N/2D",
    idealFor: "Weekend travelers, cultural explorers",
    highlights: ["White Rann experience", "Camel rides", "Kutchi folk music & dance"],
    itinerary: [
      {
        dayTitle: "Day 1: Arrival & White Rann Exploration",
        activities: [
          "Transfer from Bhuj to Dhordo (Rann Utsav tent city).",
          "Check-in at 12:30 PM. Enjoy a traditional Kutchi lunch at the resort.",
          "Afternoon at leisure to explore the resort amenities.",
          "Evening: Experience the majestic White Rann (via bus/camel cart), witness the sunset.",
          "Return to resort by 7:00 PM for dinner.",
          "Enjoy a captivating Kutchi folk music and dance performance."
        ]
      },
      {
        dayTitle: "Day 2: Departure from Dhordo",
        activities: [
          "Breakfast at 7:00 AM.",
          "8:00 AM: Check-out and transfer back to Bhuj."
        ]
      }
    ],
    cost: "₹5,000 – ₹9,000 per person",
    includes: "Accommodation, all meals, White Rann visit, cultural program",
    image: rannUtsav,
  },
  {
    id: 2,
    title: "Rann Utsav Deluxe & Bhuj Sightseeing",
    duration: "1N/2D",
    idealFor: "Cultural explorers, short vacationers",
    highlights: ["White Rann grandeur", "Immersive Kutchi culture", "Extensive Bhuj city sightseeing"],
    itinerary: [
      {
        dayTitle: "Day 1: Rann Utsav Immersion",
        activities: [
          "Transfer from Bhuj to Dhordo and check-in at 12:30 PM.",
          "Lunch and relaxation at the resort.",
          "Visit to White Rann for sunset views.",
          "Dinner followed by a vibrant cultural show."
        ]
      },
      {
        dayTitle: "Day 2: Bhuj City Exploration & Departure",
        activities: [
          "Breakfast at 7:00 AM.",
          "Check-out and embark on a comprehensive Bhuj sightseeing tour:",
          "Visit Swaminarayan Temple, Aina Mahal (Old Palace), Smritivan (Earthquake Memorial Museum), Kutch Museum, Vande Mataram Memorial.",
          "Time for local shopping and culinary experiences.",
          "Evening: Drop-off at Bhuj station/airport."
        ]
      }
    ],
    cost: "₹6,500 – ₹11,000 per person",
    includes: "Accommodation, all meals, comprehensive sightseeing, cultural program",
    image: spiritualTour,
  },
  {
    id: 3,
    title: "Kutch Discovery Journey",
    duration: "2N/3D",
    idealFor: "Family trips, first-time visitors to Kutch",
    highlights: ["Bhuj city highlights", "Spectacular White Rann", "Ancient Dholavira ruins"],
    itinerary: [
      {
        dayTitle: "Day 1: Bhuj City Delights",
        activities: [
          "Arrival at Bhuj. Hotel check-in.",
          "Afternoon: Visit Swaminarayan Temple, Aina Mahal, Smritivan, Kutch Museum, Vande Mataram Memorial."
        ]
      },
      {
        dayTitle: "Day 2: White Rann Adventure",
        activities: [
          "Morning: Transfer to Dhordo. Check-in at 12:30 PM.",
          "Lunch and relax.",
          "Evening: Explore White Rann and enjoy the Rann Utsav festivities.",
          "Dinner and folk music performance."
        ]
      },
      {
        dayTitle: "Day 3: Dholavira & Return",
        activities: [
          "Breakfast at 7:00 AM.",
          "Visit Dholavira (ancient Harappan site) & the picturesque 'Road of Heaven'.",
          "Evening drop-off at Bhuj."
        ]
      }
    ],
    cost: "₹9,000 – ₹14,000 per person",
    includes: "Hotel accommodation, all meals, all transfers, guided sightseeing",
    image: classicKutch,
  },
  {
    id: 4,
    title: "Grand Kutch Explorer",
    duration: "4N/5D",
    idealFor: "Pilgrims, cultural travelers, avid explorers",
    highlights: ["Bhuj's rich history", "Mandvi's coastal charm", "Spiritual sites of Narayan Sarovar", "White Rann marvel", "Dholavira's ancient past"],
    itinerary: [
      {
        dayTitle: "Day 1: Arrival & Bhuj Landmarks",
        activities: [
          "Arrival at Bhuj. Check-in to hotel.",
          "Afternoon: Local sightseeing – Smritivan, Science Museum, Vande Mataram Memorial."
        ]
      },
      {
        dayTitle: "Day 2: Mandvi Coastal Wonders",
        activities: [
          "Visit 72 Jinalay (Jain Temple), Godhra Ambe Dham Temple.",
          "Explore Vijay Vilas Palace, relax at Mandvi Beach, and witness the traditional Shipbuilding Yard."
        ]
      },
      {
        dayTitle: "Day 3: Sacred Sites of Kutch",
        activities: [
          "Journey to Maa Ashapura Temple (Mata no Madh).",
          "Visit Narayan Sarovar and Koteshwar Mahadev Temple."
        ]
      },
      {
        dayTitle: "Day 4: Rann Utsav Experience",
        activities: [
          "Transfer to Dhordo. En route, visit Swaminarayan Temple & Rakshak Van.",
          "Experience the White Rann, followed by a cultural program at the resort."
        ]
      },
      {
        dayTitle: "Day 5: Kalo Dungar, Dholavira & Departure",
        activities: [
          "Breakfast.",
          "Visit Kalo Dungar (Black Hill) Hill Station for panoramic views.",
          "Drive through the 'Road of Heaven' to Dholavira.",
          "Evening drop-off at Bhuj."
        ]
      }
    ],
    cost: "₹15,000 – ₹20,000 per person",
    includes: "Private transport, comfortable hotels, all meals, extensive sightseeing, cultural show",
    image: heritageCoast,
  }
];

export default updatedToursData;