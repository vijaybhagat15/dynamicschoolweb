import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null); // Store object, not array

  useEffect(() => {
    axios.get("http://localhost:8000/") // Update your API endpoint
      .then(response => setData(response.data)) // Assuming response.data is an object
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <h2>Data from Port 8000</h2>
      {data ? (
        <ul>
            {Object.entries(data).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {String(value)}
              </li>
            ))} 
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default App;
