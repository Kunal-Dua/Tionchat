import React from 'react';
import './CSS/Header.css';
import Avatar from '@mui/material/Avatar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <AccessTimeIcon className="header__left_AccessTimeIcon" />
      </div>
      <div className="header__center">
        <SearchIcon />
        <input type="search" placeholder="Search" />
      </div>
      <div className="header__right">
        <HelpOutlineRoundedIcon />
      </div>
    </div>
  );
};

export default Header;
