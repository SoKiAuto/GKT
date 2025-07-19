// src/data/vehiclesData.js
import hatchbackImg from '../assets/vehicles/hatchback.jpg';
import sedanImg from '../assets/vehicles/sedan.jpg';
import suvImg from '../assets/vehicles/suv.jpg';
import luxurySuvImg from '../assets/vehicles/luxury-suv.jpg';
import tempo9Img from '../assets/vehicles/tempo-9.jpg';
import tempo12Img from '../assets/vehicles/tempo-12.jpg';
import tempo17Img from '../assets/vehicles/tempo-17.jpg';
import miniBusImg from '../assets/vehicles/mini-bus.jpg';
import bus45Img from '../assets/vehicles/bus-45.jpg';
import volvoBusImg from '../assets/vehicles/volvo-bus.jpg';
import scooterImg from '../assets/vehicles/scooter.jpg';
import bikeImg from '../assets/vehicles/bike.jpg';
import camelCartImg from '../assets/vehicles/camel-cart.jpg';
import jeepSafariImg from '../assets/vehicles/jeep-safari.jpg';

const vehiclesData = [
  {
    id: 1,
    type: 'Hatchback',
    capacity: '4 people',
    privateRate: '₹1,200 - ₹1,500',
    driverRate: '₹1,800 - ₹2,200',
    notes: 'Swift, i10, WagonR – city & short trips',
    category: 'Car Rentals',
    image: hatchbackImg,
  },
  {
    id: 2,
    type: 'Sedan',
    capacity: '4-5 people',
    privateRate: '₹1,800 - ₹2,200',
    driverRate: '₹2,500 - ₹3,000',
    notes: 'Dzire, Tigor – comfortable for longer trips',
    category: 'Car Rentals',
    image: sedanImg,
  },
  {
    id: 3,
    type: 'SUV',
    capacity: '6-7 people',
    privateRate: '₹3,000 - ₹3,500',
    driverRate: '₹3,800 - ₹4,500',
    notes: 'Innova, Ertiga – ideal for group/family',
    category: 'Car Rentals',
    image: suvImg,
  },
  {
    id: 4,
    type: 'Luxury SUV',
    capacity: '6-7 people',
    privateRate: '₹5,000 - ₹7,000',
    driverRate: '₹6,000 - ₹8,000',
    notes: 'Fortuner, Endeavour – premium experience',
    category: 'Car Rentals',
    image: luxurySuvImg,
  },
  {
    id: 5,
    type: '9-Seater Tempo Traveller',
    capacity: '9 passengers',
    driverRate: '₹5,000 - ₹6,500',
    notes: 'Popular for small groups & families',
    category: 'Tempo Traveller Rentals',
    image: tempo9Img,
  },
  {
    id: 6,
    type: '12-Seater Tempo Traveller',
    capacity: '12 passengers',
    driverRate: '₹6,000 - ₹7,500',
    notes: 'Ideal for medium-sized group tours',
    category: 'Tempo Traveller Rentals',
    image: tempo12Img,
  },
  {
    id: 7,
    type: '17-Seater Tempo Traveller',
    capacity: '17 passengers',
    driverRate: '₹7,000 - ₹9,000',
    notes: 'Larger groups, more luggage space',
    category: 'Tempo Traveller Rentals',
    image: tempo17Img,
  },
  {
    id: 8,
    type: '30-Seater Mini Bus',
    capacity: '25-30 passengers',
    rate: '₹12,000 - ₹15,000',
    notes: 'Corporate groups, large families',
    category: 'Luxury Coaches / Buses',
    image: miniBusImg,
  },
  {
    id: 9,
    type: '45-Seater Bus',
    capacity: '40-45 passengers',
    rate: '₹18,000 - ₹22,000',
    notes: 'School groups, tourists',
    category: 'Luxury Coaches / Buses',
    image: bus45Img,
  },
  {
    id: 10,
    type: 'Volvo AC Bus',
    capacity: '40-45 passengers',
    rate: '₹25,000 - ₹30,000',
    notes: 'Luxury travel, long distance travel',
    category: 'Luxury Coaches / Buses',
    image: volvoBusImg,
  },
  {
    id: 11,
    type: 'Scooter (Activa, Jupiter)',
    capacity: '1-2 persons',
    rate: '₹400 - ₹600',
    notes: 'Best for solo travelers or couples in Bhuj/Mandvi',
    category: 'Two Wheeler Rentals',
    image: scooterImg,
  },
  {
    id: 12,
    type: 'Motorbike (Royal Enfield)',
    capacity: '1-2 persons',
    rate: '₹1,000 - ₹1,500',
    notes: 'For adventurous travelers exploring rugged terrain',
    category: 'Two Wheeler Rentals',
    image: bikeImg,
  },
  {
    id: 13,
    type: 'Camel Cart',
    capacity: '2-4 persons',
    rate: '₹500 - ₹1,000 (per ride)',
    notes: 'Available at Rann Utsav & desert tours',
    category: 'Special Vehicles',
    image: camelCartImg,
  },
  {
    id: 14,
    type: 'Jeep Safari',
    capacity: '6-7 persons',
    rate: '₹3,000 - ₹5,000 (per safari)',
    notes: 'Used for Kalo Dungar & Little Rann safaris',
    category: 'Special Vehicles',
    image: jeepSafariImg,
  },
];

export default vehiclesData;
