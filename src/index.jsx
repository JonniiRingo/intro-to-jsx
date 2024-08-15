// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

import React from 'react';
import ReactDOM from 'react-dom/client';

// Define your App component
function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>Welcome to my React App!</p>
    </div>
  );
}

// Render the App component to the root div in index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



