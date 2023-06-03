import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaUsers,
  FaBookmark,
} from "react-icons/fa";
import { BiFoodMenu, BiFoodTag, BiHome } from "react-icons/bi";
import { ImSpoonKnife } from "react-icons/im";
import { MdOutlineManageAccounts } from "react-icons/md";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  // const isAdmin = true;

  const [isAdmin] = useAdmin();
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 text-base-content">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/additem">
                  <ImSpoonKnife /> Add an Item
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageitems">
                  <MdOutlineManageAccounts /> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaBookmark /> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaUsers /> All users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendarAlt /> Reservations
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaWallet /> Payment History
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/mycart">
                  <FaShoppingCart /> My Cart
                  <span className="badge inl badge-secondary">
                    +{cart?.length || 0}
                  </span>
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <BiHome /> Home
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/menu">
              {" "}
              <BiFoodMenu /> Our Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <BiFoodTag /> Order Food
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
