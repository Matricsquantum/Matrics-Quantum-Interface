import React from 'react'; // Import React
import ReactDOM from 'react-dom/client'; // Import ReactDOM client
import App from './App.tsx'; // Import your main App component
import './index.css'; // Import the CSS file (CRUCIAL)

// Find the root DOM element
const rootElement = document.getElementById('root');

// Ensure the root element exists before trying to render
if (rootElement) {
  // Create a React root and render the App component inside StrictMode
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  // Log an error if the root element isn't found
  console.error("Fatal Error: Root element with ID 'root' not found in the DOM.");
}