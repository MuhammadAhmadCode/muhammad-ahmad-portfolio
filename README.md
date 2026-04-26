# Portfolio Website

<p align="center">
  <img src="public/logo.jpg" alt="Portfolio Preview" width="600" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.2.4-61dafb?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-8.0.0-646cff?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-4.2.1-38b2ac?logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/JavaScript-ESNext-yellow?logo=javascript&logoColor=black" alt="JavaScript" />
</p>

A modern personal portfolio built with React and Vite. This project showcases a clean, animated, and responsive landing page with sections for hero, about, skills, projects, contact, and footer.

## ✨ Highlights

- 🚀 Animated hero and section transitions using `motion/react`
- 📱 Fully responsive navigation with a mobile menu
- 💼 Projects showcase with demo and code call-to-action buttons
- 🧭 Skills section with rich tech tags and icons
- ✉️ Contact area with email, phone, location, and social links
- 🎨 Dark UI design built with Tailwind CSS utilities

## 🧩 Tech Stack

- React 19
- Vite
- Tailwind CSS
- motion
- React Router DOM
- React Icons

## 📁 Project Structure

- `src/App.jsx` – main application wrapper and router
- `src/main.jsx` – app entry point
- `src/pages/Home.jsx` – one-page landing layout
- `src/components/` – reusable components
  - `Navbar.jsx`
  - `Hero.jsx`
  - `About.jsx`
  - `Skills.jsx`
  - `Projects.jsx`
  - `Contact.jsx`
  - `Footer.jsx`
- `src/assets/assets.js` – content data for profile, about cards, skills, and projects
- `src/index.css` – global styling
- `vite.config.js` – Vite configuration with React and Tailwind plugins

## ▶️ Installation

```bash
npm install
npm run dev
```

Then open the local server URL shown in the terminal.

## 🛠️ Build & Preview

```bash
npm run build
npm run preview
```

## ✅ Linting

```bash
npm run lint
```

## ⚠️ Notes

- The contact form currently prevents default submission and is a visual placeholder.
- Demo and code URLs in `src/assets/assets.js` are currently placeholders and can be updated with live project links.
- The about text is sample content and should be replaced with your real biography.

## 🎨 Customization

- Update `src/components/Hero.jsx` to change the hero headline and call-to-action labels
- Replace `src/assets/profile.jpg` with your own portrait
- Edit `src/assets/assets.js` to personalize project entries, skills, and about cards
- Update social links in `src/components/Contact.jsx`

## 📌 Suggested GitHub Repo Name

`muhammad-ahmad-portfolio`

## 📝 Suggested GitHub Description

Responsive React portfolio website built with Vite, Tailwind CSS, and motion animations to showcase projects, skills, and contact details.

## 📜 License

This repository is available under the MIT License. Use the structure freely and replace content with your own portfolio details.
