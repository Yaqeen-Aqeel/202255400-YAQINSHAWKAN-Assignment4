# Technical Documentation

## 1. Project Overview
This project is a responsive personal portfolio web application built using HTML, 
CSS, and JavaScript. It represents the starting point of a professional portfolio 
and demonstrates understanding of front-end development fundamentals, responsive 
design principles, interactivity, API integration, state management, and performance optimization.

The website contains four primary sections: About Me, Quote of the Day, Projects, and Contact.

---

## 2. Project Structure

The project follows a clear and organized folder structure:

assignment-3/
├── index.html              → Main webpage structure  
├── css/styles.css          → Styling and responsive design  
├── js/script.js            → JavaScript interactivity  
├── assets/images/          → Compressed project images  
├── docs/                   → Documentation files  
│   ├── ai-usage-report.md  
│   └── technical-documentation.md  
└── README.md               → Project overview and setup instructions  

This structure separates content, styling, logic, and documentation to improve 
maintainability and readability.

---

## 3. Technologies Used

HTML5 was used to build the structure and semantic layout of the webpage.  
CSS3 was used for styling, layout design, and responsive behavior.  
JavaScript (ES6+) was used to implement dynamic interactivity, API calls, 
state management, and application logic.  
DummyJSON Quotes API was used to fetch and display random inspirational quotes.

---

## 4. Design and Layout Decisions

### Section-Based Layout
Each major part of the website is wrapped in a `<section>` element 
to maintain a semantic and organized structure.

### Flexbox Usage
Flexbox is used for layout alignment and spacing in several areas:
- Navigation menu alignment
- Vertical arrangement of project cards
- Contact form layout

Flexbox allows flexible and consistent alignment across different screen sizes.

### Card Design for Projects
Projects are displayed inside visually distinct cards with padding, rounded 
corners, and shadows. Cards use `width: 100%` and `max-width: 700px` to remain 
responsive across all screen sizes instead of a fixed width.

---

## 5. Responsive Design Strategy

Responsive design was implemented using CSS media queries.

### Breakpoint
@media (max-width: 768px)

### Mobile and Tablet Adjustments
- Navigation links stack vertically instead of horizontally
- Project cards are centered and fill available width on smaller screens
- Spacing and layout adapt for better readability on mobile devices

These adjustments ensure the site works well on desktops, tablets, and smartphones.

---

## 6. JavaScript Interactivity

### Greeting Message
The script retrieves the current hour using JavaScript's Date object. Based on the 
hour, it determines whether it is morning, afternoon, or evening and displays an 
appropriate greeting with the visitor's saved name.

### Name Modal & State Management
A modal prompts the visitor to enter their name on first visit. The name is stored 
using `localStorage` so it persists across browser sessions. A "Change Name" button 
allows the user to update their name at any time, and the greeting updates instantly 
to reflect the change.

### Inspirational Quotes API
A random inspirational quote is fetched from the DummyJSON Quotes API 
(`https://dummyjson.com/quotes/random`) on every page load using JavaScript's 
`fetch()` and async/await. A "New Quote" button allows the visitor to fetch a 
new quote at any time. Errors are handled gracefully with a user-friendly message 
if the API request fails.

### Visit Duration Counter
A live counter tracks and displays how long the visitor has been on the site. 
It updates every second using `setInterval()` and formats the time into hours, 
minutes, and seconds, showing only relevant units (e.g. `45s`, `2m 10s`, `1h 3m 5s`).

### Contact Form Validation
The contact form includes multi-step validation logic:
- Checks that no field is left empty
- Validates that the email follows a correct format using a regular expression
- Highlights invalid fields with a red border and shadow
- Displays a success or error message with a fade-in/fade-out animation
- Resets the form on successful submission

---

## 7. Performance Optimizations


- `loading="lazy"` was added to all images so they only load when scrolled into view
- JavaScript and CSS are kept clean with no unused code or repeated logic
- The site was tested using Google Lighthouse to measure and verify performance

---

## 8. Accessibility and Usability Considerations

- Semantic HTML elements such as `header`, `section`, and `footer` improve structure and accessibility
- Form fields include associated labels for better usability
- Buttons and links include hover effects for user feedback
- Readable font sizes and consistent spacing improve overall user experience
- User-friendly error messages are shown if the API fails or form validation fails

---

## 9. Testing and Validation

The website was tested by:
- Opening it in modern browsers such as Chrome and Edge
- Resizing the browser window to confirm responsive behavior across screen sizes
- Verifying the greeting message updates correctly depending on the time of day
- Testing the name modal, localStorage persistence, and "Change Name" button
- Confirming the quotes API fetches and displays correctly with the "New Quote" button
- Verifying the visit duration counter increments correctly every second
- Submitting the contact form with valid and invalid inputs to test all validation rules
- Running a Lighthouse audit to check performance scores

No console errors were found during testing.

---

This documentation explains the technical structure, design decisions, and 
functionality of the portfolio project.