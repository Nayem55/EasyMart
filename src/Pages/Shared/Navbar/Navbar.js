import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./logo (1).png";
import profile from "./profile.png";

const Navbar = () => {
  return (
    <div className="mx-0 lg:mx-10">
      <div className="navbar flex justify-between bg-base-100">
        {/* logo */}
        <div className="">
          <Link className="normal-case text-xl">
            <img className="w-[120px] lg:w-[140px]" src={logo} alt="" />
          </Link>
        </div>
        {/* search bar fr larger screen */}
        <div className="form-control hidden lg:block">
          <div className="input-group">
            <select className="select select-bordered w-[600px] bg-secondary">
              <option selected>Pick category</option>
              <option>
                <Link>Boys shopping</Link>
              </option>
              <option>
                <Link>Girls shopping</Link>
              </option>
              <option>
                <Link>Household items</Link>
              </option>
              <option>
                <Link>Computer Accessories</Link>
              </option>
              <option>
                <Link>Gadgets</Link>
              </option>
              <option>
                <Link>Jewelry</Link>
              </option>
              <option>
                <Link>Home decoration</Link>
              </option>
              <option>
                <Link>Cosmetics</Link>
              </option>
            </select>
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* cart and profile */}
        <div className="">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">0</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={profile} alt="" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link>Settings</Link>
              </li>
              <li>
                <Link>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* search bar fr smaller screen  */}
      <div className="form-control mb-4 mx-4 lg:hidden">
        <div className="input-group">
          <select className="select select-bordered w-72 bg-secondary">
            <option selected>Pick category</option>
            <option>
              <Link>Boys shopping</Link>
            </option>
            <option>
              <Link>Girls shopping</Link>
            </option>
            <option>
              <Link>Household items</Link>
            </option>
            <option>
              <Link>Computer Accessories</Link>
            </option>
            <option>
              <Link>Gadgets</Link>
            </option>
            <option>
              <Link>Jewelry</Link>
            </option>
            <option>
              <Link>Home decoration</Link>
            </option>
            <option>
              <Link>Cosmetics</Link>
            </option>
          </select>
          <button className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
