import React from 'react';

const Song = props => {

  let selected;

  if (props.songid == props.id){
    selected = "*";
  } else {
    selected = "";
  };

  return(
    <li>
      <button className="song_button" type="button" onClick={props.handleButtonClick}>{selected} {props.name} by {props.artist} - {props.album}</button>
    </li>
  );
};

export default Song;
