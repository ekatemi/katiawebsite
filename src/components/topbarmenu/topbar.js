import { Link } from "react-router-dom";
function Topbar() {
  return (
    <div>
      <div className="topnav">
        <Link className="active" to="home">
          Home
        </Link>
        <Link to="about">About</Link>
        <Link to="services">Services</Link>
        <Link to="contact">Contact</Link>
      </div>
    </div>
  );
}

export default Topbar;
