export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this._id = data.trackId || data._id;
  }

  get Template() {
    return   /*html*/`

        <div class="card col-5 mx-3 my-3">
  <img src="${this.albumArt}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${this.title}</h5>
    <p class="card-text">${this.artist}</p>
  </div>
  <audio
        controls style="width:200px" class="mx-auto mb-2"
        src="${this.preview}"
            Your browser does not support the
            <code>audio</code> element.
    </audio>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><b>Album:</b> ${this.album}</li>
    <li class="list-group-item"><b>Price:</b> $${this.price}</li>
  </ul>
  <div class="card-body text-center">
    <a href="#" class="card-link" onclick="app.songsController.addSong('${this._id}')">Add Song</a>
  </div>
</div>
    `;
  }

  get playlistTemplate() {
    return   /*html*/`

        <div class="card col-5 mx-3 my-3">
  <img src="${this.albumArt}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${this.title}</h5>
    <p class="card-text">${this.artist}</p>
  </div>
  <audio
        controls style="width:200px" class="mx-auto mb-2"
        src="${this.preview}"
            Your browser does not support the
            <code>audio</code> element.
    </audio>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><b>Album:</b> ${this.album}</li>
  </ul>
  <div class="card-body text-center">
    <a href="#" class="card-link" onclick="app.songsController.removeSong('${this._id}')">Remove Song</a>
  </div>
</div>

        `;
  }
}
