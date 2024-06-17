import { useEffect, useState } from 'react'
import Apartments from './components/Apartments/Apartments'
import Nav from './components/Nav/Nav'
import Modal from './components/Modal/Modal'

function App() {
  const [search, setSearch] = useState('')
  const [searchCity, setSearchCity] = useState('')
  const [openModal, setOpenModal] = useState(false)
  const [apartments, setApartments] = useState([]);
  const [originalApartments, setOriginalApartments] = useState([]);

  

  
  useEffect(() => {
    fetch('stays.json')
    .then(response => {
      if(!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setApartments(data);
      setOriginalApartments(data);
    })
    
    .catch(error => {
      console.error('Error fetching apartments: ', error);
    });
  }, []);


  
  return (
    <>
    
    <div>
      
      { openModal &&
      <Modal search={search} originalApartments={originalApartments} searchCity={searchCity} setSearchCity={setSearchCity} setApartments={setApartments} setOpenModal={setOpenModal}/>
      }
      
      <Nav search={search} setSearch={setSearch} setOpenModal={setOpenModal} originalApartments={originalApartments} searchCity={searchCity} apartments={apartments}/>
      <Apartments apartments={apartments}/>
    </div>
    </>
  )
}

export default App