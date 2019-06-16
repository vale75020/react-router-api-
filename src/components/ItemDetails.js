import React, { useState, useEffect }from "react";


function ItemDetails({match}) { // match pour acceder aux props
    useEffect(() => {
        fetchItem();
        console.log(match)
    },[]);

    const [item, setItem] =useState({ images: {} });  // state
      
    const fetchItem = async () => {
      const fetchItem = await fetch(`https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=${match.params.id}`);
      const item = await fetchItem.json();
      setItem(item)
      console.log(item);
    }
  return (
          <div key={item.itemid}>
          <h1>{item.name}</h1>
          <img src={item.images.transparent} alt="" />
          </div>
  );
}

export default ItemDetails;
