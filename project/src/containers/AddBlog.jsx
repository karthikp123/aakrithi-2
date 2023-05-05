import React, { useState } from "react";
import axios from "axios";
import UseAuth from "../Context/UseAuth";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AddBlog = () => {
  const { user } = UseAuth();
  const [email, setEmail] = useState({});
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  let navigate = useNavigate();
  function handleFileChange(event) {
    setFile(event.target.files[0]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);

    const url = `https://api.imgbb.com/1/upload?key=6e348ee5df7e5ac0e70738f8b8b2f9f0`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const formData = new FormData();
          formData.append("image", img);
          formData.append("title", title);
          formData.append("description", description);
          formData.append("status", "pending");
          formData.append("email", user.email);
          const ArtistData = {
            image: img,
            title: title,
            description: description,
            status: "pending",
            email: user.email,
          };
          axios
            .post("http://localhost:5000/blog", ArtistData)
            .then((response) => {
              console.log(response);
              navigate("/");
            })
            .catch((error) => console.log(error));
        }
      });
  };
  return (
    <div>
      <Header />
      <div className="row row-cols-lg-2 login-parent mt-5 mb-2">
        <div className="d-flex justify-content-center">
          <div>
            <h3 className="mb-4">Add Blog</h3>
            <form style={{ width: "400px" }} onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label for="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={user.email}
                  readOnly
                />
              </div>
              <div className="form-group mb-3">
                <label for="exampleInputEmail1">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Title Of blog"
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <textarea
                  placeholder="Description Of Blog"
                  className="w-100"
                  onChange={(e) => setDescription(e.target.value)}
                  rows="10"
                ></textarea>
              </div>
              <div className="form-group mb-3">
                <input type="file" name="image" onChange={handleFileChange} />
              </div>
              <input
                type="submit"
                value="Save"
                className="mb-3 login-btn pt-2 pb-2 w-100"
              />
            </form>
          </div>
        </div>
        <div className="welcome_back d-flex align-items-center">
          <div className="mx-auto">
            <h3 className="text-center">Welcome</h3>
            <h3 className="text-center">To</h3>
            <h3 className="text-center">Add Blog!</h3>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AddBlog;
