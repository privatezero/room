var space = document.getElementById('space');
var spaceBtn = document.getElementById('space-btn');

function playPause(song){
   if (song.paused && song.currentTime >= 0 && !song.ended) {
      song.play();
   } else {
      song.pause();
   }
}


spaceBtn.addEventListener('click', function(){
   spaceBtn.classList.toggle('playing');
   playPause(space);
});

