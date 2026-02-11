import { NavLink } from "react-router-dom";
import "./Navbar2.css";

function Navbar2() {
  return (
    <div className="Nav2">
      <NavLink
        to="/foryou"
        className={({ isActive }) =>
          isActive ? "button active" : "button"
        }
      >
        For you
      </NavLink>

      <NavLink
        to="/deals"
        className={({ isActive }) =>
          isActive ? "button active" : "button"
        }
      >
        Deals
      </NavLink>

      <NavLink
        to="/mysets"
        className={({ isActive }) =>
          isActive ? "button active" : "button"
        }
      >
        My Sets
      </NavLink>
    </div>
  );
}

export default Navbar2;
