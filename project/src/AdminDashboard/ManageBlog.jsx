import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DisplayManageBlog from "./DisplayManageBlog";
import { useQuery } from "@tanstack/react-query";

const ManageBlog = () => {
  const [blogData, setBlogData] = useState([]);
    const {  refetch } = useQuery(["repoData"], () => {
        fetch("http://localhost:5000/blog")
            .then((res) => res.json())
            .then((data) => setBlogData(data))
            .catch((error) => console.error(error));
    })

  return (
    <div>
      <Header></Header>
      <div className="manage-blog ms-5 me-5 mt-5">
        <div className="row row-cols-lg-4">
          {blogData.length > 0 ? (
            blogData.map((blog) => <DisplayManageBlog key={blog.id} blog={blog} afterUpdate={(event) => refetch()} />)
          ) : (
            <p>Loading data...</p>
          )}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ManageBlog;
