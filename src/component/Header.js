import { NavLink } from "react-router-dom";

import "./components.css";

function Header() {
  return (
    <>
      <div style={{background:'blue',color:'white',marginBottom:'20px',height:'60px',borderRadius:'5px'}} className="text-center d-flex flex-wrap justify-content-center mt-2 container">
        <h1 style={{fontSize:'30px',marginTop:'10px'}} className="brand text-center">
          CRUD - USERS
          <br />
        </h1>

        <NavLink style={{marginTop:'15px',textDecoration:'none',color:'white'}}
          exact
          to="/"
          className="navlink brand mr-4 ml-auto"
          activeClassName="activenavlink"
        >
          <h4 style={{fontSize:'20px'}}>HOME</h4>
        </NavLink>

        <NavLink style={{marginTop:'15px',textDecoration:'none',color:'white'}}
          to="/createuser"
          className="navlink"
          activeClassName="activenavlink"
        >
          <h4 style={{fontSize:'20px'}}>ADD USER</h4>
        </NavLink>
      </div>
    </>
  );
}

export default Header;
