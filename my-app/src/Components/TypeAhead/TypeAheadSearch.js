// TypeAheadSearch.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TypeAheadSearch = ({ data, searchKey, onItemSelected }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  // Handle input changes and filter data
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === '') {
      setFilteredSuggestions([]);
    } else {
      const filtered = data.filter((item) =>
        item[searchKey].toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    }
  };

  // Handle item selection
  const handleSelect = (item) => {
    setSearchTerm(item[searchKey]);
    setFilteredSuggestions([]);
    onItemSelected(item);
  };

  return (
    <div className="container mt-4">
      {/* Input field with Bootstrap form-control and spacing classes */}
      <div className="form-group">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Search technology..."
          value={searchTerm}
          onChange={handleSearch}
          style={{ borderRadius: '7px' }}
        />
      </div>

      {/* Displaying filtered suggestions with Bootstrap classes */}
      {filteredSuggestions.length > 0 && (
        <ul className="list-group shadow-sm mt-2">
          {filteredSuggestions.map((item) => (
            <li
              key={item.id}
              className="list-group-item list-group-item-action"
              onClick={() => handleSelect(item)}
              style={{ cursor: 'pointer', borderRadius: '10px', marginBottom: '5px' }}
            >
              <strong>{item[searchKey]}</strong>
              <br />
              <small className="text-muted">{item.category}</small>
            </li>
          ))}   
        </ul>
      )}
    </div>
  );
};

// Prop types for validation
TypeAheadSearch.propTypes = {
  data: PropTypes.array.isRequired,
  searchKey: PropTypes.string.isRequired,
  onItemSelected: PropTypes.func.isRequired,
};

export default TypeAheadSearch;