import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaBook,
  FaShopify,
  FaUtensils,
  FaUsers,
  FaRegAddressBook,
} from "react-icons/fa";
import useCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";

const DashBoard = () => {
  const [cart] = useCart();

  // TODO: load data from the server to have dynamic isAdmin base on data
  // const isAdmin = true;
  const isAdmin = useAdmin()[0];

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center ">
        <Outlet></Outlet>
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden ">
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <ul className="menu p-4 w-80 h-full bg-[#D1A054] text-base-content">
          <h1 className="mb-16">
            <span className="text-4xl font-black">Bistro Boss</span> <br />{" "}
            <span className="text-xl font-bold tracking-[0.4em] italic">
              Restaurant
            </span>
          </h1>
          {/* Sidebar content here */}
          {isAdmin ? (
            <>
              <li className="font-bold">
                <NavLink to="/dashboard/adminhome">
                  <FaHome></FaHome>Admin Home
                </NavLink>
              </li>
              <li className="font-bold">
                <NavLink to="/dashboard/addItem">
                  <FaUtensils></FaUtensils> Add An Item
                </NavLink>
              </li>
              <li className="font-bold">
                <NavLink to="/dashboard/manageitems">
                  <FaWallet></FaWallet> Manage Items
                </NavLink>
              </li>
              <li className="font-bold">
                <NavLink to="/">
                  <FaBook></FaBook> Manage Bookings
                </NavLink>
              </li>
              <li className="font-bold">
                <NavLink to="/dashboard/allusers">
                  <FaUsers></FaUsers> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="font-bold">
                <NavLink to="/dashboard/userhome">
                  <FaHome></FaHome>User Home
                </NavLink>
              </li>
              <li className="font-bold">
                <NavLink to="/">
                  <FaCalendarAlt></FaCalendarAlt> Reservations
                </NavLink>
              </li>
              <li className="font-bold">
                <NavLink to="/">
                  <FaWallet></FaWallet> Payment History
                </NavLink>
              </li>
              <li className="font-bold">
                <NavLink to="/dashboard/mycart">
                  <FaShoppingCart></FaShoppingCart> My Cart{" "}
                  <div className="badge badge-secondary">
                    +{cart?.length || 0}
                  </div>
                </NavLink>
              </li>
              <li className="font-bold">
                <NavLink to="/">
                  <FaWallet></FaWallet> Add Review
                </NavLink>
              </li>
              <li className="font-bold">
                <NavLink to="/">
                  <FaBook></FaBook> My Bookings
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>

          <li className="font-bold">
            <NavLink to="/">
              <FaHome></FaHome>Home
            </NavLink>
          </li>
          <li className="font-bold">
            <NavLink to="/menu">
              {" "}
              <FaRegAddressBook></FaRegAddressBook> Our Menu
            </NavLink>
          </li>
          <li className="font-bold">
            <NavLink to="/order/salads">
              <FaShopify></FaShopify> Order
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
