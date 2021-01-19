import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [searched, setSearched] = useState("");
  
  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then((listingsArray) => setListings(listingsArray))
  }, [])

function handleDeleteListing(id) {
  const remainingListings = listings.filter((listing) => listing.id !== id)
  setListings(remainingListings);
}

const displayedListings = listings.filter((listing) => {
  return listing.description.toLowerCase().includes(searched.toLowerCase());
})

  return (
    <div className="app">
      <Header onSearch={setSearched} />
      <ListingsContainer listings={displayedListings} onDeleteListing={handleDeleteListing}/>
    </div>
  );
}

export default App;
