import React from 'react';
import {useState} from "react"

const FoodBox = (props) =>{
  // console.log(props)
  const {image, name, calories} = props.food;
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    props.addFoods({name, image, calories, quantity});
  }

  const handleChange = (event) => {
    setQuantity(event.target.value)
  }
  
  
  return (
    <div className="box">

      
        <div className="media-left">
            <img src={image} alt={name} width="200px"/>
        </div>
       
          <div className="content">
            <p>
              <strong>{name}</strong> <br />
              <small>{calories}</small>
            </p>
          </div>
      
      
      <form onSubmit={handleSubmit}>
            
              <input className="input" type="number" value={quantity} onChange={handleChange}/>
        
              <button className="button is-info">+</button>
          
      </form>

    </div>
  );
}

export default FoodBox