import React from "react";
import "./Header.css";

import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";

const Header = () => {
  return (
    <div className="header">
      <div className="header__icons">
        {/* All icons here */}

        <div className="home__icon home__icon--active">
          <HomeIcon />
          <p>Home</p>
        </div>
        <div className="home__icon">
          <FlashOnIcon />
          <p>Trending</p>
        </div>
        <div className="home__icon">
          <LiveTvIcon />
          <p>Verified</p>
        </div>
        <div className="home__icon">
          <VideoLibraryIcon />
          <p>Collection</p>
        </div>
        <div className="home__icon">
          <SearchIcon />
          <p>Search</p>
        </div>
        <div className="home__icon">
          <PersonOutlineIcon />
          <p>Account</p>
        </div>
      </div>
      <img
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
        alt="logo"
      />
    </div>
  );
};

export default Header;
