import React, { useState } from "react";
// import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const Navbar=({setCountrys})=>
{
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
   // export default class Navbar extends Component {
   //   render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              News Hunter
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" to="/">Home</a>
                </li>
                <li className="nav-item"><Link className="nav-link" to="/business">business</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/entertainment">entertainment</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/health">health</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/science">science</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/sports">sports</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/technology">technology</Link></li>
          
              </ul>
            </div>
            <div>
      <Button
        id="basic-button"
        variant="contained" 
        size="small"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        
      >
        Country
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={()=>{setCountrys("in");setAnchorEl(null)}}>India</MenuItem>
        <MenuItem onClick={()=>{setCountrys("us");setAnchorEl(null)}}>USA</MenuItem>
        <MenuItem onClick={()=>{setCountrys("gb");setAnchorEl(null)}}>UK</MenuItem>
        <MenuItem onClick={()=>{setCountrys("fr");setAnchorEl(null)}}>France</MenuItem>
        <MenuItem onClick={()=>{setCountrys("au");setAnchorEl(null)}}>Australia</MenuItem>
        <MenuItem onClick={()=>{setCountrys("br");setAnchorEl(null)}}>Brazil</MenuItem>
      </Menu>
    </div>
          </div>

        </nav>
      </>
    );
  }
export default Navbar