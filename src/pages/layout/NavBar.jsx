/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const NavBar = ({props}) => {
  const {search, setSearch} = props

  const searchChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <nav className="navbar bg-neutral text-neutral-content">
        <div className="flex-1">
          <Link to="/">
            <button className="btn btn-neutral text-xl">Home</button>
          </Link>
        </div>
        <div className="flex-1 justify-center">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto text-black"
              value={search}
              onChange={searchChangeHandler}
            />
          </div>
        </div>
        <div className="flex-1 justify-end">
          <Link to="myposts">
            <button className="btn btn-neutral text-xl">My Posts</button>
          </Link>
          <Link to="favorites">
            <button className="btn btn-neutral text-xl">Favorites</button>
          </Link>
          <Link to="/create">
            <button className="btn btn-neutral text-xl">Create</button>
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
