import noImg from "../assets/images/noImage.jpg";
import ArtCard from "../components/ArtCard";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
import coverImage from "../assets/images/cover.jpg";
import CategoryCard from "../components/CategoryCard";
import Layout from "../components/Layout";

// categories
import CategoryImage1 from "../assets/images/c1.jpg";
import CategoryImage2 from "../assets/images/c2.jpg";
import CategoryImage3 from "../assets/images/c3.jpg";
import CategoryImage4 from "../assets/images/c4.jpg";
import CategoryImage5 from "../assets/images/c5.jpg";
import CategoryImage6 from "../assets/images/c6.jpg";

// artist
import artist1 from "../assets/images/a1.jpg";
import artist2 from "../assets/images/a2.jpg";
import artist3 from "../assets/images/a3.jpg";
import artist4 from "../assets/images/a4.jpg";
import artist5 from "../assets/images/a5.jpg";
import artist6 from "../assets/images/a6.jpg";
import { useEffect, useState } from "react";
import AllArt from "./AllArt";

// data---------------------------
const categories = [
  { id: 1, img: CategoryImage1, title: "Bamboo Art" },
  { id: 2, img: CategoryImage2, title: "Clay Art" },
  { id: 3, img: CategoryImage3, title: "Metal Art" },
  { id: 4, img: CategoryImage4, title: "Fabric Art" },
  { id: 5, img: CategoryImage5, title: "Varli Art" },
  { id: 6, img: CategoryImage6, title: "Cultural Art" },
];

const artist = [
  { id: 1, img: artist1, name: "Ram Prasad", prof: "Bamboo Art" },
  { id: 2, img: artist2, name: "Abhinav Rai", prof: "Metal Art" },
  { id: 3, img: artist3, name: "Ankith Acharya", prof: "Stone Sculpture" },
  { id: 4, img: artist4, name: "Medhini SHetty", prof: "Clay Art" },
  { id: 5, img: artist5, name: "Pranav Gowda ", prof: "Fabric Art" },
  { id: 6, img: artist6, name: "Krishna Acharya", prof: "Varli Art" },
];

const arts = [
  { id: 1, img: noImg, title: "Clay Pottery", price: "600" },
  { id: 2, img: noImg, title: "Lord Krishna Silver Sculpter", price: "1700" },
  { id: 3, img: noImg, title: "Ganesha Clay Pottery", price: "400" },
  { id: 4, img: noImg, title: "Clay Pottery", price: "600" },
  { id: 5, img: noImg, title: "Bamboo Toy", price: "300" },
  { id: 6, img: noImg, title: "Yakshagana Based Medal", price: "800" },
];

const Home = () => {
  const [data, setData] = useState([]);
  const [allart, setAllArt] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/becomeArtist")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/art")
      .then((res) => res.json())
      .then((data) => setAllArt(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <Layout>
      {/* main cover */}
      <section className="header position-relative">
        <img src={coverImage} alt="Cover Image" className="w-100" />
        <div className=" text-white d-flex justify-content-center align-items-center flex-column position-absolute start-0 end-0 position-absolute top-0 bottom-0 w-100 h-100">
          <div style={{ maxWidth: "625px" }}>
            <h1>EXPLORE THE WORLD OF REGIONAL ARTS</h1>
            <div className="d-flex flex-wrap px-3 gap-4 align-items-center justify-content-center mt-3 mt-md-5">
              <button className="btn-white-outline">STORE</button>
              <button className="btn-blue">EXPLORE</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="d-flex justify-content-between pt-2 mb-4 mt-5">
          <h2>Categories</h2>
          <Link className="text-black" to="/store">
            See All
          </Link>
        </div>
        <Row style={{ gap: "20px 0" }}>
          {categories &&
            categories.map((cat) => (
              <Col sm={6} md={4} lg={2} className="ps-0" key={cat.id}>
                <CategoryCard img={cat.img} name={cat.title} />
              </Col>
            ))}
        </Row>
      </section>
      <section className="pt-3">
        <h2 className="mb-4 mt-5 text-center">Recommended for you</h2>
        <section className="pt-2">
          <div className="d-flex justify-content-between mb-4 mt-4">
            <h2>Artists</h2>
            <Link className="text-black" to="/store">
              See All
            </Link>
          </div>
          <Row style={{ gap: "20px 0" }}>
            {data.length > 0 ? (
              data.map((art) => (
                <Col sm={6} md={4} lg={2} className="ps-0" key={art.id}>
                  <ProfileCard art={art} />
                </Col>
              ))
            ) : (
              <p>Loading data...</p>
            )}
          </Row>
        </section>
        <section className="pt-5">
          <h2 className="mb-4 mt-5">Arts</h2>
          <Row style={{ gap: "20px 0" }}>
            {allart.length > 0 ?
            allart.map((a) => (
              <Col md={6} lg={4} key={a.id}>
                <AllArt value={a} />
              </Col>
            )): <p>Loading data...</p>}
          </Row>
        </section>
      </section>
    </Layout>
  );
};

export default Home;
