# ⚖️ Lawyer Booking Website

A responsive and feature-rich React application that enables users to browse, view details, and book appointments with professional lawyers seamlessly.

---

## 🌐 Live Demo

[Live Site](http://law-bd.surge.sh/)

---

## 📸 Screenshot

![Lawyer Booking Website Screenshot](./lawer.png)  


---

## 🧰 Technologies Used

- React.js
- React Router DOM
- Context API / localStorage for state management
- React Toastify (for notifications)
- Recharts (data visualization)
- react-countup (counting animations)
- Tailwind CSS / Custom CSS (or specify your styling)
- Surge.sh (for hosting/deployment)

---

## 🚀 Core Features

- **Navbar & Footer**  
  Persistent navigation and footer with site branding, navigation links, and social media icons.

- **Homepage**  
  Banner with heading/description, featured lawyers grid, success metrics with animated counters.

- **Lawyer Details Page**  
  Detailed profile with availability, specialty, fees, and booking button with availability validation.

- **Booking System**  
  Create and manage appointments with booking validation to prevent duplicates. Cancel appointments with updates reflected in charts.

- **Bookings Page**  
  View all booked appointments with cancel functionality. Persistent storage using localStorage or context.

- **Blogs Page**  
  Custom blog section covering React topics like useState, useEffect, custom hooks, forms, and more.

- **Error Handling**  
  Custom 404 page and invalid dynamic route handling with friendly messages and navigation.

- **Dynamic Title and Loading States**  
  Page titles update dynamically based on current route. Loading animations on route changes and data fetches.

- **Data Visualization**  
  Appointment fees visualized using Recharts with live updates on bookings.

---

## 📦 Dependencies

- `react`
- `react-router-dom`
- `react-toastify`
- `recharts`
- `react-countup`
- (Add any CSS framework or utility libraries used)

---

## 🛠️ How to Run Locally

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/lawyer-booking-website.git
   cd lawyer-booking-website
Install dependencies:

2.
npm install
# or
yarn install
Start the development server:

2.
npm run dev

Open your browser and visit:

http://localhost:3000
Build for production:

npm run build
# or
yarn build
