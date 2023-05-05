import React from 'react';
import { Link } from 'react-router-dom';
import LikeComponent from '../components/LikeComponent';

const AllArt = (props) => {
    const { image, price, description, id, productName } = props.value || {};
    return (
        <div className="art-card">
        <Link to={`/art/${id}`} style={{textDecoration: "none"}}>
          <img src={image} alt="Art" />
        </Link>
        <div className="d-flex justify-content-between px-1 pt-3 align-items-center">
          <Link to={`/art/${id}`} style={{textDecoration: "none"}}>
            <span className="title">{productName}</span>
          </Link>
          <div>
            <LikeComponent showNum={false} />
            <span className="ms-2 ms-sm-3"><b>₹</b>{price}</span>
          </div>
        </div>
      </div>
    );
};

export default AllArt;