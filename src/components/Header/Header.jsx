import React from "react";
import "./header.css";
import Logo from "../../assets/hulu-logo.png";
import HomeIcon from "@mui/icons-material/Home";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const Header = () => {
  const headerItems = [
    {
      icon: <HomeIcon />,
      name: "Home",
      active: true, // for default active class
    },
    {
      icon: <FlashOnIcon />,
      name: "Trending",
    },
    {
      icon: <LiveTvIcon />,
      name: "Verified",
    },
    {
      icon: <VideoLibraryIcon />,
      name: "Collections",
    },
    {
      icon: <SearchIcon />,
      name: "Search",
    },
    {
      icon: <PersonOutlineIcon />,
      name: "Account",
    },
  ];
  return (
    <div className="header">
      <div className="header__icons">
        {headerItems.map((item, id) => {
          return (
            <div
              key={id}
              className={`header__icon ${
                item.active ? "header__icon--active" : ""
              }`}
            >
              {item.icon}
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
      <div className="header__logo">
        <img src={Logo} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
