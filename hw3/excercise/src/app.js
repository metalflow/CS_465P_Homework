import React from 'react';
import { 
  createBrowserRouter, 
  RouterProvider, 
  Link, 
  Outlet 
} from 'react-router-dom';
import Home from './home';
import Countries from './countries';
import Populous from './populous';
import Regions from './regions';

// 1. Shared Layout Component with a Navigation Bar
function Layout() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <nav style={{ display: 'flex', gap: '15px', marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        <Link to="/">Home</Link>
        <Link to="/Countries">Countries</Link>
        <Link to="/Populous">Populous</Link>
        <Link to="/Regions">Regions</Link>
      </nav>
      <main>
        {/* The Outlet component dynamically renders the active child route */}
        <Outlet />
      </main>
    </div>
  );
}

// 2. Individual Page Components

function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>🚫 404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Return to Home</Link>
    </div>
  );
}

// 3. Define the Router and its 4 Main Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wraps children with navigation UI
    children: [
      {
        index: true, // Acts as the default view for the "/" path
        element: <Home />,
      },
      {
        path: "countries",
        element: <Countries />,
      },
      {
        path: "populous",
        element: <Populous />,
      },
      {
        path: "regions",
        element: <Regions />,
      },
    ],
  },
  {
    path: "*", // Catch-all route for any undefined paths
    element: <NotFound />,
  },
]);

// 4. Main App Entry Point
export default function App() {
  return <RouterProvider router={router} />;
}
