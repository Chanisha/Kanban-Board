import React, { useState } from 'react';
import './Navbar.css';
import Title1Content from './Title1Content/Title1Content';
import Title2Content from './Title2Content/Title2Content';
import Status1Content from './Status1Content/Status1Content';
import Status2Content from './Status2Content/Status2Content';
import Status3Content from './Status3Content/Status3Content';

export const Navbar = ({
  isOpen,
  isDropdownOpen,
  toggleDropdown,
  toggleOrderingDropdown: toggleOrderingDropdownProp,
}) => {
  const [isGroupingOpen, setIsGroupingOpen] = useState(false);
  const [isOrderingOpen, setIsOrderingOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('Status');
  const [selectedTitle, setSelectedTitle] = useState('Title');
  const handleStatusSelect = (status) => {
    setSelectedStatus(status);
    setIsGroupingOpen(false);
    setSelectedTitle('Title');
  };

  const handleTitleSelect = (title) => {
    setSelectedTitle(title);
    setIsOrderingOpen(false);
    setSelectedStatus('Status');
  };

  const toggleGroupingDropdown = () => {
    setIsGroupingOpen((prev) => !prev);
  };

  const toggleOrderingDropdownLocal = () => {
    setIsOrderingOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="navbar">
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>
            Display ▼
          </button>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <div className="rectangle">
                <div className="grouping">
                  <h1>Grouping</h1>
                  <button className="grouping-dropbtn" onClick={toggleGroupingDropdown}>
                    {selectedStatus} ▼
                    {isGroupingOpen && (
                      <div className="status-options">
                        <p onClick={() => handleStatusSelect('Status 1')}>Status</p>
                        <p onClick={() => handleStatusSelect('Status 2')}>User</p>
                        <p onClick={() => handleStatusSelect('Status 3')}>Priority</p>
                      </div>
                    )}
                  </button>
                </div>

                <div className="ordering">
                  <h2>Ordering</h2>
                  <button className="ordering-dropbtn" onClick={toggleOrderingDropdownLocal}>
                    {selectedTitle} ▼
                    {isOrderingOpen && (
                      <div className="title-options">
                        <p onClick={() => handleTitleSelect('Title 1')}>Title</p>
                        <p onClick={() => handleTitleSelect('Title 2')}>Priority</p>
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="content">
        {selectedStatus === 'Status 1' && <Status1Content />}
        {selectedStatus === 'Status 2' && <Status2Content />}
        {selectedStatus === 'Status 3' && <Status3Content />}
        {selectedTitle === 'Title 1' && <Title1Content />}
        {selectedTitle === 'Title 2' && <Title2Content />}
      </div>
    </>
  );
};

export default Navbar;
