import React, { useState } from 'react';
import axios from 'axios';

function PractiseForm() {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      console.log(formData);
      axios.post('http://localhost:5000/data', formData)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default PractiseForm;
