import React from 'react';
import Song from './Song';

const SongList = props => {
  let songs = props.songs.map(song => {
    return(
      <Song
      name = {song.name}
      artist = {song.artist}
      album = {song.album}
      key = {song.id}
      songid = {props.songid}
      id = {song.id}
      handleButtonClick = {props.handleButtonClick}
      />
    );
  });
  return(
    <ul>{songs}</ul>
  );
};

export default SongList;
