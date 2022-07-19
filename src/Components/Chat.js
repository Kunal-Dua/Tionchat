import React from 'react';
import { useParams } from 'react-router-dom';
import './CSS/Chat.css';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
const Chat = () => {
  const { roomID } = useParams();
  return (
    <div>
      <div className='chat__header'>
        <div className='chat__headerLeft'>
          <h4 className='chat__channelName'>
            <strong>#general</strong>
          </h4>
          <StarBorderOutlinedIcon />
        </div>
        <div className='chat__headerRight'>
          <p>
            <InfoOutlinedIcon />
            Details
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
