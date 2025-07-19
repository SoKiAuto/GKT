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
import urbaniaImg from '../assets/vehicles/urbania.jpg';
import audiA6Img from '../assets/vehicles/audi-a6.jpg';

const vehiclesData = [
  {
    id: 1,
    type: 'Aura',
    capacity: '4 passengers',
    rate: '₹1,500 - ₹2,000',
    notes: 'Comfortable for local city travel and short intercity trips',
    category: 'Sedan',
    image: auraImg,
  },
  {
    id: 2,
    type: 'Swift Dzire',
    capacity: '4 passengers',
    rate: '₹1,500 - ₹2,200',
    notes: 'Compact sedan suitable for city and business trips',
    category: 'Sedan',
    image: dzireImg,
  },
  {
    id: 3,
    type: 'Etios',
    capacity: '4 passengers',
    rate: '₹1,800 - ₹2,400',
    notes: 'Spacious sedan for comfortable highway travel',
    category: 'Sedan',
    image: etiosImg,
  },
  {
    id: 4,
    type: 'Ertiga',
    capacity: '6-7 passengers',
    rate: '₹2,800 - ₹3,500',
    notes: 'Ideal for small families and group tours',
    category: 'SUV / MUV',
    image: ertigaImg,
  },
  {
    id: 5,
    type: 'Innova Crysta',
    capacity: '6-7 passengers',
    rate: '₹3,500 - ₹4,500',
    notes: 'Premium comfort for long trips and families',
    category: 'SUV / MUV',
    image: crystaImg,
  },
  {
    id: 6,
    type: 'Fortuner',
    capacity: '6-7 passengers',
    rate: '₹6,000 - ₹8,000',
    notes: 'Luxury SUV for high-end travel needs',
    category: 'Luxury SUV',
    image: fortunerImg,
  },
  {
    id: 7,
    type: 'Tavera',
    capacity: '7-8 passengers',
    rate: '₹2,500 - ₹3,000',
    notes: 'Budget-friendly for groups and rural travel',
    category: 'SUV / MUV',
    image: taveraImg,
  },
  {
    id: 8,
    type: 'Force Cruise',
    capacity: '9-12 passengers',
    rate: '₹4,500 - ₹6,000',
    notes: 'Perfect for rugged routes and large groups',
    category: 'Traveller',
    image: forceCruiseImg,
  },
  {
    id: 9,
    type: 'Tempo Traveller',
    capacity: '12-17 passengers',
    rate: '₹5,000 - ₹7,500',
    notes: 'Popular for group and family tours',
    category: 'Traveller',
    image: tempoTravellerImg,
  },
  {
    id: 10,
    type: 'Urbania',
    capacity: '17-20 passengers',
    rate: '₹7,500 - ₹10,000',
    notes: 'Modern luxury traveller with AC and reclining seats',
    category: 'Traveller',
    image: urbaniaImg,
  },
  {
    id: 11,
    type: 'Audi A6',
    capacity: '4 passengers',
    rate: '₹8,000 - ₹12,000',
    notes: 'Premium sedan for luxury travel and business executives',
    category: 'Luxury Car',
    image: audiA6Img,
  },
];

export default vehiclesData;
