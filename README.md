# 202255400-YAQINSHAWKAN-Assignment3 

# Personal Portfolio Web App – Assignment 3

## Project Description
This project is a responsive personal portfolio website built using HTML, CSS, and JavaScript.
It presents information about me, my projects, and a contact form.

The portfolio includes interactive features such as a personalized greeting message based on the 
user's name and time of day, a modal for user input, a validated contact form, an inspirational 
quotes section powered by an external API, and a live visit duration counter.

## Features
- Responsive multi-section layout (works on all screen sizes)
- Responsive project cards that adapt to screen width
- Contact form with advanced validation (empty field checks, email format validation, error highlights)
- Dynamic greeting message based on the user's name and time of day
- Name stored and remembered using localStorage (state management)
- "Change Name" button to update stored name at any time
- Inspirational quotes fetched from DummyJSON external API with error handling
- Live visit duration counter showing how long the visitor has been on the site
- Lazy loading on images for faster page load


## Technologies Used
- HTML5
- CSS3 (Flexbox & responsive design)
- JavaScript (ES6+, async/await, localStorage, setInterval)
- DummyJSON Quotes API (https://dummyjson.com/quotes/random)

## How to Run Locally
1. Download or clone the repository
2. Open the folder
3. Open `index.html` in any web browser

## API Integration
This project uses the **DummyJSON Quotes API** to fetch and display a random inspirational quote 
on every page load. Users can also click "New Quote" to fetch a new one at any time. 
Errors are handled gracefully with a user-friendly message if the API fails.

## Performance Optimizations
- Lazy loading added to all project images
- Unused code removed and CSS/JS kept clean and efficient

## AI Usage Summary
AI tools Claude and ChatGPT were used for layout guidance, feature implementation, debugging, and code 
improvement. Full details are available in `docs/ai-usage-report.md`.

## Author
YAQIN AQEEL SHAWKAN – Software Engineering Student at KFUPM

