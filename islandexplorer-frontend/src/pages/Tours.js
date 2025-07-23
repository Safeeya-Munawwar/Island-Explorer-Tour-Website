import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import emailjs from '@emailjs/browser';

const destinations = [
    {
      id: 1,
      name: "Tangalle",
      image: "/images/tangalle.PNG",
      description: "Relax on pristine beaches and explore nearby lagoons.",
      priceUSD: 200,
      priceLKR: 72000,
      itineraryLength: 4,
    },
    {
      id: 2,
      name: "Galle",
      image: "/images/galle.PNG",
      description: "Visit the historic Galle Fort and vibrant markets.",
      priceUSD: 180,
      priceLKR: 65000,
      itineraryLength: 3,
    },
    {
      id: 3,
      name: "Colombo",
      image: "/images/colombo.PNG",
      description: "Enjoy urban attractions, shopping, and nightlife.",
      priceUSD: 150,
      priceLKR: 54000,
      itineraryLength: 2,
    },
    {
      id: 4,
      name: "Kandy",
      image: "/images/kandy1.PNG",
      description: "Explore the Temple of the Tooth and scenic lakes.",
      priceUSD: 160,
      priceLKR: 58000,
      itineraryLength: 2,
    },
    {
      id: 5,
      name: "Nuwara Eliya",
      image: "/images/nuwaraeliya1.PNG",
      description: "Discover tea plantations and cool mountain air.",
      priceUSD: 170,
      priceLKR: 60000,
      itineraryLength: 3,
    },
    {
      id: 6,
      name: "Ella",
      image: "/images/ella.PNG",
      description: "Hike trails with breathtaking views and waterfalls.",
      priceUSD: 190,
      priceLKR: 68000,
      itineraryLength: 3,
    },
    {
      id: 7,
      name: "Anuradhapura",
      image: "/images/anuradhapura.PNG",
      description: "Explore ancient ruins and sacred Buddhist sites.",
      priceUSD: 200,
      priceLKR: 72000,
      itineraryLength: 4,
    },
    {
      id: 8,
      name: "Polonnaruwa",
      image: "/images/polannaruwa.PNG",
      description: "Discover medieval city ruins and historic temples.",
      priceUSD: 190,
      priceLKR: 70000,
      itineraryLength: 3,
    },
    {
      id: 9,
      name: "Trincomalee",
      image: "/images/trincomalee.PNG",
      description: "Enjoy serene beaches and whale watching tours.",
      priceUSD: 210,
      priceLKR: 75000,
      itineraryLength: 4,
    },
  ];

  const allDistricts = [
    "Ampara",
    "Anuradhapura",
    "Badulla",
    "Batticaloa",
    "Colombo",
    "Galle",
    "Gampaha",
    "Hambantota",
    "Jaffna",
    "Kalutara",
    "Kandy",
    "Kegalle",
    "Kilinochchi",
    "Kurunegala",
    "Mannar",
    "Matale",
    "Matara",
    "Monaragala",
    "Mulaitivu",
    "Nuwara Eliya",
    "Polonnaruwa",
    "Puttalam",
    "Ratnapura",
    "Trincomalee",
    "Vavuniya",
  ];  
  

  export default function Tours() {
    const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      phone: "",
      destinations: "",
      startDate: "",
      endDate: "",
      adults: 1,
      children: 0,
      message: "",
    });
  
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [numberOfDays, setNumberOfDays] = useState(0);
  
    useEffect(() => {
      const pkg = destinations.find((d) => d.name === formData.destinations);
      setSelectedPackage(pkg || null);
  
      if (formData.startDate && formData.endDate) {
        const start = new Date(formData.startDate);
        const end = new Date(formData.endDate);
        const diffTime = end - start;
        const diffDays = diffTime >= 0 ? diffTime / (1000 * 60 * 60 * 24) + 1 : 0;
        setNumberOfDays(diffDays);
      } else {
        setNumberOfDays(0);
      }
    }, [formData.destinations, formData.startDate, formData.endDate]);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]:
          ["adults", "children"].includes(name)
            ? Math.max(0, Number(value))
            : value,
      }));
    };
  
    const handlePhoneChange = (value) => {
      setFormData((prev) => ({
        ...prev,
        phone: value,
      }));
    };

    const totalMembers = Number(formData.adults) + Number(formData.children);
  
    const totalLKR =
      selectedPackage && numberOfDays > 0 && totalMembers > 0
        ? (selectedPackage.priceLKR / selectedPackage.itineraryLength) *
          numberOfDays *
          totalMembers
        : 0;
  
    const totalUSD =
      selectedPackage && numberOfDays > 0 && totalMembers > 0
        ? (selectedPackage.priceUSD / selectedPackage.itineraryLength) *
          numberOfDays *
          totalMembers
        : 0;
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const templateParams = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        destinations: formData.destinations,
        startDate: formData.startDate,
        endDate: formData.endDate,
        adults: formData.adults,
        children: formData.children,
        message: formData.message,
        totalLKR: totalLKR.toFixed(2),
        totalUSD: totalUSD.toFixed(2),
      };
  
      try {
        await emailjs.send(
          "service_grc9ki8",  
          "template_dn06wpj",  
          templateParams,
          "V6ZMioOe9GnndO1Y-"   
        );
        alert("Tour inquiry submitted! We'll get back to you soon.");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          destinations: "",
          startDate: "",
          endDate: "",
          adults: 1,
          children: 0,
          message: "",
        });
      } catch (error) {
        console.error("EmailJS error:", error);
        alert("Failed to send your inquiry. Please try again later.");
      }
    };
  
    return (
      <section
        style={{
          padding: "50px 20px",
          backgroundColor: "#f0f8ff",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          color: "#1a202c",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "40px",
            letterSpacing: "1.2px",
            color: "#006400",
          }}
        >
          Popular Destinations
        </h1>
  
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            padding: 0,
            marginBottom: "60px",
            listStyle: "none",
            justifyContent: "center",
          }}
        >
          {destinations.map((place) => (
            <li
              key={place.id}
              style={{
                flex: "1 1 300px",
                backgroundColor: "white",
                borderRadius: "8px",
                padding: "20px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                overflow: "hidden",
                transition: "transform 0.3s",
                cursor: "pointer",
                border: "1px solid #228B22",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img
                src={place.image}
                alt={place.name}
                style={{ width: "100%", height: "170px", objectFit: "cover" }}
                loading="lazy"
              />
              <div style={{ padding: "16px 18px", flexGrow: 1 }}>
                <h3
                  style={{
                    color: "#225522",
                    fontSize: "1.3rem",
                    fontWeight: "700",
                    marginBottom: "10px",
                  }}
                >
                  {place.name}
                </h3>
                <p
                  style={{
                    color: "#4a6b4a",
                    fontSize: "1rem",
                    lineHeight: "1.4",
                    letterSpacing: "0.3px",
                  }}
                >
                  {place.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
  
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "600",
            textAlign: "center",
            marginBottom: "25px",
            color: "#004d40",
            letterSpacing: "1px",
          }}
        >
          Customize Your Dream Tours
        </h2>
  
        <form
          onSubmit={handleSubmit}
          style={{
            backgroundColor: "#ffffff",
            padding: "35px 30px",
            borderRadius: "16px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            {[
              {
                label: "Full Name *",
                type: "text",
                name: "fullName",
                placeholder: "Your full name",
                required: true,
              },
              {
                label: "Email *",
                type: "email",
                name: "email",
                placeholder: "you@example.com",
                required: true,
              },
            ].map(({ label, type, name, placeholder, required }) => (
              <label
                key={name}
                style={{
                  fontWeight: "600",
                  fontSize: "1rem",
                  letterSpacing: "0.7px",
                  color: "#0f3d0f",
                }}
              >
                {label}
                <input
                  type={type}
                  name={name}
                  required={required}
                  value={formData[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  style={inputStyle}
                />
              </label>
            ))}
  
            <label
              style={{
                fontWeight: "600",
                fontSize: "1rem",
                letterSpacing: "0.7px",
                color: "#0f3d0f",
                display: "block",
              }}
            >
              Phone Number *
              <PhoneInput
                country={"lk"}
                value={formData.phone}
                onChange={handlePhoneChange}
                inputStyle={{
                  width: "100%",
                  height: "40px",
                  fontSize: "1rem",
                  borderRadius: "8px",
                  border: "1.8px solid #a5d6a7",
                  paddingLeft: "48px",
                  fontWeight: "500",
                  color: "#264d26",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                }}
                buttonStyle={{
                  borderRadius: "8px 0 0 8px",
                  border: "1.8px solid #a5d6a7",
                  borderRight: "none",
                }}
                inputProps={{
                  name: "phone",
                  required: true,
                  autoFocus: false,
                }}
                dropdownStyle={{
                  borderRadius: "8px",
                }}
                placeholder="Enter phone number"
              />
            </label>
  
            <label
              style={{
                fontWeight: "600",
                fontSize: "1rem",
                letterSpacing: "0.7px",
                color: "#0f3d0f",
              }}
            >
              Desired Destination *
              <select
  name="destinations"
  value={formData.destinations}
  onChange={handleChange}
  style={{ ...inputStyle, cursor: "pointer" }}
  required
>
  <option value="">Select destination</option>
  {allDistricts.map((district, index) => (
    <option key={index} value={district}>
      {district}
    </option>
  ))}
</select>

            </label>
  
            <div style={{ display: "flex", gap: "20px" }}>
              <label
                style={{
                  flex: 1,
                  fontWeight: "600",
                  fontSize: "1rem",
                  letterSpacing: "0.7px",
                  color: "#0f3d0f",
                }}
              >
                Preferred Start Date *
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                />
              </label>
              <label
                style={{
                  flex: 1,
                  fontWeight: "600",
                  fontSize: "1rem",
                  letterSpacing: "0.7px",
                  color: "#0f3d0f",
                }}
              >
                Preferred End Date *
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                />
              </label>
            </div>
  
            <div style={{ display: "flex", gap: "20px" }}>
              <label
                style={{
                  flex: 1,
                  fontWeight: "600",
                  fontSize: "1rem",
                  letterSpacing: "0.7px",
                  color: "#0f3d0f",
                }}
              >
                Number of Adults (1+) *
                <input
                  type="number"
                  name="adults"
                  min="1"
                  value={formData.adults}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                />
              </label>
              <label
                style={{
                  flex: 1,
                  fontWeight: "600",
                  fontSize: "1rem",
                  letterSpacing: "0.7px",
                  color: "#0f3d0f",
                }}
              >
                Number of Children (0+)
                <input
                  type="number"
                  name="children"
                  min="0"
                  value={formData.children}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </label>
            </div>
  
            <div style={{ marginBottom: 20 }}>
              <label style={{ fontWeight: 600, color: "#0f3d0f" }}>
                Total Amount (LKR):
              </label>
              <input
                type="text"
                readOnly
                value={`Rs. ${totalLKR.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}`}
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
                Total Amount (USD):
              </label>
              <input
                type="text"
                readOnly
                value={`$ ${totalUSD.toFixed(2)}`}
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
  
            <label
              style={{
                fontWeight: "600",
                fontSize: "1rem",
                letterSpacing: "0.7px",
                color: "#0f3d0f",
              }}
            >
              Message
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Additional requests or questions"
                style={{ ...inputStyle, resize: "vertical", minHeight: "90px" }}
              />
            </label>
  
            <button
              type="submit"
              style={submitBtnStyle}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#256029")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2e7d32")}
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    );
  }
  
  const inputStyle = {
    width: "100%",
    padding: "12px 14px",
    marginTop: "6px",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "1.8px solid #a5d6a7",
    backgroundColor: "#f7fdf7",
    transition: "border-color 0.3s, box-shadow 0.3s",
    outline: "none",
    letterSpacing: "0.4px",
    fontWeight: "500",
    color: "#264d26",
    boxSizing: "border-box",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };
  
  const submitBtnStyle = {
    backgroundColor: "#2e7d32",
    color: "white",
    fontWeight: "700",
    fontSize: "18px",
    padding: "14px 0",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    marginTop: "15px",
    letterSpacing: "1.1px",
    boxShadow: "0 6px 15px rgba(46,125,50,0.4)",
    transition: "background-color 0.3s, box-shadow 0.3s",
  };