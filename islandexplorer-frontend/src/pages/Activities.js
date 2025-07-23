import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const activities = [
  {
    title: "Ayurveda Treatments",
    image: "/images/ayurweda.PNG",
    locations: "Baththaramulla, Panadura, Bentota",
    description: "Rejuvenate your body and mind with ancient healing therapies.",
  },
  {
    title: "Paramotoring",
    image: "/images/paramoni.PNG",
    locations: "Bentota",
    description: "Soar above breathtaking landscapes for a thrilling aerial adventure.",
  },
  {
    title: "Kite Surfing",
    image: "/images/kite.PNG",
    locations: "Kalpitiya, Kappalady, Arugam Bay",
    description: "Ride the waves and the wind for an adrenaline-pumping water sport.",
  },
  {
    title: "Shopping",
    image: "/images/shopping.PNG",
    locations: "Galle",
    description: "Explore vibrant markets and modern malls for unique finds.",
  },
  {
    title: "Hot Air Ballooning",
    image: "/images/hot air.PNG",
    locations: "Dambulla-Kandalama, Sigiriya",
    description: "Float over scenic landscapes for a mesmerizing bird’s-eye view.",
  },
  {
    title: "Whale Watching",
    image: "/images/whale.PNG",
    locations: "Mirissa, Trincomalee, Kalpitiya",
    description: "Witness majestic whales in their natural habitat.",
  },
  {
    title: "Boat Safari",
    image: "/images/boat.PNG",
    locations: "Mirissa, Bentota, Negambo, Balapitiya",
    description: "Glide through serene waters, spotting exotic wildlife along the way.",
  },
  {
    title: "Bird Watching",
    image: "/images/bird watching.PNG",
    locations: "Horton Plains, Kitulgala, Kalametiya, Minneriya, Udawalawa, Bundala, Kumana, Hambanthota",
    description: "Observe rare and colorful birds in lush natural settings.",
  },
  {
    title: "Surfing",
    image: "/images/surfing.PNG",
    locations: "Weligama, Hiriketiya, Ahangama, Arugam Bay, Midigama, SK Town, Hikkaduwa, Kabalana Beach",
    description: "Catch the perfect waves along Sri Lanka’s stunning coastline.",
  },
  {
    title: "White Water Rafting",
    image: "/images/rafting.PNG",
    locations: "Kithulgala",
    description: "Experience the thrill of rushing rapids in scenic rivers.",
  },
  {
    title: "Nature Trekking",
    image: "/images/traking.PNG",
    locations: "Little Adam's Peak, Ella Rock, Adam's Peak, Knuckles, Sinharaja, Sigiriya",
    description: "Hike through breathtaking trails surrounded by rich biodiversity.",
  },
  {
    title: "Camping",
    image: "/images/camping.PNG",
    locations: "Yala, Knuckles Mountain, Horton Plains, Ella, Udawalawe, Beach Camping",
    description: "Sleep under the stars and connect with nature in tranquil settings.",
  },
  {
    title: "Train Rides",
    image: "/images/train rides.PNG",
    locations: "Kandy to Ella, Colombo to Kandy, Anuradhapura to Jaffna",
    description: "Journey through misty hills and tea plantations on scenic rail routes.",
  },
  {
    title: "Diving",
    image: "/images/diving.PNG",
    locations: "Unawatuna, Trincomalee, Mirissa, Passikudah, Kalpitiya, Kirinda",
    description: "Explore coral reefs and shipwrecks beneath the waves.",
  },
  {
    title: "Turtle Watching",
    image: "/images/turtle.PNG",
    locations: "Rakawa, Kosgoda, Hikkaduwa",
    description: "Witness endangered sea turtles nesting along the shores.",
  },
  {
    title: "Snorkelling",
    image: "/images/snorkelin.PNG",
    locations: "Hikkaduwa, Pigeon Island, Mirissa, Trincomalee",
    description: "Discover a colorful underwater world teeming with marine life.",
  },
  {
    title: "Walking City Tour",
    image: "/images/walking.PNG",
    locations: "Galle, Colombo, Kandy",
    description: "One of the best ways to explore a destination is by foot.",
  },
  {
    title: "Cycling",
    image: "/images/cycling.PNG",
    locations: "Sigiriya, Habarana",
    description: "Pedal through scenic landscapes, from coastal roads to lush highlands.",
  },
];

export default function Activities() {
  return (
    <section style={{ padding: '40px 20px', background: '#f0f8ff' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ fontSize: "36px",
          fontWeight: "700",
          textAlign: "center",
          marginBottom: "40px",
          letterSpacing: "1.2px",
          color: "#006400", }}>
          Explore Activities
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          {activities.map((activity, index) => (
            <div
              key={index}
              style={{
                flex: '1 1 300px',
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: '20px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                overflow: 'hidden',
                  transition: 'transform 0.3s',
                  cursor: 'pointer',
                  border: '1px solid #228B22',  // <-- added green frame border
              }}
            >
              <h3 style={{ fontSize: '20px', color: '#228B22', marginBottom: '10px' }}>{activity.title}</h3>
              
              {activity.image && (
                <img
                  src={activity.image}
                  alt={activity.title}
                  style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '6px', marginBottom: '10px' }}
                />
              )}

              <p style={{ color: '#777', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FaMapMarkerAlt color="#006400" />
                <span>{activity.locations}</span>
              </p>
              <p style={{ color: '#444' }}>{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
