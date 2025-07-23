import { Link } from 'react-router-dom';

export default function Header() {
  const styles = {
    header: {
      backgroundColor: '#15803d',
      color: 'white',
      padding: '1rem 0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      textDecoration: 'none',
      color: 'white',
    },
    nav: {
      display: 'flex',
      gap: '1.5rem',
    },
    navLink: {
      textDecoration: 'none',
      color: 'white',
      transition: 'text-decoration 0.2s ease',
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <Link to="/" style={styles.logo}>Island Explorer</Link>
        <nav style={styles.nav}>
          <Link to="/" style={styles.navLink} onMouseOver={e => e.target.style.textDecoration = 'underline'} onMouseOut={e => e.target.style.textDecoration = 'none'}>Home</Link>
          <Link to="/tours" style={styles.navLink} onMouseOver={e => e.target.style.textDecoration = 'underline'} onMouseOut={e => e.target.style.textDecoration = 'none'}>Tours</Link>
          <Link to="/activities" style={styles.navLink} onMouseOver={e => e.target.style.textDecoration = 'underline'} onMouseOut={e => e.target.style.textDecoration = 'none'}>Activities</Link>
          <Link to="/destinations" style={styles.navLink} onMouseOver={e => e.target.style.textDecoration = 'underline'} onMouseOut={e => e.target.style.textDecoration = 'none'}>Destinations</Link>
          <Link to="/packages" style={styles.navLink} onMouseOver={e => e.target.style.textDecoration = 'underline'} onMouseOut={e => e.target.style.textDecoration = 'none'}>Packages</Link>
          <Link to="/services" style={styles.navLink} onMouseOver={e => e.target.style.textDecoration = 'underline'} onMouseOut={e => e.target.style.textDecoration = 'none'}>Services</Link>
          <Link to="/about" style={styles.navLink} onMouseOver={e => e.target.style.textDecoration = 'underline'} onMouseOut={e => e.target.style.textDecoration = 'none'}>About</Link>
          <Link to="/contact" style={styles.navLink} onMouseOver={e => e.target.style.textDecoration = 'underline'} onMouseOut={e => e.target.style.textDecoration = 'none'}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
