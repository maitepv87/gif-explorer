# GIF Explorer

## Description

GIF Explorer is a responsive web application that allows users to search, view, and favorite animated GIFs using the Giphy API. Built with **React**, **Context API**, and **Material UI**, it offers a modern, interactive experience with features like persistent favorites and dark/light mode toggle.

This project demonstrates:

- Search functionality powered by **Giphy API**.
- Displaying results in a responsive grid with favorite toggles.
- Dark/light theme switch using a custom ThemeContext.
- Modular architecture with clean separation of logic, UI, and state.

It is a great example of building a functional single-page app with state management via Context and custom hooks.

## Technologies Used

- **React** – Component-based UI development
- **Vite** – Fast build tool and development environment
- **Material UI** – Prebuilt UI components for responsive styling
- **Fetch API** – Efficient data retrieval from Giphy
- **PropTypes** – Runtime validation for React components

## Getting Started

### Installation & Setup

To run the project locally, follow these steps:

#### Clone the repository

```bash
git clone https://github.com/maitepv87/gif-explorer.git
cd gif-explorer
```

#### Install dependencies

```bash
npm install
```

#### Set up environment variables in a .env file

```ini
VITE_API_URL=https://api.giphy.com/v1/gifs
VITE_API_KEY=your_giphy_api_key
```

#### Start the development server:

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.
