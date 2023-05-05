import axios from "axios";
import React, { useState } from "react";

const DisplayManageBlog = (props) => {
    const { title, id, image, status, description, email } = props.blog;
    const { afterUpdate } = props;
    const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const deleteBlog = async (id) => {
    try {
        await axios.delete(`http://localhost:5000/blog/${id}`);
        afterUpdate();

      } catch (error) {
        console.log(error);
      }
    };
    const updateBlog = async(id,staus) => {
        try {
            await axios.patch(`http://localhost:5000/blog/${id}`, { status: 'active' });
            afterUpdate();
          } catch (error) {
            console.log(error);
          }
    }
  return (
    <div>
      <div class="card h-100 pb-2 pe-2 ps-2">
        <img src={image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">Card Text</p>
        </div>
        <div className="d-flex justify-content-between">
          <button className="btn btn-danger" onClick={() => deleteBlog(id)}>
            Delete
          </button>
          <button className="btn btn-danger" onClick={() => updateBlog(id,status)}>{status}</button>
        </div>
      </div>
    </div>
  );
};

export default DisplayManageBlog;
