import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="foote text-light text-sm p-2 text-center text-white"
      style={{ backgroundColor: "#1A2130" }}
    >
      <h1 className="txt text-base">All Right Reserved &copy; Karan Makvana</h1>
      <div className="link">
        <Link to="/about">About </Link>
        <Link to="/policy"> Policy </Link>
        <Link to="/contact"> Contect</Link>
      </div>
    </div>
  );
};

export default Footer;
