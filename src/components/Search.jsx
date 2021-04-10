import React from 'react';

const Search = ({ search, searchInput, handleSearch }) => {
  return (
    <div className="Search"> 
      <input className="input" 
            type="text" 
            value={search} 
            ref={searchInput} 
            onChange={handleSearch} 
            placeholder= "type here..."
            />
    </div>
  );
}

export default Search;