import "./Navbar.css";
import React from "react";
import { FaApple } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Menu } from "lucide-react";
import { HiMiniXMark } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  var navigate = useNavigate();

  const [Searchitem, setSearch] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [ShowSearch, setShowSearch] = useState(false);
  const [menubar, setmenubar] = useState(false)

  useEffect(() => {
    const array = [
      { name: "Home", link: "/" },
      { name: "Products", link: "/products" },
      { name: "Contact", link: "/contact" },
      { name: "Support", link: "/support" },
      { name: "Watch", link: "/products" },
      { name: "Customers", link: "#Customers" },
      { name: "Founder", link: "#Founder" },
      { name: "Footer", link: "#Footer" },
      { name: "Free sessions", link: "/support" },
      { name: "Support app", link: "/support" },
    ];

    const searchValue = array.filter((data) =>
      data.name.toLowerCase().includes(Searchitem.toLowerCase())
    );
    setFilteredResults(searchValue);
  }, [Searchitem]);

  return (
    <>
      <div className="navbar">
        <h1>
          <FaApple />
        </h1>
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/Products")}>Products</li>
          <li onClick={() => navigate("/Support")}>Support</li>
          <li onClick={() => navigate("/Contact")}>Contact</li>
          <span onClick={() => setShowSearch(true)} className="s">
            <Search />
          </span>
          <span className="menu-bar" onClick={() => setShowSearch(true)}>
            <Menu />
          </span>
        </ul>
      </div>
      <div style={{ display: ShowSearch ? "block" : "none" }}>
        <div className="search-div">
          <i onClick={() => setShowSearch(false)}>
            <HiMiniXMark />
          </i>
          <div>
            <i>
              <Search />
            </i>











            
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <section>
            {filteredResults.map((e, index) => {
              if (e.link.startsWith("/")) {
                return (
                  <p key={index} onClick={() => navigate(e.link)}>
                    {e.name}
                  </p>
                );
              } else {
                return (
                  <a key={index} href={e.link}>
                    {e.name}
                  </a>
                );
              }
            })}
          </section>
        </div>
      </div>
    </>
  );
};

export default Navbar;
