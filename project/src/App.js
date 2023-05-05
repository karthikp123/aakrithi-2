
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Explore from "./containers/Explore";
import {BrowserRouter as Router ,Route, Routes } from "react-router-dom";
import Store from "./containers/Store";
import Art from "./containers/ArtPage";
import Profile from "./containers/ArtistProfile";
import Home from "./containers/Home";
import ScrollToTop from './components/ScrollToTop';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import AuthProvider from './Context/AuthProvider';
import PractiseForm from './PractiseForm';
import BecomeArtist from './components/BecomeArtist';
import AddBlog from './containers/AddBlog';
import ExploreCardDetails from './components/ExploreCardDetails';
import ManageBlog from './AdminDashboard/ManageBlog';
import AddArt from './components/AddArt';
import Dashboard from './components/Dashboard';
import EditArt from './components/EditArt';
import EditUser from './components/EditUser';




function App() {
  return (
    <AuthProvider>
    <Router>
        <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />}  />
        <Route path="/art/:id" element={<Art />}  />
        <Route path="/store" element={<Store />}  />
        <Route path="/profile" element={<Profile />}  />
        <Route path="/login" element={<Login/>}  />
        <Route path="/register" element={ <Register/>}  />
        <Route path="/form" element={ <PractiseForm/>}  />
        <Route path="/become_artist" element={ <BecomeArtist/>}  />
        <Route path="/addBlog" element={ <AddBlog/>}  />
        <Route path="/exploreCardDetails" element={ <ExploreCardDetails/>}  />
        <Route path="/manageBlog" element={ <ManageBlog/>}  />
        <Route path="/addArt" element={ <AddArt/>}  />
        <Route path="/dashboard/:id" element={ <Dashboard/>}  />
        <Route path="/editArt" element={ <EditArt/>}  />
        <Route path="/editUser" element={ <EditUser/>}  />
      
       
      </Routes>
      </Router>
      </AuthProvider>
  );
}

export default App;
