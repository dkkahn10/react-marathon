import React from 'react';

const SelectedSong = props => {
  // debugger;

  return(
    <ul>
      <li>
        Title: {props.selectedsong.name}
      </li>
      <li>
        Artist: {props.selectedsong.artist}
      </li>
      <li>
        Album: {props.selectedsong.album}
      </li>
    </ul>
  );
};

export default SelectedSong;
