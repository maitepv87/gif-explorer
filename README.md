# **GIF Explorer**

## **Description**

GIF Explorer is a **fast and interactive** React application that allows users to **search, view, and favorite animated GIFs** using the Giphy API. It follows best practices in frontend development, leveraging **Context API for global state management**, `useMemo` and `useCallback` for **performance optimization**, and **responsive UI components** built with Material UI.

### **Key Features**

- **Efficient GIF search** powered by the Giphy API.
- **Interactive GIF cards** with favorite toggles.
- **Persistent favorites**, allowing users to save selections across sessions.
- **Dark/light mode toggle** using ThemeContext.
- **Optimized API handling** with Fetch.
- **Modular and scalable architecture** for maintainability.

This project is part of my portfolio to **demonstrate clean, scalable frontend development** using modern React techniques.

## **Technologies Used**

- **React** – Component-based UI development.
- **Context API** – Global state management without Redux.
- **Vite** – Fast build tool and development environment.
- **Material UI** – Prebuilt UI components for a modern and responsive design.
- **Fetch API** – Efficient HTTP requests for fetching GIFs.
- **PropTypes** – Runtime validation for React components.
- **React.memo** – Prevents unnecessary re-renders in list components.
- **useMemo & useCallback** – Improves performance by optimizing function execution.

## **Getting Started**

### **Installation & Setup**

Follow these steps to run the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/maitepv87/gif-explorer.git
   cd gif-explorer

   ```

2. Install dependencie:

   ```bash
   npm install
   ```

3. Set up environment variables in a .env file:

   ```ini
   VITE_API_URL=https://api.giphy.com/v1/gifs
   VITE_API_KEY=your_giphy_api_key
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

Then open http://localhost:3000 in your browser.
