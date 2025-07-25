// src/data/vehiclesData.js

import auraImg from '../assets/vehicles/aura.jpg';
import dzireImg from '../assets/vehicles/swift-dzire.jpg';
import etiosImg from '../assets/vehicles/etios.jpg';
import ertigaImg from '../assets/vehicles/ertiga.jpg';
import crystaImg from '../assets/vehicles/innova-crysta.jpg';
import fortunerImg from '../assets/vehicles/fortuner.jpg';
import taveraImg from '../assets/vehicles/tavera.jpg';
import forceCruiseImg from '../assets/vehicles/force-cruise.jpg';
import tempoTravellerImg from '../assets/vehicles/tempo-traveller.jpg';

import audiA6Img from '../assets/vehicles/audi-a6.jpg';
import xl6Img from '../assets/vehicles/XL6.jpg';
import miniBusImg from '../assets/vehicles/mini-bus.jpg';
import luxuryBusImg from '../assets/vehicles/luxury-bus.jpg';
import travellerInteriorImg from '../assets/vehicles/traveller-interior.jpg';
import travellerInterior1Img from '../assets/vehicles/traveller-interior1.jpg';

const vehiclesData = [
  // Cab Service Vehicles
  { id: 1, type: 'Swift Dzire', capacity: '4 passengers', notes: 'Compact sedan suitable for city and business trips', category: 'Cab Service', image: dzireImg },
  { id: 2, type: 'Aura', capacity: '4 passengers', notes: 'Built for smooth, comfortable highway travel.', category: 'Cab Service', image: auraImg },
  { id: 3, type: 'Etios', capacity: '4 passengers', notes: 'Spacious sedan for comfortable highway travel', category: 'Cab Service', image: etiosImg },
  { id: 4, type: 'Ertiga', capacity: '6-7 passengers', notes: 'Ideal for small families and group tours', category: 'Cab Service', image: ertigaImg },
  { id: 5, type: 'XL6', capacity: '6 passengers', notes: 'Stylish MPV with good mileage and comfort', category: 'Cab Service', image: xl6Img },
  { id: 6, type: 'Innova Crysta', capacity: '6-7 passengers', notes: 'Premium comfort for long trips and families', category: 'Cab Service', image: crystaImg },
  { id: 7, type: 'Tavera', capacity: '7-8 passengers', notes: 'Budget-friendly for groups and rural travel', category: 'Cab Service', image: taveraImg },
  { id: 8, type: 'Force Cruise', capacity: '9-12 passengers', notes: 'Perfect for rugged routes and large groups', category: 'Cab Service', image: forceCruiseImg },

  // Car Rentals (Self Drive + With Driver)
  { id: 9, type: 'Aura', capacity: '4 passengers', notes: 'Available for both self drive and chauffeur driven', category: 'Car Rental', image: auraImg },
  { id: 10, type: 'Etios', capacity: '4 passengers', notes: 'Spacious and reliable for road trips, self or driver', category: 'Car Rental', image: etiosImg },
  { id: 11, type: 'Swift Dzire', capacity: '4 passengers', notes: 'Ideal for daily rentals, both options available', category: 'Car Rental', image: dzireImg },
  { id: 12, type: 'Ertiga', capacity: '6-7 passengers', notes: 'Great for families, available with or without driver', category: 'Car Rental', image: ertigaImg },

  // Wedding Car Rentals
  { id: 13, type: 'Innova Crysta', capacity: '6-7 passengers', notes: 'Spacious and luxurious for wedding events', category: 'Wedding Car Rental', image: crystaImg },
  { id: 14, type: 'Fortuner', capacity: '6-7 passengers', notes: 'Luxury SUV perfect for high-end wedding entries', category: 'Wedding Car Rental', image: fortunerImg },
  { id: 15, type: 'Audi A6', capacity: '4 passengers', notes: 'Premium sedan for bride/groom or VIP guests', category: 'Wedding Car Rental', image: audiA6Img },

  // Bus Section
  { id: 16, type: 'Mini Bus (27+1 Seater)', capacity: '28 passengers', notes: 'Ideal for mid-size corporate or wedding groups', category: 'Bus Section', image: miniBusImg },
  { id: 17, type: 'Luxury Bus (56+1 Seater)', capacity: '57 passengers', notes: 'Spacious luxury bus with reclining seats and entertainment', category: 'Bus Section', image: luxuryBusImg },

  // Tempo Traveller Section
  { id: 18, type: 'Tempo Traveller (12-20 Seater)', capacity: '12-20 passengers', notes: 'Popular for large family and group travel', category: 'Tempo Traveller', image: tempoTravellerImg },
  { id: 19, type: 'Traveller Interior 1', capacity: 'Interior View', notes: 'View of luxury seating, lights and finish', category: 'Tempo Traveller', image: travellerInteriorImg },
  { id: 20, type: 'Traveller Interior 2', capacity: 'Interior View', notes: 'Additional interior layout with leg space', category: 'Tempo Traveller', image: travellerInterior1Img },
];

export default vehiclesData;
