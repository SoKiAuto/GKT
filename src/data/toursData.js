import classicKutch from '../assets/tours/classic-kutch.jpg';
import rannUtsav from '../assets/tours/rann-utsav.jpg';
import spiritualTour from '../assets/tours/spiritual-tour.jpg';
import heritageCoast from '../assets/tours/heritage-coast.jpg';

const toursData = [
  {
    id: '1',
    title: '1 Night Package',
    category: 'Budget',
    image: rannUtsav,
    days: [
      {
        day: 'Day 1',
        activities: [
          'Transfer from Bhuj to Dhordo',
          'Check-in time: 12:30 PM',
          'Check-out time: 8:00 AM',
          '12:30 PM onwards: Welcome & check-in',
          '12:30 PM to 2:30 PM: Lunch',
          '2:30 PM to 4:00 PM: Enjoy resort area',
          '4:00 PM to 7:00 PM: Visit White Rann (Bus/Camel/Both)',
          '7:00 PM: Return to resort',
          '7:30 PM to 9:00 PM: Dinner',
          '9:00 PM to 10:00 PM: Kutchi folk music'
        ]
      },
      {
        day: 'Day 2',
        activities: ['7:00 AM to 8:00 AM: Breakfast', '8:00 AM: Return to Bhuj']
      }
    ]
  },
  {
    id: '2',
    title: '1 Night & 2 Days Package',
    category: 'Family',
    image: classicKutch,
    days: [
      {
        day: 'Day 1',
        activities: [
          'Transfer from Bhuj to Dhordo',
          'Check-in time: 12:30 PM',
          'Check-out time: 8:00 AM',
          '12:30 PM onwards: Welcome & check-in',
          '12:30 PM to 2:30 PM: Lunch',
          '2:30 PM to 4:00 PM: Resort activities',
          '4:00 PM to 7:00 PM: Visit White Rann, Rann Utsav',
          '7:00 PM: Return to resort',
          '7:30 PM to 9:00 PM: Dinner',
          '9:00 PM to 10:00 PM: Kutchi folk music'
        ]
      },
      {
        day: 'Day 2',
        activities: [
          '7:00 AM to 8:00 AM: Breakfast',
          '8:00 AM: Visit Bhuj attractions: Market, Swaminarayan Temple, Aaina Mahal, Smritivan, Science Museum, Vande Mataram Memorial'
        ]
      }
    ]
  },
  {
    id: '3',
    title: '2 Nights & 3 Days Package',
    category: 'Adventure',
    image: spiritualTour,
    days: [
      {
        day: 'Day 1',
        activities: [
          'Arrival at Bhuj (Railway station/Airport)',
          'Check-in time: 10:00 AM',
          'Bhuj Sightseeing: Swaminarayan Temple, Aaina Mahal, Smritivan, Science Museum, Vande Mataram Memorial'
        ]
      },
      {
        day: 'Day 2',
        activities: [
          'Transfer to Dhordo',
          'Check-in time: 12:30 PM',
          'Lunch & Resort activities',
          '4:00 PM to 7:00 PM: Visit White Rann, Rann Utsav',
          '7:00 PM: Return to resort',
          'Dinner & Kutchi Folk Music'
        ]
      },
      {
        day: 'Day 3',
        activities: ['Breakfast', '8:00 AM: Departure to Dholavira', 'Evening drop at Bhuj']
      }
    ]
  },
  {
    id: '4',
    title: '4 Nights & 5 Days Explore Kutch',
    category: 'Heritage',
    image: heritageCoast,
    days: [
      {
        day: 'Day 1',
        activities: [
          'Arrival at Bhuj (Railway station/Airport)',
          'Check-in: 10:00 AM',
          'Sightseeing: Smritivan, Science Museum, Vande Mataram Memorial'
        ]
      },
      {
        day: 'Day 2',
        activities: [
          'Breakfast',
          'Visit: 72 Jinalay, Ambe Dham Temple, Vijay Villas Palace, Mandvi Ship Yard, Mandvi Beach'
        ]
      },
      {
        day: 'Day 3',
        activities: [
          'Breakfast',
          'Visit: Maa Ashapura Temple (Matano Madh), Narayan Sarovar, Koteshwar Mahadev Temple'
        ]
      },
      {
        day: 'Day 4',
        activities: [
          'Transfer to Dhordo via Swaminarayan Temple, Rakshak Van',
          'Welcome & Resort Activities',
          'Visit White Rann, Rann Utsav',
          'Dinner & Kutchi Folk Music'
        ]
      },
      {
        day: 'Day 5',
        activities: [
          'Breakfast',
          'Check-out and visit: Kalo Dungar, Road of Heaven, Dholavira',
          'Evening drop at Bhuj'
        ]
      }
    ]
  }
];

export default toursData;
