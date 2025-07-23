# 🌴 Island Explorer - Sri Lanka Tour Website

A responsive and interactive tourism website built using **React**. Users can explore destinations, view activities, and send booking/inquiry emails directly via **EmailJS** — no backend required!

## 🚀 Live Demo

Hosted on **Vercel**  
🔗 [https://islandexplorer.vercel.app](https://islandexplorer.vercel.app) *(Replace with your actual deployment URL)*

---

## ✨ Features

- 🏖️ Explore beautiful destinations in Sri Lanka
- 🏕️ Activity highlights with engaging visuals
- 📨 Booking/inquiry form with **EmailJS integration**
- 📱 Fully responsive (mobile & desktop friendly)
- 📧 Emails directly delivered to your inbox

---

## 🔧 Tech Stack

- React.js (Vite)
- EmailJS (via `@emailjs/browser`)
- CSS / Inline Styling
- Vercel (Deployment)

---

## 📥 Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/your-username/island-explorer.git
cd island-explorer

Install dependencies

bash
Copy
Edit
npm install
Run the app

bash
Copy
Edit
npm run dev
Visit http://localhost:3000

📧 EmailJS Configuration
Sign up at https://www.emailjs.com

Create a service & email template with the following fields:

handlebars
Copy
Edit
Name: {{fullName}}
Email: {{email}}
Phone: {{phone}}
Destination: {{destinations}}
Start Date: {{startDate}}
End Date: {{endDate}}
Adults: {{adults}}
Children: {{children}}
Message: {{message}}
In your React project, install EmailJS:

bash
Copy
Edit
npm install @emailjs/browser
Add your service ID, template ID, and public key to your form handler (e.g., Contact.js or InquiryForm.js):

js
Copy
Edit
emailjs.sendForm(
  'your_service_id',
  'your_template_id',
  form.current,
  'your_public_key'
)
📁 Folder Structure
arduino
Copy
Edit
/island-explorer
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── InquiryForm.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Destinations.jsx
│   └── App.jsx
├── index.css
├── vite.config.js
└── README.md
📦 Deployment
Deployed using Vercel:

bash
Copy
Edit
npm run build
Push to GitHub and connect the repo to https://vercel.com for seamless deployment.

📬 License
MIT License — free to use, modify, and distribute.

👩‍💻 Developed by
Shafiya Munawwar
Web & App Developer | React, Node.js, PHP, MySQL
📧 shafiyasha0036@gmail.com
📞 +94 75 090 6149
🔗 LinkedIn | GitHub (replace with real links)

python
Copy
Edit

---

Let me know if you'd like this tailored with your actual GitHub repo link, LinkedIn, or if you'd like me to help set up the project for push to GitHub.







You said:
