import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function Genre({ onSelectGenre, category }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  const handleGenreSelection = genre => {
    onSelectGenre(genre);
    setDropdownOpen(false);
  };

  const genreOptions = {
    Movie: ['All', 'Comedy', 'Drama', 'Romance'],
    TV: ['All', 'Educational', 'News', 'Documentary'],
    Globe: ['All', 'Italy', 'England', 'Category3']
  };

  const selectedGenres = genreOptions[category];
  const genreTitle = category === 'Movie' ? 'Movie Genre' : category === 'TV' ? 'TV Genre' : 'Globe Genre';

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret size="md" className="mt-5 mb-5">
        {genreTitle}
      </DropdownToggle>
      <DropdownMenu>
        {selectedGenres.map(genre => (
          <DropdownItem key={genre} onClick={() => handleGenreSelection(genre)}>
            {genre}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

export default Genre;
