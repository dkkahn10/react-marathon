import React from 'react';
import Playlist from './Playlist';
const PlaylistCollection = props => {
  let playlists = props.playlists.map(playlist => {
    return(
      <Playlist
      name = {playlist.name}
      key = {playlist.id}
      playlistid = {props.playlistid}
      id = {playlist.id}
      />
  });
  return(
    <ul>{playlists}</ul>
  );

};

export default PlaylistCollection;
