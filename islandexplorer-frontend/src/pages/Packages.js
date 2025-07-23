import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import emailjs from '@emailjs/browser';

const packages = [
    {
      id: 1,
      title: "Promotional Tour Revitalizing Soul Adventure in Sri Lanka - 04 days",
      image: "/images/adventure.PNG",
      priceUSD: 250,
      priceLKR: 90000,
      itinerary: [
        "Day-01: Negombo",
        "Day-02: Kandy",
        "Day-03: Bentota",
        "Day-04: Departure",
      ],
    },
    {
      id: 2,
      title: "Essence of Sri Lanka Cultural Special Journey - 06 days",
      image: "/images/culture.PNG",
      priceUSD: 400,
      priceLKR: 144000,
      itinerary: [
        "Day-01: Colombo - Arrival and city tour",
        "Day-02: Sigiriya - Visit the Lion Rock",
        "Day-03: Kandy - Temple of the Tooth",
        "Day-04: Nuwara Eliya - Tea plantations",
        "Day-05: Bentota - Beach relaxation",
        "Day-06: Colombo - Departure",
      ],
    },
    {
      id: 3,
      title: "Ceylon Hill Country Tour Special - 07 days",
      image: "/images/hill.PNG",
      priceUSD: 550,
      priceLKR: 198000,
      itinerary: [
        "Day-01: Colombo to Kandy",
        "Day-02: Kandy Sightseeing",
        "Day-03: Nuwara Eliya",
        "Day-04: Ella",
        "Day-05: Horton Plains",
        "Day-06: Bentota Beach",
        "Day-07: Departure",
      ],
    },
    {
      id: 4,
      title: "Experience a Luxury Tour in Sri Lanka - 08 days",
      image: "/images/luxuary.PNG",
      priceUSD: 750,
      priceLKR: 270000,
      itinerary: [
        "Day-01: Arrival & Colombo city tour",
        "Day-02: Sigiriya and Dambulla caves",
        "Day-03: Kandy cultural show",
        "Day-04: Nuwara Eliya luxury stay",
        "Day-05: Ella hiking tour",
        "Day-06: Yala National Park safari",
        "Day-07: Bentota luxury resort",
        "Day-08: Departure",
      ],
    },
    {
      id: 5,
      title: "A Beautiful Country To Visit On A Family Holiday - 10 days",
      image: "/images/family.PNG",
      priceUSD: 950,
      priceLKR: 342000,
      itinerary: [
        "Day-01: Colombo arrival",
        "Day-02: Pinnawala Elephant Orphanage",
        "Day-03: Sigiriya Rock Fortress",
        "Day-04: Dambulla Cave Temple",
        "Day-05: Kandy cultural events",
        "Day-06: Nuwara Eliya nature tour",
        "Day-07: Ella mountain hike",
        "Day-08: Yala Safari",
        "Day-09: Bentota beach day",
        "Day-10: Departure",
      ],
    },
    {
      id: 6,
      title: "Rural Village Culture Tour in Sri Lanka - 14 Days",
      image: "/images/rural.PNG",
      priceUSD: 1200,
      priceLKR: 432000,
      itinerary: [
        "Day-01: Colombo arrival",
        "Day-02: Visit rural villages",
        "Day-03: Local markets and crafts",
        "Day-04: Kandy cultural experience",
        "Day-05: Tea plantation visit",
        "Day-06: Horton Plains trek",
        "Day-07: Ella & local cuisine",
        "Day-08: Safari at Yala",
        "Day-09: Bentota beach relaxation",
        "Day-10: Rural homestay",
        "Day-11: Village ceremonies",
        "Day-12: Train ride through hills",
        "Day-13: Leisure day",
        "Day-14: Departure",
      ],
    },
  ];
  
export default function TourPackages() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [bookingFormOpen, setBookingFormOpen] = useState(false);
  const [bookingData, setBookingData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    numberOfMembers: 1,
    numberOfDays: "",
    arrivingDate: "",
  });

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 const handleBookingSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      firstName: bookingData.firstName,
      lastName: bookingData.lastName,
      email: bookingData.email,
      contactNumber: bookingData.contactNumber,
      numberOfMembers: bookingData.numberOfMembers,
      numberOfDays: bookingData.numberOfDays,
      arrivingDate: bookingData.arrivingDate,
      packageTitle: selectedPackage.title,
      packagePriceUSD: selectedPackage.priceUSD,
      packagePriceLKR: selectedPackage.priceLKR,
      totalUSD: (
        (selectedPackage.priceUSD / selectedPackage.itinerary.length) *
        (bookingData.numberOfDays || 0) *
        bookingData.numberOfMembers
      ).toFixed(2),
      totalLKR: (
        (selectedPackage.priceLKR / selectedPackage.itinerary.length) *
        (bookingData.numberOfDays || 0) *
        bookingData.numberOfMembers
      ).toLocaleString(),
    };

    try {
      await emailjs.send(
        "service_4738ygi",    
        "template_1t1ssv1",    
        templateParams,
        "V6ZMioOe9GnndO1Y-"    
      );

      alert(`Thank you for booking the "${selectedPackage.title}" package! We'll contact you soon.`);

      setBookingData({
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
        numberOfMembers: 1,
        numberOfDays: "",
        arrivingDate: "",
      });
      setBookingFormOpen(false);
      setSelectedPackage(null);
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Failed to send your booking. Please try again later.");
    }
  };

  return (
    <div style={{ padding: '40px 20px', background: '#f0f8ff'  }}>
      <h1 style={{ fontSize: "36px",
          fontWeight: "700",
          textAlign: "center",
          marginBottom: "40px",
          letterSpacing: "1.2px",
          color: "#006400", }}>Sri Lanka Tour Packages</h1>

      {!selectedPackage && (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {packages.map((pkg) => (
            <li
              key={pkg.id}
              style={{
                backgroundColor: "white",
                marginBottom: 18,
                padding: 20,
                borderRadius: 10,
                boxShadow: "0 3px 8px rgba(0, 128, 0, 0.1)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  style={{ width: 100, height: 60, objectFit: "cover", borderRadius: 6, boxShadow: "0 0 6px rgba(0,0,0,0.15)" }}
                />
                <span style={{ fontWeight: 600, fontSize: "1.1rem", color: "#225522" }}>{pkg.title}</span>
              </div>
              <button
                onClick={() => setSelectedPackage(pkg)}
                style={{
                  backgroundColor: "#2e7d32",
                  color: "white",
                  border: "none",
                  padding: "10px 16px",
                  borderRadius: 6,
                  cursor: "pointer",
                  fontWeight: 600,
                }}
                aria-label={`View details for ${pkg.title}`}
              >
                View Package
              </button>
            </li>
          ))}
        </ul>
      )}

      {selectedPackage && !bookingFormOpen && (
        <div
          style={{
            backgroundColor: "#f7fff7",
            borderRadius: 10,
            padding: 25,
            boxShadow: "0 4px 15px rgba(0,128,0,0.15)",
          }}
        >
          <img
            src={selectedPackage.image}
            alt={selectedPackage.title}
            style={{ width: "100%", maxHeight: 300, objectFit: "cover", borderRadius: 10, marginBottom: 20 }}
          />

          <h2 style={{ color: "#0b3d0b", marginBottom: 10 }}>{selectedPackage.title}</h2>

          <p style={{ fontWeight: "700", color: "#004d00", marginBottom: 20, fontSize: "1.1rem" }}>
            Price: ${selectedPackage.priceUSD} / Rs. {selectedPackage.priceLKR.toLocaleString()}
          </p>

          <h3 style={{ color: "#2f6b2f", marginBottom: 12 }}>Tour Itineraries</h3>
          <ul style={{ lineHeight: 1.6, marginBottom: 25 }}>
            {selectedPackage.itinerary.map((day, i) => {
              const splitIndex = day.indexOf(" ") + 1;
              const dayLabel = day.substring(0, splitIndex).trim();
              const description = day.substring(splitIndex).trim();
              return (
                <li key={i} style={{ marginBottom: 8 }}>
                  <span style={{ fontWeight: "700", color: "#000000", marginRight: 6 }}>{dayLabel}</span>
                  <span>{description}</span>
                </li>
              );
            })}
          </ul>

          <button
            onClick={() => setBookingFormOpen(true)}
            style={{
              backgroundColor: "#2e7d32",
              color: "white",
              border: "none",
              padding: "12px 20px",
              borderRadius: 8,
              cursor: "pointer",
              fontWeight: 700,
              fontSize: "1rem",
              boxShadow: "0 5px 15px rgba(46,125,50,0.4)",
            }}
          >
            Book Now
          </button>

          <button
            onClick={() => setSelectedPackage(null)}
            style={{
              marginLeft: 15,
              backgroundColor: "#a5d6a7",
              border: "none",
              padding: "12px 20px",
              borderRadius: 8,
              cursor: "pointer",
              fontWeight: 600,
              fontSize: "1rem",
            }}
          >
            Back to Packages
          </button>
        </div>
      )}

      {bookingFormOpen && (
        <form
          onSubmit={handleBookingSubmit}
          style={{
            backgroundColor: "#f0fff0",
            borderRadius: 10,
            padding: "30px 25px",
            boxShadow: "0 6px 20px rgba(0, 128, 0, 0.15)",
            maxWidth: 600,
            margin: "40px auto",
          }}
        >
          <h2 style={{ color: "#0b3d0b", marginBottom: 20 }}>
            Place Your Booking Now: <br />
            <em style={{ fontWeight: 600 }}>{selectedPackage.title}</em>
          </h2>

          <div style={{ display: "flex", gap: 20, marginBottom: 15 }}>
            <label
              style={{ flex: 1, display: "flex", flexDirection: "column", fontWeight: 600, color: "#0f3d0f" }}
            >
              First Name *
              <input
                type="text"
                name="firstName"
                value={bookingData.firstName}
                onChange={handleBookingChange}
                required
                style={inputStyle}
                placeholder="First"
              />
            </label>
            <label
              style={{ flex: 1, display: "flex", flexDirection: "column", fontWeight: 600, color: "#0f3d0f" }}
            >
              Last Name *
              <input
                type="text"
                name="lastName"
                value={bookingData.lastName}
                onChange={handleBookingChange}
                required
                style={inputStyle}
                placeholder="Last"
              />
            </label>
          </div>

          <label
            style={{ display: "flex", flexDirection: "column", fontWeight: 600, color: "#0f3d0f", marginBottom: 15 }}
          >
            Email *
            <input
              type="email"
              name="email"
              value={bookingData.email}
              onChange={handleBookingChange}
              required
              style={inputStyle}
              placeholder="you@example.com"
            />
          </label>

          <label
  style={{ display: "flex", flexDirection: "column", fontWeight: 600, color: "#0f3d0f", marginBottom: 15 }}
>
  Contact Number *
  <PhoneInput
    country={'lk'}
    value={bookingData.contactNumber}
    onChange={(value) =>
      setBookingData((prev) => ({ ...prev, contactNumber: value }))
    }
    inputStyle={{
      ...inputStyle,
      paddingLeft: 48,
      width: "100%",
    }}
    containerStyle={{ width: "100%" }}
    enableSearch
    required
  />
</label>

<label
            style={{ display: "flex", flexDirection: "column", fontWeight: 600, color: "#0f3d0f", marginBottom: 25 }}
          >
            Arriving Date *
            <input
              type="date"
              name="arrivingDate"
              value={bookingData.arrivingDate}
              onChange={handleBookingChange}
              required
              style={inputStyle}
            />
          </label>



          <div style={{ display: "flex", gap: 20, marginBottom: 15 }}>
            <label
              style={{ flex: 1, display: "flex", flexDirection: "column", fontWeight: 600, color: "#0f3d0f" }}
            >
              Number of Members *
              <input
                type="number"
                min="1"
                name="numberOfMembers"
                value={bookingData.numberOfMembers}
                onChange={handleBookingChange}
                required
                style={inputStyle}
              />
            </label>
            <label
              style={{ flex: 1, display: "flex", flexDirection: "column", fontWeight: 600, color: "#0f3d0f" }}
            >
              Number of Days *
              <input
                type="number"
                min="1"
                max="30"
                name="numberOfDays"
                value={bookingData.numberOfDays}
                onChange={handleBookingChange}
                required
                style={inputStyle}
                placeholder={selectedPackage.title.match(/\d+/)?.[0] || ""}
              />
            </label>
          </div>
         
          <div style={{ marginBottom: 20 }}>
  <label style={{ fontWeight: 600, color: "#0f3d0f" }}>
    Total Amount (USD):
  </label>
  <input
    type="text"
    readOnly
    value={`$${(
      (selectedPackage.priceUSD /
        selectedPackage.itinerary.length) *
      (bookingData.numberOfDays || 0) *
      bookingData.numberOfMembers
    ).toFixed(2)}`}
    style={{
      width: "100%",
      marginTop: 5,
      padding: "8px 10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      backgroundColor: "#f0f0f0",
      fontWeight: "bold",
      fontSize: "1.1rem",
      color: "#004d00",
    }}
  />
</div>

<div style={{ marginBottom: 20 }}>
  <label style={{ fontWeight: 600, color: "#0f3d0f" }}>
    Total Amount (LKR):
  </label>
  <input
    type="text"
    readOnly
    value={`Rs. ${(
      (selectedPackage.priceLKR /
        selectedPackage.itinerary.length) *
      (bookingData.numberOfDays || 0) *
      bookingData.numberOfMembers
    ).toLocaleString()}`}
    style={{
      width: "100%",
      marginTop: 5,
      padding: "8px 10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      backgroundColor: "#f0f0f0",
      fontWeight: "bold",
      fontSize: "1.1rem",
      color: "#004d00",
    }}
  />
</div>


          
          <button
            type="submit"
            style={{
              ...submitBtnStyle,
              width: "100%",
              fontSize: "1.2rem",
              fontWeight: 700,
              padding: "14px 0",
              cursor: "pointer",
            }}
          >
            Submit
          </button>

          <button
            type="button"
            onClick={() => setBookingFormOpen(false)}
            style={{
              marginTop: 15,
              backgroundColor: "#a5d6a7",
              border: "none",
              padding: "12px 0",
              borderRadius: 8,
              cursor: "pointer",
              fontWeight: 600,
              fontSize: "1rem",
              width: "100%",
            }}
          >
            Back to Package Details
          </button>
        </form>
      )}
    </div>
  );
}

const inputStyle = {
  padding: "10px 12px",
  fontSize: "1rem",
  borderRadius: 8,
  border: "1.8px solid #a5d6a7",
  outline: "none",
  fontWeight: 500,
  color: "#264d26",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  boxSizing: "border-box",
};

const submitBtnStyle = {
  backgroundColor: "#2e7d32",
  color: "white",
  border: "none",
  borderRadius: 10,
  letterSpacing: "1.1px",
  boxShadow: "0 6px 15px rgba(46,125,50,0.4)",
  transition: "background-color 0.3s, box-shadow 0.3s",
};
