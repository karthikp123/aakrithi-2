import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMagnifyingGlass,
  faUserAlt,
  faClose,
} from "@fortawesome/free-solid-svg-icons";

import profileImg from "../assets/images/a1.jpg";
import SearchBar from "./SearchBar";
import UseAuth from "../Context/UseAuth";

function Header(props) {
  const { user, Logout } = UseAuth();
  // console.log(user);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSearchShow, setIsSearchShow] = useState(false);
  const [checkArtist, setCheckArtist] = useState(false);
  const [checkAdmin, setCheckAdmin] = useState(false);
  const [userData, setUserData] = useState([]);

  // search
  const handleSearchShow = () => {
    setIsSearchShow(!isSearchShow);
  };

  // Get current path
  const location = useLocation();

  // ADD SHADOW ON SCROLL
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClasses = hasScrolled ? "nav-shadow flex-column" : "flex-column";
  // check is the user is artist or not
  useEffect(() => {
    fetch("http://localhost:5000/admin")
      .then((res) => res.json())
      .then((data) => {
        const fetchDatAdmin = data.filter(
          (datas) => datas.email === user.email
        );
        if (fetchDatAdmin.length > 0) {
          setCheckAdmin(true);
        }
      })
      .catch((error) => console.error(error));
  }, [user.email]);
  //checck is the user is admin or not
  useEffect(() => {
    fetch("http://localhost:5000/becomeArtist")
      .then((res) => res.json())
      .then((data) => {
        const fetchData = data.filter((datas) => datas.email === user.email);
        if (fetchData.length > 0) {
          setCheckArtist(true);
        }
      })
      .catch((error) => console.error(error));
  }, [user.email]);

  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => {
        const fetchUserData = data.filter(
          (datas) => datas.email === user.email
        );
        setUserData(fetchUserData);
      })
      .catch((error) => console.error(error));
  }, [user.email]);

  return (
    <Navbar bg="white" expand="lg" className={headerClasses}>
      <Container>
        <Navbar.Brand href="#" id="logo">
          <span className="primary-text">A</span>AKRITHI
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarAakrithi" />
        <Navbar.Collapse id="navbarAakrithi">
          <Nav className="m-auto my-2 my-lg-0 gap-3 gap-md-4 gap-lg-5">
            <Link
              to="/"
              className={location.pathname === "/" ? "active pb-1" : "pb-1"}
            >
              Home
            </Link>
            <Link
              to="/explore"
              className={
                location.pathname === "/explore" ? "active pb-1" : "pb-1"
              }
            >
              Explore
            </Link>
            <Link
              to="/store"
              className={
                location.pathname === "/store" ? "active pb-1" : "pb-1"
              }
            >
              Store
            </Link>
            <Link to="/become_artist" className="pb-1">
              Become an Artist
            </Link>
            {checkArtist ? (
              <Link to="/addBlog" className="d-block link-hover">
                Add Blog
              </Link>
            ) : (
              ""
            )}
            {checkArtist ? (
              <Link to="/addArt" className="d-block link-hover">
                Add Art
              </Link>
            ) : (
              ""
            )}
            {checkAdmin ? (
              <Link to="/manageBlog" className="pb-1">
                Manage Blog
              </Link>
            ) : (
              ""
            )}
          </Nav>

          <div class="d-flex align-items-center mt-4 mt-lg-0 gap-4 nav-hr">
            {/* <Form className="d-flex mt-0 mt-lg-0 pointer">
              <FontAwesomeIcon
                icon={!isSearchShow ? faMagnifyingGlass : faClose}
                onClick={handleSearchShow}
              />
            </Form> */}
            {user.email ? (
              <>
                {/* <FontAwesomeIcon className="d-block" icon={faEnvelope} />
                <div className="userAvatar">
                  {props?.imageUrl ? (
                    <img
                      src={
                        // props?.imageUrl
                        profileImg
                      }
                      alt="Profile Avatar"
                    />
                  ) : (
                    <FontAwesomeIcon className="d-block" icon={faUserAlt} />
                  )}
                </div> */}
                <Link to="#" className="primary-btn-top">
                  <button className="primary-btn d-block" onClick={Logout}>
                    Log OUt
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login" className="d-block link-hover">
                  Sign in
                </Link>
                <Link to="#" className="primary-btn-top">
                  <button className="primary-btn d-block">Join</button>
                </Link>
              </>
            )}
            {userData[0] && userData[0].image ? (
              <Link to={`/dashboard/${userData[0].id}`} className="pb-1">
                <img src={userData[0].image} alt="" className="user_image" />
              </Link>
            ) : (
              ""
            )}
          </div>
        </Navbar.Collapse>
      </Container>
      {isSearchShow && (
        <Container>
          <SearchBar />
        </Container>
      )}
    </Navbar>
  );
}

export default Header;
