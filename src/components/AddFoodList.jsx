import React from 'react'

function AddFoodList(props) {
    console.log(props.addedFoods)

    const total= props.addedFoods.reduce((acc, eachAddedFood) => {
        return acc + (eachAddedFood.quantity * eachAddedFood.calories)
    },0)


  return (
    <div>
        <h3>Food List</h3>

        {props.addedFoods.map((eachAddedFood, index) => {
            return <p key={index + eachAddedFood.name}> 
            {eachAddedFood.name}:
            {eachAddedFood.quantity} x {eachAddedFood.calories}: {eachAddedFood.quantity * eachAddedFood.calories}
            </p>
        })}
        <p>Total{total}</p>

    </div>
  )
}

export default AddFoodList
