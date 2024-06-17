import React from 'react';
import './Nav.css';

function Nav({ setOpenModal, searchCity, apartments }) {

  const currentCity = apartments.find(apartment => apartment.city.toLowerCase() === searchCity.toLowerCase());

  return (
    <div className='nav'>
  <picture className='main-logo'>
    <img src="./public/logo.png" alt="Logo" />
  </picture>
  <div className='open-modal'>
    <button className="button-modal" onClick={() => setOpenModal(true)}>
      <div className="flex-container">
        <h3>{currentCity ? `${currentCity.city}, ${currentCity.country}` : 'Select City'}</h3>
        <span className='lupa'>Add Guests</span>
        <img src="./public/lupa.png" alt="lupa" />
      </div>
    </button>
  </div>
</div>
  );
}

export default Nav;
