import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

function Genre(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} {...props}>
      <DropdownToggle caret size="md" className='mt-5 mb-5'>
        Genre
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>All</DropdownItem>
        <DropdownItem>Comedy</DropdownItem>
        <DropdownItem>Action</DropdownItem>
        <DropdownItem>Romance</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
export default Genre;