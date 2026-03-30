import { NavLink } from "react-router-dom";
import "./Navbar2.css";

function Navbar2() {
  return (
    <div className="Nav22">
        <NavLink 
         to="/foryou"
         className={({ isActive }) =>
          isActive ? "buttonn active" : "buttonn"
        } >
        For you
      </NavLink>

      <NavLink
        to="/deals"
        className={({ isActive }) =>
          isActive ? "buttonn active" : "buttonn"
        }
      >
        Deals
      </NavLink>

      <NavLink
        to="/mysets"
        className={({ isActive }) =>
          isActive ? "buttonn active" : "buttonn"
        }
      >
        My Sets
      </NavLink>
    </div>
  
  );
}

export default Navbar2;
