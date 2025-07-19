import classicKutch from '../assets/tours/classic-kutch.jpg';
import rannUtsav from '../assets/tours/rann-utsav.jpg';
import spiritualTour from '../assets/tours/spiritual-tour.jpg';
import heritageCoast from '../assets/tours/heritage-coast.jpg';
//import natureTour from '../assets/tours/nature-tour.jpg';
//import craftCulture from '../assets/tours/craft-culture.jpg';


const updatedToursData = [
  {
    id: 1,
    title: "Rann Utsav Express – 1N/2D",
    idealFor: "Weekend travelers, cultural explorers",
    highlights: ["White Rann", "Camel rides", "Kutchi folk music"],
    itinerary: [
      "Day 1: Transfer from Bhuj to Dhordo. Check-in at 12:30 PM. Lunch at resort. Enjoy the resort area.",
      "Evening: Visit White Rann (Bus/Camel), return by 7:00 PM. Dinner followed by Kutchi folk music.",
      "Day 2: Breakfast at 7:00 AM. 8:00 AM: Return transfer to Bhuj."
    ],
    cost: "₹5,000–₹9,000 per person",
    includes: "Stay, meals, White Rann visit, cultural program",
    image: rannUtsav, // reusing image for Rann Utsav
  },
  {
    id: 2,
    title: "Rann Utsav Deluxe – 1N/2D + Sightseeing",
    idealFor: "Cultural explorers, short vacationers",
    highlights: ["White Rann", "Kutchi culture", "Bhuj sightseeing"],
    itinerary: [
      "Day 1: Transfer from Bhuj to Dhordo. Check-in at 12:30 PM. Lunch, relax at resort, visit White Rann, dinner, and cultural show.",
      "Day 2: Breakfast at 7:00 AM. Bhuj sightseeing: Swaminarayan Temple, Aina Mahal, Smritivan, Science Museum, Vande Mataram Memorial, local shopping."
    ],
    cost: "₹6,500–₹11,000 per person",
    includes: "Stay, meals, sightseeing, cultural program",
    image: spiritualTour,
  },
  {
    id: 3,
    title: "Kutch Discovery – 2N/3D",
    idealFor: "Family trips, first-time visitors",
    highlights: ["Bhuj city tour", "White Rann", "Rann Utsav", "Dholavira"],
    itinerary: [
      "Day 1: Arrival at Bhuj. Visit Swaminarayan Temple, Aina Mahal, Smritivan, Science Museum, Vande Mataram Memorial.",
      "Day 2: Transfer to Dhordo. Check-in at 12:30 PM. Lunch, relax, visit White Rann and enjoy Rann Utsav. Dinner and folk music.",
      "Day 3: Breakfast at 7:00 AM. Visit Dholavira & Road of Heaven. Evening drop at Bhuj."
    ],
    cost: "₹9,000–₹14,000 per person",
    includes: "Hotel, meals, all transfers, sightseeing",
    image: classicKutch, // Reuse image for general package
  },
  {
    id: 4,
    title: "Grand Kutch Explorer – 4N/5D",
    idealFor: "Pilgrims, cultural travelers, explorers",
    highlights: ["Bhuj", "Mandvi", "Narayan Sarovar", "White Rann", "Dholavira"],
    itinerary: [
      "Day 1: Arrival at Bhuj. Local sightseeing – Smritivan, Science Museum, Vande Mataram Memorial.",
      "Day 2: Visit 72 Jinalay, Godhara Ambe Dham, Vijay Vilas Palace, Mandvi Beach & Shipbuilding Yard.",
      "Day 3: Visit Maa Ashapura Temple (Mata no Madh), Narayan Sarovar, Koteshwar Mahadev Temple.",
      "Day 4: Transfer to Dhordo. Visit Swaminarayan Temple & Rakshak Van en route. White Rann visit, cultural program at resort.",
      "Day 5: Breakfast. Visit Kalo Dungar Hill Station, Road of Heaven, Dholavira. Evening drop at Bhuj."
    ],
    cost: "₹15,000–₹20,000 per person",
    includes: "Transport, hotels, all meals, sightseeing, cultural show",
    image: heritageCoast, // Best suited image
  }
];

export default updatedToursData;
