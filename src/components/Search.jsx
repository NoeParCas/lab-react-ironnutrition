import React from 'react'
import { useState } from "react";

function Search(props) {
    const [search, setSearch] = useState("");

    const handleChange = (event) => {
        setSearch(event.target.value);

        props.searchFood(event.target.value);
    }

  return (
    <div className='container'>
    <label htmlFor="search">Buscar:</label>
    <input type="text" onChange={handleChange} />
    </div>
  )
}

export default Search