import { Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const ExploreBox = (props) => {
  let navigate = useNavigate();
  const { title, id, image,status,description,email } = props.blog;
  const ViewDetails = (e) => {
    e.preventDefault();
    navigate("/exploreCardDetails", { state: { title: title, id:id, image:image,status:status, description:description, email:email} });
   
  }
  return (
    <Link to='' style={{textDecoration: "none"}}>
      <Row className="explore-box">
        <Col md={3} className="img p-1">
          <img src={image} alt="explore" />
        </Col>
        <Col md={9} className="text-center py-3">
          <h4 onClick={ViewDetails}>{title}</h4>
        </Col>
      </Row>
    </Link>
  )
}

export default ExploreBox