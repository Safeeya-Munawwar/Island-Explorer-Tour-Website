const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const destinations = [
  {
    id: 1,
    name: 'Sigiriya Rock Fortress',
    location: 'Sigiriya, Central Province',
    price: 4500, 
    description: 'Ancient rock fortress with frescoes and stunning views.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Sigiriya_Rock.jpg',
  },
  {
    id: 2,
    name: 'Ella Gap',
    location: 'Ella, Uva Province',
    price: 0, 
    description: 'Breathtaking valley views from the hill town of Ella.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Ella_View.jpg',
  },
  {
    id: 3,
    name: 'Galle Fort',
    location: 'Galle, Southern Province',
    price: 0,
    description: 'Historical Dutch fort with cobbled streets and cafes.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Galle_Fort_2015.jpg',
  },
  {
    id: 4,
    name: 'Yala National Park',
    location: 'Yala, Southern Province',
    price: 6200,
    description: 'Famous wildlife park for safari and leopard spotting.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Yala_National_Park_-_Sri_Lanka.jpg',
  },
];

app.get('/api/destinations', (req, res) => {
  res.json(destinations);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

