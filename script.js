function Lightbox() {
    var b=document.body
    b.classList.toggle('bg-light');
    var nav=document.getElementsByTagName('nav')[0];
    nav[0].classList.toggle('bg-light');
}
const songs=[
    {
        title: 'Daaaku The Intro',
        artist: 'artist1',
        img: 'img1',
        src: 'Songs/Daaku Maharaj/[iSongs.info] 01 - Daaku The Into.mp3'
    },
    {
        title: 'Kurchi Madathapetti',
        artist: 'artist2',
        img: 'img2',
        src: 'Songs/Guntur Karam/Kurchi Madathapetti.mp3'
    },
    
    {
        title: 'Chuttamalle',
        artist: 'artist3',
        img: 'Songs/Devara (2024)/Chuttamalle.jpg',
        src: 'Songs/Devara (2024)/Chuttamalle.mp3'
    }
]
function playCard(src,title){
    let audio=document.getElementById('audio-player');
    audio.src=src;
    audio.play();
    console.log(src);
}
let songId=0;
function loadSong(src){
    let song=songs[songId];
    let title=document.getElementById('song-name');
    let audio=document.getElementById('audio-player');
    title.textContent=song.title;
    // img.src=song.img;
    audio.src=song.src;
}
function nextSong(){
    songId=(songId+1)%songs.length;
    loadSong(songId);
    playSong();
}
function prevSong(){
    songId=(songId-1+songs.length)%songs.length;
    loadSong(songId);
    playSong();
}
function playSong(){
    let audio=document.getElementById('audio-player');
    let play=document.getElementById('ply-btn');
    // let img=document.getElementById('img');
    if(audio.paused){
        loadSong(songId);
        audio.play();
        play.src='Assets/pause.svg';
        // img.classList.add('rotate');
    }else{
        loadSong(songId);
        audio.pause();
        play.src='Assests/play.svg';
        // img.classList.remove('rotate');
    }
}
loadSong(songId);
