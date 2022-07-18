import React from 'react';
import './CSS/Sidebar.css';
import SidebarOption from './SidebarOption';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import CreateIcon from '@mui/icons-material/Create';
import CommentIcon from '@mui/icons-material/Comment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <div className='sidebar__info'>
          <h2>Tionchat</h2>
          <h3>
            <FiberManualRecordRoundedIcon />
            Kunal Dua
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon={CommentIcon} title={'Threads'} />
      <SidebarOption Icon={InboxIcon} title={'Mentions & reactions'} />
      <SidebarOption Icon={DraftsIcon} title={'Saved Items'} />
      <SidebarOption Icon={BookmarkBorderIcon} title={'Channel browser'} />
      <SidebarOption Icon={PeopleAltIcon} title={'People & user groups'} />
      <SidebarOption Icon={AppsIcon} title={'Apps'} />
      <SidebarOption Icon={ContentCopyIcon} title={'File Brower'} />
      <SidebarOption Icon={ExpandLessIcon} title={'Show less'} />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title={'Show more'} />
    </div>
  );
};

export default Sidebar;
