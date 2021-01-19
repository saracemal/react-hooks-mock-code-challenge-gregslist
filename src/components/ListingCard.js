import React, {useState} from "react";

function ListingCard({listing, onDeleteListing}) {
  const {id, description, image, location} = listing;

  const [favorite, setFavorite] = useState(false)

  function handleFavoriteToggle() {
    setFavorite((favorite) => !favorite)
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    });
    onDeleteListing(id);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={handleFavoriteToggle}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavoriteToggle} >☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick} >🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
