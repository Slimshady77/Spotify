
// Initaializing variable
let songIndex = 0;
let audioElement = new Audio('song/Darmiyaan.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar')
let gif = document.getElementById('gif')
let songItem = Array.from(document.getElementsByClassName('songItem'))
let masterSongName = document.getElementById('masterSongName');



let song = [
    { songName: 'Darmiyaan', filePath: 'song/1.mp3', coverPath: 'cover/cover.jpg' },
    { songName: 'Aise Kyun', filePath: 'song/2.mp3', coverPath: 'cover/aiseku.jpg' },
    { songName: 'Channa-Ve', filePath: 'song/3.mp3', coverPath: 'cover/channave.jpg' },
    { songName: 'Daulat Shohrat', filePath: 'song/4.mp3', coverPath: 'cover/daolat.jpg' },
    { songName: 'Pyaar Hota Kayi Baar Hai', filePath: 'song/5.mp3', coverPath: 'cover/ranbir.jpg' },
    { songName: 'Sapna Jahan Brothers', filePath: 'song/6.mp3', coverPath: 'cover/Sapna-Jahan-Brothers.jpg' },
    { songName: 'Tere Pyar Mein', filePath: 'song/7.mp3', coverPath: 'cover/terepyarme.jpg' },
    { songName: 'Tu Hai To Mujhe Phir Aur Kya Chahiye', filePath: 'song/8.mp3', coverPath: 'cover/music.jpg' },



]


songItem.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = song[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = song[i].songName;


});


// handleplay/pause the song
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;

    }
})




// Listen to Event
audioElement.addEventListener('timeupdate', () => {

    // updateing seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    console.log(progress);
    progressBar.value = progress;
});

progressBar.addEventListener('change', () => {
    audioElement.currentTime = progressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.add('fa-play');
        element.classList.remove('fa-pause');


    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {

    element.addEventListener('click', (e) => {
        makeAllPlays();
        // masterSongName.innerText = song[songIndex].songName;
        let songIndex = parseInt(e.target.id);

        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `song/${songIndex+1}.mp3`;

        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 8) {
        songIndex = 0
    }
    else {
        songIndex += 1;

    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})


document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 8
    }
    else {
        songIndex -= 1;

    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})