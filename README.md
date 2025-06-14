# 🏢 Mini Real Estate Floor Selector (React)

A simplified, interactive real estate browser built in React. It lets users explore different towers, choose floors, and preview apartment layouts simulating a real-world property listing experience with smooth, responsive UI interactions.

---

## ✨ What It Does

This mini-app walks users through:

1. **Tower Selection** – Choose from Tower A, B, or C
2. **Floor Selection** – View and select 10–15 floors per tower
3. **Layout Preview** – Browse apartment layouts (thumbnails + metadata)
4. **Layout Detail View** – View full-size layout and detailed info

Each step is interactive and designed to mimic a property discovery flow you'd find on a real estate website.

---

## ⚙️ Tech Stack

- **React** – Core framework for building UI components
- **CSS Modules / TailwindCSS** – For styling (you can choose one)
- **Dummy Data** – Used for floors and apartment layouts
- **Placeholder Images** – Simulate real unit thumbnails and plans

---

## 💡 Features

- Clickable tower cards
- Dynamic floor list based on tower
- Layout previews with:
  - Thumbnail
  - Area
  - Unit type
  - Room count
- Full layout detail view
  - Thumbnail enlarges slightly with smooth animation

Works across desktop and mobile.

---

## ⚠️ Known Limitations & Tradeoffs

- **No real data or backend**: All content is mocked/static for demo purposes.
- **No routing or persistent state**: This is a single-page prototype with internal component state only.
- **Limited scalability**: It’s built for demonstration — not ready for production without further enhancements like API integration, authentication, routing, or data persistence.

---


## 🌐 Live Demo

Check out the live version here: [View Demo](https://real-estate-tour.vercel.app/)



## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/samueljustua/Real-Estate-Tour.git
cd Real-Estate-Tour

# Install dependencies
npm install

# Start development server
npm run dev

