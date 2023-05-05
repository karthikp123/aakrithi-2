import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../Context/UseAuth";
import axios from 'axios';
import Header from "./Header";
import Footer from "./Footer";


const BecomeArtist = () => {
  const { user } = UseAuth();
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [category, setCategory] = useState('');
  const [contact, setContact] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  
  const [proof, setProof] = useState('');
  let navigate = useNavigate();

  function handleFileChange(event) {
    setFile(event.target.files[0]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', file);

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
          formData.append('image', img);
          formData.append('email', user.email);
          formData.append('name', name); 
          formData.append('proof', proof);
          formData.append('country', country);
          formData.append('city', city);
          formData.append('age', age);
          formData.append('gender', gender);
          formData.append('category', category);
          formData.append('contact', contact);
          formData.append('description', description);
          const ArtistData = {
            image: img,
            email:  user.email,
            name: name,
            proof: proof,
            country: country,
            city: city,
            age: age,
            gender: gender,
            category: category,
            contact: contact,
            description: description,
          };
          axios.post('http://localhost:5000/becomeArtist', ArtistData)
            .then(response => {
              console.log(response)
              navigate('/');
          })
          .catch(error => console.log(error));
        }
      })
  }
  return (
    <div>
      <Header/>
      <div className="row row-cols-lg-2 login-parent mt-5 mb-2">
        <div className="d-flex justify-content-center">
          <div>
            <h3 className="mb-4">Become an Artist</h3>
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
                <label for="exampleInputEmail1">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Name"
                  onChange={(e) =>setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label for="exampleInputEmail1">Country</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Country Name"
                  onChange={(e) =>setCountry(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label for="exampleInputEmail1">Region</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter nearest city name"
                  onChange={(e) =>setCity(e.target.value)}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label for="exampleInputEmail1">Age</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Age"
                  onChange={(e) =>setAge(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="genderSelect">Gender</label>
                <select
                  className="form-control"
                  id="genderSelect"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group mb-3">
                <label for="exampleInputEmail1">Category of Art</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Gender"
                  onChange={(e) =>setCategory(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label for="exampleInputEmail1">Contact Number</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Contact number"
                  onChange={(e) =>setContact(e.target.value)}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label for="exampleInputEmail1">proof</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Proof"
                  onChange={(e) =>setProof(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <textarea rows="2" className="w-100"
                  placeholder="Enter Description"
                  onChange={(e) => setDescription(e.target.value)}
                  required></textarea>
      
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
            <h3 className="text-center">Back</h3>
            <h3 className="text-center">To Become A artists!</h3>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default BecomeArtist;
