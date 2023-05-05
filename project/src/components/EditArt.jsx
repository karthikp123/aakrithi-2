import React, { useState } from "react";
import UseAuth from "../Context/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import Dashboard from "./Dashboard";

const EditArt = () => {
  const { user } = UseAuth();
  const location = useLocation();
  const {
    prodcutName,
    id,
    image,
    availableQty,
    description,
    email,
    file,
    price,
    size,
  } = location.state;

  const [newFile, setFile] = useState(null);
  const [newProdcutName, setProdcutName] = useState(prodcutName);
  const [newAvailableQty, setAvailableQty] = useState(availableQty);
  const [newPrice, setPrice] = useState(price);
  const [newDescription, setDescription] = useState(description);
  const [newSize, setNewSize] = useState(size);
  let navigate = useNavigate();

  function handleFileChange(event) {
    setFile(event.target.files[0]);
  }
  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", newFile);
    const url = `https://api.imgbb.com/1/upload?key=6e348ee5df7e5ac0e70738f8b8b2f9f0`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
            const img = result.data.url;
           
          try {
            axios.patch(`http://localhost:5000/art/${id}`, {
              image: img,
              productName: newProdcutName,
              availableQty: newAvailableQty,
              description: newDescription,
              price: newPrice,
              size: newSize,
            });
            navigate(`/dashboard/${id}`)
          } catch (error) {
            console.log(error);
          }
        }
      });
  };
  return (
    <div>
      <Header />
      <div className="row row-cols-lg-2 login-parent mt-5 mb-2">
        <div className="d-flex justify-content-center">
          <div>
            <h3 className="mb-4">Edit Art</h3>
            <form style={{ width: "400px" }} onSubmit={handleUpdate}>
              <div className="form-group mb-3">
                <label for="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  defaultValue={email}
                  readOnly
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="exampleInputEmail1">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Product Name"
                  defaultValue={prodcutName}
                  onChange={(e) => setProdcutName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label for="exampleInputEmail1">Available Quantity</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter availabe quantity"
                  defaultValue={availableQty}
                  onChange={(e) => setAvailableQty(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <textarea
                  placeholder="Description Of Blog"
                  className="w-100"
                  defaultValue={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows="5"
                ></textarea>
              </div>
              <div className="form-group mb-3">
                <label for="exampleInputEmail1">price</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter price"
                  defaultValue={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label for="exampleInputEmail1">Size</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter size"
                  defaultValue={price}
                  onChange={(e) => setNewSize(e.target.value)}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <input type="file" name="image" onChange={handleFileChange} required/>
              </div>
              <input
                type="submit"
                defaultValue="Save"
                className="mb-3 login-btn pt-2 pb-2 w-100"
              />
            </form>
          </div>
        </div>
        <div className="welcome_back d-flex align-items-center">
          <div className="mx-auto">
            <h3 className="text-center">Welcome</h3>
            <h3 className="text-center">To</h3>
            <h3 className="text-center">Edit Art!</h3>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default EditArt;
