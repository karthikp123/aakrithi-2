import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import profileImg from '../assets/images/jacob.jpg'
import noImg from '../assets/images/noImage.jpg'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ProfileBasic from '../components/ProfileBasic'
import Layout from '../components/Layout'
import LikeComponent from '../components/LikeComponent';
import UseAuth from '../Context/UseAuth'

// data
const profileData = {
  id:"1",
  img: profileImg,
  name: "Abhinav Rai",
  prof: "Metal Art",
  desc: "Lorem i`psum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laboru numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiuoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit.",
  size: 160,
  price: 1700,
  likes: 22,
  title: "Lord Krosha Silver Sculpter",
}

const Art = () => {
  const { user } = UseAuth();
  let navigate = useNavigate();
  const { id } = useParams();
  const [artDescription,setArtDescription]=useState({})
  const [artistInfo,setArtistInfo]=useState({})
  //console.log(id);
  const [like, setLike] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/art/${id}`) 
  .then(response => response.json())
  .then(data => {
    setArtDescription(data);
  })
  .catch(error => console.error(error));
  }, [id])
  
  useEffect(() => {
    fetch(`http://localhost:5000/becomeArtist/${user.email}`)
      .then(response => response.json())
      .then(data => {
        setArtistInfo(data)
      })
      .catch(error => console.error(error));
  }, [user.email]);

  const viewMore = (e) => {
    navigate("/profile", { state: { image: artistInfo.image, id:artistInfo.id, email:artistInfo.email, contact:artistInfo.contact, description:artistInfo.description, country:artistInfo.country, name:artistInfo.name, proof:artistInfo.proof} });
  }
 
  const handleLike = () => {
    setLike(!like)
  }

  return (
    <Layout>
      <div className="main-img mx-auto mb-5 mt-3">
        <img src={noImg} alt="no image" />
      </div>
      <Row className="gradiant-box p-3 p-md-5 py-5 text-white flex-column-reverse gap-5 gap-lg-0 flex-lg-row">
        <Col lg={8}>
        <div className='art-detail'>
          <div className="d-flex flex-wrap-reverse gap-2 justify-content-between align-items-center justify-content-lg-start">                
            <h2>{artDescription.prodcutName}</h2>
            <div className="d-flex ms-lg-5 ps-lg-5 flex-column">
              <LikeComponent showNum="true" num={profileData.likes} />
            </div>
          </div>
          <p className='title'>Description</p>
          <p>
            {artDescription.description}
          </p>
          <p className='size'>Availabe Quantity: {artDescription.availableQty} </p>
          <p className='size'>size: {artDescription.size} </p>
          <div className="d-flex align-items-center flex-wrap justify-content-between justify-content-lg-start">
            <p className='price'>Price: ₹{artDescription.price}</p> 
            <button className='btn-white'>Buy</button>
          </div>
        </div>
        </Col>
        <Col lg={4}>
          <div className="profile-overview d-flex flex-column">
            <ProfileBasic img={artistInfo.image} name={artistInfo.name} prof={artistInfo.prof} />
            <button className="btn-black" onClick={viewMore}>View Profile</button>
          </div>
        </Col>
      </Row>
    </Layout>
  )
}

export default Art;