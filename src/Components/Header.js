import React from 'react';
import './CSS/Header.css';
import Avatar from '@mui/material/Avatar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import { useStateValue } from '../State Provider/StateProvider';

const Header = () => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className='header'>
      <div className='header__left'>
        <Avatar src={user?.photoURL} alt={user?.displayName} />
        <AccessTimeIcon className='header__left_AccessTimeIcon' />
      </div>
      <div className='header__center'>
        <SearchIcon />
        <input type='search' placeholder='Search' />
      </div>
      <div className='header__right'>
        <HelpOutlineRoundedIcon />
      </div>
    </div>
  );
};

export default Header;
