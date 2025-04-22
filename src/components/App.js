import React, { useState, useEffect } from 'react';


function App() {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setDogImage(data.message);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="title">Random Dog Generator</h1>
      
      {loading ? (
        <p className="loading-text">Loading...</p>
      ) : error ? (
        <p className="error-message">Error: {error}</p>
      ) : (
        <div className="dog-image-container">
          <img 
            src={dogImage} 
            alt="A Random Dog" 
            className="dog-image"
          />
        </div>
      )}
    </div>
  );
}

export default App;