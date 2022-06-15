import React from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddForm from './components/AddForm';
import Search from './components/Search';
import AddFoodList from './components/AddFoodList';

import { useState } from 'react';

function App() {
  const [foodShow, setFood] = useState(foods);
  const [foodToRender, setFoodToRender] = useState(foods);
  const [showForm, setShowForm] = useState(false);
  const [addedFoods, setAddedFoods] = useState([]);

  const addFood = (food) => {
    setFood([food, ...foodShow]);
    setFoodToRender([food, ...foodShow]);
  };

  const searchFood = (searchQuery) => {
    // console.log(searchQuery, "HOLA");

    const filteredFood = foodShow.filter((eachFood) => {
      return eachFood.name.includes(searchQuery);
    });
    setFoodToRender(filteredFood);
  };

  const addFoods = (foodToAdd) => {
    //console.log('producto a añadir es:', foodToAdd);
    setAddedFoods([...addedFoods, foodToAdd]);
  };


  const deleteFood = (name) => {
    const foodToDelete = foodShow.filter(eachFood =>
      eachFood.name === name
    )
    let copyFoodToRender = [...foodToRender]
    copyFoodToRender.splice(foodToDelete,1)

    //console.log(foodToDelete, "despues de eliminar comida");
    setFoodToRender(copyFoodToRender);
  }

  return (
    <div className="App">
      <h3>Food List</h3>

      <div className="header-container">
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Ocultar Formulario' : 'Ver Formulario'}
      </button>

      {showForm && <AddForm addFood={addFood} />}

      <Search searchFood={searchFood} />
      </div>

    <div className="list-container">

    <div className="food-container">
      {foodToRender.map((eachFood, index) => {
        return (
          <div key={index + eachFood.name} className="food">
          <FoodBox 
          food={eachFood} 
          addFoods={addFoods} 
          deleteFood={deleteFood}
          />
          </div>
          )

      })}
    </div>

      <div className="addFood-container">
      <AddFoodList addedFoods={addedFoods}/>
      </div>
    </div>
      
    </div>
  );
}

export default App;
