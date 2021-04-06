const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

// connect to the database
mongoose.connect("mongodb://localhost:27017/cp4", {
  useNewUrlParser: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to DB");
});

let count = 0;

//Schema for playlists
const playlistSchema = new mongoose.Schema({
  title: String,
  songs: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Song",
    },
  ],
});

// Create a model for items in the museum.
const Playlist = mongoose.model("Playlist", playlistSchema);

// Schema for songs
const songSchema = new mongoose.Schema({
  title: String,
  album: String,
  duration: String,
  popularity: String,
  cover: String,
});

// Model for songs
const Song = mongoose.model("Song", songSchema);

// Create a new item in the museum: takes a title and a path to an image.
app.get("/api/songs", async (req, res) => {
  try {
    let songs = await Song.find();
    res.send(songs);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post("/api/songs", async (req, res) => {
  const song = new Song({
    title: req.body.title,
    album: req.body.album,
    duration: req.body.duration,
    popularity: req.body.popularity,
    cover: req.body.cover,
  });
  try {
    await song.save();
    res.send(song);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post("/api/playlists", async (req, res) => {
  let str1 = "Playlist ";
  const playlist = new Playlist({
    title: str1.concat(count),
    songs: [],
  });
  count++;
  try {
    await playlist.save();
    res.send(playlist);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get("/api/playlists", async (req, res) => {
  try {
    let playlists = await Playlist.find().populate("songs");
    res.send(playlists);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put("/api/playlists/:playlistID/:songID", async (req, res) => {
  try {
    let playlist = await Playlist.findByIdAndUpdate(
      req.params.playlistID,
      { $push: { songs: req.params.songID } },
      { new: true, useFindAndModify: false }
    );

    if (!playlist) {
      res.send(404);
      return;
    }

    await playlist.save();
    res.send(playlist);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete("/api/playlists/:playlistID", async (req, res) => {
  try {
    let playlist = await Playlist.findOne({ _id: req.params.playlistID });

    if (!playlist) {
      res.send(404);
      return;
    }

    await playlist.delete();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete("/api/playlists/:playlistID/:songID", async (req, res) => {
  try {
    let song = await Song.findOne({_id: req.params.songID});
    let playlist = await Playlist.findByIdAndUpdate(
        req.params.playlistID,
        { $pull: { songs: song._id } },
        { new: true, useFindAndModify: false }
      );

    if (!playlist) {
      res.send(404);
      return;
    }

  
    res.send(playlist);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log("Server listening on port 3000!"));
