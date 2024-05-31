import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const createUserHandler = () => {
    navigate("/create");
  };

  return (
    <>
      <nav className="flex justify-between p-5 bg-primary shadow-md">
        <h1 className="text-white font-bold text-2xl">Manage Users</h1>
        {pathname == "/" && (
          <button
            className="bg-green text-white border-none p-2 text-sm font-bold"
            onClick={createUserHandler}
          >
            <span className="mr-1">+</span>Add New
          </button>
        )}
      </nav>
    </>
  );
};

export default Nav;
