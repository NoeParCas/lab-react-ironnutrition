import React from 'react';
import { useState } from 'react';

function AddForm(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);

    const handleSubmit = (event) =>{
        //prevenir el comportamiento default del formulario
        event.preventDefault();
        props.addFood({name, calories, image})
    }

    const handleNameChange = (event) => setName(event.target.value);

    const handleCaloriesChange = (event) => setCalories(event.target.value)

    const handleImageChange = (event) => setImage(event.target.value)



  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>

    <label htmlFor="name">Name:</label>
        <input
          type="text"
          onChange={handleNameChange}
        />

    <label htmlFor="calories">Calories:</label>

        <input
          type="number"
          onChange={handleCaloriesChange}
        />

    <label htmlFor="image">Image:</label>
        <input
          type="text"
          onChange={handleImageChange}
        />

<br />
        <button type='submit'>
          Agregar Producto
        </button>
      </form>
    </div>
  );
}

export default AddForm;
