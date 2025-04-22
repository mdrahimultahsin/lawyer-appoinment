⚖️ Lawyer Booking Website
A responsive and feature-rich React application that enables users to browse, view details, and book appointments with professional lawyers.

🚀 Live Demo
Live Site: http://law-bd.surge.sh/

✅ Main Features
➤ Navbar

Displays site logo and name.

Includes 4 navigation menu items.

Features a right-aligned button.

Visible on all pages, including the error page.​

➤ Footer

Center-aligned logo.

Navigation menu items.

4 social media icons linking to personal profiles.

Displayed on all pages except error routes.​

➤ Homepage

Banner section with heading and description.

Lawyers section displaying 6 lawyers in a 3x2 grid.

Each lawyer card includes image, name, specialty, experience, license number, and a "View Details" button.

Success section with 4 square cards featuring icons, numbers (with counting animation), and titles.​

➤ Lawyer Details Page

Top info card titled “Lawyer’s Profile Details” with a slogan.

Displays lawyer image, name, experience, specialty, fee, and availability.

Appointment card with availability badge and "Book Now" button.​

➤ Booking Logic

If appointment not already booked:

Creates new appointment.

Shows success toast with lawyer’s name.

Navigates user to Bookings page.

If already booked:

Shows error toast.

Does not create duplicate booking.​

➤ Bookings Page

Displays all booked appointments in a 1-column card format.

Each card shows lawyer name, fee, specialty, and a "Cancel Appointment" button.

If no appointments:

Displays a heading message.

Shows a button to return to Homepage.

Cancel button removes the appointment.

Bookings persist after page reload using localStorage or context.​

➤ Blogs Page

Custom-designed blog page.

Includes articles on:

What is useState and how does it work in React?

What is the purpose of useEffect in React?

What is a custom hook in React and when should you use one?

Difference between controlled and uncontrolled components. Which one is better?

Tell us something about useFormStatus() in React.​
GitHub
+1
Wikipedia
+1

➤ Error Page (404)

Custom-designed error page for invalid routes.

Includes Navbar.

Footer is not displayed.

Button to redirect the user to Homepage.​
GitHub

🧩 Aditional Features
➤ Recharts Integration

Visualizes appointment fees using Recharts.

Canceling appointments updates the chart.

Chart is not shown if no appointments exist.​

➤ Counting Animation

Uses react-countup for counting animation on the Homepage.​

➤ Logo & Title

Adds site logo and website title.​

➤ Invalid Dynamic Routes Handling

Displays error message when visiting invalid routes (e.g., /lawyer/invalid-id).​

➤ Redirection & Loading States

Shows a loading animation on every route change.

App does not crash on page reload.

Displays fallback loader during data fetch on any page reload.​

✨ Enhanced Features
➤ Validate Booking Based on Availability

If today’s date doesn’t match lawyer’s availability:

Shows “Lawyer is unavailable today”.

Displays “Unavailable” badge on lawyer cards.​

➤ Dynamic Title using useLocation()

Changes title dynamically:

Booking Page → Booking.

Lawyer Details → Lawyer’s Name.

Implemented without using third-party NPM packages.​
