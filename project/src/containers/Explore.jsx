import { useEffect, useState } from "react";
import ExploreImage from "../assets/images/e1.jpg";
import ExploreImage2 from "../assets/images/e2.jpg";
import ExploreImage3 from "../assets/images/e3.jpg";
import ExploreBox from "../components/ExploreCard";
import Layout from "../components/Layout";

const exploredata = [
  {
    id: 1,
    img: ExploreImage,
    title: "Stone Carving: Know about this art of Karkala",
  },
  { id: 2, img: ExploreImage2, title: "Bronze art of Mangaluru" },
  { id: 3, img: ExploreImage3, title: "Clay art of Mangaluru" },
  {
    id: 4,
    img: ExploreImage,
    title: "Stone Carving: Know about this art of Karkala",
  },
  {
    id: 5,
    img: ExploreImage,
    title: "Stone Carving: Know about this art of Karkala",
  },
  {
    id: 6,
    img: ExploreImage,
    title: "Stone Carving: Know about this art of Karkala",
  },
];

const Explore = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/blog")
      .then((res) => res.json())
      .then((data) => {
        const fetchData = (data.filter((datas) => datas.status === 'active'))
        setData(fetchData);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <Layout>
      <h2>Explore</h2>
      <div className="d-flex gap-4 mt-5 gap-md-5 flex-column">
        
        {
          data.length>0?  data
          .map((blog) => (
            <ExploreBox
              key={blog.id}
              blog={blog}
            />
          )):<p>Loading data...</p>
        }
      </div>
    </Layout>
  );
};

export default Explore;
