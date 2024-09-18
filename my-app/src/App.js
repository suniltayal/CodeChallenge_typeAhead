// App.js
import React, { useState } from 'react';
import TypeAheadSearch from './Components/TypeAhead/TypeAheadSearch';
import typeAheadData from './Components/TypeAhead/TypeAheadData';
import './App.css'; // Assuming you have this file to hold custom styles

function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  // Function to handle item selection
  const handleItemSelected = (item) => {
    console.log('Selected Item:', item);
    setSelectedItem(item);
  };

  return (
    // Centering the container with d-flex and Bootstrap utility classes
    <div className="app-container d-flex justify-content-center align-items-center vh-100">
      <div className="w-50"> {/* Optional width control */}
        <h1 className="text-center mb-4">Type Ahead Search Example</h1>
        <TypeAheadSearch
          data={typeAheadData}
          searchKey="name"
          onItemSelected={handleItemSelected}
        />

        {selectedItem && (
          <div className="mt-3">
            <h4>Selected Technology Details:</h4>
            <p><strong>Name:</strong> {selectedItem.name}</p>
            <p><strong>Category:</strong> {selectedItem.category}</p>
            <p><strong>Type:</strong> {selectedItem.type}</p>
            <p><strong>Description:</strong> {selectedItem.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
