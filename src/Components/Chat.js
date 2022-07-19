import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CSS/Chat.css';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { db } from '../firebase';
import Message from './Message';

const Chat = () => {
  const { roomID } = useParams();
  const [roomdetails, setRoomdetails] = useState(null);
  const [roomMessages, setroomMessages] = useState([]);

  useEffect(() => {
    if (roomID) {
      db.collection('rooms')
        .doc(roomID)
        .onSnapshot((snapshot) => setRoomdetails(snapshot.data()));
    }

    db.collection('rooms')
      .doc(roomID)
      .collection('messages')
      .orderBy('timestamp', 'asc')
      .onSnapshot((snapshaot) =>
        setroomMessages(snapshaot.docs.map((doc) => doc.data()))
      );
  }, [roomID]);
  console.log(roomdetails);
  console.log('messages -> ', roomMessages);

  return (
    <div>
      <div className='chat__header'>
        <div className='chat__headerLeft'>
          <h4 className='chat__channelName'>
            <strong>#{roomdetails?.name}</strong>
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
      <div className='chat__messages'>
        {roomMessages.map(({ message, useImage, timestamp, username }) => (
          <Message
            message={message}
            useImage={useImage}
            timestamp={timestamp}
            username={username}
          />
        ))}
      </div>
    </div>
  );
};

export default Chat;
