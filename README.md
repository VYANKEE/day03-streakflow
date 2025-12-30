# StreakFlow - Habit Tracker (Day 3)

This project is a habit tracking application developed as part of my 45-day software engineering challenge. The goal was to build a functional, product-oriented application that handles date-based logic and local data persistence without relying on a backend.

Live Demo: https://day03-streakflow-msrf.vercel.app/

## Project Overview

StreakFlow allows users to track daily habits and maintain streaks. Unlike simple to-do lists, this application implements specific logic to calculate streaks based on calendar dates. If a user misses a day, the streak resets automatically.

## Key Features

- **Streak Algorithm:** The application compares the current date with the last completed date. It automatically detects if a day was missed and resets the streak count to zero, or increments it if the habit is maintained consecutively.
- **Data Persistence:** All user data is stored in the browser's Local Storage. This ensures that habits and streaks are preserved even after the page is refreshed or the browser is closed.
- **Single Page Interface:** The application features a smooth-scrolling landing page that transitions seamlessly into the dashboard.
- **Responsive Design:** The UI is built with pure CSS using a component-based approach, ensuring it works across different screen sizes.

## Technical Implementation

Date Handling:
To avoid issues with timezones and timestamps, all dates are converted and stored as string formats (YYYY-MM-DD). This makes comparison logic for "Yesterday" vs "Today" reliable and bug-free.

State Management:
I utilized React's `useState` for handling the application state and `useEffect` to synchronize this state with Local Storage. Upon loading, the app runs a validation check to update streak statuses before rendering the UI.

## Technology Stack

- Frontend: React.js (Vite)
- Styling: Pure CSS (CSS Variables, Flexbox, Glassmorphism effects)
- Utilities: UUID for unique key generation

## Installation and Setup

1. Clone the repository
   git clone https://github.com/VYANKEE/streakflow-day3.git

2. Navigate to the project directory
   cd streakflow-day3

3. Install dependencies
   npm install

4. Run the development server
   npm run dev

---
Developed by Vyankee as part of the 45-Day Engineering Challenge.
