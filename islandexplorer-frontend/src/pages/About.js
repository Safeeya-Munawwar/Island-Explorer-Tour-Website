import React from 'react';

export default function About() {
  const styles = {
    container: {
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '2rem 1rem',
      fontFamily: 'Arial, sans-serif',
      color: '#f0f8ff',
      lineHeight: 1.6,
    },
    heading: {
      textAlign: 'center',
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#2d3748',
      marginBottom: '2rem',
    },
    stats: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      gap: '1rem',
      marginBottom: '3rem',
    },
    statCard: {
        background: '#d4f5d4', 
        borderRadius: '12px',
        padding: '1.5rem',
        flex: '1 1 180px',
        textAlign: 'center',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
      },
      statNumber: {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#2f6f2f', 
      },
      statLabel: {
        fontSize: '1rem',
        color: '#4a5568',   
        marginTop: '0.5rem',
      },
    sectionTitle: {
      fontSize: '1.75rem',
      fontWeight: 'bold',
      color: '#2d3748',
      marginTop: '2rem',
      marginBottom: '1rem',
    },
    paragraph: {
      fontSize: '1rem',
      color: '#4a5568',
      marginBottom: '1.5rem',
    },
  };

  return (
    <section style={{ padding: '10px 20px', background: '#f0f8ff' }}>
    <div style={styles.container}>
      <h2 style={{ fontSize: "36px",
          fontWeight: "700",
          textAlign: "center",
          marginBottom: "40px",
          letterSpacing: "1.2px",
          color: "#006400", }}>
        Island Explorer
        </h2>

      <div style={styles.stats}>
        <div style={styles.statCard}>
          <div style={styles.statNumber}>800+</div>
          <div style={styles.statLabel}>Happy Customers</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statNumber}>2+</div>
          <div style={styles.statLabel}>Years Experience</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statNumber}>60+</div>
          <div style={styles.statLabel}>Tours</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statNumber}>100+</div>
          <div style={styles.statLabel}>Destinations</div>
        </div>
      </div>

      <h2 style={styles.sectionTitle}>Our Promise to You</h2>
      <p style={styles.paragraph}>
      Your trusted partner in transportation for foreigners — from cars, vans, or buses,
  we offer a fleet that ensures comfortable and reliable passenger transportation.
  Our services guarantee swift response times, reaching you within minutes from
  any location in Sri Lanka. Choose Islan Explorer Tours for a travel experience that
  combines efficiency, comfort, safety, and the richness of Sri Lanka’s landscapes.
      </p>

      <h2 style={styles.sectionTitle}>Our History</h2>
      <p style={styles.paragraph}>
      Island Explorer Tours started with a passion to showcase the stunning beauty and culture
  of Sri Lanka to travelers worldwide. Inspired by the island’s rich heritage and
  diverse landscapes, we began our journey to provide memorable and authentic tour
  experiences. Over the years, we have grown to become one of the most trusted names
  in tourism, always putting our customers first.
             </p>

      <h2 style={styles.sectionTitle}>Our Mission & Vision</h2>
      <p style={styles.paragraph}>
      Our mission is to deliver exceptional travel experiences that connect visitors with
  the heart of Sri Lanka’s culture, nature, and hospitality. We aim to be a leading
  tour company that travelers trust for safe, comfortable, and enriching journeys.
  Our vision is to continuously grow and innovate while preserving the natural and
  cultural heritage of our beautiful country.
        </p>

      <h2 style={styles.sectionTitle}>Why Travel with Us</h2>
      <p style={styles.paragraph}>
      What makes Island Explorer Tours unique is our commitment to personalized service,
  deep local knowledge, and flexible itineraries tailored to your interests.
  We combine professionalism with warmth to make your trip comfortable and
  unforgettable. Whether you seek adventure, culture, or relaxation, we have
  the expertise and passion to guide you every step of the way.
      </p>
    </div>
    </section>
  );

}

