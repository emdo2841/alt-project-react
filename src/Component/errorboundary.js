import React, { useState, useEffect } from 'react';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error) => {
      console.error('Error caught by ErrorBoundary:', error);
      setHasError(true);
    };

    // Add event listener to catch unhandled errors
    window.addEventListener('error', errorHandler);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('error', errorHandler);
    };
  }, []); // Empty dependency array to ensure the effect runs only once

  if (hasError) {
    return (
      <div>
        <h1>Something went wrong.</h1>
        <p>Please refresh the page or try again later.</p>
      </div>
    );
  }

  // Render children as usual if there's no error
  return children;
};

export default ErrorBoundary;
