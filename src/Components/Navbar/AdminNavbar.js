import React, { useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import BackButton from "../BackButton";
import "./Nav.css";

const UserNavbar = () => {
const [name, setname] = useState(localStorage.getItem('ecladminname'));

  let history = useHistory();


  const HandleLogout = () => {
    history.push("/home");
    localStorage.removeItem("ecladmintoken");
    localStorage.removeItem("ecladminname");
    localStorage.removeItem("ecladminmail");
    localStorage.removeItem("eclusertoken");
    localStorage.removeItem("eclfullname");
    localStorage.removeItem("eclemail");
    localStorage.removeItem("eclrefcode");
    localStorage.removeItem("eclphone");
    localStorage.removeItem("results");
    localStorage.removeItem("trackid");
  };

  return (
    <>
    <div className="usernav">
    <div className="adminnav">
      <nav
        class="navbar navbar-expand-sm navbar-light fixed-top"
        id="navbar main"
      >
        <div class="container" id="logo">
          <BackButton/>
          <Link to="/admin" className="navbar-brand">
            <h5> ECLIPSE Admin</h5>
          </Link>

          {/* <ul class="navbar-nav ml-auto nav-flex-icons"> */}
          <li class="nav-item dropdown avatar list-unstyled ml-auto">
            <a
              class="nav-link dropdown-toggle p-0 user"
              id="navbarDropdownMenuLink-333"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg"
                class="rounded-circle z-depth-0"
                alt="avatar image"
                height="35"
              />
            </a>
            <div
              class="dropdown-menu dropdown-menu-right dropdown-default dropdown-user "
              aria-labelledby="navbarDropdownMenuLink-333"
            >
          
              
              <div class="">
                <p> {name}</p>
                <button class="btn btn-red" onClick={HandleLogout}>Logout</button>
              </div>
            </div>
          </li>
        {/* </ul> */}
          {/* <a
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#basicExampleNav"
            aria-controls="basicExampleNav"
            aria-expanded="false"
            aria-label="Toggle navigation"

          >
            <span
              class="navbar-toggler-icon toggler"

            >
              <box-icon
                class="box-icon"
                size="2rem"
                color=" #096b00"
                name="menu"
                type="logo"
              ></box-icon>
            </span>
          </a> */}

        </div>
      </nav>


      </div>
      </div>
    </>
  );
};

export default UserNavbar;
