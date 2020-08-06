import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <nav>
        <div className="nav-brand">
          <NavLink to="/">
            <span>Bookstore</span>
          </NavLink>
        </div>
        <div className="search">
          <Input
            size="large"
            placeholder="large size"
            prefix={<SearchOutlined />}
          />
          <br />
        </div>
        <div className="nav-right">
          <ul className="nav-list">
            <li className="nav-items">
              <NavLink to="/home">Home</NavLink>
            </li>
            <li className="nav-items">
              <NavLink to="/signin">Sign in</NavLink>
            </li>
            <li className="nav-items">
              <NavLink to="/signup">Sign up</NavLink>
            </li>
            {/* {!login.isLogin ? (
              <>
                <li className="nav-items">
                  <NavLink to="/signin">Sign in</NavLink>
                </li>
                <li className="nav-items">
                  <NavLink to="/signup">Sign up</NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-items">
                  <NavLink to="/setting">Setting</NavLink>
                </li>
                <li className="nav-items">
                  <NavLink to="/profile">{login.username}</NavLink>
                </li>
                <li className="nav-items">
                  <NavLink to="/signin" onClick={logoutHandle}>
                    <LogoutOutlined />
                    Logout
                  </NavLink>
                </li>
              </>
            )} */}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
