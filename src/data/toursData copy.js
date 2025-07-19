import classicKutch from '../assets/tours/classic-kutch.jpg';
import rannUtsav from '../assets/tours/rann-utsav.jpg';
import spiritualTour from '../assets/tours/spiritual-tour.jpg';
import heritageCoast from '../assets/tours/heritage-coast.jpg';
import natureTour from '../assets/tours/nature-tour.jpg';
import craftCulture from '../assets/tours/craft-culture.jpg';

const toursData = [
  {
    id: 1,
    title: "Classic Kutch Tour – 4N/5D",
    idealFor: "First-time visitors, families",
    highlights: ["Bhuj", "White Rann", "Mandvi", "Handicrafts"],
    itinerary: [
      "Day 1: Arrival at Bhuj, local sightseeing (Aina Mahal, Bhujodi)",
      "Day 2: Visit White Rann, sunset at salt desert, Rann Utsav (seasonal)",
      "Day 3: Kalo Dungar & India Bridge, return to Bhuj",
      "Day 4: Day trip to Mandvi (Vijay Vilas Palace, Mandvi Beach)",
      "Day 5: Departure from Bhuj",
    ],
    cost: "₹12,000–₹18,000 per person",
    includes: "Transport, hotel, breakfast, and guide",
    image: classicKutch,
  },
  {
    id: 2,
    title: "Rann Utsav Special – 2N/3D",
    idealFor: "Cultural explorers, couples",
    highlights: ["Rann Utsav", "Local craft villages", "Desert experience"],
    itinerary: [
      "Day 1: Bhuj to Dhordo, check-in at Rann Utsav Tent City",
      "Day 2: Visit craft villages (Ludiya, Khavda), cultural show, camel rides",
      "Day 3: Kalo Dungar, return to Bhuj, departure",
    ],
    cost: "₹8,000–₹15,000 per person",
    includes: "Tent options vary (seasonal: Nov–Feb)",
    image: rannUtsav,
  },
  {
    id: 3,
    title: "Spiritual Kutch Yatra – 3N/4D",
    idealFor: "Pilgrims, senior citizens",
    highlights: ["Narayan Sarovar", "Koteshwar", "Mata no Madh"],
    itinerary: [
      "Day 1: Arrive Bhuj, visit Bhuj temples",
      "Day 2: Drive to Mata no Madh, Narayan Sarovar & Koteshwar",
      "Day 3: Visit 72 Jinalaya Jain temple, Mandvi beach (optional)",
      "Day 4: Return to Bhuj, departure",
    ],
    cost: "₹7,000–₹10,000 per person",
    includes: "Aarti visits, temple timings, religious guides",
    image: spiritualTour,
  },
  {
    id: 4,
    title: "Kutch Coastal & Heritage Tour – 5N/6D",
    idealFor: "Heritage lovers, couples, offbeat travelers",
    highlights: ["Mandvi", "Mundra", "Lakhpat Fort", "Fishing villages"],
    itinerary: [
      "Day 1: Bhuj arrival, local sightseeing",
      "Day 2: Mandvi – palace, beach, shipbuilding yard",
      "Day 3: Explore Mundra, coastal cuisine, temples",
      "Day 4: Visit Lakhpat Fort & Gurudwara, overnight at Nakhatrana",
      "Day 5: Return to Bhuj via handicraft villages",
      "Day 6: Departure",
    ],
    cost: "₹13,000–₹18,000 per person",
    includes: "Sea-facing stays, local food tasting",
    image: heritageCoast,
  },
  {
    id: 5,
    title: "Wildlife & Nature Tour – 4N/5D",
    idealFor: "Wildlife lovers, photographers",
    highlights: ["Little Rann", "Wild Ass Sanctuary", "Birdwatching"],
    itinerary: [
      "Day 1: Arrival Bhuj, transfer to Dhrangadhra/Zainabad",
      "Day 2: Morning Jeep Safari – Wild Ass, Flamingos",
      "Day 3: Visit salt panning areas & birdwatching trails",
      "Day 4: Visit Modhera Sun Temple, return to Bhuj",
      "Day 5: Departure",
    ],
    cost: "₹12,000–₹16,000 per person",
    includes: "Safari, guide, local stays",
    image: natureTour,
  },
  {
    id: 6,
    title: "Kutch Craft & Culture Tour – 3N/4D",
    idealFor: "Art lovers, students, international tourists",
    highlights: ["Textile villages", "Rogan art", "Ajrakh workshops"],
    itinerary: [
      "Day 1: Bhuj – visit Bhujodi & Shrujan Museum",
      "Day 2: Nirona Village – Rogan Art, Copper Bell art",
      "Day 3: Visit Ajrakhpur & Khavda – Block printing demo",
      "Day 4: Craft shopping at Bhuj Haat, return",
    ],
    cost: "₹9,000–₹13,000 per person",
    includes: "Workshops, artisan interaction",
    image: craftCulture,
  },
];

export default toursData;
