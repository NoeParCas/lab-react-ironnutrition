import React from 'react';
import {useState} from "react"
import { Card, Col, Button } from 'antd';



const FoodBox = (props) =>{
  const {image, name, calories} = props.food;
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addFoods({name, image, calories, quantity});
   
  }

  const handleChange = (event) => {
    setQuantity(event.target.value)
  }

  const handleDelete = (name) => {
    console.log(name, "ELIMINAR")
    props.deleteFood(name)
  }
  
  
  return (
    <div >

      
        {/* <div className="media-left">
            <img src={image} alt={name} width="200px"/>
        </div>
       
          <div className="content">
            <p>
              <strong>{name}</strong> <br />
              <small>Calories: {calories}</small>
            </p>
          </div>
      
      
      <form onSubmit={handleSubmit}>
            
              <input className="input" type="number" value={quantity} onChange={handleChange}/>
        
              <button className="button is-info">+</button>
          
      </form> */}


      <Col>
      <Card
        title={name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={image} height={60} alt={name} />
        <p>Calories:{calories}</p>
        
        <button type="button" onClick={() => handleDelete(name)}> Delete </button>
     
   

    <form onSubmit={handleSubmit}>
            
            <input className="input" type="number" value={quantity} onChange={handleChange}/>
      
            <button type="primary" className="button is-info">+</button>
        
    </form>
    </Card>
    </Col>
    </div>

  );
}

export default FoodBox