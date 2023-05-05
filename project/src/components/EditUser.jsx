import React, { useState } from "react";
import Header from "./Header";
import UseAuth from "../Context/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";

const EditUser = () => {
  const { user } = UseAuth();
  const location = useLocation();
  const { email, id, image, name, number, address } = location.state;

  const [newFile, setFile] = useState(null);
  const [newName, setName] = useState(name);
  const [newNumber, setnewNumber] = useState(number);
  const [newAdress, setnewAdress] = useState(address);
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
            axios.patch(`http://localhost:5000/user/${id}`, {
              image: img,
              name: newName,
              number: newNumber,
              address: newAdress,
            });
            navigate(`/dashboard/${id}`);
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
            <h3 className="mb-4">Edit User</h3>
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
                <label htmlFor="exampleInputEmail1">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Name"
                  defaultValue={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label for="exampleInputEmail1">Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter number"
                  defaultValue={number}
                  onChange={(e) => setnewNumber(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label for="exampleInputEmail1">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Address"
                  defaultValue={address}
                  onChange={(e) => setnewAdress(e.target.value)}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <input
                  type="file"
                  name="image"
                  onChange={handleFileChange}
                  required
                />
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
            <h3 className="text-center">Edit User!</h3>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default EditUser;
