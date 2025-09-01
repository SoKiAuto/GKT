import classicKutch from '../assets/tours/classic-kutch.jpg';
import rannUtsav from '../assets/RunUtsav.jpeg';
import spiritualTour from '../assets/tours/spiritual-tour.jpg';
//import heritageCoast from '../assets/tours/heritage-coast.jpg';
import sixDayTourImage from '../assets/Temple.jpeg';
import exploreKutchImage from'../assets/tours/Road-to-Heaven.jpg';  // Or Temple.jpeg if you prefer



const toursData = [
 {
  id: '1',
  title: '1 Night Package',
  category: 'Budget',
  duration: '2 Night',
  destinations: 'Bhuj – Dhordo – White Rann – Bhuj',
  image: rannUtsav,
  days: [
    {
      dayTitle: 'Day 1',
      activities: [
        'Pickup from Bhuj Airport / Railway Station',
        'Proceed to Dhordo (approx. 2 hours drive)',
        '12:30 PM onwards: Welcome & Check-in at the resort',
        '12:30 PM – 2:30 PM: Buffet Lunch at the resort',
        '2:30 PM – 4:00 PM: Leisure time to explore resort amenities',
        '4:00 PM – 7:00 PM: Visit the breathtaking White Rann (by Bus)',
        '7:00 PM: Return to the resort',
        '7:30 PM – 9:00 PM: Traditional Kutchi dinner',
        '9:00 PM – 10:00 PM: Enjoy live Kutchi folk music and cultural performances'
      ]
    },
    {
      dayTitle: 'Day 2',
      activities: [
        '7:00 AM – 8:00 AM: Breakfast at the resort',
        '8:00 AM: Check-out and transfer back to Bhuj',
        'Drop-off: Bhuj Railway Station / Airport'
      ]
    }
  ],
  note: 'Itinerary is subject to weather conditions and local scheduling. All transportation and activities are arranged as per package inclusions.'
},
{
  id: '2',
  title: '1 Night & 2 Days Package',
  category: 'Family',
  duration: '1 Night & 2 Days',
  destinations: 'Bhuj – Dhordo – Rann Utsav – Bhuj Attractions',
  image: classicKutch,
  days: [
    {
      dayTitle: 'Day 1',
      activities: [
        'Arrival in Bhuj – Transfer to Dhordo (approx. 2 hours)',
        '12:30 PM onwards: Check-in at the resort',
        '12:30 PM – 2:30 PM: Buffet lunch at the resort',
        '2:30 PM – 4:00 PM: Enjoy in-house resort activities and leisure time',
        '4:00 PM – 7:00 PM: Visit the vibrant Rann Utsav – cultural performances, crafts, shopping',
        '7:00 PM: Return to the resort',
        '7:30 PM – 9:00 PM: Dinner with regional delicacies',
        '9:00 PM – 10:00 PM: Live Kutchi folk music and cultural entertainment'
      ]
    },
    {
      dayTitle: 'Day 2',
      activities: [
        '7:00 AM – 8:00 AM: Breakfast at the resort',
        '8:00 AM: Check-out and Bhuj city tour: Market, Swaminarayan Temple, Aaina Mahal, Smritivan, Science Museum, Vande Mataram Memorial',
        'Drop-off: Transfer to Bhuj Airport / Railway Station'
      ]
    }
  ],
  note: 'Itinerary schedule may vary depending on traffic, weather, and guest preferences.'
},
{
  id: '3',
  title: '2 Nights & 3 Days Package',
  category: 'Adventure',
  duration: '2 Nights & 3 Days',
  destinations: 'Bhuj – Dhordo – White Rann – Dholavira – Bhuj',
  image: spiritualTour,
  days: [
    {
      dayTitle: 'Day 1',
      activities: [
        'Arrival at Bhuj (Railway Station / Airport)',
        'Check-in at Hotel',
        '11:30 AM – Swaminarayan Temple',
        '12:30 PM – Aaina Mahal',
        '3:00 PM – Smritivan Earthquake Memorial & Museum',
        '5:00 PM – Kutch Science Museum',
        '6:30 PM – Vande Mataram Memorial at Bhujodi',
        '8:00 PM – Return to hotel, dinner & overnight stay'
      ]
    },
    {
      dayTitle: 'Day 2',
      activities: [
        '8:30 AM – Breakfast & check-out',
        '9:30 AM – Depart for Dhordo (Approx. 2.5 hrs)',
        '12:00–12:30 PM – Check-in at resort',
        '1:00 PM – Lunch at the resort',
        '2:00 PM to 4:00 PM – Leisure/resort activities',
        '4:00 PM – Depart for White Rann',
        '6:00 PM – Explore Rann Utsav',
        '7:00 PM – Return to resort',
        '8:00 PM – Dinner & Kutchi Folk Music',
        'Overnight stay at Dhordo'
      ]
    },
    {
      dayTitle: 'Day 3',
      activities: [
        '6:30 AM – Early breakfast & check-out',
        '7:00 AM – Begin journey to Dholavira (Approx. 6–7 hours)',
        '2:00 PM – Visit Dholavira Archaeological Site',
        '3:30 PM – Lunch at local facility',
        '4:00 PM – Begin return to Bhuj',
        'Evening/Night – Drop at Bhuj Railway Station / Airport'
      ]
    }
  ]
},
{
  id: '4', // Make sure it's unique — looks like '4' is the next available
  title: 'Explore Kutch – 4 Nights / 5 Days',
  category: 'Culture & Heritage',
  duration: '4 Nights / 5 Days',
  destinations: 'Bhuj · Mandvi · Dhordo (White Rann) · Dholavira',
  image: exploreKutchImage,
  days: [
    {
      dayTitle: 'Day 1: Arrival at Bhuj',
      activities: [
        'Check-in at hotel – 10:00 AM',
        'Visit Smritivan Earthquake Memorial & Museum',
        'Explore Kutch Science Museum',
        'Patriotic tribute at Vande Mataram Memorial, Bhujodi',
        'Evening at leisure',
        'Overnight stay in Bhuj'
      ]
    },
    {
      dayTitle: 'Day 2: Mandvi Coastal & Heritage Tour',
      activities: [
        'Breakfast at hotel',
        'Depart for Mandvi (Approx. 60 km | 1.5 hrs)',
        'Visit 72 Jinalay Jain Temple, Koday',
        'Explore Ambe Dham Temple, Godhra Hill',
        'Tour Vijay Vilas Palace',
        'View traditional shipbuilding at Mandvi Shipyard',
        'Relax at Mandvi Beach',
        'Return to Bhuj in the evening',
        'Overnight stay in Bhuj'
      ]
    },
    {
      dayTitle: 'Day 3: West Kutch Pilgrimage Circuit',
      activities: [
        'Early breakfast & departure',
        'Darshan at Maa Ashapura Temple (Matano Madh)',
        'Visit Narayan Sarovar – sacred lake',
        'Explore Koteshwar Mahadev Temple near the coast',
        'Return to Bhuj in the evening',
        'Overnight stay in Bhuj'
      ]
    },
    {
      dayTitle: 'Day 4: Transfer to Dhordo – White Rann Experience',
      activities: [
        'Breakfast & check-out from Bhuj hotel',
        'Enroute visit: Shree Swaminarayan Temple, Bhuj',
        'Stop at Rakshak Van (green conservation park)',
        'Arrival & lunch at Dhordo resort',
        'Enjoy resort activities & cultural programs',
        'Sunset at the White Rann (Salt Desert)',
        'Explore Rann Utsav Fair – shopping, food & shows',
        'Dinner & live Kutchi folk music',
        'Overnight stay in Dhordo'
      ]
    },
    {
      dayTitle: 'Day 5: Dhordo – Kalo Dungar – Dholavira – Departure',
      activities: [
        'Morning excursion to Kalo Dungar (Black Hill)',
        'Scenic drive through "Road of Heaven"',
        'Visit UNESCO-listed Dholavira Archaeological Site',
        'Evening drop at Bhuj Railway Station / Airport (after 7:00 PM)'
      ]
    }
  ],
  note: 'Ideal for culture, nature, and spiritual experiences. All transfers, meals, and entry fees included as per itinerary.'
},
{
  id: '5',
  title: '6 Days Panchtirthi Tour',
  category: 'Spiritual',
  duration: '6 Days / 5 Nights',
  destinations: 'Gandhidham – Bhadreshwar – Mandvi – Bhuj – Nirona – White Rann – Dholavira',
  image: sixDayTourImage,
  days: [
    {
      dayTitle: 'Day 1 – Nani Panchtirthi Circuit',
      activities: [
        'Pickup from Gandhidham Railway Station / Airport',
        'Transfer to Bhadreshwar Jain Tirth',
        'Breakfast at designated facility',
        'Darshan at Bhadreshwar & Vanki Tirth',
        'Lunch at Vanki Tirth',
        'On-road stops: Ahinshadham, Bhujpur, Desalpur, Bidada',
        'Sunset at Mandvi Beach',
        'Night Halt: 72 Jinalay, Mandvi'
      ]
    },
    {
      dayTitle: 'Day 2 – Moti Panchtirthi Circuit',
      activities: [
        'Vijay Villas Palace',
        'Don Jain Derasar',
        'Dedhia, Sandhan, Suthari, Kothara, Jakhau, Naliya Tirths',
        'Night Halt: Tera Tirth'
      ]
    },
    {
      dayTitle: 'Day 3 – Tera to Bhuj',
      activities: [
        'Visit: Parsav Vallabh Indrdham, Khadio Dhro',
        'Evening transfer to Bhuj',
        'Night Halt: Hotel in Bhuj'
      ]
    },
    {
      dayTitle: 'Day 4 – Bhuj – Nirona – White Rann',
      activities: [
        'Visit Nirona: Rogan Art, Copper Bell, Lacquer work',
        'Evening at White Rann',
        'Night Halt: Dhordo Resort'
      ]
    },
    {
      dayTitle: 'Day 5 – Dhordo – Dholavira – Bhuj',
      activities: [
        'Morning: Kalo Dungar, Road of Heaven',
        'Visit Dholavira archaeological site',
        'Evening return to Bhuj',
        'Night Halt: Hotel in Bhuj'
      ]
    },
    {
      dayTitle: 'Day 6 – Departure',
      activities: [
        'Check-out & transfer to Gandhidham Railway Station / Airport'
      ]
    }
  ],
  note: 'All transfers by private vehicle. Stay at religious guest houses or hotels. Meals arranged per itinerary. Entry fees and guide included.'
}

];


export default toursData;
