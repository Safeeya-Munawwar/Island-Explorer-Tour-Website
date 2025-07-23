import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function TourDetail() {
  const { id } = useParams();
  const [tour, setTour] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/destinations`)
      .then(res => {
        const found = res.data.find(item => item.id === parseInt(id));
        setTour(found);
      })
      .catch(err => console.error(err));
  }, [id]);

  if (!tour) return <p className="text-center py-10">Loading tour details...</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/tours" className="text-green-700 underline mb-4 inline-block">← Back to Tours</Link>
      <h1 className="text-4xl font-bold text-green-700 mb-4">{tour.name}</h1>
      <img src={tour.image} alt={tour.name} className="w-full max-h-96 object-cover rounded" />
      <p className="mt-4 text-gray-700">{tour.description}</p>
      <p className="mt-2 font-semibold text-green-600">Price: LKR {tour.price}</p>
      <p className="mt-1 text-gray-500 italic">{tour.location}</p>
    </div>
  );
}

export default TourDetail;
