import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/vanlife.svg";

const Navbar = () => {
  const activeLink = [
    {
      path: "/host",
      title: "Host",
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/vans",
      title: "Vans",
    },
  ];

  return (
    <nav className="flex justify-between p-10">
      <div>
        <Link to="/">
          <img src={logo} alt="" srcset="" width={100} />
        </Link>
      </div>
      <div className="flex gap-5">
        {activeLink.map((link) => (
          <NavLink to={link.path} className={({isActive})=>(isActive?"border-b-2 border-black":"text-gray-500")}>
            {link.title}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
