# Professional Portfolio

Personal portfolio website for **Riza Zainudin**. Built with vanilla HTML, CSS, and JavaScript — no frameworks, no build step, no dependencies beyond Google Fonts and Font Awesome.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-222?logo=github)

**🔗 Live site:** [rizazainudin.github.io/home](https://rizazainudin.github.io/home/)

---

## Overview

A single-page portfolio that showcases:

- **Power Platform automations** — Power Automate flows, Power Apps, AI Builder, and Copilot Studio solutions that cut manual effort.
- **Analytics projects** — interactive Power BI reports plus Python, SQL, and Tableau Public work.
- **Certifications & learning** — verified Microsoft / industry credentials and completed courses.

---

## Features

- **Dark / light theme toggle** — persisted in `localStorage`, applied inline in `<head>` before paint to avoid a flash of the wrong theme.
- **Scroll animations** — elements fade/slide into view via `IntersectionObserver` with staggered delays.
- **Project filter bars** — filter Automations and Analytics cards by category in place.
- **Sticky navigation** — fixed nav with active-link highlighting as you scroll.
- **Responsive mobile nav** — hamburger menu for small screens.
- **Smooth scrolling** — anchor jumps offset for the fixed nav height.

---

## Sections

| Section | Description |
|---|---|
| Hero | Introduction, profile photo, and floating skill badges |
| About | Profile summary and highlight cards |
| Skills | Technical stack grouped by category |
| Automations | Power Platform automation projects with filter (Power Automate / Power Apps / Copilot Agent) |
| Analytics | Power BI, Python, SQL, and Tableau projects with filter |
| Certifications | Microsoft and industry certifications with verify links |
| Courses & Training | Completed courses and ongoing professional development |
| Contact | Email and GitHub contact cards |

> The Experience and Freelance timeline sections (and hero stats) still exist in the markup but are currently hidden (`display:none`) and removed from the nav.

---

## Tech Stack

- **HTML5** — semantic markup
- **CSS3** — custom properties, CSS Grid, Flexbox, scroll animations, `data-theme` theming
- **JavaScript (vanilla)** — theme toggle, scroll effects, filter bars, mobile nav, active-link highlight
- **Google Fonts** — Space Grotesk, Inter
- **Font Awesome 6.5** — icons (via cdnjs CDN)

---

## Project Structure

```
home/
├── index.html              # All content and page sections
├── css/
│   └── style.css           # All styles and :root design tokens
├── js/
│   └── main.js             # Theme toggle, scroll animations, filters, nav behaviour
└── assets/
    └── profile.png         # Hero profile photo
```
