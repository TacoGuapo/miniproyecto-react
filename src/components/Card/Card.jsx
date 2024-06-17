function Card({ rating, type, title, photo, beds, superHost }) {

    return (

        <div className="apartment-card">
            <div className='photo-card'>
                <img src={photo} alt={type} />
            </div>
            <div>
                <div className="details">
                    {superHost && (
                        <p className="superhost-badge">SUPER HOST</p>
                    )}
                    <p>  {type}. {beds} Beds</p>
                    <p className="star">★{rating}</p>

                </div>
                <h2 className="title-apartment">{title}</h2>

            </div>
        </div>
    )
}

export default Card