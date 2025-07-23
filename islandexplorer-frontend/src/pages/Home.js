import React, { useState, useEffect } from 'react';

const destinations = [
  {
    id: 1,
    name: 'Sigiriya Rock Fortress',
    location: 'Sigiriya, Central Province',
    description: 'Ancient rock fortress with frescoes and stunning views.',
    image: '/images/sigiriya3.jpeg',
  },
  {
    id: 2,
    name: 'Ella Gap',
    location: 'Ella, Uva Province',
    description: 'Breathtaking valley views from the hill town of Ella.',
    image: '/images/ella1.jpg',
  },
  {
    id: 3,
    name: 'Galle Fort',
    location: 'Galle, Southern Province',
    description: 'Historical Dutch fort with cobbled streets and cafes.',
    image: '/images/galle5.jpg',
  },
  {
    id: 4,
    name: 'Yala National Park',
    location: 'Yala, Southern Province',
    description: 'Famous wildlife park for safari and leopard spotting.',
    image: '/images/yala6.jpg',
  },
];

const images = [
  '/images/ella1.jpg',
  '/images/sigiriya1.jpg',
  '/images/yala1.jpg',
  '/images/ella2.jpg',
  '/images/galle5.jpg',
  '/images/yala2.jpg',
  '/images/sigiriya2.jpg',
  '/images/yala3.jpg',
  '/images/galle4.jpg',
  '/images/yala4.jpg',
  '/images/yala6.jpg',
  '/images/sigiriya3.jpeg',
  '/images/galle3.jpg',
  '/images/yala7.jpg',
  '/images/adventure.PNG',
  '/images/ambuluwawa.PNG',
  '/images/anuradhapura.PNG',
  '/images/benthota.PNG',
  '/images/boat.PNG',
  '/images/camping.PNG',
  '/images/colombo.PNG',
  '/images/culture.PNG',
  '/images/dambulla.PNG',
  '/images/hill.PNG',
  '/images/kandy1.PNG',
  '/images/pasikuda.PNG',
  '/images/polannaruwa.PNG',
  '/images/rafting.PNG',
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(null); 
  const [prevImage, setPrevImage] = useState(images.length - 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); 

      setTimeout(() => {
        setPrevImage(currentImage);
        setCurrentImage((prev) => (prev + 1) % images.length);
        setFade(true); 
      }, 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentImage]);

  const styles = {
    hero: {
      position: 'relative',
      width: '100%',
      height: '80vh',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      color: 'white',
      textShadow: '2px 2px 5px rgba(0,0,0,0.7)',
    },
    imageStyle: (visible, z) => ({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '80vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      transition: 'opacity 1s ease-in-out',
      opacity: visible ? 1 : 0,
      zIndex: z,
    }),
    headline: {
      position: 'relative',
      fontSize: '3rem',
      fontWeight: '700',
      zIndex: 10,
      margin: 0,
      userSelect: 'none',
    },
    subheadline: {
      position: 'relative',
      fontSize: '1.25rem',
      marginTop: '1rem',
      zIndex: 10,
      userSelect: 'none',
    },
    container: {
      maxWidth: '1200px',
      margin: '2rem auto',
      padding: '0 1rem',
      backgroundColor: '#f0f8ff',
    },
    sectionTitle: {
      fontSize: '2.2rem',
      fontWeight: '600',
      color: '#166534',
      textAlign: 'center',
      marginBottom: '0.5rem',
    },
    description: {
      color: '#4b5563',
      textAlign: 'center',
      fontSize: '1rem',
      maxWidth: '700px',
      margin: '0 auto 2rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '1.5rem',
    },
    card: {
      border: '1px solid #ddd',
      borderRadius: '10px',
      overflow: 'hidden',
      backgroundColor: '#fff',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease',
      cursor: 'pointer',
    },
    cardImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
    },
    cardBody: {
      padding: '1rem',
    },
    cardTitle: {
      fontSize: '1.2rem',
      fontWeight: '600',
      marginBottom: '0.25rem',
      color: '#166534',
    },
    cardLocation: {
      fontSize: '0.9rem',
      color: '#6b7280',
      fontStyle: 'italic',
    },
    cardDesc: {
      fontSize: '0.95rem',
      color: '#374151',
      marginTop: '0.5rem',
    },
  };

  return (
    <section style={{ padding: '40px 20px', background: '#f0f8ff' }}>
      <div style={styles.hero}>
        <div
          style={{
            ...styles.imageStyle(true, 0),
            backgroundImage: `url(${images[currentImage]})`,
          }}
        />

        {fade !== null && (
          <div
            style={{
              ...styles.imageStyle(!fade, 1),
              backgroundImage: `url(${images[prevImage]})`,
            }}
          />
        )}
 
        {fade !== null && (
          <div
            style={{
              ...styles.imageStyle(fade, 2),
              backgroundImage: `url(${images[currentImage]})`,
            }}
          />
        )}

        <h1 style={styles.headline}>Explore Sri Lanka</h1>
        <p style={styles.subheadline}>Unforgettable journeys to paradise await you</p>
      </div>

      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Popular Destinations</h2>
        <p style={styles.description}>
          Discover the magic of Sri Lanka’s diverse landscapes, heritage sites, and exotic wildlife with our curated tour packages.
        </p>

        <div style={styles.grid}>
          {destinations.map((dest) => (
            <div
              key={dest.id}
              style={styles.card}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <img src={dest.image} alt={dest.name} style={styles.cardImage} />
              <div style={styles.cardBody}>
                <h3 style={styles.cardTitle}>{dest.name}</h3>
                <p style={styles.cardLocation}>{dest.location}</p>
                <p style={styles.cardDesc}>{dest.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
