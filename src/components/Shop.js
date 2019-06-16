import React, { useState, useEffect }from "react";
import { Link } from 'react-router-dom';


function Shop() {

    useEffect(() => {
        fetchItems();
    },[]);

    const [items, setItems] =useState([]);  // state

    const fetchItems = async () => {
        const data = await fetch('https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get');
        
        const items = await data.json()
        console.log(items.items);
        setItems(items.items)  // setState
    }
  return (
    <div>
      {items.map(item => (
          <div key={item.itemid}>
          <h1>
          <Link to={`/shop/${item.itemid}`}>{item.name}</Link>
          </h1>
          </div>
      ))}
    </div>
  );
}

export default Shop;
