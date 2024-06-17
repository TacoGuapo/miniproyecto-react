import Card from '../Card/Card';
import '../Card/Card.css'
function Apartments( { apartments }) {
  
  return (
    <div className='apartments'>
      <h2>Stays in Finland</h2>
      <div className='apartments-cards'>
        
        {apartments.map(apartment => (
          <Card 
            type={apartment.type}
            title={apartment.title}
            superHost={apartment.superHost}
            rating={apartment.rating}
            photo={apartment.photo}
            beds={apartment.beds}
            />
        ))}
      </div>
    </div>
  )
}

export default Apartments
