import React from 'react';

export default function Services() {
  return (
    <section style={{ padding: '40px 20px', background: '#f0f8ff' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '32px', color: '#006400', textAlign: 'center', marginBottom: '30px' }}>
          Tourist Support <br />
          <span style={{ fontSize: '20px', color: '#333' }}>
            You can get any kind of these services for free
          </span>
        </h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'space-between' }}>

          <div style={{
            flex: '1 1 300px',
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            border: '1px solid #228B22'
          }}>
            <h3 style={{ color: '#228B22', marginBottom: '16px' }}>📞 Quick Access Numbers</h3>
            <ul style={{ color: '#555', lineHeight: '1.8' }}>
              <li>Police Emergency: 119</li>
              <li>Ambulance / Fire: 110</li>
              <li>Tourist Police: 1912</li>
              <li> Colombo Central Hospital: +94 11 269 111</li>
              <li> Highway Help Line: 1969</li>
              <li>Suwaseriya Ambulance: 1990</li>
            </ul>
          </div>

          <div style={{
            flex: '1 1 300px',
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            border: '1px solid #228B22'
          }}>
            <h3 style={{ color: '#228B22', marginBottom: '16px' }}>🌐 Online Services</h3>
            <ul style={{ color: '#555', lineHeight: '1.8' }}>
              <li>
                 Online Visa Service:{" "}
                <a href="https://www.eta.gov.lk/slvisa/" target="_blank" rel="noopener noreferrer" style={{ color: '#006400', textDecoration: 'underline' }}>
                  Click Here
                </a>
              </li>
              <li>
                 Train Online Booking:{" "}
                <a href="https://seatreservation.railway.gov.lk" target="_blank" rel="noopener noreferrer" style={{ color: '#006400', textDecoration: 'underline' }}>
                  Click Here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
