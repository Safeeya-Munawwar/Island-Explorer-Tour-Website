import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#15803d',
        color: 'white',
        padding: '1.5rem 0',
        textAlign: 'center',
        marginTop: '3rem',
      }}
    >
      <p>&copy; {new Date().getFullYear()} Island Explorer. All rights reserved.</p>

      <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
        >
          <FaFacebookF />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/94700000000"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
        >
          <FaYoutube />
        </a>
      </div>
    </footer>
  );
}

const iconStyle = {
  color: 'white',
  fontSize: '1.5rem',
  transition: 'transform 0.2s ease, color 0.2s ease',
  textDecoration: 'none',
  display: 'inline-block',
};

