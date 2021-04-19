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
mongoose.connect("mongodb://localhost:27017/cp5", {
  useNewUrlParser: true,
});

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const cookieSession = require('cookie-session');
app.use(cookieSession({
    name: 'session',
    keys: ['secretValue'],
    cookie: {
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
}));

mongoose.connection.on("connected", () => {
  console.log("Connected to DB");
});

const users = require("./users.js");
const User = users.model;
const validUser = users.valid;

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
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
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

app.post("/api/playlists", validUser, async (req, res) => {
  let str1 = "Playlist ";
  const playlist = new Playlist({
    title: str1.concat(count),
    songs: [],
    user: req.user,
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

app.get("/api/playlists", validUser, async (req, res) => {
  try {
    let playlists = await Playlist.find({
      user: req.user,
    }).populate("user").populate("songs");
    res.send(playlists);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put("/api/playlists/:playlistID/:songID", validUser, async (req, res) => {
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


app.use("/api/users", users.routes);

app.listen(3004, () => console.log("Server listening on port 3004!"));
