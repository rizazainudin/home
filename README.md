# Riza Zainudin — Professional Portfolio.

Personal portfolio website for **Riza Zainudin**. Built with vanilla HTML, CSS, and JavaScript — no frameworks, no build step, no dependencies beyond Google Fonts and Font Awesome.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-222?logo=github)
![No Build Step](https://img.shields.io/badge/build-none-00C97A)

**🔗 Live site:** [rizazainudin.github.io/home](https://rizazainudin.github.io/home/)

---

## Overview

A single-page portfolio that showcases:

- **Power Platform automations** — Power Automate flows, Power Apps, and AI Builder solutions that cut manual effort.
- **Analytics projects** — interactive Power BI reports plus Python, SQL, and Tableau Public work.
- **Experience & certifications** — a work-history timeline, freelance engagements, and verified Microsoft / industry credentials.

Headline stats from the field: **5+ years experience**, **~90% average manual effort saved**, **50+ dashboards delivered**, and **150+ hours saved per month**.

---

## Features

- **Scroll animations** — elements fade/slide into view via `IntersectionObserver` with staggered delays.
- **Project filter bars** — filter Automations and Analytics cards by category in place.
- **Sticky navigation** — fixed nav with active-link highlighting as you scroll.
- **Responsive mobile nav** — hamburger menu for small screens.
- **Smooth scrolling** — anchor jumps offset for the fixed nav height.

---

## Sections

| Section | Description |
|---|---|
| Hero | Introduction, profile photo, and key stats |
| About | Profile summary and highlight cards |
| Skills | Technical stack grouped by category |
| Automations | Power Platform automation projects with filter |
| Analytics | Power BI, Python, SQL, and Tableau projects with filter |
| Experience | Full-time work history timeline |
| Freelance | Independent / consulting engagements |
| Certifications | Microsoft and industry certifications with verify links |
| Learning | Courses and ongoing professional development |
| Contact | Email and GitHub contact cards |

---

## Tech Stack

- **HTML5** — semantic markup
- **CSS3** — custom properties, CSS Grid, Flexbox, scroll animations
- **JavaScript (vanilla)** — scroll effects, filter bars, mobile nav, active-link highlight
- **Google Fonts** — Space Grotesk, Inter
- **Font Awesome 6** — icons

---

## Project Structure

```
home/
├── index.html              # All content and page sections
├── css/
│   └── style.css           # All styles and :root design tokens
├── js/
│   └── main.js             # Scroll animations, filters, nav behaviour
└── assets/
    ├── profile.png         # Hero profile photo
    ├── img/                # Section + project imagery
    │   ├── about.jpg
    │   ├── background.jpg
    │   ├── favicon.png
    │   ├── logo.png
    │   └── work/           # Dashboard & project screenshots
    ├── fonts/              # Font Awesome SVG font
    └── webfonts/           # Font Awesome web fonts
```
