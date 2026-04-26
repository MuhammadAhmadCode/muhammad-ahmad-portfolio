# Portfolio Website

A modern personal portfolio built with React and Vite. This project showcases a clean, animated, and responsive landing page with sections for hero, about, skills, projects, contact, and footer.

## Key Features

- Responsive navigation with mobile menu support
- Animated section transitions using `motion/react`
- Portfolio project gallery with demo and code CTA buttons
- Skills section with dynamic cards and iconography
- Contact form with contact details and social links
- Clean dark UI using Tailwind CSS classes

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- motion (for animations)
- React Router DOM
- React Icons

## Project Structure

- `src/App.jsx` – main application wrapper and router
- `src/main.jsx` – app entry point
- `src/pages/Home.jsx` – single landing page composed of sections
- `src/components/` – reusable UI components
  - `Navbar.jsx`
  - `Hero.jsx`
  - `About.jsx`
  - `Skills.jsx`
  - `Projects.jsx`
  - `Contact.jsx`
  - `Footer.jsx`
- `src/assets/assets.js` – image imports and content data for about, skills, and projects
- `src/index.css` – global styles
- `vite.config.js` – Vite setup with React and Tailwind plugins

## Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start development server:

   ```bash
   npm run dev
   ```

3. Build for production:

   ```bash
   npm run build
   ```

4. Preview production build:

   ```bash
   npm run preview
   ```

5. Run ESLint:

   ```bash
   npm run lint
   ```

## Notes

- The contact form currently uses a placeholder button action and does not yet submit data.
- Project demo/code links in `src/assets/assets.js` are currently placeholder values and can be replaced with real URLs.
- The `about` section contains placeholder text that can be updated with a real biography.

## Customization

To personalize the portfolio:

- Update the hero text in `src/components/Hero.jsx`
- Replace `src/assets/profile.jpg` with your own profile image
- Edit `src/assets/assets.js` to add your actual project details, skills, and about info
- Add or modify social links in `src/components/Contact.jsx`

## License

This project is available under the MIT License. Feel free to reuse the structure and update the content for your own portfolio.
