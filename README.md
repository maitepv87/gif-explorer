# **GIF Explorer**

## **Description**

GIF Explorer is a **fast and interactive** React application that allows users to **search and view animated GIFs** using the Giphy API.  
It follows modern frontend best practices, leveraging the **Context API** for global state management and **responsive UI components** built with Material UI.

![App Screenshot](./src/assets/Screenshot_GIF.png)

### **Key Features**

- **Efficient GIF search** powered by the Giphy API.
- **Dark/light mode toggle** integrated with Material UI’s theming system.
- **Optimized API handling** with the Fetch API and async state management.
- **Modular and scalable architecture** for maintainability and reusability.

This project is part of my portfolio to **demonstrate clean, scalable frontend development** using modern React techniques.

## **Technologies Used**

- **React** – Component-based UI development.
- **Context API** – Global state management without Redux.
- **Vite** – Fast build tool and development environment.
- **Material UI** – Prebuilt UI components for a modern and responsive design.
- **Fetch API** – Efficient HTTP requests for fetching GIFs.

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
