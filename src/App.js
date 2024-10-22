import './App.css'; 
import Kanban from './Components/Kanban/Kanban';
import React, { useState } from 'react';
import { Navbar } from './Components/Navbar'; // Ensure you have this import if Navbar is in a separate file

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <Navbar 
        isOpen={isOpen}
        isDropdownOpen={isDropdownOpen}
        toggleNavbar={toggleNavbar}
        toggleDropdown={toggleDropdown}
      />
      <Kanban />
    </div>
  );
}

export default App;
