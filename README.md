# Broker Details – Frontend Mini Assignment

This project is a small frontend demo built with React + Vite to demonstrate clean code structure, proper UI states, and simple UX using mock data only.

🔗 Live Demo:  
https://assignment-broker-detais.netlify.app/

---

## Tech Stack

- React
- Vite
- TypeScript (TSX)
- React Router
- Material UI (used lightly)
- Mock JSON data

---

## How to Run Locally

```bash
npm install
npm run dev

```
---

The application will run on:
http://localhost:5173

---

## Project Structure
```bash
src/
│
├── api/
│   └── methods.ts            # Data access logic
│
├── data/
│   └── broker.json           # Mock broker data
│
├── Components/
│   ├── Error/                # Error state component
│   ├── LoadingBackdrop/      # Loading state component
│   └── UserDetails/          # Reusable broker details component
│
├── pages/
│   ├── WelcomePage/          # Optional welcome page
│   └── BrokerDetails/        # Main required page
│
├── Styles/
│   └── variables.css         # Global style variables
│
├── theme.ts                  # MUI theme configuration
├── main.tsx                  # App entry point & routing
├── index.css
└── App.css
```
## Features
Broker Details Page

Displays broker information in a clean UI card:

Name

Company

Email

Phone

Status (Active / Inactive)

All data is loaded from a local JSON file (src/data/broker.json).

## UI States
The following UI states are implemented clearly:

- Loading State

- Displayed on initial load

- Simulated with a delay (500ms)

- Implemented as a reusable component

- Error State

- Displays a default message if no custom error is provided

- Includes a Retry button

- Optional error simulation for demonstration

## UX Principles Applied
Clarity & Simplicity: Only essential information is displayed to avoid visual clutter.

Visual Hierarchy: Important data such as the broker name and status is emphasized using size, spacing, and color.

Consistency: Unified spacing, colors, and typography across components.

System Feedback: Clear loading, error, and empty states keep users informed.

Error Recovery: Retry and reload actions help users recover smoothly.


## Extra UX Enhancements

A welcome page was added specifically for the hiring team as an optional UX enhancement, providing a clear entry point to the main Broker Details page.

Optional Avatar Handling:
When no profile image is available (as per the assignment requirements), an avatar is generated using the first letter of the broker’s first and last name.
This approach helps break visual monotony and adds a subtle visual identity without relying on real images.


## Assumptions

All data in this project is mock/demo data.

No backend or database is used.

TypeScript (TSX) was used for better type safety while following standard React (JavaScript) principles.


----Thank you for your time and review.----