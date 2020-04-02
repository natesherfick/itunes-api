import store from "../store.js";
import SongService from "../Services/SongsService.js";

//Private
/**Draws the Search results to the page */
function _drawResults() {
  console.log(store.State.songs);
  let songs = store.State.songs;
  let template = ''

  songs.forEach(song => {template += song.Template})
  document.getElementById('songs').innerHTML = template
}
/**Draws the Users saved songs to the page */
function _drawPlaylist() {
  let playlist = store.State.playlist;
  let template = ''

  playlist.forEach(song => {template += song.playlistTemplate})
  document.getElementById('playlist').innerHTML = template
}

//Public
export default class SongsController {
  constructor() {
    //TODO Don't forget to register your subscribers
    store.subscribe('songs', _drawResults)
    store.subscribe('playlist', _drawPlaylist)
  }

  /**Takes in the form submission event and sends the query to the service */
  search(e) {
    //NOTE You dont need to change this method
    e.preventDefault();
    try {
      SongService.getMusicByQuery(e.target.query.value);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Takes in a song id and sends it to the service in order to add it to the users playlist
   * @param {string} id
   */
  addSong(id) {
    SongService.addSong(id)
  }

  /**
   * Takes in a song id to be removed from the users playlist and sends it to the server
   * @param {string} id
   */
  removeSong(id) {}
}
