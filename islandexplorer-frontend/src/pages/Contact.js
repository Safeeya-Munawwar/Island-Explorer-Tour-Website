import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_grc9ki8",   
      "template_dn06wpj",
      e.target,
      'V6ZMioOe9GnndO1Y-'   
    ).then(
      (result) => {
        console.log('Success:', result.text);
        setFormSubmitted(true);
        setTimeout(() => {
          setFormSubmitted(false);
          e.target.reset();
        }, 3000);
      },
      (error) => {
        console.error('Error:', error.text);
        alert('❌ Message failed to send. Please try again.');
      }
    );
  };

  return (
    <section style={{ padding: '40px 20px', background: '#f0f8ff' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '32px', color: '#006400', textAlign: 'center', marginBottom: '30px' }}>
          Contact Us
        </h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'space-between' }}>
          {/* Contact Info */}
          <div style={{ flex: '1 1 300px', backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', border: '1px solid #228B22' }}>
            <h3 style={{ color: '#228B22', marginBottom: '16px' }}>Get in Touch</h3>
            <p style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#555', marginBottom: '12px' }}>
              <FaPhone color="#006400" /> +94 75 123 4567
            </p>
            <p style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#555', marginBottom: '12px' }}>
              <FaEnvelope color="#006400" /> info@explorelanka.com
            </p>
            <p style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#555' }}>
              <FaMapMarkerAlt color="#006400" /> No. 45, Colombo Road, Kandy, Sri Lanka
            </p>
          </div>

          {/* Contact Form */}
          <div style={{ flex: '1 1 500px', backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', border: '1px solid #228B22' }}>
            <h3 style={{ color: '#228B22', marginBottom: '16px' }}>Send a Message</h3>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <input
                type="text"
                name="fullName"
                placeholder="Your Full Name"
                required
                style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', outlineColor: '#228B22' }}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', outlineColor: '#228B22' }}
              />
              <textarea
                rows="4"
                name="message"
                placeholder="Your Message"
                required
                style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', resize: 'vertical', outlineColor: '#228B22' }}
              ></textarea>

              <button
                type="submit"
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#228B22',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  transition: 'background 0.3s',
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = '#006400')}
                onMouseOut={(e) => (e.target.style.backgroundColor = '#228B22')}
              >
                Send Message
              </button>

              {formSubmitted && (
                <div style={{ marginTop: '10px', color: '#228B22', fontWeight: 'bold' }}>
                  ✅ Message sent successfully!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
