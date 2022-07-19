import React from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import './CSS/SidebarOption.css';

const SidebarOption = ({ Icon, title,id, addChannelOption }) => {
  const history=useNavigate();

  const selectChannel = () => {
    if(id){
      console.log("/room/"+id);
      history(`/room/${id}`);
    }
    else{
      history(title);
    }
  };
  const addChannel=()=>{
    const channelName=prompt("Add channel");
    if(channelName){
      db.collection('rooms').add({
        name:channelName,
      })
    }
  };

  return (
    <div
      className='sidebarOption'
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className='sidebarOption_icon' />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className='sidebarOption_channel'>
          <span className='sidebarOption_hash'>#</span> {title}
        </h3>
      )}
    </div>
  );
};

export default SidebarOption;
