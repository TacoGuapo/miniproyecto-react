import React from 'react'
import './Modal.css'



function Modal({ searchCity, setOpenModal, setSearchCity, originalApartments, search, setApartments }) {
  function search_apartament() {
    let filtered = [...originalApartments];

    if (search.trim() !== '') {
      filtered = filtered.filter(apartment => apartment.city.toLowerCase().includes(search.toLowerCase()))
    }

    if (searchCity !== '') {
      filtered = filtered.filter(apartment => apartment.city.toLowerCase() === searchCity.toLocaleLowerCase());
    }
    setApartments(filtered);
  }

  return (


    <div className='modal'>

      <div className="modal-componets">
        <button className="close-modal" onClick={() => setOpenModal(false)}>&times;</button>
        <div className="white">
          
          <select className="select" value={searchCity} onChange={(e) => setSearchCity(e.target.value)}>

            <option className="options" value="">Location All cities</option>
            <option className="options" value="Helsinki">Helsinki, Finland </option>
            <option className="options" value="Turku">Turku, Finland</option>
            <option className="options" value="Vaasa">Vaasa, Finland</option>
          </select>
          <div className='guests'>
            <p><strong>GUESTS </strong></p>
            <p> Add Guests</p>
          </div>
          <button  className="searchButton" onClick={search_apartament}><img src="./public/lupa.png" alt="" />Search</button>
        </div>
        <div>

        </div>
      </div>

    </div>
  )
}

export default Modal