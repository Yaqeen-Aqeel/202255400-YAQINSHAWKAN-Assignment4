# Technical Documentation

**Project:** Personal Portfolio Web Application – Assignment 4  
**Student:** Yaqin Aqeel Shawkan | ID: 202255400  
**Live URL:** https://yaqeen-aqeel.github.io/202255400-YAQINSHAWKAN-Assignment4/

---

## 1. Project Overview

This is a single-page personal portfolio web application built entirely with vanilla HTML, CSS,
and JavaScript — no frameworks or build tools required. The application is fully responsive and
deploys as a static site via GitHub Pages.

The portfolio is structured as a single scrollable page with clearly defined sections, smooth
anchor navigation, and multiple interactive features driven by client-side JavaScript.

---

## 2. File Structure

```
202255400-YAQINSHAWKAN-Assignment4/
├── index.html                  # Main HTML document (single page)
├── css/
│   └── styles.css              # All styling — layout, responsiveness, animations
├── js/
│   └── script.js               # All JavaScript — features, API calls, DOM manipulation
├── assets/
│   └── images/                 # Project screenshots and calligraphy photos
├── docs/
│   ├── ai-usage-report.md      # AI tool usage documentation
│   └── technical-documentation.md  # This file
├── presentation/
│   └── demo-video.mp4          # Video presentation
├── README.md
└── .gitignore
```

---

## 3. Architecture

The application follows a straightforward **single-page architecture**:

- `index.html` defines the structure and all sections
- `styles.css` handles all visual presentation including responsive breakpoints
- `script.js` is loaded at the bottom of `<body>` and handles all dynamic behavior

There is no backend, no build pipeline, and no external JavaScript libraries. All features
are implemented using standard Web APIs available in modern browsers.

---

## 4. Features — Technical Details

### 4.1 Personalized Greeting & Name Modal

**How it works:**  
On page load, `script.js` checks `localStorage` for a saved visitor name. If none exists,
a modal dialog appears prompting the user to enter their name. Once saved, the name is stored
in `localStorage` and a greeting is displayed in the header, customized by time of day
(Good Morning / Good Afternoon / Good Evening).

A "Change Name" button allows the user to reopen the modal and update their name at any time.

**Key APIs used:** `localStorage.getItem()`, `localStorage.setItem()`, DOM event listeners,
`new Date().getHours()`

---

### 4.2 Live Visit Duration Timer

**How it works:**  
When the page loads, a timestamp is recorded. A `setInterval` function runs every second,
calculates the difference between the current time and the start time, and updates a
`<span>` element in the header displaying the elapsed time in seconds, minutes, and hours.

**Key APIs used:** `Date.now()`, `setInterval()`

---

### 4.3 Inspirational Quotes (External API)

**How it works:**  
On page load and when the "New Quote" button is clicked, a `fetch()` request is sent to the
DummyJSON Quotes API (`https://dummyjson.com/quotes/random`). The response is parsed as JSON
and the quote text and author are injected into the DOM.

Error handling is implemented with a `try/catch` block — if the API call fails, a user-friendly
fallback message is displayed instead of leaving the section blank or crashing.

**Key APIs used:** `fetch()`, `async/await`, `try/catch`, `response.json()`

---

### 4.4 Contact Form Validation

**How it works:**  
The contact form has three fields: Name, Email, and Message. On submission, a JavaScript
handler prevents the default browser behavior and validates each field:

- Checks that no field is empty
- Validates email format using a regular expression
- Highlights invalid fields with a red border and displays specific error messages
- On successful validation, shows a success confirmation message

**Key APIs used:** `event.preventDefault()`, `RegExp`, DOM classList manipulation

---

### 4.5 Calligraphy Gallery & Lightbox

**How it works:**  
The gallery uses a CSS Grid layout with `auto-fill` and `minmax(220px, 1fr)` to create a
fully responsive grid that adjusts column count automatically based on the available screen width —
no media queries needed for the grid itself.

Each image has a hover effect (scale + box-shadow) applied via CSS transitions.

When a gallery image is clicked, a JavaScript event listener captures the image's `src` and `alt`
attributes and injects them into a fullscreen lightbox overlay. The lightbox is shown by adding
an `active` CSS class that changes `display` from `none` to `flex`. It can be dismissed by
clicking the × button or clicking anywhere outside the image.

**Key APIs used:** `querySelectorAll()`, `forEach()`, `classList.add/remove()`, CSS transitions

---

### 4.6 Lazy Loading

All images in the portfolio (project screenshots and calligraphy photos) use the native
HTML `loading="lazy"` attribute. This tells the browser to defer loading off-screen images
until the user scrolls near them, improving initial page load performance without any
JavaScript required.

---

## 5. Responsive Design

The layout is built mobile-first using CSS Flexbox and Grid:

- The navigation collapses gracefully on smaller screens
- Project cards and the gallery grid reflow automatically using `auto-fill` / `minmax`
- Font sizes and spacing are set in relative units (`rem`, `%`) for consistent scaling
- Tested on Chrome, Firefox, and mobile viewports using browser DevTools

---

## 6. Performance Considerations

- All images use `loading="lazy"` to reduce initial load time
- No external JavaScript libraries are used — zero dependency overhead
- CSS and JS files are kept lean with no unused rules or dead code
- Images are stored locally in `assets/images/` to avoid third-party loading delays

---

## 7. Known Limitations

- The contact form does not actually send an email — it only performs client-side validation.
  A backend or service like EmailJS would be needed for real form submission.
- The DummyJSON Quotes API is a free public API with no guaranteed uptime. If it goes down,
  the fallback error message is displayed.
- The site is a static deployment and has no server-side functionality.

---

## 8. Future Improvements

- Integrate EmailJS or Formspree to make the contact form fully functional
- Add a dark/light mode toggle with the preference saved in `localStorage`
- Add smooth scroll animations using the `IntersectionObserver` API
- Expand the calligraphy gallery with captions and category filtering
- Add a downloadable CV/resume button in the About section