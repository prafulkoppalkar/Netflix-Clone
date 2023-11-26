import { menuItems } from "../constants";
import { useEffect, useState } from "react";
import logo from "../assests/pngwing.com.png";
import profile_logo from "../assests/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg";
import "../styles/navbar.css";

export default function Navbar({ rowRefs, isLoggedIn }) {
  const [selected, cl] = useState("Home");
  const [show, handleShow] = useState(false);

  function handleScroll() {
    if (window.scrollY > 500) {
      handleShow(true);
    } else handleShow(false);
  }

  function handleClick(menuItem) {
    if (menuItem === "TV Shows") {
      rowRefs.documentariesRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (menuItem === "Trending") {
      rowRefs.trendingRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (menuItem === "Comedy") {
      rowRefs.comedyRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (menuItem === "Top Rated") {
      rowRefs.topRatedRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (menuItem === "Originals") {
      rowRefs.originalsRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      rowRefs.mainRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${show ? "nav_fade" : ""}`}>
      <div className="logo_container">
        <img
          className={isLoggedIn ? "netflix_logo" : "large_netflix_logo"}
          src={logo}
          alt="netflix_logo"
        />
      </div>
      <div className="menuItems">
        {isLoggedIn &&
          menuItems.map((menuItem) => (
            <div
              onClick={() => handleClick(menuItem)}
              ref={rowRefs.tre}
              key={menuItem}
              className={`menuItem ${
                selected === menuItem ? "selected_menuItem" : ""
              }`}
            >
              {menuItem}
            </div>
          ))}
      </div>
      <div className="searchbox" />
      {isLoggedIn && (
        <div className="profile_container">
          <img
            className="profile_image"
            src={profile_logo}
            alt="profile_image"
          />{" "}
          <div className="logout" onClick={()=>window.location.href = '/'}>&#8594;</div>
        </div>
      )}
    </div>
  );
}
