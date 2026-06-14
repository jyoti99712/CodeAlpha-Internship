let songs = [
    "songs/song1.mp3",
    "songs/song2.mp3",
    "songs/song3.mp3"
];

let names = [
    "Song 1",
    "Song 2",
    "Song 3"
];

let audio = document.getElementById("audio");
let songName = document.getElementById("songName");

let i = 0;

function loadSong(index){
    audio.src = songs[index];
    songName.innerText = names[index];
}

loadSong(i);

function playSong(){
    audio.play();
}

function pauseSong(){
    audio.pause();
}

function nextSong(){
    i = (i + 1) % songs.length;
    loadSong(i);
    playSong();
}

function prevSong(){
    i = (i - 1 + songs.length) % songs.length;
    loadSong(i);
    playSong();
}