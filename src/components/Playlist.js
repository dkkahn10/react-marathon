import React from 'react';

const Playlist = props => {

  let selected;

  if (props.playlistid == props.id){
    selected = "selected";
  } else {
    selected = "";
  };



  return(
    <li className={selected}>
      {props.name}
    </li>
  );
};

export default Playlist;
