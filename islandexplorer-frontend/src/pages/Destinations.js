import React from 'react';

const destinations = [
  {
    title: 'Adorable Beaches',
    places: [
      { name: 'Negombo', desc: 'A charming beach town near the airport, perfect for a short escape.', img: '/images/negombo.PNG' },
      { name: 'Bentota', desc: 'Luxury meets adventure with golden sands and water sports.', img: '/images/benthota.PNG' },
      { name: 'Hikkaduwa', desc: 'A snorkeling and diving hotspot with vibrant marine life.', img: '/images/hikkaduwa.PNG' },
      { name: 'Mirissa', desc: 'Famous for whale watching and stunning views.', img: '/images/mirissa.PNG' },
      { name: 'Trincomalee', desc: 'Crescent-shaped bay with calm waters and hidden gems.', img: '/images/trincomalee.PNG' },
      { name: 'Pasikuda', desc: 'Ideal for snorkeling and family fun.', img: '/images/pasikuda.PNG' },
    ],
  },
  {
    title: 'Safari Destinations',
    places: [
      { name: 'Yala National Park', desc: 'Highest leopard density and wild elephants.', img: '/images/yala7.jpg' },
      { name: 'Udawalawe National Park', desc: 'Famous for its elephant herds.', img: '/images/udawale.PNG' },
      { name: 'Minneriya National Park', desc: '"The Gathering" of hundreds of elephants.', img: '/images/minneriya.PNG' },
      { name: 'Wasgamuwa National Park', desc: 'Wilderness haven for large elephant herds.', img: '/images/wasgamuwa.PNG' },
      { name: 'Pinnawala National Park', desc: 'Home to rescued elephants & orphanage.', img: '/images/pinnawala.PNG' },
      { name: 'Kumana National Park', desc: 'Ideal for birdwatching & migratory birds.', img: '/images/kumana.PNG' },
    ],
  },
  {
    title: 'Chilling Spots',
    places: [
      { name: 'Sigiriya', desc: 'The Lion Rock fortress and heritage site.', img: '/images/sigiriya2.jpg' },
      { name: 'Dambulla', desc: 'Famous for ancient cave temples.', img: '/images/dambulla.PNG' },
      { name: 'Ambuluwawa', desc: 'Unique spiral tower with panoramic views.', img: '/images/ambuluwawa.PNG' },
      { name: 'Kandy', desc: 'Sacred city with cultural attractions.', img: '/images/kandy.PNG' },
      { name: 'Ella', desc: 'Mountain getaway with lush greenery.', img: '/images/ella2.jpg' },
      { name: 'Nuwara Eliya', desc: 'Little England of Sri Lanka.', img: '/images/nuwaraeliya.PNG' },
    ],
  },
];

const Destinations = () => {
  return (
    <section style={{ padding: '50px 20px', backgroundColor: '#f0f8ff' }}>
      <h1 style={{ fontSize: "36px",
          fontWeight: "700",
          textAlign: "center",
          marginBottom: "40px",
          letterSpacing: "1.2px",
          color: "#006400", }}>
        Explore Top Destinations in Sri Lanka
      </h1>

      {destinations.map((section, index) => (
        <div key={index} style={{ marginBottom: '60px' }}>
          <h2
            style={{
              fontSize: '28px',
              color: '#004d40',
              marginBottom: '20px',
              borderBottom: '2px solid #ccc',
              paddingBottom: '8px',
            }}
          >
            {section.title}
          </h2>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {section.places.map((place, i) => (
              <div
                key={i}
                style={{
                    flex: '1 1 300px',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    padding: '20px',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                    overflow: 'hidden',
                      transition: 'transform 0.3s',
                      cursor: 'pointer',
                      border: '1px solid #228B22',  
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <img
                  src={place.img}
                  alt={place.name}
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <div style={{ padding: '15px' }}>
                  <h3 style={{ fontSize: '20px', marginBottom: '10px', color: '#00695c' }}>
                    {place.name}
                  </h3>
                  <p style={{ color: '#555', fontSize: '15px' }}>{place.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Destinations;
