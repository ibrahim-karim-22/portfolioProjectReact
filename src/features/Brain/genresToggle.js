// Genre.js
import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function Genre({ onSelectGenre, isMovie }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  const handleGenreSelection = genre => {
    onSelectGenre(genre);
    setDropdownOpen(false);
  };

  const genreOptions = isMovie
    ? ['All', 'Comedy', 'Drama', 'Romance']
    : ['All', 'Educational', 'News', 'Documentary']; 

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret size="md" className="mt-5 mb-5">
        {isMovie ? 'Movie Genre' : 'TV Genre'}
      </DropdownToggle>
      <DropdownMenu>
        {genreOptions.map(genre => (
          <DropdownItem key={genre} onClick={() => handleGenreSelection(genre)}>
            {genre}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

export default Genre;
