import React, { useEffect, useState } from "react";
import UseAuth from "../Context/UseAuth";
import Header from "./Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";
import DisplayArtInDashboard from "./DisplayArtInDashboard";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const [allArtData, setAllArtData] = useState([]);
  const { user } = UseAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/user/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data);
      })
      .catch((error) => console.error(error));
  }, [user.email, id]);

  const { refetch } = useQuery(["repoData"], () => {
    fetch(`http://localhost:5000/art`)
      .then((res) => res.json())
      .then((data) => {
        const fetchArtData = data.filter((datas) => datas.email === user.email);
        setAllArtData(fetchArtData);
      })
      .catch((error) => console.error(error));
  });
  const edituser = (id) => {
    navigate("/editUser", {
      state: {
        email: userInfo.email,
        id: userInfo.id,
        image: userInfo.image,
        name:userInfo.name,
        number:userInfo.number,
        address:userInfo.address,
      
      },
    });
    
  }
  return (
    <div>
      <Header></Header>
      <div className="container mt-5 mb-5">
        <div className="user_profile p-5">
          <div className="row row-cols-lg-2">
            <div>
              <img src={userInfo.image} alt="" className="dashboard_image" />
              <h5>{userInfo.name}</h5>
            </div>
            <div>
              <div className="d-flex justify-content-end mb-3  ">
                <button type="button" style={{ color: "black" }}   onClick={() => edituser(userInfo.id)}>
                  Edit
                </button>
              </div>
              <div className="address-dasboard-card p-3">
                <h5 className="text-center">Address: {userInfo.address}</h5>
                <h5 className="text-center">
                  Contact Number:{userInfo.number}
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="button-container mt-3 mb-3">
            <button class="left-rounded w-100 me-2">Like Products</button>
            <button class="right-rounded w-100">Orders</button>
          </div>
        </div>
        <hr className="mt-5" />

        <h5 className="text-center mt-5 mb-5">Artist Management</h5>
        {/* <button class="w-25 me-2" style={{ backgroundColor: "#143E7C",color:"white" }}>Create New Art</button> */}

        <div className="row row-cols-lg-3 mb-3">
          {allArtData.length > 0 ? (
            allArtData.map((a) => (
              <DisplayArtInDashboard
                key={a.id}
                value={a}
                afterUpdate={(event) => refetch()}
              ></DisplayArtInDashboard>
            ))
          ) : (
            <p>Loading data...</p>
          )}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
